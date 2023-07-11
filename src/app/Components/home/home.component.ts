import { Component } from '@angular/core';
import { Driver } from 'src/app/Common/Interface';
import { DriverServiceService } from 'src/app/Services/driver-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   drivers:Driver[] = [];
   driversName:any[] = [];
   CurrentDriver = null;
  constructor(private driverListService: DriverServiceService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.GetDrivers();
   
  }

  GetDrivers(): void {
    
    this.driverListService.GetDrivers()
      .subscribe(
        data => {
          this.drivers = data;
        },
        error => {
          console.log(error);
        });
  }

  downloadCSV(): void {
    
    this.driverListService.DownloadCSV().subscribe((buffer) => {
     
      const data: Blob = new Blob([buffer], {
        type: "text/csv;charset=utf-8"
      });
      var Linkelement = document.createElement("a");
      Linkelement.href = window.webkitURL.createObjectURL(data);
      Linkelement.setAttribute("download", "Drivers.csv");

      document.body.appendChild(Linkelement);

      Linkelement.click();
      document.body.removeChild(Linkelement);
    });
  }
 
  GetDriverById(id : number): void {
    this.driverListService.GetDriverById(id)
      .subscribe(
        data => {
          this.CurrentDriver = data;
          this.router.navigate(['drivers/'+id]);
        },
        error => {
          console.log(error);
        });
  }

  DeleteDriver(id : number): void {
    this.driverListService.DeleteDriver(id)
      .subscribe(
        data => {
          this.CurrentDriver = data;
          console.log(data);
          alert('Driver Deleted Succesfully ^_^')
          location.reload();
        },
        error => {
          console.log(error);
        });
  }
}
