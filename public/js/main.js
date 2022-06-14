const bar = document.querySelectorAll('.bar');
const amount = document.querySelectorAll('.amount');


Array.from(bar).forEach((divBar)=>{
  divBar.addEventListener('mouseover', showAmount)
})


function showAmount() {
  this.classlist.('')
}