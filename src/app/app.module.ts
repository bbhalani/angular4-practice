import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { LikeAppComponent } from './like-app/like-app.component';
import { NumberCounterComponent } from './number-counter/number-counter.component';
import { PhoneFormatComponent } from './phone-format/phone-format.component';
import { InputFormateDirective } from './input-formate.directive';
import { FormAssignment1Component } from './form-assignment1/form-assignment1.component';
import { FormReactiveAssignmentComponent } from './form-reactive-assignment/form-reactive-assignment.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './employee.service';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { DisableControlDirective } from './disable-control.directive';
import { XfinityChallengeComponent } from './xfinity-challenge/xfinity-challenge.component';
import { XfinityServiceService } from './xfinity-challenge/xfinity-service.service';
import { SortByHeaderPipe } from './sort-by-header.pipe';

const app_routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'xfinity-challenge', component: XfinityChallengeComponent},
  {path: 'employee/:id', component: EmployeeDetailsComponent,
    children: [
      { path: '', redirectTo: 'employee', pathMatch: 'full' },
      { path: 'employee', component: EmployeeComponent },
    ]
}
];

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    LikeAppComponent,
    NumberCounterComponent,
    PhoneFormatComponent,
    InputFormateDirective,
    FormAssignment1Component,
    FormReactiveAssignmentComponent,
    FormArrayComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    DisableControlDirective,
    XfinityChallengeComponent,
    SortByHeaderPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(app_routes)
  ],
  providers: [EmployeeService,XfinityServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
