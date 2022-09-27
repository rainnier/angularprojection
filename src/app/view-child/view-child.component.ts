import { SingleSlotComponent } from './../single-slot/single-slot.component';
import { ChildExampleComponent } from './../child-example/child-example.component';
import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit, ViewChildren, QueryList, ContentChild, ContentChildren } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements OnInit, AfterViewInit {
  @ViewChild('divElement') divElement:TemplateRef<any>|any

  @ViewChildren(ChildExampleComponent) childElements:QueryList<any>|any

  constructor() { }
  
  ngOnInit(): void {
    // console.log(this.divElement)
  }

  ngAfterViewInit(): void {
    // console.log(this.divElement)
    //this.divElement.nativeElement.innerText = 'I change'
    // console.log(this.childElements.toArray())
    
  }

}
