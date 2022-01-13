class ThemeMode {
  constructor () {

    this.modeBtn = document.querySelector('.mode-btn')
    this.mode = document.querySelector('.mode-text')

    this.setThemeMode()

    this.addEventListeners()

  }

  setThemeMode () {
    
    if (localStorage.theme === 'dark' || !('theme' in localStorage)) {

      document.documentElement.classList.add('dark')

      this.mode.innerHTML = 'light mode' 

    } else {

      document.documentElement.classList.remove('dark')

      this.mode.innerHTML = 'dark mode' 

    }
    
    // Whenever the user explicitly chooses to respect the OS preference
    // localStorage.removeItem('theme') 
  }

  setDarkMode () {
    if (localStorage.theme === 'dark' || !('theme' in localStorage)) {
      localStorage.theme = 'ligth'
    } else {
      localStorage.theme = 'dark'
    }

    this.setThemeMode()

  }

  addEventListeners () {
    this.modeBtn.addEventListener('click', this.setDarkMode.bind(this)) 
  }
}

export default ThemeMode
