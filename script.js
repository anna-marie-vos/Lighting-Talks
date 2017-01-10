document.addEventListener('DOMContentLoaded', testProgram);

function testProgram(){
  undeclaredVar()
  undeclaredObj()
  variableArgumentsUsed()
  octalLiteral()

  // "use strict"
  alertFunction();
  alert(a);

  function alertFunction() {
      a=123456;
  }
}

function undeclaredVar(){
  // "use strict"
  x = 1;
  console.log('x = 1 displays: ',x)
}

function undeclaredObj(){
  // "use strict"
  obj = {n1:10,n2:20};
  console.log('obj = {n1:10,n2:20} displays: ', obj)
}

function variableArgumentsUsed(){
  // "use strict"
  // implements, interface,let, package, private, protected, public, static & yield
  var arguments = 454;
  console.log('var arguments = 454 displays: ', arguments)
}

function octalLiteral(){
  // "use strict"
  var octal = "00a0"
  console.log('var octal = "00a0" displays: ', parseInt(octal,8))

}
