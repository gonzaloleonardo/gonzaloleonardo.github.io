//Identificamos el boton de cambio de tema en una variable
const themeSwapBtn = document.getElementById('theme-swap');
//Identificamos cual es el tema que se esta usando actualmente revisando un item en local storage y lo almacenamos en una variable
let inUseTheme = localStorage.getItem('theme');

const cambiarTema = ()=>{
    //agregamos la clase alt-theme a nuestro body
    document.body.classList.add('alt-theme');
    //Actualizamos nuestro local storage
    localStorage.setItem('theme', 'alt');
}

const restablecerTema = ()=>{
    //sacamos la clase alt-theme a nuestro body    
    document.body.classList.remove('alt-theme');
    //actualizamos nuestro local storage
    localStorage.setItem('theme', 'normal');
}

//Si en la carga de la pagina, nuestro local storage indica que el tema se cambio previamente al alternativo: establece ese tema permitiendo al usuario mantener el tema al recargar la pagina o incluso despues de cerrar el navegador.
if(inUseTheme==='alt'){
    cambiarTema()
}

//agregamos un escuchador de eventos a nuestro boton para que ejecute una funcion al recibir click
themeSwapBtn.addEventListener('click', ()=>{
    //chequeamos cual es el tema que se esta usando
    inUseTheme = localStorage.getItem('theme');
    //si re usa el alternativo: vuelve a la normalidad
    if(inUseTheme === 'alt'){
    restablecerTema();
    }
    //sino(caso contrario: esta el tema default)establece el tema alternativo.
    else {
    cambiarTema();
    }
});


