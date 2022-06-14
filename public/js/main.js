const bar = document.querySelector('.bar');

Array.from(bar).forEach((element)=>{
  element.addEventListener('mouseover', showAmount)
})

function showAmount() {
  
}