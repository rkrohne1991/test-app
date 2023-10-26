import template from './OurFleet.template'
import styles from './OurFleet.module.scss'

import audiA8 from '/src/assets/images/our-fleet/AutoRide-Audi-A8.jpg'
import audiQ7 from '/src/assets/images/our-fleet/AutoRide-Audi-Q7.jpg'
import bmw5 from '/src/assets/images/our-fleet/AutoRide-BMW-5.jpg'
import bmwX5 from '/src/assets/images/our-fleet/AutoRide-BMW-X5.jpg'
import mercedesE from '/src/assets/images/our-fleet/AutoRide-Mercedes-E.jpg'
import mercedesGLE from '/src/assets/images/our-fleet/AutoRide-Mercedes-GLE.jpg'

export class OurFleet extends HTMLElement {
  constructor() {
    super()

    this.ourFleetData = [
      {
        id: 1,
        image: audiA8,
        title: 'Audi A8',
        passengerNumber: 5,
        luggageNumber: 6
      },
      {
        id: 2,
        image: audiQ7,
        title: 'Audi Q7',
        passengerNumber: 7,
        luggageNumber: 10
      },
      {
        id: 3,
        image: bmw5,
        title: 'BMW 5',
        passengerNumber: 5,
        luggageNumber: 5
      },
      {
        id: 4,
        image: bmwX5,
        title: 'BMW X5',
        passengerNumber: 5,
        luggageNumber: 8
      },
      {
        id: 5,
        image: mercedesE,
        title: 'Mercedes E',
        passengerNumber: 5,
        luggageNumber: 5
      },
      {
        id: 6,
        image: mercedesGLE,
        title: 'Mercedes GLE',
        passengerNumber: 5,
        luggageNumber: 8
      }
    ]

    this.sectionData = {
      bgMode: 'bg-light',
      subheader: 'Our Fleet',
      header: 'Browse Our Limos',
      sectionContent: template(styles, this.ourFleetData)
    }
  }

  connectedCallback() {
    const { subheader, header, sectionContent, bgMode } = this.sectionData
    this.innerHTML = `
      <section-template class='d-block ${bgMode}'>
        <p class='container text-center mb-0' slot='subheader'>${subheader}</p>
        <header class='container text-center' slot='header'>${header}</header>
        <figure class='container' slot='content'>${sectionContent}</figure>
      </section-template>
    `
  }
}
