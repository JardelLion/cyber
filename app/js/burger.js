const burger = document.querySelector("#burger")
const navMobile = document.querySelector("#nav-mobile")
const close  = document.querySelector("#close")

burger.addEventListener("click", function(){
    navMobile.style.display = 'inline-block';
    close.style.display = 'inline-block';
    burger.style.display = 'none';


})


close.addEventListener("click", function(){
    navMobile.style.display = 'none';
    burger.style.display = 'inline-block';
    close.style.display = 'none';
})


navMobile.addEventListener("click", function (event) {
  event.stopPropagation();
});


