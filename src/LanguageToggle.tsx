import { getInitialLanguage, setLanguage, type Language } from './i18n'

export function LanguageToggle() {
  const current = getInitialLanguage()

  const switchTo = (language: Language) => {
    if (language === current) return
    setLanguage(language)
    window.location.reload()
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="btn-group" role="group" aria-label="Language">
        <button
          type="button"
          className={current === 'en' ? 'btn btn-sm btn-light' : 'btn btn-sm btn-outline-light'}
          onClick={() => switchTo('en')}
        >
          EN
        </button>
        <button
          type="button"
          className={current === 'zh' ? 'btn btn-sm btn-light' : 'btn btn-sm btn-outline-light'}
          onClick={() => switchTo('zh')}
        >
          中文
        </button>
      </div>
    </div>
  )
}

