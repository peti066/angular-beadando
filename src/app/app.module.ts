import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { EntermoodComponent } from './common/entermood/entermood.component';
import { ShowStatComponent } from './common/show-stat/show-stat.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EntermoodComponent,
    ShowStatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CanvasJSAngularChartsModule,
    MatDatepickerModule, // for Angular Material
    MatInputModule // for Angular Material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
