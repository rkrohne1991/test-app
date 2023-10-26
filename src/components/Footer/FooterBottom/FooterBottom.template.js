const template = styles => {
  return `
    <div class='${styles['footer-bottom__wrapper']}'>
      <div class='container'>
        <div class='row align-items-center text-center text-md-start'>
          <div class='col-md-6'>Copyright 2023 AutoRide by Rafal Krohne</div>
          <div class='col-md-6'>
            <social-icons></social-icons>
          </div>
        </div>
      </div>
    </div>
  `
}
export default template
