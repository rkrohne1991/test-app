import template from './SectionTemplate.template'

const styles = `
  .section-template {
    padding: 6.25rem 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .section-subheader {
    font-size: 1rem;
    color: #8A3C05;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.66666em;
  }

  .section-header {
    font-size: 1.75rem;
    margin-top: 0.625rem;
    color: #2C3E50;
    font-weight: 300;
  }

  @media (min-width: 760px) {
    .section-header {
      font-size: 2.25rem;
    }
  }

  @media (min-width: 960px) {
    .section-subheader {
      font-size: 1.125rem;
    }

    .section-header {
      font-size: 2.5rem;
    }
  }
`
const sheet = new CSSStyleSheet()
sheet.replaceSync(styles)

export class SectionTemplate extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open'})
  }

  connectedCallback() {
    this.render()
  }

  render = () => {
    this.shadowRoot.innerHTML = template(styles)
    this.shadowRoot.adoptedStyleSheets = [sheet]
  }
}
