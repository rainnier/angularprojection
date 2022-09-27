import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleSlotComponent } from './single-slot/single-slot.component';
import { MultiSlotComponent } from './multi-slot/multi-slot.component';
import { TemplateExampleComponent } from './template-example/template-example.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ChildExampleComponent } from './child-example/child-example.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleSlotComponent,
    MultiSlotComponent,
    TemplateExampleComponent,
    ViewChildComponent,
    ChildExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
