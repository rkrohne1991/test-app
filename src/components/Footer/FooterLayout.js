import template from './FooterLayout.template'

export class FooterLayout extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template()
  }
}
