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

### Table of contents

[TOC]



