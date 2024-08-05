function generarNumeroRandom16Digitos() {
    // Generar un número aleatorio de 16 dígitos
    const numeroAleatorio = Math.floor(Math.random() * 9000000000000000) + 1000000000000000;

    // Imprimir el número aleatorio en la consola
    console.log('Número aleatorio de 16 dígitos generado:', numeroAleatorio);

    // Retornar el número aleatorio
    return numeroAleatorio;
}

// Llamar a la función para verificar su funcionalidad
generarNumeroRandom16Digitos();

function generarNumeroRandom3Digitos() {
   
    const numeroAleatorio = Math.floor(Math.random() * 900) + 100;
     console.log('Número aleatorio de 3 dígitos generado:', numeroAleatorio);
    return numeroAleatorio;
}

generarNumeroRandom3Digitos();

function generarNumeroRandom10Digitos() {

    const numeroAleatorio = Math.floor(Math.random() * 9000000000) + 1000000000;

   
    console.log('Número aleatorio de 10 dígitos generado:', numeroAleatorio);

    return numeroAleatorio;
}

// Llama a la función para verificar su 
generarNumeroRandom10Digitos();