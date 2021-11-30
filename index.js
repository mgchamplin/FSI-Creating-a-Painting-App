let selectedColor = 'blue'
const painting = document.querySelector('.painting')

painting.addEventListener('click', function(e){
    if (e.target.style.backgroundColor === 'red' ||
      e.target.style.backgroundColor === 'blue' ||
      e.target.style.backgroundColor === 'green' ||
      e.target.style.backgroundColor === 'yellow') {
         e.target.style.backgroundColor = 'white' 
    }
    else {
       e.target.style.backgroundColor = selectedColor
       console.log("  Sel Col = ", selectedColor)
    }
})

const palette = document.querySelector('.palette')

palette.addEventListener('click', function(e){
    //console.log(e.target.id)
    selectedColor = e.target.id
})