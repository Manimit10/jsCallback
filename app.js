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
//   function a(){
//     // create waiting time for function A
//     setTimeout( function(){
//       console.log("This is function A");
//     }, 2000 );
//   }
  
//   function b(){
//     console.log("This is function B");
//   }
  
//   a();
//   b();//function b() will execute first then with a delay function a() will start

  //**************************** */
 //This Example will run function one first using callback
//  function a(callback){
//     setTimeout( function(){
//       console.log("This is function A");
//       callback();
//     }, 2000 );
//   }
  
//   function b(){
//     console.log("This is function B");
//   }

//   a(b);
  //****************************** */
    // This example show how to add argument and callback to a function
  function StartEngine(engine, callback) {
    setTimeout( function(){
      console.log(`Starting the ${engine} now.`);
      callback();
    }, 2000);}
    
  function setGear(){
    setTimeout( function(){
    console.log('go to first gear');
  },1000 );}
  StartEngine('BMW', setGear);