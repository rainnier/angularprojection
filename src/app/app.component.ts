import { SingleSlotComponent } from './single-slot/single-slot.component';
import { Component, AfterViewInit, QueryList, ContentChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  
  ngAfterViewInit(): void {
    
  }
  title = 'angularprojection';
}
