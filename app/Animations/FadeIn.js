import Animation from 'Components/Animation'

class FadeIn extends Animation {
  constructor({ element }) {
    super({ element })
  }

  animateIn ( start = '>' ) {

    this.tl.from(this.element, {
      autoAlpha: 0,
      duration: 3,
      ease: 'expo.out',
    }, start)

  }

}

export default FadeIn

