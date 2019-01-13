export default (() => {
  const screenWidth = window.screen.width
  if (screenWidth < 768) {
    return 'Mobile'
  } else if (window.screen.width < 1024) {
    return 'Tablet'
  } else {
    return 'PC'
  }
})()
