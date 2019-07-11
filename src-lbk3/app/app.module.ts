import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {Routes,RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AddProductComponent } from './app.addProduct';
import { ShowProductComponent } from './app.showproduct';

const routes:Routes=[
{path:'add',component:AddProductComponent},
{path:'show',component:ShowProductComponent},

];

@NgModule({
    imports: [
        BrowserModule,RouterModule.forRoot(routes),HttpClientModule,FormsModule
        
    ],
    declarations: [
        AppComponent,ShowProductComponent,AddProductComponent
    ],
    providers: [ ],
    bootstrap: [AppComponent]

})

export class AppModule { }