import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControllerComponent } from './components/controller/controller.component';
import { VisualisationsComponent } from './components/visualisations/visualisations.component';
import { ComplexityAnalysisComponent } from './components/controller/complexity-analysis/complexity-analysis.component';

@NgModule({
  declarations: [
    AppComponent,
    ControllerComponent,
    VisualisationsComponent,
    ComplexityAnalysisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
