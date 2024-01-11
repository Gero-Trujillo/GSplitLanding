const splitL = document.querySelector('.left')
const splitR = document.querySelector('.right')
const container = document.querySelector('container')

splitL.addEventListener('mouseenter', function() {
    this.style.width = '75%';
    splitR.style.width = '25%';
})
splitL.addEventListener('mouseleave', function() {
    this.style.width = '50%';
    splitR.style.width = '50%';
})

splitR.addEventListener('mouseenter', function() {
    this.style.width = '75%';
    splitL.style.width = '25%';
})
splitR.addEventListener('mouseleave', function() {
    this.style.width = '50%';
    splitL.style.width = '50%';
})