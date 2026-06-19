// Shared helper to open the Calendly booking popup (the real hosted page in an
// overlay). The inline embed cannot theme its input fields, so we use the popup
// everywhere — it renders the hosted page exactly, including dark inputs.

export const CALENDLY_URL =
  'https://calendly.com/michael-impackta?background_color=0b1120&text_color=ffffff&primary_color=7dd3fc&hide_gdpr_banner=1'

const WIDGET_CSS = 'https://assets.calendly.com/assets/external/widget.css'
const WIDGET_JS = 'https://assets.calendly.com/assets/external/widget.js'
const SCRIPT_ID = 'calendly-script'
const CSS_ID = 'calendly-widget-css'

export function openCalendlyPopup(url: string = CALENDLY_URL) {
  if (typeof window === 'undefined') return

  // Popup chrome needs Calendly's stylesheet
  if (!document.getElementById(CSS_ID)) {
    const link = document.createElement('link')
    link.id = CSS_ID
    link.rel = 'stylesheet'
    link.href = WIDGET_CSS
    document.head.appendChild(link)
  }

  const open = () => (window as any).Calendly?.initPopupWidget({ url })

  if ((window as any).Calendly) {
    open()
    return
  }

  let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null
  if (!script) {
    script = document.createElement('script')
    script.id = SCRIPT_ID
    script.src = WIDGET_JS
    script.async = true
    document.body.appendChild(script)
  }
  script.addEventListener('load', open, { once: true })
}
