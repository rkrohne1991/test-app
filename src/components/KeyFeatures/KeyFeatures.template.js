const template = (styles, keyFeaturesData) => {
  return `
    <div class='${styles['key-features']} text-center'>
      <div class='row'>
        ${keyFeaturesData.map(({icon, header, body}) => `
          <div class='col-md-3'>
            <div class='${styles['key-features__container']}'>
              <div class='${styles['key-features__icon-container']} d-inline-block'>
                <i class='${icon} ${styles['key-features__icon']}'></i>
                <span></span>
              </div>
              <div class='${styles['key-features__header']}'>${header}</div>
              <div class='${styles['key-features__body']}'>${body}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `
}
export default template
