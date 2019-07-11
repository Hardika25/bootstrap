import { Component } from '@angular/core';

@Component({
    selector: 'add-emp',
    templateUrl: 'app.addemp.html'
})

export class AddEmployeeComponent {

    empId:number;
    empName:string;
    empSal:number;
    empDep:string;
    uempId:number;
    uempName:string;
    uempSal:number;
    uempDep:string;
    index:number=null;

    empAll:any[]=
    [
    {empId:1001,empName:"Rahul",empSal:9000,empDep:"Java"},
    {empId:1002,empName:"Sachin",empSal:19000,empDep:"OraApps"},
    {empId:1003,empName:"Vikash",empSal:29000,empDep:"BI"},
    ];

    addEmployee():any{
        this.empAll.push({empId:this.empId,empName:this.empName,empSal:this.empSal,empDep:this.empDep});
        console.log("Employee Added....."+this.empAll);
        this.empId=null;
        this.empName=null;
        this.empSal=null;
        this.empDep=null;
    }

    deleteEmployee(i:number):any{
        this.empAll.splice(i,1);
        alert("Are you sure you want to Delete?");
    }

  

    updateEmployee():any{
     if(this.index!=null){
        this.empAll.splice(this.index,1,{empId:this.uempId,empName:this.uempName,empSal:this.uempSal,empDep:this.uempDep});
        this.uempSal=null;
        this.uempDep=null;
        this.uempName=null;
        this.uempId=null;
        this.index=null;
     }
     alert("Are you sure you want to Update?");
    }

    putEmployee(i:number):any{
        this.uempId=this.empAll[i].empId;
        this.uempDep=this.empAll[i].empDep;
        this.uempName=this.empAll[i].empName;
        this.uempSal=this.empAll[i].empSal;
        this.index=i;
    }
 }