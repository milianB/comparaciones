var comparacion = function(array1, array2) {
  if (array1.length !== array2.length) {
    document.write("Los arreglos no tienen la misma longitud")
      return false;
  }else{
     for  (var i = 0; i <array1.length; i++) {
       console.log(array1[i], array2[i]);
       if(array1[i] !== array2[i]){
         document.write("los arreglos son diferentes")

        return false;
       }
     }
     return true;
  }
}

var arreglo1 = [1,2,3,4,5,6,7,8,9,0]
var arreglo2 = [1,2,3,,5,6,7,8,9,0]

comparacion(arreglo1,arreglo2);
