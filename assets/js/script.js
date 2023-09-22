var opcionNumerosPeI
let contador=0
let contadorFactorial=0
let contadorContrasena=0
let intentosContrasena=0
const contrasena="secreto123"
let contadorTablasMul=0
let contadorGeneralPrimos=0
let contadorFibonacci=0
let contadorTemperatura=0
const ceroAbsoluto=32
const unCelsiusEs=1.8
let contadorPotencia=0



/* ********************************************************************************************************************************************************************************* */
do{
    
     opcionNumerosPeI=Number(prompt("___________________|| Calculadora especial ||______________________\n 1- Contador de numeros pares e impares"+
    " \n 2- Calculadora Factorial \n 3- Validacion de contraseña \n 4- Generador de tablas de multiplicar \n 5- Suma de Numeros Primos"+
    "\n 6- Secuencia Fibonacci \n 7- Convertidor de Temperatura \n 8- Calculadora de Potencia \n 9 Salir del Sistema"))
   
        switch(opcionNumerosPeI){
            case 1:
                console.log("1- Contador de numeros pares e impares")

                do{
                    
                opcionNumerosPeI=Number(prompt("1- Realizar Calculo\n2- Salir"))
                
                switch(opcionNumerosPeI){
                    case 1:
                        contador++                       
                        let numeroIngresado=Number(prompt("Ingresa el numero a calcular"))
                        
                        if(numeroIngresado>0){
                            console.log("\n Numero ingresado: "+numeroIngresado+"\n ")
                        let contadoPar=0
                        let contadoImpar=0
                        for(let i=2;i<=numeroIngresado;i+=2){
                            console.log(i) 
                            contadoPar++                              
                        }
                        console.log("\nCantidad de numeros Pares: "+contadoPar+"\n ")
                        for(let i=1;i<=numeroIngresado;i+=2){
                            console.log(i)
                            contadoImpar++   
                        }
                        console.log("\nCantidad de numeros Impares: "+contadoImpar+"\n ")

                         }else if(numeroIngresado<0){
                            console.log("\n Numero ingresado: "+numeroIngresado+"\n ")
                            let contadoPar=0
                            let contadoImpar=0
                            for(let i=-2;i>=numeroIngresado;i-=2){
                                console.log(i) 
                                contadoPar++                              
                            }
                            console.log("\nCantidad de numeros Pares negativos: "+contadoPar+"\n ")

                            for(let i=-1;i>=numeroIngresado;i-=2){
                                console.log(i)
                                contadoImpar++   
                            }
                            console.log("\nCantidad de numeros Impares negativos: "+contadoImpar+"\n ")
                         
                        }else{
                            console.log("\nNumero invalido\n ")   
                        }
                                                
                        console.log("Numero de ejecuciones realizadas: "+contador)
                        break;
                    case 2:
                        console.log("\nHas elegido salir de contador de numeros pares e impares\n")
                        break;
                        
                        default:
                        console.log("OPCION INVALIDA")
                        break;                                               
                }
                }while(opcionNumerosPeI!=2)
                console.log("\nSaliendo al Menu Principal\n")
                break;
            /********************************************************************************************************************************************************************** */
            case 2:
                console.log("2- Calculadora Factorial")

                do{
                    
                opcionNumerosPeI=Number(prompt("1- Deseas hallar el factorial de un numero\n2- Salir"))
                
                switch(opcionNumerosPeI){
                    case 1:
                        let factorial=1
                        contadorFactorial++  

                        let numeroIngresado=parseInt(prompt("Ingresa el numero a calcular"))

                        console.log("\n Numero ingresado: "+numeroIngresado+"\n ")
                        if(numeroIngresado>0){
                            for(let i=1;i<=numeroIngresado;i++){
                                factorial*=i                                                                                   
                             }
                             console.log("El numero factorial de: "+numeroIngresado+" es "+factorial+"\n ")
                             factorial=1
                        }else if(numeroIngresado==0){
                            console.log("El numero factorial de: "+numeroIngresado+" es 1\n ")
                        }else if(numeroIngresado<0){ 
                            console.log("Has elegido un numero negativo ("+numeroIngresado+
                            ")  *****NO ES POSIBLE CALCULARLO*****, porque la función factorial se define sobre el conjunto de los números naturales (Enteros Positivos).\n ") 
                        }else{

                            console.log("Numero invalido: "+numeroIngresado+"\n ")
                        }
                       
                        console.log("Numero de operaciones realizadas: "+contadorFactorial)
                        break;
                    case 2:
                        console.log("\nHas elegido salir de calculadora factorial\n")
                        break;
                        
                        default:
                        console.log("OPCION INVALIDA")
                        break;                                               
                }
                }while(opcionNumerosPeI!=2)
                console.log("\nSaliendo al Menu Principal\n")
                break;
            /* *************************************************************************************************************************************************  */
            case 3:
                console.log("Validacion de contraseña")
                do{
                opcionNumerosPeI=Number(prompt("1- Validar Contraseña\n2- Salir"))
                    switch(opcionNumerosPeI){
                        case 1:
                            contadorContrasena++
                            
                            opcionNumerosPeI=prompt("Ingresa la Contraseña")
                            
                            if(opcionNumerosPeI===contrasena){
                                console.log("\nAcceso concedido")
                               intentosContrasena=0
                            }else{
                                console.log("\nAcceso denegado")
                                intentosContrasena++
                                console.log("\n Numeros de Intentos: "+intentosContrasena+" Te vamos a bloquear")
                            }

                                console.log("\nNumero de operaciones realizadas: "+contadorContrasena)

                            break;

                        case 2:
                                console.log("\nHas elegido salir de Validacion de contraseña\n")
                            break;

                            default:
                                console.log("OPCION INVALIDA")
                            break;  

                    }

                 }while(opcionNumerosPeI!=2)
                    console.log("\nSaliendo al Menu Principal\n")
                break;
            //*******************************************************************************************************************************************************************************
            case 4:
                console.log("Generador de tablas de Multiplicar")               

                do{
                    opcionNumerosPeI=Number(prompt("1- Generar tablas de multiplicar\n2- Salir"))

                 switch(opcionNumerosPeI){
                case 1: 
                contadorTablasMul++
                opcionNumerosPeI=Number(prompt("\nIngrese Un numero"))
                if(opcionNumerosPeI>=0  ){

                    for(let i=1;i<=10;i++){
                    var multiplicacion=opcionNumerosPeI*i
                    console.log("\n   "+i+" x "+opcionNumerosPeI+" = "+multiplicacion)
                    }
                }else if(opcionNumerosPeI<0){
                    for(let i=1;i<=10;i++){
                        var multiplicacion=opcionNumerosPeI*i
                        console.log("\n   "+i+" x "+opcionNumerosPeI+" = "+multiplicacion)
                        }
                }else{
                    console.log("OPCION INVALIDA")
                }

                    console.log("\nNumero de operaciones realizadas: "+contadorTablasMul)
                    break; 
                                      
                case 2:
                    console.log("\nHas elegido salir del Generador de tablas de Multiplicar \n")
                    break;
                    default:
                        console.log("OPCION INVALIDA")
                        break;    
                                                             
            }
            }while(opcionNumerosPeI!=2)
            console.log("\nSaliendo al Menu Principal\n")

                break;
            //*************************************************************************************************************************************************************************************************** */
            case 5:
                console.log("\nSuma de numeros primos")
                do{
                    opcionNumerosPeI=Number(prompt("1-Sumar numeros primos \n2- Salir"))

                     switch(opcionNumerosPeI){
                        case 1: 
                            contadorGeneralPrimos++

                            let cantNumPrimos = parseInt(prompt("Ingrese la cantidad de los primeros números primos que desea sumar:"));

                            if(cantNumPrimos>1){

                            let resultado = 0;
                            let contadorNumPrimos = 0;
                            let numeroEvaluado = 2;
                
                            while (contadorNumPrimos <cantNumPrimos) {
                                let esteEsPrimo = true;
                
                                for (let i = 2; i <= Math.sqrt(numeroEvaluado); i++) {
                                    if (numeroEvaluado % i === 0) {
                                        esteEsPrimo = false;                                    
                                    }
                                }
                
                                    if (esteEsPrimo) {
                                        resultado += numeroEvaluado;
                                        contadorNumPrimos++;
                                    }
                
                                      numeroEvaluado++;
                            }
                
                                        console.log("La suma de los primeros "+ cantNumPrimos+" números primos es: "+resultado);

                            }else if(cantNumPrimos<0){ 
                                console.log("\nHas elegido un numero negativo ("+cantNumPrimos+
                                ")  *****NO ES POSIBLE CALCULARLO*****, porque los numeros primos se define sobre el conjunto de los números naturales (Enteros Positivos) mayores de uno.\n ")

                            }else{

                                console.log("\nNumero invalido\n ")

                            }
                                console.log("\nNumero de operaciones realizadas: "+contadorGeneralPrimos)

                        break;
                        case 2:
                            console.log("\nHas elegido salir de la suma de numeros primos \n")
                        break;
                            default:
                                console.log("OPCION INVALIDA")
                            break;    
                    }                                         
                
                }while(opcionNumerosPeI!=2)
                console.log("\nSaliendo al Menu Principal\n")
                
                break;

            //****************************************************************************************************************************************************************************** */    
            case 6:
                    console.log("Secuencia Fibonacci")

                do{
                        opcionNumerosPeI=Number(prompt("1-Generar secuencia Fibonacci \n2- Salir"))
    
                     switch(opcionNumerosPeI){
                    case 1: 
                     contadorFibonacci++
                            
                    var numeroUno = 0;
                    var numeroDos = 1;
                        posicionFibonacci=Number(prompt("Ingresa el numero de la posicion que deseas generar"))
                        if (posicionFibonacci<1){
                            console.log("\nHas ingresado el "+posicionFibonacci+" ERROR Favor ingrese un numero positivo mayor que 1 (la frecuencia Fibonacci es incremental)")
                        }else{

                    console.log(numeroUno);
                    console.log(numeroDos);

                    for (var i = 1; i <= posicionFibonacci; i++) {
  
                    var siguienteNumero = numeroUno + numeroDos;

  
                    console.log(siguienteNumero);

  
                    numeroUno = numeroDos;
                    numeroDos = siguienteNumero;
                    }
                    }
                    console.log("\nNumero de operaciones realizadas: "+contadorFibonacci)

                    break;
                    case 2:
                        console.log("\nHas elegido salir del Generador Fibonacci \n")
                    break;
                        default:
                            console.log("OPCION INVALIDA")
                        break;    
                }                                         
            
                    }while(opcionNumerosPeI!=2)
                    console.log("\nSaliendo al Menu Principal\n")
            
                break;
            //******************************************************************************************************************************************************************************* */
            case 7:
                console.log("Conversor de temperatura (celsius a Fahrenheit o de Fahrenheit a celsius) ")
                do{
                    opcionNumerosPeI=Number(prompt("1-convertir (°C) a (°F)\n2-convertir (°F) a (°C) \n3- Salir"))

                     switch(opcionNumerosPeI){
                        case 1: 
                            contadorTemperatura++
                        let gradosF
                        opcionNumerosPeI=Number(prompt("Ingrese los grados celsius a comvertir"))
                        
                
                            gradosF=(opcionNumerosPeI*unCelsiusEs)+ceroAbsoluto
                            console.log("\n( "+opcionNumerosPeI+" °C ) Equivale a ( "+gradosF+" °F )")
                            break;

                        case 2:
                           
                            let gradosC
                        opcionNumerosPeI=Number(prompt("Ingrese los grados Fahrenheit a comvertir"))
                        
                        gradosC=(opcionNumerosPeI-ceroAbsoluto)/unCelsiusEs
                            console.log("\n( "+opcionNumerosPeI+" °F ) Equivale a ( "+gradosC+" °C )")
                                         
                            break;
              
                            case 3:
                                console.log("\nHas elegido salir del conversor de temperatura \n")
                            break;
                                default:
                                    console.log("OPCION INVALIDA")
                                break;    
                        }                                         
                    
                    }while(opcionNumerosPeI!=3)
                    console.log("\nSaliendo al Menu Principal\n")
                break;


            //********************************************************************************************************************************************************************** */    
            case 8:
                console.log("Potenciacion")

                do{
                    
                    opcionNumerosPeI=Number(prompt("1- Deseas calcular la potencia de un numero\n2- Salir"))
                    
                    switch(opcionNumerosPeI){
                        case 1:
                            contadorPotencia++
                            let base=Number(prompt("Ingresa la Base del numero"))
                            let exponente=Number(prompt("Ingresa el Exponente del numero"))
                            let potencia
                              if(base==0&&exponente==0){                               
                                console.log("\nLa poencia del numero: "+base+" elevado a la "+exponente+" es INDETERMINADO")
                                                            
                              }else{
                                potencia= (base)**(exponente)
                                console.log("\nLa poencia del numero: "+base+" elevado a la "+exponente+" es = "+potencia)
                                }
                            break;
              
                            case 2:
                                console.log("\nHas elegido salir de Potenciacion  \n")
                            break;
                                default:
                                    console.log("OPCION INVALIDA")
                                break;    
                        }                                         
                    
                    }while(opcionNumerosPeI!=2)
                    console.log("\nSaliendo al Menu Principal\n")

                break;

                //********************************************************************************************************************************************************************************* */
            case 9:
                console.log("\nHas elegido salir del sistema\n")
                break;
            default:
                console.log("OPCION INVALIDA")
                break;
          
        }
            
}while(opcionNumerosPeI!=9);
    console.log("\nHas ejecutado la calculadora de factorial: "+contadorFactorial+" veces\n")
    console.log("\nHas ejecutado la validacion de contraseña: "+contadorContrasena+" veces\n")
    console.log("\nHas ejecutado el generador de tablas de multiplicar: "+contadorTablasMul+" veces\n")
    console.log("\nHas ejecutado la suma de numeros primos: "+contadorGeneralPrimos+" veces\n")
    console.log("\nHas ejecutado la Secuencia Fibonacci: "+contadorFibonacci+" veces\n")
    console.log("\nHas ejecutado el Conversor de temperatura: "+contadorTemperatura+" veces\n")
    console.log("\nHas ejecutado la calculadora de potecias: "+contadorPotencia+" veces\n")
   // var contadores=[2,8,5,6,2,3,6,8]

