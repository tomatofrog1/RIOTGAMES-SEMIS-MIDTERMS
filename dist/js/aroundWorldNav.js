const navigate = document.querySelectorAll(".tab-nav-link");
const aroundWorldContent = document.querySelectorAll(".aroundWorld-item");

navigate.forEach((navi) => {
    navi.addEventListener("click", () => {
        removeActiveMenu();
        navi.classList.add('active');

        const activeContent = document.querySelector(`#${navi.id}-content`);
        removeActiveContent();
        activeContent.classList.add("active");
    })
});

function removeActiveMenu() {
    navigate.forEach((navi) => {
        navi.classList.remove('active');
    });
}

function removeActiveContent() {
    aroundWorldContent.forEach((content) => {
        content.classList.remove('active');
    });
}