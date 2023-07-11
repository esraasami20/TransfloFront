import { UpdateDriverServiceService } from './../../Services/update-driver-service.service';
import { Component } from '@angular/core';
import { Driver } from 'src/app/Common/Interface';
import { DriverServiceService } from 'src/app/Services/driver-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-driver',
  templateUrl: './update-driver.component.html',
  styleUrls: ['./update-driver.component.css']
})
export class UpdateDriverComponent {
  CurrentDriver:any;
  id:number = 0;
  constructor(private driverListService: DriverServiceService, private route: ActivatedRoute,
    private updateDriver: UpdateDriverServiceService,
    private router: Router) { }
  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id = params['id'];
    });
    this.GetDriverById(this.id)
  }

  GetDriverById(id : number): void {
    this.driverListService.GetDriverById(id)
      .subscribe(
        data => {
          this.CurrentDriver = data;
        },
        error => {
          console.log(error);
        });
  }

  UpdateDriver(firstName:any, lastName:any, email:any, phone:any){
   if(firstName === "" || lastName === "" || email === "" || phone === ""){
    alert("All Inputs are required...")
   }else{
    var params:Driver = {
      driverId: this.id,
      firstName : firstName,
      lastName : lastName,
      email : email,
      phoneNumber : phone
    }
    
    this.updateDriver.UpdateDriver(params)
    .subscribe(
      data => {
        alert(`Driver ${params.firstName} ${params.lastName} data updated Succesfully`);
        this.router.navigate(['drivers']);
      },
      error => {
        console.log(error);
      });
   }
   
  }
}
