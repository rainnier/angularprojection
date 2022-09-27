import { TemplateExampleComponent } from './../template-example/template-example.component';
import { Component, ContentChild, OnInit, AfterViewInit, ContentChildren, QueryList, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { ViewChildComponent } from '../view-child/view-child.component';

@Component({
  selector: 'app-single-slot',
  templateUrl: './single-slot.component.html',
  styleUrls: ['./single-slot.component.scss']
})
export class SingleSlotComponent implements OnInit, AfterViewInit {

  @ContentChild(TemplateExampleComponent) compChild: TemplateExampleComponent|any
  @ContentChildren(TemplateExampleComponent) compChildren: QueryList<TemplateExampleComponent>|any
  constructor() { }
  
  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    console.log(this.compChild)
    console.log(this.compChildren.toArray())
  }

}
