let menu=document.querySelector('#menu-bar');
let nav=document.querySelector('.nav');
menu.onclick=()=>{
    menu.classList.toggle("fa-times");
    nav.classList.toggle("active");
}




let section=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header .nav a');
window.onscroll=()=>{
    menu.classList.remove('fa-times'); 
    nav.classList.remove('active');
    section.forEach(sec=>{
        let top=window.scrollY;
        let height=sec.offsetHeight;
        let offset=sec.offsetTop - 150;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset + height){

            navlinks.forEach(links =>{

                links.classList.remove('Active');
                document.querySelector('header nav a[href*='+id+']').classList.add('Active');
            });
        }; 
    });
};


scrollbtn=document.getElementById("scrolltop-btn");
window.onscroll =function() {scrollfunction()};
     if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 )
    {
        scrollbtn.style.display="block";
    }
    else
    {
        scrollbtn.style.display="none";
    }
function topfunction(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}



