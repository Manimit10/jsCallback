// Create two function and invoke them one after another
// function a(){
//     console.log("This is function A");
//   }
  
//   function b(){
//     console.log("This is function B");
//   }
  
//   a();
//   b();
//********************************* */
  //create one normal funcion and one with setTimeout
  function a(){
    // create waiting time for function A
    setTimeout( function(){
      console.log("This is function A");
    }, 2000 );
  }
  
  function b(){
    console.log("This is function B");
  }
  
  a();
  b();//function b() will execute first then with a delay function a() will start

  //**************************** */