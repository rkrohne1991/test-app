import template from './FooterBottom.template'
import styles from './FooterBottom.module.scss'

export class FooterBottom extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template(styles)
  }
}
