import state from "./state.js"
import * as sounds from './sounds.js'
import * as timer from './timer.js'
import * as el from './elements.js'


export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')
  timer.countdown()
}

export function stop() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  
}

export function setPlus() {

  if(state.minutes >= 60) {
    return
  }

  state.minutes += 5
  timer.updateDisplay()
  stop()
}

export function setMinus() {
  
  if(state.minutes <= 0) {
    return
  }

  state.minutes -= 5

  timer.updateDisplay()
  stop()
}

export function treeSound() {
  state.isMute = document.documentElement.classList.toggle('tree')
  
  if(state.isMute) {
    sounds.tree.play()
    return
  }

  sounds.tree.pause()

}

export function rainSound() {
  state.isMute = document.documentElement.classList.toggle('rain')

  if(state.isMute) {
    sounds.rain.play()
    return
  }

  sounds.rain.pause()
}

export function storeSound() {
  state.isMute = document.documentElement.classList.toggle('store')

  if(state.isMute) {
    sounds.store.play()
    return
  }

  sounds.store.pause()
}

export function fireSound() {
  state.isMute = document.documentElement.classList.toggle('fire')

  if(state.isMute) {
    sounds.fire.play()
    return
  }

  sounds.fire.pause()
}