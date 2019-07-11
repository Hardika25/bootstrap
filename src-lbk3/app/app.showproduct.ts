import {Component,OnInit} from '@angular/core';
import { ProductService } from './app.productservice';


@Component(
{
    selector:'show-comp',
    templateUrl:'showproduct.html'
})

export class ShowProductComponent implements OnInit{
constructor(private service:ProductService){}

prodAll:any[]=[];

ngOnInit()
{
    //this.myservice.getemployee().subscribe((data:any)=>this.empAll=data)
    this.prodAll=this.service.getProduct();
}
}
