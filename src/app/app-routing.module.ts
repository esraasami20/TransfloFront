import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ErrorpageComponent } from './Components/errorpage/errorpage.component';
import { CreateDriverComponent } from './Components/create-driver/create-driver.component';
import { UpdateDriverComponent } from './Components/update-driver/update-driver.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: '', redirectTo: 'drivers', pathMatch: 'full' },
  { path: 'drivers', component: HomeComponent },
  { path: 'drivers/:id', component: UpdateDriverComponent },
  { path: 'new', component: CreateDriverComponent },
  { path: "404", component: ErrorpageComponent },
  { path: "**", redirectTo: "/404" }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
