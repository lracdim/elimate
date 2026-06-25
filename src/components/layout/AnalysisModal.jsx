import { useState, useEffect } from 'react'
import { X, ArrowRight, Loader2 } from 'lucide-react'
import { cn } from '../../lib/utils'
import gsap from 'gsap'
import { runAnalysis, runAIAnalysis } from '@/analyzer/services/analyzerApi'
import AnalyzerResult from '@/analyzer/ui/AnalyzerResult'

export function AnalysisModal() {
    const [isOpen, setIsOpen] = useState(false)
    const [step, setStep] = useState('input') // input, analyzing, result
    const [url, setUrl] = useState('')

    useEffect(() => {
        const handleOpen = () => setIsOpen(true)
        window.addEventListener('open-analysis-modal', handleOpen)
        return () => window.removeEventListener('open-analysis-modal', handleOpen)
    }, [])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
            // Animate in
            gsap.fromTo("#analysis-modal-panel",
                { y: 50, opacity: 0, scale: 0.95 },
                { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
            )
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const [report, setReport] = useState(null)
const [technicalResult, setTechnicalResult] = useState(null)
const [aiReport, setAiReport] = useState('')
const [analysisError, setAnalysisError] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault()
  setStep('analyzing')

  try {
    // Run technical analysis
    const normalizedUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`
    const result = await runAnalysis(normalizedUrl)
    setReport(result)
    setTechnicalResult(result)
    setStep('result')

    // Run AI analysis in background — fails gracefully
    try {
      const technicalScores = {
        systemStructure: result.scores.uiux,
        loadVelocity: result.scores.performance,
        contentDensity: result.scores.contentWeight,
        optimization: result.scores.seo,
        loadTime: result.metrics.loadTimeSeconds?.toFixed?.(2) || result.metrics.loadTimeSeconds,
        domDepth: result.metrics.domDepth,
        mode: result.metrics.contentClassification,
      }
  const aiReport = await runAIAnalysis({
    url,
    technicalScores,
    bottlenecks: result.bottlenecks,
  })
      setAiReport(aiReport)
    } catch (aiErr) {
      console.error('AI analysis failed:', aiErr)
      setAiReport('')
    }

    // Optional: Still send lead data to webhook if needed, silently
    const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL
    if (webhookUrl) {
      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        company_url: url,
          timestamp: new Date().toISOString(),
          score_ui: result.scores.uiux,
          score_perf: result.scores.performance,
        }),
      }).catch(err => console.error("Webhook silent fail", err))
    }

  } catch (error) {
    console.error('Analysis error:', error)
    setAnalysisError(error.message || 'Analysis failed. Please try another URL.')
    setStep('result')
  }
}

    const handleClose = () => {
        gsap.to("#analysis-modal-panel", {
            y: 20, opacity: 0, duration: 0.3, onComplete: () => {
                setIsOpen(false)
                setStep('input') // Reset for next time
            }
        })
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-graphite/40 backdrop-blur-sm transition-opacity"
                onClick={handleClose}
            />

            {/* Panel */}
            <div
                id="analysis-modal-panel"
                className="relative bg-white w-full max-w-2xl rounded-xl shadow-2xl border border-silver overflow-hidden"
            >
                {/* Header */}
                <div className="bg-platinum px-8 py-4 border-b border-silver flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="font-mono text-sm font-semibold tracking-wide text-graphite uppercase">
                            System Diagnostic Protocol v1.0
                        </span>
                    </div>
                    <button onClick={handleClose} className="text-steel hover:text-graphite transition-colors">
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                    {step === 'input' && (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-graphite font-display">Analyze My Website</h3>
                                <p className="text-steel text-base">
                                    We'll scan your public digital footprint and identify operational bottlenecks.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-graphite uppercase tracking-wider mb-2">
                                        Company Website URL
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="company.com"
                                        className="w-full bg-platinum border border-silver rounded-lg px-4 py-3 text-base text-graphite focus:outline-none focus:ring-2 focus:ring-steel/20 transition-all font-mono"
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                    />
</div>

</div>

<button
                                type="submit"
                                className="w-full bg-graphite text-white font-bold text-base py-4 rounded-lg hover:bg-graphite/90 transition-all flex items-center justify-center gap-2 uppercase tracking-wide group"
                            >
                                Run Diagnostic
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    )}

                    {step === 'analyzing' && (
                        <div className="flex flex-col items-center justify-center py-12 space-y-6">
                            <div className="relative">
                                <Loader2 size={48} className="animate-spin text-graphite" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-8 h-8 bg-platinum rounded-full" />
                                </div>
                            </div>
                            <div className="text-center space-y-2">
                                <h3 className="font-mono text-lg font-bold text-graphite">Analyzing Architecture...</h3>
                                <p className="text-sm text-steel">Scanning endpoints. Mapping workflows.</p>
                            </div>

                            {/* Terminal Output Simulation */}
                            <div className="w-full max-w-sm bg-black rounded p-4 font-mono text-xs text-green-400 mt-4 h-32 overflow-hidden opacity-90">
                                <div className="animate-pulse">
                                    {'>'} Connecting to {url}...<br />
                                    {'>'} 200 OK<br />
                                    {'>'} Detected Stack: React, Nginx<br />
                                    {'>'} Analyzing form capture points...<br />
                                    {'>'} WARNING: No auto-responder found<br />
                                    {'>'} CRITICAL: Manual extensive data entry probable<br />
                                    {'>'} Calculating friction score...
                                </div>
                            </div>
                        </div>
                    )}

{step === 'result' && (
  <div className="max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
    {report ? (
      <AnalyzerResult
        report={report}
        onReset={() => { setStep('input'); setReport(null); setAnalysisError('') }}
        aiReport={aiReport}
      />
    ) : (
      <div className="text-center py-12 space-y-4">
        <div className="text-rose-500 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
        </div>
        <h3 className="text-xl font-bold text-graphite font-display">Analysis Failed</h3>
        <p className="text-steel text-sm max-w-md mx-auto">{analysisError || 'Something went wrong. The site may be blocking automated requests.'}</p>
        <p className="text-steel text-xs">Try a different URL or check back later.</p>
        <button
          onClick={() => { setStep('input'); setAnalysisError('') }}
          className="mt-4 bg-graphite text-white px-6 py-3 rounded-lg font-bold uppercase tracking-wide text-sm hover:bg-graphite/90 transition-all"
        >
          Try Again
        </button>
      </div>
    )}
  </div>
)}
                </div>
            </div>
        </div>
    )
}
