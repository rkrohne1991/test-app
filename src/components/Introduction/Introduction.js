import template from './Introduction.template'
import styles from './Introduction.module.scss'

import introduction01 from '/src/assets/images/AutoRide-Introduction-01.jpeg'
import introduction02 from '/src/assets/images/AutoRide-Introduction-02.jpeg'

export class Introduction extends HTMLElement {
  constructor() {
    super()

    this.introductionData = {
      title: 'From Sedans <br>to Coach <br>Buses.',
      content: [
        {
          id: 1,
          title: 'Expect the Best',
          // eslint-disable-next-line max-len
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in metus nibh. Suspendisse imperdiet, nulla ut dictum venenatis, nunc velit rhoncus neque, eu commodo augue sapien quis ipsum.'
        },
        {
          id: 2,
          title: 'Travel in Comfort',
          // eslint-disable-next-line max-len
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in metus nibh. Suspendisse imperdiet, nulla ut dictum venenatis, nunc velit rhoncus neque, eu commodo augue sapien quis ipsum. Vivamus pharetra sagittis dolor sit amet malesuada. Morbi consequat aliquet dignissim.'
        }
      ],
      images: [
        {
          id: 1,
          image: introduction01
        },
        {
          id: 2,
          image: introduction02
        }
      ],
      quote: [{
        // eslint-disable-next-line max-len
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum eros et tellus aliquet tincidunt.',
        author: 'ANNA CRIADO - CHAIRMAN & CEO'
      }]
    }

  }

  connectedCallback() {
    this.innerHTML = template(styles, this.introductionData)
  }
}
