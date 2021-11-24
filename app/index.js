import barba from '@barba/core'
import gsap from 'gsap'

import 'main.css'
import { split } from 'utils/text'

import ThemeMode from './Components/ThemeMode'
import Animations from 'Animations'

class App {
  constructor() {

    this.content = document.querySelector('.content')
    this.page = this.content.getAttribute('data-barba-namespace')

    this.img = document.querySelector('.img-anim')
    this.imgOverlay = document.querySelector('.img-overlay-anim')

    this.themeMode = new ThemeMode()

    this.animations = new Animations()

    this.page === 'home' && this.animations.animateHomeIn()

    // this.tl.to(this.imgOverlay, {
    //   scaleX: 0,
    //   duration: 1.5,
    //   ease: 'expo.out',
    // },'<+=0.5').from(this.img, {
    //   scale: 1.2,
    //   duration: 1.5,
    //   ease: 'expo.out',
    // }, '<')
    
    this.addEventListeners()

    // barba.init({
    //   transitions: [{
    //     leave(data) {
    //       return gsap.to(data.current.container, {
    //         autoAlpha: 0,
    //         duration: 0.5,
    //         ease: 'expo.out'
    //       })
    //     },
    //     enter(data) {
    //       return gsap.from(data.next.container, {
    //         autoAlpha: 0,
    //         duration: 0.5,
    //       })
    //     }
    //   }]
    // })

  }


  addEventListeners () {}
}

new App()
