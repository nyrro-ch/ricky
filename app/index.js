import barba from '@barba/core'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { each } from 'lodash'
import { split } from 'utils/text'

import 'main.css'

import ThemeMode from './Components/ThemeMode'
import Animations from 'Animations'

import HeadlineAnimation from 'Animations/HeadlineAnimation'

class App {
  constructor() {

    gsap.registerPlugin(ScrollTrigger) 

    this.content = document.querySelector('.content')
    this.page = this.content.getAttribute('data-barba-namespace')

    this.themeMode = new ThemeMode()
    this.animations = new Animations()

    this.page === 'home' && this.animations.animateHomeIn()
    this.page === 'about' && this.animations.animateAboutIn()
    
    this.addEventListeners()

    const texts = document.querySelectorAll('.about--text')
    each(texts, (img) => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: img,
          end: 'bottom center',
        },

      })

      timeline.addLabel('start')
        .from(img, { autoAlpha: 0 })
        .from(img, { y: '50px' }, '<')
        .addLabel('end')

    })

    const images = document.querySelectorAll('.about--image')
    each(images, (img) => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: img,
          end: 'bottom center',
        },
      })

      timeline.addLabel('start')
        .from(img, { autoAlpha: 0, ease: 'expo.out', duration: 3 })
        .from(img, { y: '100px', ease: 'expo.out', duration: 3 }, '<')
        .addLabel('end')

    })

    const headlines = document.querySelectorAll('.headline-anim')
    each(headlines, (line) => {

      split({ element: line, expression: '<br>'})
      split({ element: line, expression: '<br>'})

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: line,
          end: 'bottom top',
        },

      })

      this.spans = line.querySelectorAll('span span')

      timeline.from(this.spans, {
        y: '150%',
        duration: 1.5,
        ease: 'expo.out',
        stagger: 0.1
      })

    })


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
