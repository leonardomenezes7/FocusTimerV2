const toggleModeButton = document.getElementById('toggle-mode-button')

toggleModeButton.addEventListener('click', () => {
  document.documentElement.classList.toggle('light')
})