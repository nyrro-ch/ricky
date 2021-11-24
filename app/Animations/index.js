import HeadlineAnimation from './HeadlineAnimation'
import ImageAnimation from './ImageAnimation'

export default class {
  constructor () {
    
    this.create()
  }

  create() {
    this.headlineAnim = new HeadlineAnimation({ element: '.js-headline'})
    this.imageAnim = new ImageAnimation({ element: '.img-anim'})
  }

  animateHomeIn () {
    this.headlineAnim.animateIn()
    this.imageAnim.animateIn('<+=0.5')
  }
}
