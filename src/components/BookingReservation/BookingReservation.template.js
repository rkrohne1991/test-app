const template = styles => {
  return `
    <div class='${styles['booking-reservation__wrapper']}'>
      <form 
        id='bookingReservation' 
        class='${styles['booking-reservation__form']} bg-white needs-validation'
        aria-labelledby='findCar'>
        <fieldset>
          <div class='container'>
            <div class='row'>
              <div class='question-col col-md-6 p-0'>
                <div class='${styles['booking-reservation__box']}'>
                  <label
                    for='pickupLocation' class='form-label ${styles['booking-reservation__label']}'>
                    Pickup Location
                  </label>
                  <div class='input-group has-validation'>
                    <input name='pickupLocation' type='text' class='form-control' id='pickupLocation' required>
                    <div class='valid-feedback'>
                      Looks good!
                    </div>
                    <div class='invalid-feedback'>
                      Please enter pickup location.
                    </div>
                  </div>
                </div>
              </div>
              <div class='question-col col-md-6 p-0'>
                <div class='${styles['booking-reservation__box']}'>
                  <label for='dropOffLocation' class='form-label ${styles['booking-reservation__label']}'>
                    Drop-off Location
                  </label>
                  <div class='input-group has-validation'>
                    <input name='dropOffLocation' type='text' class='form-control' id='dropOffLocation' required>
                    <div class='valid-feedback'>
                      Looks good!
                    </div>
                    <div class='invalid-feedback'>
                      Please enter drop-off location.
                    </div>
                  </div>
                </div>
              </div>
              <div class='question-col col-md-6 col-lg-3 p-0'>
                <div class='${styles['booking-reservation__box']}'>
                  <label for='pickupDate' class='form-label ${styles['booking-reservation__label']}'>Date From</label>
                  <div class='input-group has-validation'>
                    <input name='pickupDate' type='date' class='form-control' id='pickupDate' required>
                    <div class='valid-feedback'>
                      Looks good!
                    </div>
                    <div class='invalid-feedback'>
                      Please enter pickup date.
                    </div>
                  </div>
                </div>
              </div>
              <div class='question-col col-md-6 col-lg-3 p-0'>
                <div class='${styles['booking-reservation__box']}'>
                <label for='pickupTime' class='form-label ${styles['booking-reservation__label']}'>
                  Pick-up Time
                </label>
                  <div class='input-group has-validation'>
                    <select class='form-select' name='pickupTime' id='pickupTime'>
                      <option value='9:00'>9:00</option>
                      <option value='10:00'>10:00</option>
                      <option value='11:00'>11:00</option>
                      <option value='12:00'>12:00</option>
                    </select>
                    <div class='valid-feedback'>
                      Looks good!
                    </div>
                  </div>
                </div>
              </div>
              <div class='question-col col-md-6 col-lg-3 p-0'>
                <div class='${styles['booking-reservation__box']}'>
                  <label for='dropOffDate' class='form-label ${styles['booking-reservation__label']}'>Date To</label>
                  <div class='input-group has-validation'>
                    <input name='dropOffDate' type='date' class='form-control' id='dropOffDate' required>
                    <div class='valid-feedback'>
                      Looks good!
                    </div>
                    <div class='invalid-feedback'>
                      Please enter drop-off date.
                    </div>
                  </div>
                </div>
              </div>
              <div class='question-col col-md-6 col-lg-3 p-0'>
                <div class='${styles['booking-reservation__box']} border-end-0'>
                  <label for='dropOffTime' class='form-label ${styles['booking-reservation__label']}'>
                    Drop-off Time
                  </label>
                  <div class='input-group has-validation'>
                    <select class='form-select' name='dropOffTime' id='dropOffTime'>
                      <option value='9:00'>9:00</option>
                      <option value='10:00'>10:00</option>
                      <option value='11:00'>11:00</option>
                      <option value='12:00'>12:00</option>
                    </select>
                    <div class='valid-feedback'>
                      Looks good!
                    </div>
                  </div>
                </div>
              </div>
              <div class='question-col col-md-4 p-0'>
                <div class='${styles['booking-reservation__box']}'>
                  <div class='form-check mb-0'>
                    <input name='over25' class='form-check-input' type='checkbox' id='over25'>
                    <label class='form-check-label' for='over25'>
                      Is driver over 25 years old?
                    </label>
                  </div>
                </div>
              </div>
              <div class='question-col col-md-4 p-0'>
                <div class='${styles['booking-reservation__box']}'>
                  <div class='form-check mb-0'>
                    <input
                      name='discountCodeCheck'
                      class='form-check-input'
                      type='checkbox'
                      id='discountCodeCheck'>
                    <label class='form-check-label' for='discountCodeCheck'>
                      I have discount code
                    </label>
                  </div>
                </div>
              </div>
              <div class='question-col col-md-4 p-0 d-none'>
                <div class='${styles['booking-reservation__box']}'>
                  <div class='mb-0'>
                    <div class='booking-reservation__discount-wrapper'>
                      <input
                        name='discountCode'
                        id='discountCode'
                        type='text'
                        placeholder='Discount Code'
                        class='form-control'>
                    </div>
                  </div>
                </div>
              </div>
              <div class='question-col col-12 p-0'>
                <div class='${styles['booking-reservation__box']} border-0'>
                  <button 
                    type='submit' 
                    class='btn btn-primary text-uppercase ${styles['booking-reservation__submit']}'
                  >Find Cars</button>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </div>

    <div
      class='modal fade' 
      id='submittedDetailsModal' 
      tabindex='-1' 
      aria-labelledby='submittedDetailsModalLabel' 
      aria-hidden='true'>
      <div class='modal-dialog'>
        <div class='modal-content'>
          <div class='modal-header'>
            <h1 class='modal-title fs-5' id='submittedDetailsModalLabel'>Your submitted details</h1>
            <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
          </div>
          <div class='modal-body'></div>
          <div class='modal-footer'>
            <button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
          </div>
        </div>
      </div>
    </div>
  `
}
export default template
