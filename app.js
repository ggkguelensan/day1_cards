const slides = document.querySelectorAll('.slide');

for (const slide  of slides){
    slide.addEventListener('click', ()=>{
        clear_active_classes();
        slide.classList.add('active');
    });
}

function clear_active_classes(){
    slides.forEach((slide)=>{
        slide.classList.remove('active');
    })
}

