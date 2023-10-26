import template from './AppLayout.template'

export class AppLayout extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template()
  }
}
