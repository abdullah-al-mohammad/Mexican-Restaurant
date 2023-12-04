function changeNavbarColorOnScroll(){
  console.log("scrooled");
    const navId = document.getElementById('navbar');
    const scrollPosition = window.scrollY;

    if(scrollPosition > 100){
      navId.style.backgroundColor = 'white';
      navId.classList.remove('.demo .nav-link:focus, .nav-link');
      navId.classList.add('text-dark');
    }
    else{
      navbar.style.backgroundColor = 'transparent';
    }
  }
  // window.addEventListener('scroll', changeNavbarColorOnScroll);


  window.addEventListener('scroll', function (){
    const navId = document.getElementById('navbar');
    const mainLogo = document.querySelector('.main-logo');
    const stickyLogo = document.querySelector('.sticky-logo');
    const navLinks = document.querySelectorAll("#navbar .nav-link");
    const scrollPosition = window.scrollY;
    navId.style.transition = 'all .3s ease-in-out';

    if(scrollPosition > 100){
      navId.classList.add("bg-white");
      mainLogo.classList.add("d-none");
      stickyLogo.classList.remove("d-none")?.add("d-block");
      navLinks.forEach((navLink) => navLink.classList.add("fw-bold"));
      navLinks.forEach((navLink) => navLink.style.color = ('#777'));

    } else{
      navId.classList.remove("bg-white");
      mainLogo.classList.remove("d-none");
      stickyLogo.classList.add("d-none");
      navLinks.forEach((navLink) => navLink.style.color = ('white'));
    }
  })
  // input field
  const inputs = document.querySelectorAll('.form-control');
  const inputValue = inputs.forEach((input) => {
    if(input.placeholder){
      input.addEventListener('click', () =>{
        input.placeholder = '';
      })
    }
  })