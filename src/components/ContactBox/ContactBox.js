import template from './ContactBox.template'
import styles from './ContactBox.module.scss'

export class ContactBox extends HTMLElement {
  constructor() {
    super()

    this.contactData = [
      {
        title: 'Address',
        icon: 'fa-solid fa-map-location-dot',
        text: 'Jasionka 942, 36-002 Jasionka'
      },
      {
        title: 'Phones',
        icon: 'fa-solid fa-phone',
        text: 'BOOK A RIDE: 123 456 789 <br />OFFICE: (+48) 17 123 45 61'
      },
      {
        title: 'Working Hours',
        icon: 'fa-regular fa-clock',
        text: '24/7'
      },
    ]
  }
  connectedCallback() {
    this.innerHTML = template(styles, this.contactData)
  }
}
