import { each } from 'lodash'
import Animation from 'Components/Animation'

class TextAnimation extends Animation {
  constructor({ elements }) {
    super({ elements })
  }

  animateIn ( start = '>' ) {


      this.tl.from(this.elements, {
        y: '100%',
        autoAlpha: 0,
        duration: 1.5,
        ease: 'expo.out',
        stagger: 0.1
      }, start)

  }

}

export default TextAnimation

