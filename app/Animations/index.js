import HeadlineAnimation from './HeadlineAnimation'
import TextAnimation from './TextAnimation'
import ImageAnimation from './ImageAnimation'
import FadeIn from './FadeIn'

export default class {
  constructor () {
    
    this.create()
  }

  create() {
    this.headlineAnim = new HeadlineAnimation({ element: '.js-headline'})
    this.imageAnim = new ImageAnimation({ element: '.img-anim'})
    this.textAnim = new TextAnimation({ element: '', elements: '.text-anim'})
    this.fadeInNav = new FadeIn({ element: '.nav-items' })
    this.fadeInLines = new FadeIn({ element: '.lines-img' })
    this.fadeInFooter = new FadeIn({ element: '.footer' })
  }

  animateHeaderFooter () {
    this.fadeInNav.animateIn()
    this.fadeInLines.animateIn('<')
    this.fadeInFooter.animateIn('<')
  }

  animateHomeIn () {
    this.animateHeaderFooter()
    this.headlineAnim.animateIn('<+=0.5')
    this.imageAnim.animateIn('<+=0.5')
    this.textAnim.animateIn('<+=1')
  }

  animateAboutIn () {
    this.animateHeaderFooter()
    this.headlineAnim.animateIn('<+=0.5')
  }
}
