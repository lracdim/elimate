export function detectBottlenecks(domMetrics, netMetrics, doc) {
  const bottlenecks = [];
  let idCounter = 1;

  const add = (severity, title, explanation, fix) => {
    bottlenecks.push({ id: `b-${idCounter++}`, severity, title, explanation, fix });
  };

  const { domDepth = 0, linkCount = 0, buttonCount = 0 } = domMetrics;
  const { scriptCount = 0, imageCount = 0, cssCount = 0 } = netMetrics;

  if (scriptCount > 20) {
    add('High', 'Excessive JavaScript Execution', `Found ${scriptCount} external script files. Each triggers a separate network request and can block the main thread.`, 'Defer non-essential scripts with async/defer attributes and code-split your bundles.');
  } else if (scriptCount > 12) {
    add('Medium', 'High Script Count', `Found ${scriptCount} external script files. Consider consolidating.`, 'Bundle scripts and remove unused third-party libraries.');
  }

  if (imageCount > 30) {
    add('Medium', 'High Asset Request Count', `Found ${imageCount} images on landing page. Increases round-trip latency.`, 'Lazy load below-fold images using loading="lazy" attribute.');
  }

  if (doc && typeof doc.querySelectorAll === 'function') {
    const allImages = [...(doc.querySelectorAll('img') || [])];
    const missingAlt = allImages.filter(img => !img.getAttribute('alt') || img.getAttribute('alt').trim() === '');
    if (missingAlt.length > 0) {
      add('Medium', 'Missing Image Descriptions', `${missingAlt.length} images lack ALT attributes, hurting accessibility and SEO.`, 'Add descriptive alt text to all informational images.');
    }
  } else if (imageCount > 0) {
    add('Medium', 'Image Alt Text (Unverified)', `${imageCount} images detected. Unable to verify ALT attributes due to site protection.`, 'Audit image alt text using browser DevTools accessibility panel.');
  }

  if (domDepth > 20) {
    add('Medium', 'Excessive DOM Depth', `DOM tree depth is ${domDepth}, which can cause layout thrashing on scroll.`, 'Flatten HTML structure. Elementor/WordPress sites typically benefit from fewer wrapper divs.');
  } else if (domDepth > 15) {
    add('Low', 'Deep DOM Nesting', `DOM depth of ${domDepth} detected. Moderate nesting.`, 'Review nested component structure for unnecessary wrappers.');
  }

  if (doc && typeof doc.querySelectorAll === 'function') {
    const allImages = [...(doc.querySelectorAll('img') || [])];
    const nonWebP = allImages.filter(img => {
      const src = img.getAttribute('src') || '';
      return src && !src.includes('.webp') && !src.includes('.avif') && (src.includes('.jpg') || src.includes('.jpeg') || src.includes('.png'));
    });
    if (nonWebP.length > 3) {
      bottlenecks.push({ id: `b-${idCounter++}`, severity: 'Low', title: 'Non-Optimized Image Formats', explanation: `${nonWebP.length} images are not using WebP or AVIF format.`, fix: 'Convert images to WebP format to reduce file size by 25-35%.' });
    }
  }

  if (doc && typeof doc.querySelector === 'function') {
    const metaDesc = doc.querySelector('meta[name="description"]');
    if (!metaDesc || !metaDesc.getAttribute('content')) {
      add('Medium', 'Missing Meta Description', 'No meta description found. This hurts SEO click-through rates from search.', 'Add a compelling 150-160 character meta description to every page.');
    }

    const viewportSelectors = [
      'meta[name="viewport"]',
      'meta[name="Viewport"]', 
      'meta[NAME="viewport"]',
    ];
    const hasViewport = doc && viewportSelectors.some(sel => {
      try {
        return doc.querySelector(sel) !== null;
      } catch(e) {
        return false;
      }
    });
    const htmlString = doc?.documentElement?.outerHTML || '';
    const hasViewportInHtml = htmlString.toLowerCase().includes('name="viewport"') || htmlString.toLowerCase().includes("name='viewport'");
    if (!hasViewport && !hasViewportInHtml) {
      add('High', 'Missing Viewport Meta Tag', 'No viewport meta tag. Site will not render correctly on mobile devices.', 'Add <meta name="viewport" content="width=device-width, initial-scale=1"> to <head>.');
    }

    const schema = doc.querySelector('script[type="application/ld+json"]');
    if (!schema) {
      add('Low', 'No Structured Data (Schema)', 'No JSON-LD schema markup detected. Missing rich result opportunities in Google.', 'Add LocalBusiness, Organization, or relevant schema markup using JSON-LD.');
    }

    const htmlEl = doc.querySelector('html');
    if (!htmlEl?.getAttribute('lang')) {
      add('Low', 'Missing HTML Lang Attribute', 'Document declaration lacks language specifier.', 'Add lang="en" (or appropriate code) to the <html> tag.');
    }
  }

  return bottlenecks.sort((a, b) => {
    const map = { High: 3, Medium: 2, Low: 1 };
    return map[b.severity] - map[a.severity];
  });
}
