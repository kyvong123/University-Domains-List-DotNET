import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import {GalleriaModule} from 'primeng/galleria';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ButtonModule } from 'primeng/button';
// import { Button } from 'primeng/button';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonModule,
    GalleriaModule,
    ButtonsModule.forRoot(),
    HttpClientModule,
    HttpModule
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
