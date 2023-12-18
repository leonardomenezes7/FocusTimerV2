import './toggle-mode.js'
import * as FocusTimer from './FocusTimer/index.js'

FocusTimer.start(5, 0)

const treeButton = document.querySelector('.ph-tree')
const rainButton = document.querySelector('.ph-cloud-rain')
const storeButton = document.querySelector('.ph-storefront')
const fireButton = document.querySelector('.ph-campfire')

treeButton.addEventListener('click', () => {
  treeButton.classList.toggle('active')
})

rainButton.addEventListener('click', () => {
  rainButton.classList.toggle('active')
})

storeButton.addEventListener('click', () => {
  storeButton.classList.toggle('active')
})

fireButton.addEventListener('click', () => {
  fireButton.classList.toggle('active')
})