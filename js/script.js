$(document).ready(function () {
    $('#carouselExampleIndicators').carousel({

    })
});
$(document).ready(function () {
    $('.owl-one').owlCarousel({
        loop: false,
        margin: 40,
        nav: false,
        // navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class=''></i>"],  

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })

});
$(document).ready(function () {
    $('.owl-two').owlCarousel({
        loop: false,
        margin: 40,
        nav: false,
        // navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class=''></i>"],  

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

});

$(document).ready(function () {
    $("#myCarousel").carousel();
});



var sliders = document.querySelectorAll(".slide-img");
var activeimgs = document.querySelectorAll(".slide-img .active");
var nextimgs = document.querySelectorAll(".slide-img .nextelement");

for (let i = 0; i < sliders.length; i++) {
    sliders[i].addEventListener("mouseover", function () {
        activeimgs[i].classList.remove("active");
        nextimgs[i].classList.add("active");
        nextimgs[i].style.transform = "scale(1,1)";
    });
    sliders[i].addEventListener("mouseout", function () {
        nextimgs[i].classList.remove("active");
        activeimgs[i].classList.add("active");
        activeimgs[i].style.transform = "scale(1,1)";
    });
}

window.onload = function () {

    setInterval(function () {
        var activediv = document.querySelector("#slider-wrap .slider.active");
        var thumbnailActiveElement = document.querySelector("#thumbnail-wrapper .active")

        var nextdiv = activediv.nextElementSibling;
        var nextThumbElement = thumbnailActiveElement.nextElementSibling;

        if (nextdiv != null && nextThumbElement != null) {
            activediv.classList.remove("active");
            nextdiv.classList.add("active");
            thumbnailActiveElement.classList.remove("active");
            nextThumbElement.classList.add("active");
        }
        else {
            activediv.classList.remove("active");
            nextdiv = document.querySelector("#slider-wrap .slider:first-child");
            nextdiv.classList.add("active")
            thumbnailActiveElement.classList.remove("active");
            nextThumbElement = document.querySelector("#thumbnail-wrapper .control-badge:first-child");
            nextThumbElement.classList.add("active");
        }

    }, 4000);

}

var thumbnails = document.querySelectorAll("#thumbnail-wrapper .control-badge");

for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", function () {
        document.querySelector("#thumbnail-wrapper .active").classList.remove("active");

        this.classList.add("active");

        var dataNumber = this.getAttribute("data-number");


        document.querySelector("#slider-wrap .slider.active").classList.remove("active");

        document.querySelector(`#slider-wrap div[data-id="${dataNumber}"]`).classList.add("active")


    })
}

var salelines = document.querySelectorAll(".saleline");
console.log(salelines);

for (let i = 0; i < salelines.length; i++) {
    salelines[i].addEventListener("click", function () {
        
        document.querySelector(".navline.active").classList.remove("active")
        
        var datasay =this.getAttribute("data-reqem");
        document.querySelector(".sale-slider .mainslide.active").classList.remove("active");
        document.querySelector(`.sale-slider .container div[data-say="${datasay}"]`).classList.add("active")
        this.children[0].classList.add("active");
    });
}

$(document).ready(function(){
    setTimeout(() => {
        let modal = `    <div class="modal-own">
        <span class="xmark"><i class="fa-solid fa-xmark"></i></span>
        <div class="row">
            
            <div class="modal-text">
                <h5>Why Hello there,enjoy</h5>
                <h2>15% 0FF</h2>
                <span class="modal-line"></span>
                <p>Subscribe to get up to 15% off! Limited time only.</p>
                <input class="input-text" type="email" placeholder="Email Adress">
                <button class="btn btn-primary btn-gradient form-button" type="submit">Subscribe</button>
                <p>No, thanks</p>
            </div>
        </div>
    </div>`
    let modalOverlay=`<div class="modal-overlay">
    
    </div>`
    $(document.body).append($(modal))
    $(document.body).append($(modalOverlay));
    document.body.style.overflowY="hidden";
    var xmark=document.querySelector(".xmark");
    var modalown=document.querySelector(".modal-own");
    var overlay=document.querySelector(".modal-overlay");
    
   
    xmark.addEventListener("click",function(){
        modalown.remove();
        overlay.remove();
        document.body.style.overflowY="scroll";

    })
    overlay.addEventListener("click",function(){
        modalown.remove();
        overlay.remove();
        document.body.style.overflowY="scroll";

    })
    }, 4000);

})

window.addEventListener("scroll",function(){
    if(window.scrollY > 50){
        document.querySelector(".up-sign").style.opacity = "1"
        document.querySelector(".up-sign").style.visibility = "visible"
    }
    else{
        document.querySelector(".up-sign").style.opacity = "0"
        document.querySelector(".up-sign").style.visibility = "hidden"
    }
})
document.querySelector(".up-sign").addEventListener("click",function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

var leftDrop=document.querySelector(".left-dropdown");
var opener=document.querySelector(".nav-logo i");
var closer=document.querySelector(".left-dropdown-icon");
opener.addEventListener("click",function(){
leftDrop.style.left="0%";
});
closer.addEventListener("click",function(){
    leftDrop.style.left="-100%";
})