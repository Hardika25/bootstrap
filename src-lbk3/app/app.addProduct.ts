import { Component } from "@angular/core";

import {Router} from '@angular/router'
import { ProductService } from "./app.productservice";



@Component
({
    selector:'add-comp',
    templateUrl:'addproduct.html'
})
export class AddProductComponent
{
    constructor(private service:ProductService,private router:Router){}
    
    myallData:any;
    prodName:string;
    prodCost:number;
    prodId:number;
   

    addData()
    {
        this.myallData={prodId:this.prodId,prodName:this.prodName,prodCost:this.prodCost}
        if(this.service.addProduct(this.myallData))
        {
            this.router.navigate(['show']);
        }
    }
}