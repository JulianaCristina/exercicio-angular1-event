import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Products';

  products = [];
  ngOnInit(){
    this.products = this.getProducts();
  }
  getProducts(){
    return [
      {'id': '1', 'title': 'Screw Driver', 'price' : 400, 'stock': 11},
      {'id': '2', 'title': 'Nut Volt', 'price' : 200, 'stock': 11},
      {'id': '3', 'title': 'Resistor', 'price' : 4000, 'stock': 6},
      {'id': '4', 'title': 'Tractor', 'price' : 40022, 'stock': 2},
      {'id': '5', 'title': 'Roller', 'price' : 222, 'stock': 444},
    ];
  }
  productedUpdate: any;
  changeStockValue(p){
    this.productedUpdate = this.products.find(this.findProducts, [p.id] );
    this.productedUpdate.stock = this.productedUpdate.stock + p.updatedstockvalue
    console.log(p.updatedstockvalue);
  }
  findProducts(p){
    return p.id === this[0];
  }
}
