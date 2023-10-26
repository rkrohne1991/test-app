const template = (styles, ourFleetData) => {
  return `
    <div class='${styles['our-fleet']} container'>
      <div class='row row-cols-md-3 g-5 g-md-4'>
        ${ourFleetData.map(({ title, image, passengerNumber, luggageNumber }) => `
          <article class='col'>
            <div class='card bg-dark text-white rounded-0 border-0'>
              <img class='${styles['our-fleet__card-img']}' src='${image}' class='card-im g-top' alt='${title}'>
              <div class='${styles['our-fleet__card-overlay']} card-img-overlay rounded-0 d-flex align-items-end'>
                <h4 class='card-title'>${title}</h4>
              </div>
              <div class='card-body bg-white text-black d-flex justify-content-center'>
                <div class='px-2 d-flex align-items-center'>
                  <i class='fa-regular fa-user'></i>
                  <span class='
                    ${styles['our-fleet__card-circle']}
                    border
                    rounded-circle
                    d-flex
                    justify-content-center
                    align-items-center
                    ms-2
                  '>${passengerNumber}</span>
                </div>
                <div class='px-2 d-flex align-items-center'>
                  <i class='fa-solid fa-suitcase-rolling'></i>
                  <span class='
                    ${styles['our-fleet__card-circle']}
                    border
                    rounded-circle
                    d-flex
                    justify-content-center
                    align-items-center
                    ms-2
                  '>${luggageNumber}</span>
                </div>
              </div>
            </div>
          </article>
        `).join('')}
    </div>
  `
}

export default template
