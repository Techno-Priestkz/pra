let header_button=document.querySelector(".mobile_icon")
header_button.addEventListener("click",function () {
    let  header=document.querySelector("header");
    if (header.classList.contains("open")){
        close_menu()
    }
    else {
        header.classList.add("open");
        header_button.querySelector("img").src="free-icon-font-check-3917749.png";
    }
});
function close_menu(){

    document.querySelector("header").classList.remove("open");
    header_button.querySelector("img").src="free-icon-font-cross-3917759.png";

}
document.querySelector("#grid").addEventListener("click",close_menu,false);
document.querySelector("header .menu").addEventListener("click",close_menu,false);
document.querySelector("#show_add_photo").addEventListener("click",function (){
    document.querySelector("#add_new_photo").classList.add("open");
});
document.querySelector("#cancel").addEventListener("click",function (){
    document.querySelector("#add_new_photoadd_").classList.remove("open");

});
document.querySelector(  "#add_photo").addEventListener(  "click",  function () {
    let src = document.querySelector("#new_photo_src").value;
    let text = document.querySelector("#new_photo_text").value;
    if (src && text) {
        let new_photo_div = document.createElement("div");
        new_photo_div.classList.add("photo");
        let new_img = document.createElement("img");
        new_img.src = src;
        new_photo_div.append(new_img);
        let new_p = document.createElement("p");
        new_p.innerText =text? text:"текст";
        new_photo_div.append(new_p);
        document.querySelector("#grid").prepend(new_photo_div);
        document.querySelector("#add_new_photo").classList.remove("open");
        document.querySelector("#new_photo_src").value="";
        document.querySelector("#new_photo_text").value="";
        new_photo_div.addEventListener("click",open_photo,false);
    } else {
        if (!src) {
            document.querySelector("#new_photo_src").classList.add("error");
        }
        if (!text) {
            document.querySelector("#new_photo_text").classList.add("error");
        }
    }
});
function open_photo(){
    let src=this.querySelector("img").src,
        menu_photo= document.querySelector("#menu_photo")
    menu_photo.querySelector("img").src=src;
    menu_photo.classList.add("open");
}
let photos=document.querySelectorAll(".photo");
for (let photo of photos){
    photo.addEventListener("click",open_photo,false);
}
document.querySelector("#menu_photo").addEventListener("click",function (){
    this.classList.remove("open");
});

document.getElementById('currencyConverterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var amount = parseFloat(document.getElementById('amount').value);
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;

   

   
    var conversionRate = 0.0022;
    var convertedAmount = amount * conversionRate;

    var conversionResultElement = document.getElementById('conversionResult');
    conversionResultElement.innerHTML = amount + ' ' + fromCurrency + ' = ' + convertedAmount.toFixed(2) + ' ' + toCurrency;
});




