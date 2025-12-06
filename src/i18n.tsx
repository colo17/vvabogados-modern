import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

type Lang = 'es' | 'en'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)
const STORAGE_KEY = 'vv-lang'

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'es'
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      return saved === 'en' ? 'en' : 'es'
    } catch (err) {
      console.warn('Language storage unavailable', err)
      return 'es'
    }
  })

  useEffect(() => {
    try {
      document.documentElement.lang = lang
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch (err) {
      console.warn('Unable to persist language', err)
    }
  }, [lang])

  const setLang = (next: Lang) => setLangState(next)

  const value = useMemo(() => ({ lang, setLang }), [lang])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
