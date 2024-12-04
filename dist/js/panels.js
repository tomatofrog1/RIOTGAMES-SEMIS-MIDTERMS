const panelItem = document.querySelectorAll('.item__wrap')

panelItem.forEach((panel) =>{
    panel.addEventListener('click', ()=>{
        removeActivePanel();
        panel.classList.add('active');
    })
})

function removeActivePanel(){
    panelItem.forEach((panel) =>{
        panel.classList.remove('active')
    })
}


const accordion = document.querySelectorAll(".item__wrap--mob");

accordion.forEach((acc) =>{
    acc.addEventListener('click', ()=>{
        acc.classList.toggle('active');

        const panel = acc.nextElementSibling
        if(panel.style.height == ''){
            panel.style.height = '515.34px'
        } else {
            panel.style.height = '';
        }
    })
})

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.toggle("active");

//     /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }