import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { LandingPageComponent } from "./landing-page/landing-page.component";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule,
  MatGridListModule,
  MatInputModule,
  MatFormFieldModule,
  MatTableModule,
  MatSnackBarModule,
  MatCardModule,
  MatProgressSpinnerModule
} from "@angular/material";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PieChartComponent } from "./Component/pie-chart/pie-chart.component";
import { BarChartComponent } from "./Component/bar-chart/bar-chart.component";
import { LineChartComponent } from "./Component/line-chart/line-chart.component";
import { AppInterceptor } from "./app-interceptor";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DashboardComponent,
    PieChartComponent,
    BarChartComponent,
    LineChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatSnackBarModule,
    ChartsModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
