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