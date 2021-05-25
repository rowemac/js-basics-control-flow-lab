function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <= 400) {
    return "This one is on me!"
  }
  else if (distance > 2000) {
    if (distance > 2500) {
      return "No can do."
    }
    else {
      return "I will gladly take your thirty bucks."
    };
  };
};

function ternaryCheckCity(city){
  // Write your code here!
  let answer = city == 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return answer;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let answer;
  switch(tip) {
    case 'generous':
      answer = "Thank you so much."
    break;

    case 'not as generous':
      answer = "Thank you."
    break;

    default:
      answer = "Bye."
  };
  return answer;
};