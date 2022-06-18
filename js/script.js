const image = document.querySelector('.salon'),
      logo = document.querySelector('.robi01')

window.addEventListener('scroll', function() {
  let windowY = window.scrollY
  
  if (window.scrollY < 222) {
    image.style.transform = `translateY(${windowY}px)`
  }

})



