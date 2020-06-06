import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {ButtonModule} from 'primeng/button';
import {HttpClientModule} from '@angular/common/http'
import {CalendarModule} from 'primeng/calendar';
import {FormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AfterregisterComponent } from './afterregister/afterregister.component';
const routes:Routes=[
  {path: '' , component : RegisterComponent},
  {path: "register", component: RegisterComponent },
  {path: "welcome/:name", component: AfterregisterComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AfterregisterComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    RouterModule.forRoot(routes),
    CalendarModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
