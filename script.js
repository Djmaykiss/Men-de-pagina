

const list = document.querySelectorAll('.list')
function activeLink(){
  list.forEach((item)=>item.classList.remove('active'))
//   console.log("eee");
  this.classList.add('active')
}

list.forEach((item)=> item.addEventListener('click',activeLink))