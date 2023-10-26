import logo from '/src/assets/images/AutoRide-Footer-Logo.png'

const template = (styles, servicesList, contactList) => {
  return `
    <div class='${styles['footer-middle']}'>
      <div class='container'>
        <div class='row'>
          <div class='col-md-4'>
            <div class='${styles['footer-middle__content-box']}'>
              <div class='${styles['footer-middle__title-box']}'>About<span></span></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut sodales libero et varius commodo. Phasellus tristique magna sit amet aliquet mollis.
              </p>
              <p>
                <img src='${logo}' id='logo' class='${styles['footer-middle__logo']}' alt='AutoRide-Logo' />
              </p>
            </div>
          </div>
          <div class='col-md-4'>
            <div class='${styles['footer-middle__content-box']}'>
              <div class='${styles['footer-middle__title-box']}'>Our Services<span></span></div>
              <ul class='${styles['footer-middle__list']}'>
                ${servicesList.map(({text, icon}) => `
                  <li class='${styles['footer-middle__list-element']}'>
                    <i class='${icon} ${styles['footer-middle__list-icon']}'></i>
                    ${text}
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
          <div class='col-md-4'>
            <div class='${styles['footer-middle__content-box']}'>
              <div class='${styles['footer-middle__title-box']}'>Autoride<span></span></div>
              <ul class='${styles['footer-middle__list']}'>
                ${contactList.map(({text, icon}) => `
                  <li class='${styles['footer-middle__list-element']}'>
                    <i class='${icon} ${styles['footer-middle__list-icon']}'></i>
                    ${text}
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}
export default template
