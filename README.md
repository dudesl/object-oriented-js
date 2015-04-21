MINUTA 04/03 - Udacity OOJS
---------------------------

Repasamos el código del modulo 1
https://github.com/batmanimal/object-oriented-js/blob/master/1-Scopes.js

Nos detuvimos en varios aspectos relacionados con scopes

**Ejemplo 1**
	
    var newSaga = function() { // <-- scope1 starts here
        // esta variable la podriamos definir sin var
        // pero estariamos definiendo foil en el scope global.
        // foil = aFoil();
      	
    	var foil = aFoil(); // de esta forma la definimos dentro de scope1
    	var saga = function() { // <-- scope2 starts here 
    		var deed = aDeed();
    		console.log(hero+deed+foil);
    	}; // <-- scope2 ends here 
    	saga();
    	// -> GalTapsCow
    	saga();
    	// -> GalTapsCow
    }; // <-- scope1 ends here

 **Ejemplo 2**
	    
    function(){} // si define un nuevo lexical scope
    if(){} // no define un nuevo scope
    
    //contexto 0
    function f(){
      // contexto 1
      if(){
            var n = 0;
        //contexto 1
      }
    }   


**Ejemplo final**
 a partir de 
https://medium.com/@sergiodxa/definiendo-conceptos-closure-y-scope-en-javascript-9081f1e113e6
mezcla concepto de scope y closures

    funcion changeSize(a) {
      return function() {
        document.body.style.fontSize = a + 'px';
      }
    }
    
    var sizes = [12,14,16];
    var size12 = changeSize(sizes[0]);
    var size14 = changeSize(14);
    var size16 = changeSize(16);
    size12();


----------

MINUTA 11/03 - Udacity OOJS
---------------------------
Código de ejemplo para el módulo de Closures. Resta documentar cada ejemplo:

    function counter() {
        var count = 0;
     
        function counter() {
            count ++;
            console.log(count);
        }
     
    }
     
    function f(arg) {
     
        var n = function(){
            return arg;
        };
     
        arg++;
     
        return n;
    }
     
    function f() {
        var a = [];
        var i;
     
        for(i = 0; i < 3; i++) {
            a[i] = function(){
                return i;
            }
        }
        return a;
    }
     
    function f() {
        var a = [];
        var i;
     
        for(i = 0; i < 3; i++) {
     
            a[i] = (function(x){
                return function(){
                    return x;
                }
            })(i);
        }
        return a;
    }
     
    function Modal() {
     
        // creo el subcoment
        function Underlay() {
     
            // inicializo
            // creo un div
            // lo pinto de negro
            // llamo a ajax
            // hago tood por unica vez
     
     
            // devuelvo una nueva funcionalidad
            return function() {
                // show o hide
            }
        }
     
        var toogleUnderlay = Underlay();
     
     
        this.show = function (){
            toogleUnderlay();
        }
     
        this.hide = function (){
            toogleUnderlay();
        }
     
    }
     
    /**
     * Documentar estos ejemplos
     *
     *
     */
    function Saludar() {
        var text = 'Hola ';
     
        Saludar = function SigoSaludando(nombre) {
            return text + nombre;
        }
     
    }

----------
MINUTA 18/03 - Udacity OOJS
---------------------------
http://www.codeshare.io/T4zWL


