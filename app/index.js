import barba from '@barba/core'
import gsap from 'gsap'

import 'main.css'

class App {
  constructor() {
    
    barba.init({
      transitions: [{
        leave(data) {
          return gsap.to(data.current.container, {
            autoAlpha: 0,
            duration: 0.5,
            ease: 'expo.out'
          })
        },
        enter(data) {
          return gsap.from(data.next.container, {
            autoAlpha: 0,
            duration: 0.5,
          })
        }
      }]
    })

  }
}

new App()
