function changeNavbarColorOnScroll(){
    document.getElementById('navbar');
    const scrollPosition = window.scrollY;

    if(scrollPosition > 100){
      navbar.style.backgroundColor = 'white';
      document.getElementById('navbar').classList.remove('nav-link');
      document.getElementById('navbar').classList.add('text-black');
    }
    else{
      navbar.style.backgroundColor = 'transparent';
    }
  }
  window.addEventListener('scroll', changeNavbarColorOnScroll)