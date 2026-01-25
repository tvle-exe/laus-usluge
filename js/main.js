// Učitavanje headera
fetch('./partials/header.html')
  .then(response => {
    if (!response.ok) throw new Error('Header not found');
    return response.text();
  })
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;

    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });
    }
  })
  .catch(error => console.error(error));

// Učitavanje footera
fetch('./partials/footer.html')
  .then(response => {
    if (!response.ok) throw new Error('Footer not found');
    return response.text();
  })
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  })
  .catch(error => console.error(error));
