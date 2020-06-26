let box_1 = document.querySelector('.box_1');
box_1.addEventListener('click', function () {
  console.log('+');
  box_1.style.backgroundColor = "black"
  box_1.style.height = "200px"

})

let box_2 = document.querySelector('.box_2');
box_2.addEventListener('click', function () {
  console.log('+');
  box_2.style.backgroundColor = "black"
  box_2.style.height = "200px"
})
console.log(box_1);
