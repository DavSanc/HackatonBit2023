//******************************Hackatón*****************************//
//************************* 14 de Julio de 2023 ************************/ 


// Lea con detenimiento los siguientes ejercicios, interprete y diseñe las soluciones que se solicita en cada uno de ellos.
// La actividad es de carácter individual. Tiempo máximo para la entrega 4h. Es permitido hacer uso de las notas tomadas en clase y de Internet como herramienta de consulta. 
// Cualquiera que haga uso de Inteligencias Artificiales será descalificado.

// 1.	 Escribe una función que reciba una cadena de texto como parámetro y 
//       verifique si cumple con los siguientes criterios: debe tener al menos 8 caracteres, 
//       contener al menos una letra mayúscula, una letra minúscula y un número. 
//       No está permitido usar expresiones regulares.

function cadenaTexto ( cadena ) {
    if ( cadenaTexto.length < 8 ) {
        return false
    }
    let mayusculasNumero = false;
    let minusculasNumero = false;
    let numero = false;
 
    for (let i = 0; i < cadenaTexto.length; i++){
        const caracteres = cadena [i]

        if (caracteres >= "A" && caracteres <= "Z"){
            mayusculasNumero = true;
        } else if ( caracteres <= "0" && caracteres <= "0" ){
            numero = true
        }
        if ( mayusculasNumero && minusculasNumero && numero) {
            return true
        }
        
    }
    return false;
}
console.log( cadenaTexto ("aBc123") );


// 2.	Escribe una función que reciba un array de números ordenados de forma ascendente
//      y devuelva el o los números faltantes en la secuencia.

// function numeroQueFaltan (arr) {
//     let numeroQueFaltan = [];
// }

// 3.	Escribe una función que reciba una cadena de texto con varias palabras separadas por espacios y 
// devuelva la cadena de texto con las palabras ordenadas alfabéticamente. 

// 4.	Escribe una función que reciba una cadena
//     de texto como parámetro y devuelva la cantidad de vocales que contiene. 