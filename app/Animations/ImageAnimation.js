import Animation from 'Components/Animation'

class ImageAnimation extends Animation {
  constructor({ element }) {
    super({ element })

    this.overlay = this.element.parentNode.querySelector('.img-overlay-anim')
  }

  animateIn ( start = '>' ) {

    this.tl.to(this.overlay, {
      scaleX: 0,
      duration: 1.5,
      ease: 'expo.out',
    }, start).from(this.element, {
      scale: 1.2,
      duration: 1.5,
      ease: 'expo.out',
    }, '<')
  }

}

export default ImageAnimation
