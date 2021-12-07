import { split } from 'utils/text'
import Animation from 'Components/Animation'

class HeadlineAnimation extends Animation {
  constructor({ element, elements }) {
    super({ element, elements })
  }

  splitText () {
    split({ element: this.element, expression: '<br>'})
    split({ element: this.element, expression: '<br>'})
  }

  animateIn ( start = '>' ) {

    this.splitText()

    this.titleSpans = this.element.querySelectorAll('span span')

    this.tl.from(this.titleSpans, {
      y: '150%',
      duration: 1.5,
      ease: 'expo.out',
      stagger: 0.1
    }, start)
  }

}

export default HeadlineAnimation
