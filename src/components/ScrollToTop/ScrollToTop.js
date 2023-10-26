import template from './ScrollToTop.template'
import styles from './ScrollToTop.module.scss'

export class ScrollToTop extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template(styles)
  }
}
