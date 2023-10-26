import { Modal } from 'bootstrap'

// Scroll to top functionality
const scrollToTopButton = document.getElementById('scroll-to-top')

window.addEventListener('scroll', () => {
  if (window.scrollY > 3000) {
    scrollToTopButton.classList.add('d-flex')
  } else {
    scrollToTopButton.classList.remove('d-flex')
  }
})

scrollToTopButton.addEventListener('click', () => {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
})

// Booking Reservation functionality

const form = document.querySelector('#bookingReservation')

form.querySelector('#discountCodeCheck').addEventListener('change', () => {
  const discountCodeWrapper = form.querySelector('#discountCode').closest('.question-col')
  discountCodeWrapper.classList.toggle('d-none')
})

form.addEventListener('submit', event => {
  event.preventDefault()

  if (form.checkValidity()) {
    const formData = new FormData(event.target)
    const modalContent = buildModalContent(formData);
    showModalWithContent(modalContent);
  }
  form.classList.add('was-validated')
})

const buildModalContent = formData => {
  const data = {
    ['Pickup Location:']: formData.get('pickupLocation'),
    ['Drop-off Location:']: formData.get('dropOffLocation'),
    ['Date From:']: formData.get('pickupDate'),
    ['Time From:']: formData.get('pickupTime'),
    ['Date To:']: formData.get('dropOffDate'),
    ['Time To:']: formData.get('dropOffTime'),
    ['Is driver over 25 years old?:']: formData.has('over25') ? 'Yes' : 'No',
    ['Discount Code:']: formData.has('discountCodeCheck') && formData.get('discountCode')
  }

  const container = document.createElement('div')
  container.classList.add('container-fluid')

  for (const [key, value] of Object.entries(data)) {
    const row = document.createElement('div')
    row.classList.add('row')

    const colLeft = document.createElement('div')
    colLeft.classList.add('col-md-6')
    colLeft.innerHTML = key

    const colRight = document.createElement('div')
    colRight.classList.add('col-md-6')
    colRight.innerHTML = value

    row.append(colLeft, colRight)
    container.append(row)
  }
  return container
}

const showModalWithContent = modalContent => {
  const modal = new Modal(document.getElementById('submittedDetailsModal'), {})
  const modalBody = modal._element.querySelector('.modal-body')
  
  modalBody.innerHTML = ''
  modalBody.appendChild(modalContent)
  modal.show()
}
