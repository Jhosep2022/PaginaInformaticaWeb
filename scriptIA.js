document.addEventListener('DOMContentLoaded', function () {
    var btnAbrirNoticia1 = document.getElementById('btnAbrirNoticia1');
    var btnAbrirNoticia2 = document.getElementById('btnAbrirNoticia2');
    var btnAbrirNoticia3 = document.getElementById('btnAbrirNoticia3');
    var btnAbrirNoticia4 = document.getElementById('btnAbrirNoticia4');
    var btnCerrarNoticia1 = document.getElementById('btnCerrarNoticia1');
    var btnCerrarNoticia2 = document.getElementById('btnCerrarNoticia2');
    var btnCerrarNoticia3= document.getElementById('btnCerrarNoticia3');
    var btnCerrarNoticia4 = document.getElementById('btnCerrarNoticia4');
    
    var modalNoticia = document.getElementById('noticia-completa');
    var modalNoticia2 = document.getElementById('noticia-completa2');
    var modalNoticia3 = document.getElementById('noticia-completa3');
    var modalNoticia4 = document.getElementById('noticia-completa4');
  
    //noticia 1
    btnAbrirNoticia1.addEventListener('click', function () {
      modalNoticia.style.display = 'block';
    });
  
    btnCerrarNoticia1.addEventListener('click', function () {
      modalNoticia.style.display = 'none';
    });
  
    window.addEventListener('click', function (event) {
      if (event.target == modalNoticia) {
        modalNoticia.style.display = 'none';
      }
    });
    //noticia 2
    btnAbrirNoticia2.addEventListener('click', function () {
        modalNoticia2.style.display = 'block';
      });
    
      btnCerrarNoticia2.addEventListener('click', function () {
        modalNoticia2.style.display = 'none';
      });
    
      window.addEventListener('click', function (event) {
        if (event.target == modalNoticia2) {
          modalNoticia2.style.display = 'none';
        }
      });
    
    //noticia 3
    btnAbrirNoticia3.addEventListener('click', function () {
        modalNoticia3.style.display = 'block';
      });
      btnCerrarNoticia3.addEventListener('click', function () {
        modalNoticia3.style.display = 'none';
      });  
    window.addEventListener('click', function (event) {
        if (event.target == modalNoticia3) {
          modalNoticia3.style.display = 'none';
        }
      });
    
    //noticia 4
    
    btnAbrirNoticia4.addEventListener('click', function () {
        modalNoticia4.style.display = 'block';
      });
      btnCerrarNoticia4.addEventListener('click', function () {
        modalNoticia4.style.display = 'none';
      });  
    window.addEventListener('click', function (event) {
        if (event.target == modalNoticia4) {
          modalNoticia4.style.display = 'none';
        }
      });  
      
  });
  