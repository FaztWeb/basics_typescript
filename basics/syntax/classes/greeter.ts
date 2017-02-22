class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName){
    this.fullName = return firstName + ' ' + middleInitial + ' ' + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person){
  return 'Hello, '+ person.firstName + ' ' + person.lastName;
}

var user = {firstName: 'Fabian', lastName: 'Jesus'};

document.body.innerHTML = greeter(user);
