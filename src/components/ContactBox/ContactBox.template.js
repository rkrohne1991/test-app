const template = (styles, contactData) => {
  return `
    <div class='row'>
      ${contactData.map(({title, icon, text}) => `
        <div class='col-md-4'>
          <div class='${styles['contact-box']} d-flex'>
            <div class='${styles['contact-box__icon-container']}'>
              <i class='${icon} ${styles['contact-box__icon']}'></i>
              <span class='bg-white'></span>
            </div>
            <section class='${styles['contact-box__content']}' aria-label='${title}'>
              <div class='${styles['contact-box__title']}'>${title}</div>
              <div class='${styles['contact-box__text']}'>${text}</div>
            </section>
          </div>
        </div>
      `).join('')}
    </div>
  `
}
export default template
