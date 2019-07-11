import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';


@Injectable
({
    providedIn:'root'
})
export class BookService
{

        constructor(private http:HttpClient){}
        getAllBooks()
        {
           return this.http.get("assets/booklist.json");
            // this.http.get("http://192.33.44/get"); write url if the data is passed through the url
        }


} 