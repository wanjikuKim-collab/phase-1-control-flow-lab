function scuberGreetingForFeet(feet){
  // Write your code here!
  // we can use conditionals in this case and give our function a parameter __feet
  //thereafter, return whatever the result is!
  let ride;
  if ( feet <=400){
    ride=`This one is on me!`;
  }else if(feet> 2000 && feet < 2500){
    ride = 'I will gladly take your thirty bucks.';
  }else if(feet > 2500){
    ride = 'No can do.'
  }
  return ride;
}


scuberGreetingForFeet(199);

function ternaryCheckCity(cityName){
  // Write your code here!
  //we'll use ternary operator
  //syntax = condition ? true : false 
  let city;
  return city = cityName === 'NYC' ? ("Ok, sounds good.") : ("No go.") ; 
}

console.log(ternaryCheckCity('NYC'))

function ternaryCheckCity(cityName){
  // Write your code here!
  //we'll use ternary operator
  //syntax = condition ? true : false 
  let city;
  return city = cityName === 'NYC' ? ("Ok, sounds good.") : ("No go.") ; 
}

ternaryCheckCity('NYC')

// using switch case
function switchOnCharmFromTip(tip){

  switch (tip){
    case 'generous' :
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default :
    return 'Bye.'
  }
}

switchOnCharmFromTip('generous')
