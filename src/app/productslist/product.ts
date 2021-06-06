export class Product {
  id:number;
  name:string;
  price:number;
  imgPath:string;
  constructor(id:number,name:string,price:number,imgPath:string){
    this.id = id;
    this.name = name;
    this.price = price;
    this.imgPath=imgPath;
  }
}