import template from './WhyChooseUs.template'
import styles from './WhyChooseUs.module.scss'

export class WhyChooseUs extends HTMLElement {
  constructor() {
    super()

    this.circleContentData = {
      header: 'Core Values',
      subheader: 'That make us the best transportation company in the area',
      coreValues: [
        {
          id: 1,
          title: 'FIRST-RATE CUSTOMER SERVICE'
        },
        {
          id: 2,
          title: 'CLEAN AND WELL-MAINTAINED VEHICLES'
        },
        {
          id: 3,
          title: 'INNOVATIVE USE OF TECHNOLOGY'
        },
        {
          id: 4,
          title: 'PUNCTUALITY AND VERACITY'
        },
        {
          id: 5,
          title: 'PURSUIT OF CONTINUOUS IMPROVEMENT'
        },
        {
          id: 6,
          title: 'SAFETY AS OUR HIGHEST PRIORITY'
        },
        {
          id: 7,
          title: 'HIGHLY TRAINED PROFESSIONAL DRIVERS'
        },
      ]
    }

    this.sectionData = {
      bgMode: 'bg-white',
      subheader: 'Why Choose Us',
      header: 'Proudly Serving the Oakland Area Since 2007',
      sectionContent: template(styles, this.circleContentData)
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
