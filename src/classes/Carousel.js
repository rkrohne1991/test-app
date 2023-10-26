export class Carousel {
  #slidesData = null
  #configuration = null
  #parent = null
  #mainContainer = null
  #currentIndex = 0
  #revealOffset = 75
  #autoTransitionIntervalId = null
  #swipe = { active: false, threshold: 75, offset: 0 }
  #classNames = {
    wrapper: 'carousel-wrapper',
    slide: 'carousel-slide',
    slideWrapper: 'carousel-slide__wrapper',
    slideBody: 'carousel-slide__body',
    slideFooter: 'carousel-slide__footer',
    iconWrapper: 'carousel-slide__icon-wrapper',
    icon: 'carousel-slide__icon',
    active: 'slide-active',
    navigation: {
        dots: 'carousel-dots',
    }
  }

  get currentIndex() {
    return this.#currentIndex
  }

  constructor(slidesData, configuration, parent = document.body) {
    this.#slidesData = slidesData
    this.#configuration = configuration
    this.#parent = parent
    this.#init()
  }

  /**
  * Initializes the carousel
  */
  #init() {
      this.#setCarouselWrapper()
      this.#setSlides()
      this.#setNavigation()
      this.#setAutoTransition()
      this.#setSizeCustomProperties()
  }

  /**
 * Navigates in any given direction
 * @param {1 | -1} direction The direction
 */
  #navigate(direction) {
    if (direction !== 1) return
    if (this.#configuration.infinite) {
        // this.#currentIndex =
        //     direction === 1
        //         ? (this.#currentIndex + 1) % this.#slidesData.length
        //         : this.#currentIndex === 0
        //         ? this.#slidesData.length - 1
        //         : this.#currentIndex - 1

        this.#currentIndex = (this.#currentIndex + 1) % this.#slidesData.length
    } else {
        // this.#currentIndex =
        //     direction === 1
        //         ? this.#currentIndex < this.#slidesData.length - 1
        //             ? this.#currentIndex + 1
        //             : this.#currentIndex
        //         : this.#currentIndex > 0
        //         ? this.#currentIndex - 1
        //         : this.#currentIndex

        this.#currentIndex = 
            (this.#currentIndex < this.#slidesData.length - 1) 
            ? this.#currentIndex + 1 
            : this.#slidesData.length - 1
    }

    this.#setOffsetCustomProperty(this.#revealOffset * direction)
    this.#setCurrentSlide(this.#currentIndex)
    this.#setActiveDot(this.#currentIndex)
  }

  /**
     * Goes to an specific slide
     * @param {number} index The slide index
     */
    #goToSlide(index) {
        this.#setOffsetCustomProperty(
            index > this.#currentIndex
                ? this.#revealOffset
                : -this.#revealOffset
        )
        this.#setCurrentSlide(index)
        this.#setActiveDot(index)
        this.#currentIndex = index
    }

    /**
     * Sets the navigation elements and events
     */
    #setNavigation() {
        this.#setDotsNavigation()
        this.#setPointerEvents()
    }

    /**
     * Sets the pointer events
     */
    #setPointerEvents() {
        this.#mainContainer.addEventListener('pointerdown', (e) =>
            this.#handlePointerDown(e)
        )
        this.#mainContainer.addEventListener('pointerup', (e) =>
            this.#handlePointerUp(e)
        )
    }

    /**
     * Sets dots navigation
     */
    #setDotsNavigation() {
        if (!this.#configuration.dots) return

        const dotsNavigation = document.createElement('div')
        dotsNavigation.classList.add(this.#classNames.navigation.dots)

        this.#slidesData.forEach((slide, i) => {
            const button = document.createElement('button')
            button.setAttribute('aria-label', 'carousel-dot-button')

            if (i === this.#currentIndex)
                button.classList.add(this.#classNames.active)

            button.addEventListener('pointerdown', () => this.#goToSlide(i))

            dotsNavigation.append(button)
        })

        this.#mainContainer.append(dotsNavigation)
    }

    /**
     * Sets the slides
     */
    #setSlides() {
        this.#slidesData.forEach(({text, author}, i) => {

            const mainWrapper = document.createElement('div')
            mainWrapper.classList.add(this.#classNames.slide)
            mainWrapper.setAttribute('data-slide', i)

            if (i === 0) mainWrapper.classList.add(this.#classNames.active)

            const slideWrapper = document.createElement('div')
            slideWrapper.classList.add(
                this.#classNames.slideWrapper, 
                'w-100', 
                'text-center', 
                'position-absolute', 
                'start-50'
            )

            const iconWrapper = document.createElement('div')
            iconWrapper.classList.add(this.#classNames.iconWrapper, 'position-relative', 'd-inline-block')

            const icon = document.createElement('div')
            icon.classList.add('fa-regular', 'fa-comments', this.#classNames.icon, 'position-absolute')

            const iconSpan = document.createElement('span')
            iconSpan.classList.add('bg-white', 'd-block')

            const slideBody = document.createElement('div')
            slideBody.classList.add(this.#classNames.slideBody)
            slideBody.innerText = text

            const slideFooter = document.createElement('div')
            slideFooter.classList.add(this.#classNames.slideFooter)
            slideFooter.innerText = author

            iconWrapper.append(icon, iconSpan)
            slideWrapper.append(iconWrapper, slideBody, slideFooter)
            mainWrapper.append(slideWrapper)
            this.#mainContainer.append(mainWrapper)
        })
    }

    /**
     * Sets the carousel wrapper
     */
    #setCarouselWrapper() {
        const div = document.createElement('div')
        div.classList.add(this.#classNames.wrapper)
        this.#parent.append(div)
        this.#mainContainer = div
    }

    /**
     * Handles the pointer down event
     * @param {PointerEvent} e The event
     */
    #handlePointerDown({ clientX }) {
        if (this.#autoTransitionIntervalId)
            clearInterval(this.#autoTransitionIntervalId)

        this.#swipe.active = true
        this.#swipe.offset = clientX
    }

    /**
     * Handles the pointer up event
     * @param {PointerEvent} e The event
     */
    #handlePointerUp({ clientX }) {
        if (!this.#swipe.active) return

        this.#swipe.active = false

        const tapped = this.#swipe.offset === clientX
        const reachedThreshold =
            Math.abs(clientX - this.#swipe.offset) >= this.#swipe.threshold

        if (tapped || !reachedThreshold) return

        if (clientX < this.#swipe.offset) this.#navigate(1)
        else this.#navigate(-1)

        this.#swipe.offset = 0
    }

    /**
     * Sets the current slide
     * @param {number} index The slide index
     */
    #setCurrentSlide(index) {
        [...this.#mainContainer.children].forEach((slide) => {
            if (+slide.dataset.slide === index)
                slide.classList.add(this.#classNames.active)
            else slide.classList.remove(this.#classNames.active)
        })
    }

    /**
     * Sets the active slide dot
     * @param {number} index The slide index
     */
    #setActiveDot(index) {
        const dots = this.#mainContainer.querySelector(
            `.${this.#classNames.navigation.dots}`
        );

        [...dots.children].forEach((dot, i) => {
            if (i === index) dot.classList.add(this.#classNames.active)
            else dot.classList.remove(this.#classNames.active)
        })
    }

    /**
     * Sets the offset value for the CSS animation
     * @param {1 | -1} value The offset value
     */
    #setOffsetCustomProperty(value) {
        this.#mainContainer.style.setProperty(
            '--revealSlideOffset',
            `${value}px`
        )
    }

    /**
     * Sets the auto transition
     */
    #setAutoTransition() {
        if (!this.#configuration.autoTransition) return

        this.#autoTransitionIntervalId = setInterval(() => {
            this.#navigate(1)
        }, this.#configuration.autoTransitionDelay ?? 1000)
    }

    /**
     * Sets the custom properties for the carousel's size
     */
    #setSizeCustomProperties() {
        this.#mainContainer.style.setProperty(
            '--slider-width',
            this.#configuration.width
        )
        this.#mainContainer.style.setProperty(
            '--slider-height',
            this.#configuration.height
        )
    }
}
