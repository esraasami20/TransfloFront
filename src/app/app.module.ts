import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { CreateDriverComponent } from './Components/create-driver/create-driver.component';
import { UpdateDriverComponent } from './Components/update-driver/update-driver.component';
import { ErrorpageComponent } from './Components/errorpage/errorpage.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CreateDriverComponent,
    UpdateDriverComponent,
    ErrorpageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
