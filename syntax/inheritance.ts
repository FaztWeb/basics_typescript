class Report{
  data:string[];
  constructor(data:string[]){
    this.data=data;
  }
  run(){
    this.data.forEach((line)=>console.log(line));
  }
}

class TabledReport extends Report{
  headers:string[];
  constructor(headers:string[],values:string[]){
    super(values);
    this.headers = headers;
  }

  run(){
    console.log(this.headers);
    super.run();
  }
}
var r = new Report(['1','2']);

var tr = new TabledReport(['Name','Age'],['ashley','fabian']);

console.log(tr.run());
