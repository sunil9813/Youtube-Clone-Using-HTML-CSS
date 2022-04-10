 const showMenu = (headerToggle, navbarId) => {
   const toggleBtn = document.getElementById(headerToggle),
     nav = document.getElementById(navbarId)

   if (headerToggle && navbarId) {
     toggleBtn.addEventListener('click', () => {
       nav.classList.toggle('show-menu')
       toggleBtn.classList.toggle('fa-times')
     })
   }
 }
 showMenu('header-toggle', 'navbar')

 const linkcolor = document.querySelectorAll('.nav_link');

 function colorLink() {
   linkcolor.forEach(l => l.classList.remove('active'))
   this.classList.add('active')
 }
 linkcolor.forEach(l => l.addEventListener('click', colorLink))