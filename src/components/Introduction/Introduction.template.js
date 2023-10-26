const imagesRow = (styles, images, content) => {
  return `
    <div class='row g-0 ${styles['introduction__images']}'>
      ${images.map(({ id, image }) => {
        const colSize = content.length === 1 ? 12 : 6 
        return `
          <div class='col-${colSize}'>
            <img 
              class='
                img-fluid 
                w-100 
                ${styles['introduction__image']}
              ' 
              src='${image}' 
              alt='AutoRide-Introduction'
              style='${id === 2 ? 'margin-top: 40px' : ''}'>
          </div>
      `}).join('')}
    </div>
  `
}

const quoteRow = (styles, quote) => {
  return `
    <div class='row'>
      <div class='col'>
        <div class='${styles['introduction__quote']} text-center'>
          <i class='fa-solid fa-quote-left ${styles['introduction__quote-icon']}'></i>
          <blockquote class='${styles['introduction__blockquote']}'>${quote[0].text}</blockquote>
          <div class='${styles['introduction__quote-author']}'>${quote[0].author}</div>
        </div>
      </div>
    </div>
  `
}

const template = (styles, introductionData) => { 
  const { title, content, images, quote } = introductionData
  return `
    <div class='container ${styles.introduction}'>
      <div class='row ${styles['introduction__row']}'>
        <div class='col-md-4 ${styles['introduction__col']}'>
          <h1 class='${styles['introduction__title']}'>${title}</h1>
        </div>
        ${content.map(({ title, text }) => {
          const colSize = content.length === 1 ? 8 : 4 
          return `
            <div class='col-md-${colSize} ${styles['introduction__col']} ${styles['introduction__content']}'>
              <h2 class='${styles['introduction__content-title']}'>${title}</h2>
              <div>${text}</div>
            </div>  
        `}).join('')}
      </div>
      ${images.length > 0 && imagesRow(styles, images, content)}
      ${quote.length > 0 && quoteRow(styles, quote)}
    </div>
  `
}

export default template;
