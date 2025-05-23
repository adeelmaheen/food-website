 // Get the elements
 const sidebar = document.getElementById('sidebar');
 const openBtn = document.getElementById('open-btn');
 const closeBtn = document.getElementById('close-btn');

 // Open sidebar
 openBtn.addEventListener('click', function() {
     sidebar.classList.add('open');
 });

 // Close sidebar
 closeBtn.addEventListener('click', function() {
     sidebar.classList.remove('open');
 });

 // Function to toggle submenu
 function toggleSubmenu(event) {
     event.preventDefault();

     const submenuToggle = event.target;
     const submenu = submenuToggle.nextElementSibling;

     // Toggle the 'active' class to rotate the arrow
     submenuToggle.classList.toggle('active');

     // Toggle the display of the submenu
     submenu.classList.toggle('show');
 }
