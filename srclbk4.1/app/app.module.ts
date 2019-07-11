import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AddBookComponent} from './app.addbook';
//import { ShowEmployeeComponent} from './app.showemployee';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    imports: [
        BrowserModule,HttpClientModule
        
    ],
    declarations: [
        AppComponent,AddBookComponent
    ],
    providers: [ ],
    bootstrap: [AppComponent]

})

export class AppModule { }