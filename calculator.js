/*jshint esversion: 6 */
/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
 //use let for the two private variables

 function calculatorModule(){

  let memory = 0;
  
  let total = 0;

  function load(num){
    validate(num);
    total = num;
    return total;
  }

  function getTotal (){
    return total;
  }

  function add (num){
    validate(num);
    total += num;
    return total;
  }

  function subtract (num){
    validate(num);
    total -= num;
    return total;
  }

  function multiply (num){
    validate(num);
    total *= num;
    return total;
  }

  function divide (num){
    validate(num);
    total /= num;
    return total;
  }

  function recallMemory(){
    return memory;
  }

  function saveMemory(){
    memory = total;
    return memory;
  }

  function clearMemory(){
    memory = 0;
    return memory;
  }

  function validate(num){
    if (typeof num !== 'number'){
      throw new Error ("Please enter a valid number.");
    }
  }

  return {
    load: load,
    getTotal: getTotal,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    recallMemory: recallMemory,
    saveMemory: saveMemory,
    clearMemory: clearMemory
  };
}




  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */


  /**
   * Return the value of `total`
   * @return { Number }
   */


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */

