const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
const images = ["images/pic1.jpeg", "images/pic2.jpeg", "images/pic3.jpeg", "images/pic4.jpeg", "images/pic5.jpeg" ];
images.forEach(image => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', image);
    thumbBar.appendChild(newImage);

})

const all_images = document.querySelectorAll("thumb-bar img");
all_images.forEach(images => {
    images.onClick("click", () => {
        let newImage = image.getAttribute("src");
        displayedImage.setAttribute("src", newImage);

    })
})
console.log(all_images);

/* Wiring up the Darken/Lighten button */
btn.onClick("click", () => {
    let button_class = btn.getAttribute("class");
    console.log(button_class);
    if(button_class === "dark") {
        btn.setAttribute("class", "light");
        btn.style.color = "";
        btn.style.backgroundColor = "rgba(0,0,0,0.5)";
    })
})