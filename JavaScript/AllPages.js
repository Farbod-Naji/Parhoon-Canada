// This file is responsible for adding some global features to all pages of the website

// ---------------------------------------------------------------------
// responsible for managing the slide shows on all pages
// ---------------------------------------------------------------------

function Plus_Slides(ID, n){
    document.getElementById(ID).firstElementChild.innerHTML = parseInt(document.getElementById(ID).firstElementChild.innerHTML) + n;
    var slideIndex = parseInt(document.getElementById(ID).firstElementChild.innerHTML);
    Manage_Slides(ID, slideIndex);
}

function Current_Slide(ID, n){
    document.getElementById(ID).firstElementChild.innerHTML = n;
    var slideIndex = parseInt(document.getElementById(ID).firstElementChild.innerHTML);
    Manage_Slides(ID, slideIndex);
}

function Correct_Slide_Number(ID, slideIndex){
    var numOfElements = document.getElementById(ID).getElementsByClassName("mySlides").length;
    var numTracker = document.getElementById(ID).firstElementChild;
    if (slideIndex > (numOfElements - 1)) {numTracker.innerHTML = 0}
    if (slideIndex < 0) {numTracker.innerHTML = (numOfElements-1)}
    return (parseInt(numTracker.innerHTML));
}

function Manage_Slides(ID, slideIndex) {
    var i;
    slideIndex = Correct_Slide_Number(ID, slideIndex);
    var slides = document.getElementById(ID).getElementsByClassName("mySlides");
    var dots = document.getElementById(ID).getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}


// ---------------------------------------------------------------------
// responsible for switching the menu on/off on mobiles
// ---------------------------------------------------------------------

Check_Menu_Button();

function Check_Menu_Button(){
    var button = document.getElementsByClassName("menu-icon");
    var menu = document.querySelector("nav");

    button[0].addEventListener("click", function(e) {
        menu.classList.toggle("menu-active");
        e.preventDefault();
        if(menu.classList.contains("menu-active")){
            //the menu is closing
            button[0].src = "/Assets/NavBar/menu-close-icon.svg";
            button[0].style.margin = "0 0 0 0"
        }
        else {
            button[0].src = "/Assets/NavBar/menu-icon.svg";
            button[0].style.margin = "auto 1em auto 0"
        }
    } );
}

// ---------------------------------------------------------------------
// responsible to check whether some feature appeare or not depending on visitor location
// ---------------------------------------------------------------------

const Get_IP_API = "https://api.ipgeolocation.io/getip"; //API that return IP address
const Get_Country_API_1 = "https://api.ipgeolocation.io/ipgeo?apiKey=8b43506bbafd417d988ed66f70b6af75&ip="; // the IP address that return the information of what country the user is in
const Get_Country_API_2 = "&fields=country_name&output=json";
// must enter the ip address of the user in between the two to get the country variables

const Switched_Button = document.getElementsByClassName('not-show-class'); //button for switching language

Check_Location();

async function get_IP(){
    const data = await fetch(Get_IP_API);
    const IP_address = await data.json();
    return IP_address;
}


async function Check_Location(){
    const IP = await get_IP();
    const API_request = Get_Country_API_1 + IP.ip + Get_Country_API_2;
    const input = await fetch(API_request);
    const data = await input.json();


    if (data.country_name != "Canada"){
        Switched_Button[0].style.display = "block";
        Switched_Button[1].style.display = "block";
    } 
    else{
        Switched_Button[0].style.display = "none";
        Switched_Button[1].style.display = "none";

    }
}



