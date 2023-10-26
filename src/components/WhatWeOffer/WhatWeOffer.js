import template from './WhatWeOffer.template'
import styles from './WhatWeOffer.module.scss'

import airportTransfer from '/src/assets/images/what-we-offer/AutoRide-Airport-Transfer.jpg'
import worldwideTransportation from '/src/assets/images/what-we-offer/AutoRide-Worldwide-Transportation.jpg'
import corporateTravel from '/src/assets/images/what-we-offer/AutoRide-Corporate-Travel.jpg'
import charterService from '/src/assets/images/what-we-offer/AutoRide-Charter-Service.jpg'
import specialEventLimousine from '/src/assets/images/what-we-offer/AutoRide-Special-Event-Limousine.jpg'

export class WhatWeOffer extends HTMLElement {
  constructor() {
    super()

    this.whatWeOfferData = [
      {
        id: 1,
        colSize: 6,
        title: 'Airport Transfer',
        image: airportTransfer,
      },
      {
        id: 2,
        colSize: 6,
        title: 'Worldwide Transportation',
        image: worldwideTransportation,
      },
      {
        id: 3,
        colSize: 6,
        title: 'Corporate Travel',
        image: corporateTravel,
      },
      {
        id: 4,
        colSize: 3,
        title: 'Charter Service',
        image: charterService,
      },
      {
        id: 5,
        colSize: 3,
        title: 'Special Event',
        image: specialEventLimousine,
      },
    ]

    this.sectionData = {
      bgMode: 'bg-light',
      subheader: 'What We Offer',
      header: 'See What We Can Do for You',
      sectionContent: template(styles, this.whatWeOfferData)
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
