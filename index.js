function changeNavbarColorOnScroll(){
    const navId = document.getElementById('navbar');
    const scrollPosition = window.scrollY;

    if(scrollPosition > 100){
      navId.style.backgroundColor = 'white';
      // navId.classList.remove('.demo .nav-link:focus, .nav-link');
      navId.classList.add('text-dark');
    }
    else{
      navbar.style.backgroundColor = 'transparent';
    }
  }
  window.addEventListener('scroll', changeNavbarColorOnScroll)

  function inputField(restaurent){
    restaurent = '';
  }
  inputField()