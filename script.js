/*HAMBURGER MENU*/
function myFunction() {
    var hamburgerMenu = document.getElementById("myLinks");
    if (hamburgerMenu.style.display === "block") {
      hamburgerMenu.style.display = "none";
    } else {
      hamburgerMenu.style.display = "block";
    }
  }

/*PRODUCT*/
const productImages = [
    "Images/Liquidsoap.jpg",
    "Images/Sugarsoap.jpg",
    "Images/Barsoap.jpg",
    "Images/Shavingsoap.jpg",
    "product.html",
];

const productUrls = [
    "product.html",
    "javascript:void(0);",
    "javascript:void(0);",
    "javascript:void(0);",
   ];

let productImages_index = 0;

function currentProductImage() {
    const img = document.querySelector("#productImages");
    img.src = productImages [productImages_index];
    const anchor = document.querySelector("#currentClick");
    anchor.href = productUrls[productImages_index];   
}

function leftImage() {
    productImages_index--;
    if (productImages_index < 0) {
        productImages_index = productImages.length - 1;
    } 
    currentProductImage()
}

function rightImage() {
    productImages_index++
    if (productImages_index >= productImages.length) {
        productImages_index = 0;
    } 
    currentProductImage()
}

    

/*COLLAPSE
function collapseListener(){
    const suggestedButton = document.querySelector(".suggestedButton") 
    const suggestedContent = document.querySelector(".suggestedContent")

    suggestedButton.addEventListener("click", function() {
    if(suggestedContent.style.display === "none") {
        suggestedContent.style.display = "block";
        }else{
            suggestedContent.style.display = "none";
            }      
})
}

function collapseListener2(){
    const ingredientButton = document.querySelector(".ingredientButton") 
    const ingredientContent = document.querySelector(".ingredientContent")

    ingredientButton.addEventListener("click", function() {
    if(ingredientContent.style.display === "none") {
        ingredientContent.style.display = "block";
        }else{
            ingredientContent.style.display = "none";
            }      
})
}
*/





