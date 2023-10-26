const template = styles => {
  return `
    <button
      id='scroll-to-top' 
      class='${styles['scroll-to-top']} align-items-center justify-content-center border-0 position-fixed'>
      <i class='fa-solid fa-chevron-up ${styles['scroll-to-top__icon']} text-white'></i>
    </button>
  `
}

export default template
