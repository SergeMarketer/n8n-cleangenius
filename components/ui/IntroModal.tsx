'use client'

import { useState, useEffect } from 'react'

interface IntroModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function IntroModal({ isOpen, onClose }: IntroModalProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      setStep(0)
    }
  }, [isOpen])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(onClose, 300)
  }

  const features = [
    { icon: '\uD83D\uDCAC', title: 'Ask Anything', description: 'Get expert cleaning tips, product recommendations, and step-by-step guides.' },
    { icon: '\uD83D\uDCC8', title: 'Level Up', description: 'Earn experience and unlock new levels as you learn more about cleaning.' },
    { icon: '\uD83D\uDD25', title: 'Build Streaks', description: 'Chat daily to maintain your streak and become a true cleaning expert.' },
  ]

  if (!isOpen) return null

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`} onClick={handleClose}>
      <div className={`relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`} onClick={(e) => e.stopPropagation()}>
        <div className="relative bg-gradient-to-br from-[var(--teal-500)] to-[var(--teal-600)] px-6 pt-8 pb-16 text-center">
          <div className="absolute top-4 left-6 w-8 h-8 rounded-full bg-white/10" />
          <div className="absolute top-12 right-8 w-4 h-4 rounded-full bg-white/20" />
          <div className="absolute bottom-8 left-12 w-6 h-6 rounded-full bg-white/10" />
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white shadow-xl mb-4">
            <svg viewBox="0 0 24 24" className="w-10 h-10 text-[var(--teal-500)]" fill="currentColor"><path d="M12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5L12 2Z" /></svg>
          </div>
          <h1 className="font-outfit font-bold text-2xl text-white mb-2">Welcome to CleanGenius</h1>
          <p className="text-sm text-white/80">Your personal AI cleaning coach</p>
        </div>
        <div className="px-6 py-6 -mt-8">
          <div className="bg-white rounded-2xl shadow-lg border border-[var(--warm-200)] p-4 mb-6">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className={`flex items-start gap-3 p-3 rounded-xl ${step === index ? 'bg-[var(--teal-50)]' : ''} transition-colors duration-300`}>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--sage-100)] to-[var(--teal-100)] flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-outfit font-semibold text-sm text-[var(--warm-800)]">{feature.title}</h3>
                    <p className="text-xs text-[var(--warm-500)] mt-0.5">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 mb-4">
            {features.map((_, index) => (
              <button key={index} onClick={() => setStep(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${step === index ? 'bg-[var(--teal-500)] w-6' : 'bg-[var(--warm-300)] hover:bg-[var(--warm-400)]'}`} aria-label={`Go to feature ${index + 1}`} />
            ))}
          </div>
          <button onClick={handleClose} className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[var(--teal-500)] to-[var(--teal-600)] text-white font-semibold shadow-lg shadow-[var(--teal-500)]/20 hover:shadow-xl hover:shadow-[var(--teal-500)]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2">
            <span>Get Started</span>
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5L12 2Z" /></svg>
          </button>
          <p className="text-center text-xs text-[var(--warm-400)] mt-3">Press anywhere outside to skip</p>
        </div>
      </div>
    </div>
  )
}
