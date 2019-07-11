
import {Component,OnInit} from '@angular/core';
import { BookService } from './app.bookservice';
@Component({
   selector:'add-book',
   templateUrl:'addbook.html'

})
export class AddBookComponent implements OnInit
{
 
   constructor(private service:BookService){}
   books:any[]=[];
   ngOnInit()
   {
      this.service.getAllBooks().subscribe((data:any)=>this.books=data);
   }
   /*deleteemployee(i:number):any
   {
      this.empAll.splice(i,1);
      alert("Are you sure you want to delete");
   }*/
   
}