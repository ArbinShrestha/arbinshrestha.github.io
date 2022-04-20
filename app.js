const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');
console.log('all sections',allSections)

PageTransitions = ()=>{
    //Button click active
    for(let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Sections Activeclass
    for(let sec of allSections){
        sec.addEventListener('click', (e)=>{
            const id = e.target.dataset.id;
            if(id){
                //remove selected from other btns
                sectBtns.forEach((btn)=>{
                    btn.classList.remove('active');
                })
                e.target.classList.add('active');

                //hide other sections
                sections.forEach((section)=>{
                    section.classList.remove('active');
                })
                
                const elements = document.getElementById(id);
                elements.classList.add('active');
            }
        })
    }

    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', ()=>{
        let element = document.body;
        element.classList.toggle('light-mode');
    })
  
}

PageTransitions()

