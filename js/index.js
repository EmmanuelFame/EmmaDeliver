const toggle = document.querySelector(".tog_cover");
const options = document.querySelector(".toggle_options");



toggle.addEventListener("click", ()=>{
    if(options.classList.contains("show")){

        options.classList.remove("show");
    }else{
        options.classList.add("show");
    }
   
})