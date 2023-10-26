import template from './Testimonials.template'
import styles from './Testimonials.module.scss'

export class Testimonials extends HTMLElement {
  constructor() {
    super()

    this.testimonialsData = [
      {
        id: 1,
        // eslint-disable-next-line max-len
        text: 'Praesent odio sapien, iaculis a luctus id, posuere non erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque sit amet ipsum commodo.',
        author: 'Peter Stanbridge'
      },
      {
        id: 2,
        // eslint-disable-next-line max-len
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus nibh arcu, at facilisis felis consectetur non. Proin viverra in ipsum ut lobortis. Duis diam quam, aliquet.',
        author: 'John Stone'
      },
      {
        id: 3,
        // eslint-disable-next-line max-len
        text: 'Morbi pulvinar justo vitae condimentum viverra. Donec tincidunt feugiat lectus, ut vehicula nibh viverra quis. Sed dignissim dolor dolor, et dapibus dui iaculis ac. Nam felis nisl, pharetra id mattis facilisis.',
        author: 'Ponnappa Priya'
      },
      {
        id: 4,
        // eslint-disable-next-line max-len
        text: 'Morbi sapien turpis, posuere vitae neque nec, feugiat fringilla risus. Pellentesque tincidunt eros sed mi porta, vitae dignissim nunc sollicitudin. Proin tempus ut erat at facilisis. Quisque porttitor hendrerit elementum.',
        author: 'Mia Wong'
      },
    ]
  }

  connectedCallback() {
    this.innerHTML = template(styles, this.testimonialsData)
  }
}
