import gsap from 'gsap'

class Animation {
  constructor({ element }) {

    this.element = document.querySelector(element)

    this.tl = gsap.timeline()
  }

  animateIn () {}
}

export default Animation
