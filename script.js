/* Officers */

function openLightbox(imgSrc, name, title) {
    document.getElementById('lightbox-img').src = imgSrc;
    document.getElementById('lightbox-name').innerText = name;
    document.getElementById('lightbox-title').innerText = title;
    document.getElementById('lightbox').style.display = "flex";
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = "none";
}

// Close lightbox when clicking outside the content
document.getElementById('lightbox').addEventListener('click', function(event) {
    if (event.target === this) {
        closeLightbox();
    }
});

/* Survey */

function handleFormSubmit(event) {
    event.preventDefault(); 
    alert("Survey submitted successfully!"); 
    document.querySelector("form").reset(); 
    return false; 
}





















