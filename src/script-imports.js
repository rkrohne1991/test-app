import { Popover } from 'bootstrap';

document.querySelectorAll('[data-bs-toggle="collapse"]')
.forEach(popover => {
  new Popover(popover)
})
