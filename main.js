//******************************Hackatón*****************************//
//************************* 14 de Julio de 2023 ************************/ 


// Lea con detenimiento los siguientes ejercicios, interprete y diseñe las soluciones que se solicita en cada uno de ellos.
// La actividad es de carácter individual. Tiempo máximo para la entrega 4h. Es permitido hacer uso de las notas tomadas en clase y de Internet como herramienta de consulta. 
// Cualquiera que haga uso de Inteligencias Artificiales será descalificado.

// 1.	 Escribe una función que reciba una cadena de texto como parámetro y 
//       verifique si cumple con los siguientes criterios: debe tener al menos 8 caracteres, 
//       contener al menos una letra mayúscula, una letra minúscula y un número. 
//       No está permitido usar expresiones regulares.

// function cadenaTexto ( cadena ) {
//     if ( cadenaTexto.length < 8 ) {
//         return false
//     }
//     let mayusculasNumero = false;
//     let minusculasNumero = false;
//     let numero = false;
 
//     for (let i = 0; i < cadenaTexto.length; i++){
//         const caracteres = cadena [i]

//         if (caracteres >= "A" && caracteres <= "Z"){
//             mayusculasNumero = true;
//         } else if ( caracteres <= "0" && caracteres <= "0" ){
//             numero = true
//         }
//         if ( mayusculasNumero && minusculasNumero && numero) {
//             return true
//         }
        
//     }
//     return false;
// }
// console.log( cadenaTexto ("aBc123") );


// 2.	Escribe una función que reciba un array de números ordenados de forma ascendente
//      y devuelva el o los números faltantes en la secuencia.

// function encontrarNumeros(arr) {
//         let numerosFaltantes = [];
//         let resultado = encontrarNumeros([1,2,3,4]);
//         for( let i = 0; i < arr.length - 1; i++ ){
//         let diferencia = arr[i+1] - arr[i];
//         if (diferencia > 1){
//             for(let j = 1; j < diferencia; j++){
//                 numerosFaltantes.push(arr[i] + j);

//             }
//         }
//     }
//     return numerosFaltantes.push( arr[i] + j);
// }



// // 3.	Escribe una función que reciba una cadena de texto con varias palabras separadas por espacios y 
// // devuelva la cadena de texto con las palabras ordenadas alfabéticamente. 

// function ordenarPalabras(cadena) {
//     return cadena.split('').sort.join('');
//     let resultado = ordenarPalabras ("adsc klmo");
// }

// 4.	Escribe una función que reciba una cadena
//     de texto como parámetro y devuelva la cantidad de vocales que contiene. 

function contarVocales (cadena) {
    let contador = 0;
    let vocales = [a, e, i, o, u];
    for(let i = 0; i < cadena.length; i++ ){
        if (vocales.includes(cadena[i].toLowercase())){
            
        }
        let texto = 'hola mundo'
        let numeroVocales = contarVocales(texto)
    }
   console.log(texto); 
}