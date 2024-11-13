const defaultimg = document.querySelector('.category__display') 

function changeImage(imageSrc) {
    document.querySelector(".image-display").classList.add('show')
    document.getElementById("displayImage").src = imageSrc;
    defaultimg.classList.add('hide')
}

function backDefault(){
    defaultimg.classList.remove('hide')
    document.querySelector(".image-display").classList.remove('show')

}