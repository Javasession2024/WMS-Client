import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductOpening } from 'src/app/model/productOpening';
import { ProductOpeningService } from 'src/app/service/product-opening.service';

@Component({
  selector: 'app-product-opening',
  templateUrl: './product-opening.component.html',
  styleUrls: ['./product-opening.component.css']
})
export class ProductOpeningComponent implements OnInit {

  submitted=false;


  productopening : ProductOpening = new ProductOpening();
selectedTeam: any;

  constructor(private router : Router,
    private productopeningservice : ProductOpeningService) { }
  

  ngOnInit(): void {
  }

  saveOpening() {
    
    this.productopeningservice.saveProductOpening(this.productopening).subscribe(data => console.log(data), error => console.log(error));
    
    this.productopening = new ProductOpening();
  }
  onSubmit() {

    this.saveOpening();
    
  }

}
