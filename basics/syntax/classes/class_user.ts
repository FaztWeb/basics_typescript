interface UserInterface {
  name: string;
  email: string;
  age: number;
  register();
  payInvoice();

}

class User implements UserInterface {
  private name: string;
  private email: string;
  public age: number;

  constructor(name:string, email:string, age:number){
    this.name = name;
    this.email = email;
    this.age = age;

    console.log('user created!');
  }

  public register(){
    console.log(this.name + 'is now registered.');
  }

  payInvoice(){
    console.log(this.name + 'paid invoice');
  }
}

class Member extends User{
  id: number;

  constructor(id: number,name:string, email:string, age:number) {
    super(name,email,age);
    this.id = id;
  }

  payInvoice(){
    super.payInvoice();
  }
}

let fabian = new User('Fabian','fabian@mail.com',21);
console.log(fabian.age);
fabian.register();

let mike:User = new Member(1,'Mike', 'mike@email.com',22);

mike.payInvoice();
