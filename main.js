var app = new Vue({
    el: '#app',
    data: {
        lang: true
    }
  });

window.onscroll = () => {
    const  nav = document.querySelector("header");
    if(this.scrollY <= 50) 
        nav.className = '';
    else
        nav.className = 'nav-scrolled'
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});