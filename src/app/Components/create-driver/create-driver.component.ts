import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CreateDriverServiceService } from 'src/app/Services/create-driver-service.service';


@Component({
  selector: 'app-create-driver',
  templateUrl: './create-driver.component.html',
  styleUrls: ['./create-driver.component.css']
})
export class CreateDriverComponent {

  constructor( 
    private createDriver: CreateDriverServiceService,
    private router: Router) { }
  ngOnInit() {
  }

  CreateDriver(firstName:any, lastName:any, email:any, phone:any){
    if(firstName === "" || lastName === "" || email === "" || phone === ""){
      alert("All Inputs are required...")
     }else{
    var params = {
      driverId:0,
      firstName : firstName,
      lastName : lastName,
      email : email,
      phoneNumber : phone
    }
    console.log(params)
    this.createDriver.CreateDriver(params)
    .subscribe(
      data => {
        alert(data.message)
        if(data.data != null)
          this.router.navigate(['drivers']);
      },
      error => {
        console.log(error);
      });
  }
}
}