> "The bad news is in ES3, this loses its way and refers to the head
> object (window object in browsers), instead of the object within which  the function is defined.  In the code below, this inside of func2 and  func3 loses its way and refers not to myObject but instead to the head  object."

    var myObject = {
    	func1: function() {
    		console.log(this); // logs myObject
    		var func2 = function() {
    			console.log(this) // logs window, and will do so from this point on
    			var func3 = function() {
    				console.log(this); // logs window, as it's the head object
    			}();
    		}();
    	}
    }
    myObject.func1();

    new Car() ; // {} <<<< this.
    
    function Car() { // se invoca normalmente usa el return, cuando se invoca con new devuelve el this
    	var model = '';
      	
      	this.model = 'Audi'; // window.model = "Audi";
    
    	return 'Peugeot'; // devuelve Peugeot
      	return this;
    }
    
    
    
    function Car (oil) {
    	var oil = oil,
            minOilLevel = 100; // definir en scope de Car
    
        function checkOil() {
          return oil;
        }
      
      
      // si ejecuto con new crea en objeto, devuelve el objeto this
      this.turnOn = function() { // this. para definir un metodo
      
        if (checkOil() > minOilLevel) {
        	return 'Turned On';
        } else {
        	return 'Please check oil level, it is lower than 100';
        }
      
      }
      
      this.fillOil = function (o){
      	oil = o;
      }
    
    }
    
    // fn.call(this|<scope>, param1, param2, param3) // this es un parametro en el metodo call de todas las funciones, y además es un objeto
    // fn.apply(this, []) >>> []
    
    function Car (oil) {
    	var oil = oil,
            minOilLevel = 100,
            this = {}; // definir en scope de Car
    
        function checkOil() {
          return oil;
        }
      
      // si ejecuto con new crea en objeto, devuelve el objeto this
      this.turnOn = function() { // this. para definir un metodo
      
        if (checkOil() > minOilLevel) {
        	return 'Turned On';
        } else {
        	return 'Please check oil level, it is lower than 100';
        
      }
      
      this.fillOil = function (o){
      	oil = o;
      }
      
      return obj;
    }


----------

MINUTA 08/04 - Udacity OOJS
---------------------------

## Prototype Chains 

>   [código de referencia - udacity](http://www.codeshare.io/Fv8Dr)

Este concepto se basa en enlazar distintos objetos, mediante el uso de la propiedad **_prototype_** existente en toda función.

Para entender mejor este concepto, a continuación detallamos un ejemplo práctico de su uso

    // Primero declaramos las funciones constructoras
    function Perro() {
        this.raza = 'undefined';
        this.patas = 4;
    }
    function Caniche() {
        this.raza = 'Caniche';
        this.tamanio = 'mediano';
    }
    function CanicheToy() {
        this.raza = 'Caniche Toy';
        this.tamanio = 'chico';
    }
    function ObejeroAleman() {
        this.tamanio = 'grande';
    }

Una vez que tenemos las funciones constructoras definidas, podemos indicarles de que Objeto van a estar heredando, utilizando la propiedad `prototype`_(tengamos en cuenta que se guarda una instancia del objeto)_.

    // Inherits by prototype
    ObejeroAleman.prototype = new Perro();
    Caniche.prototype = new Perro();
    CanicheToy.prototype = new Caniche();

Al ejecutar estas sentencias, lo que estamos haciendo es referenciar la instancia generada (new) al prototype de nuestro objeto, generando así una herencia entre ellos.
De esta manera, nuestros objetos van a poder acceder a los atributos y métodos definidos en el objeto referido.

> en el código de algunos navegadores podemos ver esta relación mediante la propiedad `__proto__` de un objeto.

Acá un ejemplo de dicha herencia.

    // Instancias
    var indio = new ObejeroAleman(),
        toby = new Caniche(),
        oso = new CanicheToy();
    
    // Propiedades
    console.log(toby.raza); // Caniche
    console.log(oso.raza); // Caniche Toy
    console.log(indio.raza); // undefined

En el código precedente, la instancia `indio` busca la propiedad _raza_ dentro de sí misma, cuando no la encuentra, busca en el objeto referido (del cual hereda). De la misma manera el objeto referido acciona de la misma forma generando así una cadena de herencia.


----------
MINUTA 16/04 - Udacity OOJS
---------------------------
###Decorator Pattern 

>"(...)You start with your plain object, which has some basic functionality. Then you pick and choose from an available pool of decorators which ones you want to use to enhance your plain object(...)"

Código de práctica - http://www.codeshare.io/E2BX6

Esté código está basado en la definición y ejemplos del libro _JS Patterns_. 
En el mismo presenta este patrón como una superposición de capas que mejoran una funcionalidad básica, según los requerimientos que se le agregan.

Comenzamos con un Objeto básico:

    // Constructor
    function Sale(price) {
        // Attribute
        this.price = price || 100; 
    }

    // Método 
    Sale.prototype.getPrice = function () {
        return this.price;
    }

Su funcionalidad básica es devolver el precio:

    // creamos una instancia
    var product = new Sale(200); 

    // Solicitamos el precio
    product.getPrice(); // 200

-*Decorator Pattern*-
Generamos los decorators que van a "extender" la funcionalidad base:

    // Creamos un objeto
    Sale.decorators = {};

    // le agregamos propiedades
    Sale.decorators.esAR = { // precio en Argentina
        getPrice = function() {
            return '$' + this.base.getPrice(); // base o el nombre que definamos en la función "decorator"
        }
    };

    Sale.decorators.esVE = { // precio en Venezuela
        getPrice = function() {
            return 'PB Justo BS. ' + this.base.getPrice(); // base o el nombre que definamos en la función "decorator"
        }
    };

Ahora definimos el metodo *__decorate__*, el cual recibira como parametro el nombre del decorador que queremos utilizar:

    Sale.prototype.decorate = function (decoratorName) { 
    
        var F = function () {},
            decorator = this.constructor.decorators[decoratorName],
            i, newobj;
        
        // F es un nuevo objeto y lo igualamos a {Sale}
        F.prototype = this; // this --> apunta a la instancia que está ejecutando este método (quien está a la izaquierda del ".")

        newobj = new F(); // Instanciamos el nuevo objeto
        newobj.base = F.prototype;  // en la instancia creada guardamos la referencia al objeto base
        
        for (i in decorator) { // Recorremos el decorator en busca de sus elementos (propiedades)
            if (decorator.hasOwnProperty(i)) {
                newobj[i] = decorator[i]; // Guardamos en la instancia las propiedades definidas en el decorator
            }
        }
      
        return newobj; 
    };

Con este método lo que hacemos es generar una capa con la funcionalidad agregada, entonces ahora podemos obtener un objeto enriquecido a partir de la primer intancia (_product_):

    var product_esAR = product.decorate('esAR'); 
    // este obj tiene la funcionalidad básica definida en Sale
    // + la funcionalidad específica para Argentina (agregada en el decorator)

    var product_esVE = product.decorate('esVE');

Para aclarar, esto devolvería el metodo _.getPrice()_ según quien lo invoque:
    
    product.getPrice(); // 200
    product_esAR.getPrice(); // "$200"
    product_esVE.getPrice(); // "PV Justo BS. 200"

En resumen, 
este patrón tal como su nombre lo indica "decora" una funcionalidad básica agergandole capas de especificación según el contexto en el que se invocan.


### Table of contents

[TOC]



