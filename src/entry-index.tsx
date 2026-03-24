import { createRoot } from 'react-dom/client'

import { LanguageToggle } from './LanguageToggle'
import { applyLanguage, getInitialLanguage } from './i18n'

applyLanguage(getInitialLanguage())

const container = document.getElementById('language-toggle-root')

if (container) {
  createRoot(container).render(<LanguageToggle />)
}
