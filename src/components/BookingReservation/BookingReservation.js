import template from './BookingReservation.template'
import styles from './BookingReservation.module.scss'

export class BookingReservation extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template(styles)
  }
}
