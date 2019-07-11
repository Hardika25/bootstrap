import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})

export class ProductService
{
    constructor(private http:HttpClient){}
    prodAll:any[]=[];
    getProduct()
    {
        //return this.http.get("assets/employee.json");
        return this.prodAll;
    }
    addProduct(data:any)
    {
        this.prodAll.push(data);
        return true;
    }
   
}