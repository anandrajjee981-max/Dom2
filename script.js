let btn = document.querySelector("button");
let num = document.querySelector(".white .bottom  .num")
let grow = document.querySelector(".grow");
let inc = 0 ;
btn.addEventListener("click", function(){
  btn.style.pointerEvents= 'none';//agr koi user baar baar button press kre to grow aage chla gayega usko rokne k liye
let abc=  setInterval(function(){
    inc++;
    num.innerHTML = inc + "%";
    grow.style.width = inc + "%";
  },500)
  setTimeout(function() {
    clearInterval(abc);
    btn.style.opacity = 0.5
  }, 50000);
});


