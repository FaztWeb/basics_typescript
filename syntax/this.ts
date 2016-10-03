var fabian = {
  name: 'fabian',
  guitars:['jackson','gibson','ibanez'],
  printGuitars:function(){
    this.guitars.forEach((g)=>{
      console.log(`${this.name} plays a `+ g);
    });
  }
};

fabian.printGuitars();
