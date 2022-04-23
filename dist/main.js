const btn_menu_burguer = document.getElementById('btn-menu-burguer')
const btn_close_menu_burguer = document.getElementById('btn-close-menu-burguer')
const menu_desktop = document.getElementById('menu-desktop')
const menu_movil = document.getElementById('menu-movil')

btn_menu_burguer.addEventListener('click', function(e){
    e.preventDefault()
    btn_menu_burguer.classList.toggle('hidden')
    btn_close_menu_burguer.classList.toggle('hidden')
    menu_movil.classList.toggle('hidden')
})

btn_close_menu_burguer.addEventListener('click', function(e){
    e.preventDefault()
    btn_close_menu_burguer.classList.toggle('hidden')
    btn_menu_burguer.classList.toggle('hidden')
    menu_movil.classList.toggle('hidden')
})