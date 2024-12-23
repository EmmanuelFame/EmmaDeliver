const toggle = document.querySelector(".tog_cover");
const options = document.querySelector(".toggle_options");
const drop_cover = document.querySelector(".drop_div");
const drop = document.querySelector(".drop");



toggle.addEventListener("click", ()=>{
    if(options.classList.contains("show")){

        options.classList.remove("show");
    }else{
        options.classList.add("show");
    }
   
})
drop_cover.addEventListener("click", ()=>{
    if(drop.classList.contains("show2")){
        drop.classList.remove("show2");
    }else{
        drop.classList.add("show2");
    }
})