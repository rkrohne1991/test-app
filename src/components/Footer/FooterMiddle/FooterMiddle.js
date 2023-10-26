import template from './FooterMiddle.template'
import styles from './FooterMiddle.module.scss'

export class FooterMiddle extends HTMLElement {
  constructor() {
    super()

    this.servicesList = [
      {
        text: 'Experiential Tours',
        icon: 'fa-solid fa-chevron-right'
      },
      {
        text: 'Wedding Limousine',
        icon: 'fa-solid fa-chevron-right'
      },
      {
        text: 'Corporate Travel',
        icon: 'fa-solid fa-chevron-right'
      },
      {
        text: 'Special Events',
        icon: 'fa-solid fa-chevron-right'
      },
      {
        text: 'Airport Transportation',
        icon: 'fa-solid fa-chevron-right'
      },
      {
        text: 'Nationwide Transportation',
        icon: 'fa-solid fa-chevron-right'
      },
      {
        text: 'Handicap Transportation',
        icon: 'fa-solid fa-chevron-right'
      }
    ]

    this.contactList = [
      {
        text: 'Jasionka 942, 36-002 Jasionka',
        icon: 'fa-solid fa-location-dot'
      },
      {
        text: '(+48) 17 123 45 61',
        icon: 'fa-solid fa-phone'
      },
      {
        text: '123 456 789',
        icon: 'fa-solid fa-mobile-screen-button'
      },
      {
        text: 'contact@autoride.com',
        icon: 'fa-regular fa-envelope'
      },
      {
        text: '24/7',
        icon: 'fa-regular fa-clock'
      },
    ]
  }
  connectedCallback() {
    this.innerHTML = template(styles, this.servicesList, this.contactList)
  }
}
