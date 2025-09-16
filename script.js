fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;

    // Now header is loaded, attach toggle
    const toggleBtn = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');

    toggleBtn.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  });

fetch('footer.html')
  .then(response => response.text())
  .then(data => document.getElementById('footer').innerHTML = data);
