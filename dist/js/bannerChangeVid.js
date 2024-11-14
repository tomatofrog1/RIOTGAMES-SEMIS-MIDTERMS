const video = document.querySelector('video') 

function changeVideo(vidSrc) {
    video.src = vidSrc;
}

const img = document.querySelector('.banner img') 

function changeImageBan(imgSrc) {
    img.src = imgSrc;
}


const navLink = document.querySelectorAll(".tab_nav_link");
const textContent = document.querySelectorAll(".sec1__text");
const bannerText = document.querySelectorAll(".banner_text");

navLink.forEach((navi) => {
    navi.addEventListener("click", () => {
        removeActiveMenu();
        navi.classList.add('active');

        const activeContent = document.querySelector(`#${navi.id}-content`);
        removeActiveContent();
        activeContent.classList.add("active");

        const activeText = document.querySelector(`#${navi.id}-text`);
        removeActiveText();
        activeText.classList.add("active");
    })
});

function removeActiveMenu() {
    navLink.forEach((navi) => {
        navi.classList.remove('active');
    });
}

function removeActiveContent() {
    textContent.forEach((navi) => {
        navi.classList.remove('active');
    });
    
}

function removeActiveText(){
    bannerText.forEach((navi) => {
        navi.classList.remove('active');
    });
}