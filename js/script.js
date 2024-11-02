document.addEventListener('click', function(e) {
    let menuBtn = document.querySelector('.menu-btn');
    let menu = document.querySelector('.menu');
    if(e.target.closest('.menu-btn')) {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    } else if (menu.closest('.active') && !e.target.closest('.menu') && menuBtn.closest('.active') || e.target.closest('.menu-close')) {
        menuBtn.classList.remove('active');
        menu.classList.remove('active');
    }

})