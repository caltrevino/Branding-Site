const images = document.querySelectorAll(".lightbox");
let imgSrc;

// On click, grab image src
images.forEach((img) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;

        //run modal function
        imgModal(imgSrc);
    });
});

//creating the modal
let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");

    //add the modal to the main section or the parent element
    document.querySelector(".main").append(modal);

    //adding image to modal
    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);

    //creating the close button
    const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "fas fa-times closeBtn");
    document.body.style.overflow = 'hidden';

    //close function
    closeBtn.onclick = () => {
        modal.remove();
        document.body.style.overflow = 'auto';
    };

    modal.append(newImage, closeBtn);
};