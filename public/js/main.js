const bar = document.querySelector('.bar');

Array.from(bar).forEach((element)=>{
  element.addEventListener('click', deleteTask)
})