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

### Table of contents

[TOC]



