
/* menu show hidden */

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
    

/* menu show */

if (navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
}

/* menu hidden */

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
})
}




/* remove menu mobile */


const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//  TO  NIE DZIALA 58 MINut LEL (CHOWANIE SEKCJI)
// according skills

const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')


    function toggleSkills(){
        let itemClass = this.parentNode.className

        for(i = 0; i < skillsContent.lenght; i++){
            skillsContent[i].className = 'skills__content skills__close'
        }
        if(itemClass === 'skills__content skills__close'){
            this.parentNode.className = 'skills__content skills__open'
        }
    }

    skillsHeader.forEach((el) =>{
        el.addEventListener('click', toggleSkills)
    })


// qualif tabs


// services modal