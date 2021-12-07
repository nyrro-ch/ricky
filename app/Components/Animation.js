import gsap from 'gsap'

class Animation {
  constructor({ element, elements }) {

    this.element = document.querySelector(element)
    this.elements= document.querySelectorAll(elements)

    this.tl = gsap.timeline()
  }

  animateIn () {}
}

export default Animation
