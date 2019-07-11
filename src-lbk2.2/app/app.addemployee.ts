import {Component} from '@angular/core';

@Component({
    selector:'add-emp',
    templateUrl:'app.add.html'
})
export class AddEmployeeComponent{
    empId:number;
    empName:string;
    empSal:number;
    empDep:string;
    empjoiningdate:Date;
    
    empAll:any[]=[
        {empId:1001,empName:'Rahul',empSal:9000,empDep:'JAVA',empjoiningdate:'6/12/2014'},
        {empId:1002,empName:'Vikash',empSal:11000,empDep:'ORAAPS',empjoiningdate:'6/12/2017'},
        {empId:1003,empName:'Uma',empSal:12000,empDep:'JAVA',empjoiningdate:'6/12/2010'},
        {empId:1004,empName:'Sachin',empSal:11500,empDep:'ORAAPS',empjoiningdate:'11/12/2017'},
        {empId:1005,empName:'Amol',empSal:7000,empDep:'.NET',empjoiningdate:'1/1/2018'},
        {empId:1006,empName:'Vishal',empSal:17000,empDep:'BI',empjoiningdate:'9/12/2012'},
        {empId:1007,empName:'Rajita',empSal:21000,empDep:'BI',empjoiningdate:'6/7/2014'},
        {empId:1008,empName:'Neelima',empSal:81000,empDep:'TESTING',empjoiningdate:'6/17/2015'},
        {empId:1009,empName:'Daya',empSal:1000,empDep:'TESTING',empjoiningdate:'6/17/2016'} ];


     
        SortById():any{
            this.empAll=this.empAll.sort((a,b)=>(a.empId-b.empId));
        }
        SortByName():any{
            this.empAll=this.empAll.sort((a,b)=>(a.empName.localeCompare(b.empName)));
        }
        SortBySalary():any{
            this.empAll=this.empAll.sort((a,b)=>(a.empSal-b.empSal));
        }
        SortByDepartment():any{
            this.empAll=this.empAll.sort((a,b)=>(a.empDep.localeCompare(b.empDep)));
        }
        SortByJoiningDate():any{
            this.empAll=this.empAll.sort((a,b)=>
            {
                return <any>new Date(a.empjoiningdate)- <any>new Date(b.empjoiningdate);
        });
    }
}