var contadores=[ contador, contadorFactorial, contadorContrasena, contadorTablasMul, contadorGeneralPrimos,contadorFibonacci, contadorTemperatura,contadorPotencia];
var nombres=["calculadora de numeros Pares e Impares","calculadora factorial","validacion de contraseña","generador de tablas de multiplicar",
"suma de numeros primos","Secuencia Fibonacci","Conversor de temperatura","calculadora de potecias"]

        var verificar=0

        for (var k = 0; k < contadores.length; k++){
            if (contadores[k] === 0) {
                verificar++  
            }
        }
            if(verificar<contadores.length){
                
        var valorMaximo = contadores[0]; 

        for (var i = 0; i < contadores.length; i++) {
    
    if (contadores[i] >valorMaximo) {
           valorMaximo = contadores[i];
      }   
         }
  
      for(var j = 0;j< contadores.length;j++){
          if (contadores[j] ===valorMaximo) {
              console.log("\n El calculo que mas se ejecuto fue: "+nombres[j]+"---"+valorMaximo+" veces");   
          }
        }

         var valorMinimo = 1000

        for (var z = 0; z < contadores.length; z++) {
    
            if (contadores[z] <valorMinimo) {
                if(contadores[z]>=1){
                   valorMinimo = contadores[z];
                }
              }   
              }
          
              for(var x = 0;x< contadores.length;x++){

                  if (contadores[x] ===valorMinimo) {
                      console.log("\nel calculo que menos se ejecuto fue: "+nombres[x]+"---"+valorMinimo+" veces");   
                  }
                }
                
            }else{
                console.log("\n! LA CALCULADORA NO SE HA EJECUTADO ¡\n")
            }


             console.log("\nHASTA PRONTO")