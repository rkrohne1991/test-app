import image from '/src/assets/images/AutoRide-Testimonials.jpeg'
import { Carousel } from '../../classes/Carousel'

const template = (styles, testimonialsData) => {

  window.onload = function() {
    new Carousel(testimonialsData, {
      width: 'clamp(224px, 75vw, 100%)',
      height: 'clamp(240px, 75vh, 560px)',
      infinite: true,
      dots: true,
      autoTransition: true,
      autoTransitionDelay: 3000
    }, document.getElementById('testimonials__carousel'))
  }

  return `
    <div class='${styles['testimonials']}'>
      <div class='container-fluid'>
        <div class='row'>
          <div class='col-md-6 p-0'>
            <div class='${styles['testimonials__carousel-wrapper']}'>
              <div id='testimonials__carousel'></div>
            </div>
          </div>
          <div class='col-md-6 p-0 d-flex'>
            <div class='${styles['testimonials__image']} flex-grow-1' style='background-image: url(${image})'>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}



export default template
