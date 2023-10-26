import template from './FooterTop.template'
import styles from './FooterTop.module.scss'

export class FooterTop extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template(styles)
  }
}
