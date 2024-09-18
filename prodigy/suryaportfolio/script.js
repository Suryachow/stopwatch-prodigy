let hamburgerMenu = document.getElementById("hamburger-menu");  

hamburgerMenu.addEventListener("click", function() {  
    let nav = document.querySelector("nav ul");  
    let hamburgerIcon = document.querySelector(".hamburger-menu span");  

    if (nav.classList.contains("show")) {  
        nav.classList.remove("show");  
        nav.style.transform = "translateY(-200px)";  
        hamburgerIcon.style.rotate = "";  
    } else {  
        nav.classList.add("show");  
        nav.style.transform = "";  
        hamburgerIcon.style.rotate = "225deg";  
    }  
});