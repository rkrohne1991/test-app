const template = (styles, whatWeOfferData) => {
  return `
    <div class='${styles['what-we-offer']} container'>
      <div class='row row-cols-md-3 g-4'>
        ${whatWeOfferData.map(({ colSize, title, image }) => `
          <div class='col-md-${colSize}'>
            <div class='card bg-dark text-white rounded-0 border-0'>
              <img class='${styles['what-we-offer__card-img']}' src='${image}' class='card-im g-top' alt='${title}'>
              <div class='${styles['what-we-offer__card-overlay']} card-img-overlay rounded-0 d-flex align-items-end'>
                <h3 class='
                  card-title 
                  ${styles['what-we-offer__card-title']} 
                  position-relative 
                  text-start
                  text-uppercase
                '>${title}</h3>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `
}

export default template
