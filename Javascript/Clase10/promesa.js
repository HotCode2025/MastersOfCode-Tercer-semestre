let miPromesa = new Promise ((resolver, rechazar ) => {
    let expresion = true;
    if (expresion) {
 //       resolver('Resolvio correctamente');
    } else {
 //       rechazar('Se produjo un error');
    }   
});

//miPromesa.then(
//    valor => console.log(valor),
//    error => console.log(error)
//    );
    
//miPromesa
//   .then(valor => console.log(valor))
//   .catch(error => console.log(error));   

let promesa = new Promise((resolver) => {
//    console.log('Inicio Promesa');  
    setTimeout(() => resolver('Saludos con promesa, callback, función, flecha y setTimeout'), 3000);     
//    console.log('Final promesa'); 
});

// El llamado a la promesa
//promesa.then(valor => console.log(valor));  

// async indica que una funcion regresara una promesa   
async function miFuncionConPromesa() {  
    return 'Saludos con promesa y asinc';
}

//miFuncionConPromesa().then(valor => console.log(valor));    

//async / await
async function funcionConPromesaYAwait() {
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con await')
    });
    console.log(await miPromesa);
}

//funcionConPromesaYAwait();  

// Promesas, await, async y setTimeout
async function funcionConPromesaAwaitYSetTimeout() {
    let miPromesa = new Promise(resolver => {
        console.log('Inicio funcion');
        setTimeout(() => resolver('Promesa con await y Timeout'), 3000);
        console.log('Final funcion');
    });
    console.log(await miPromesa);
}

//llamamos a la función 
funcionConPromesaAwaitYSetTimeout();