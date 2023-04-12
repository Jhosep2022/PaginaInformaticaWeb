document.addEventListener('DOMContentLoaded', function () {
    var btnAbrirNoticia = document.getElementById('btnAbrirNoticia');
    var btnCerrarNoticia = document.getElementById('btnCerrarNoticia');
    var modalNoticia = document.getElementById('modalNoticia');
  
    btnAbrirNoticia.addEventListener('click', function () {
      modalNoticia.style.display = 'block';
    });
  
    btnCerrarNoticia.addEventListener('click', function () {
      modalNoticia.style.display = 'none';
    });
  
    window.addEventListener('click', function (event) {
      if (event.target == modalNoticia) {
        modalNoticia.style.display = 'none';
      }
    });
  });
  