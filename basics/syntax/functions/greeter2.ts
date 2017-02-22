function greeter(person: string){
  return 'Hello, ' + person;
}

// var person = 2; //error type annotation
var person = 'Fabian';

document.body.innerHTML = greeter(person);
