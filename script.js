let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

window.addEventListener('load',inicializarEventos,false);

function inicializarEventos()
{
  var ob1=document.getElementById('formulario');
  ob1.addEventListener('submit',enviarDatos,false);
}

function enviarDatos(e)
{
  
  var corr=document.getElementById('correo');
  if (corr.value=='')
  {
    alert('debe ingresar los dos datos');
    e.preventDefault();
    return false;
  }
  else
    return true;
}


const openModal = document.querySelector('.hero__cta');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});

const openModal2 = document.querySelector('.hero__cta2');
const modal2 = document.querySelector('.modal');
const closeModal2 = document.querySelector('.modal__close2');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});

