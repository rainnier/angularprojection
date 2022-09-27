import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-template-example',
  templateUrl: './template-example.component.html',
  styleUrls: ['./template-example.component.scss']
})
export class TemplateExampleComponent implements OnInit {
  @Input()
  fromParentTemplate:TemplateRef<any>|any;
  myContext = {$implicit: "Welcome", greet: 'Hello', name: 'Monica', greetHawaiian: 'Aloha', nameHawaiian: "Alaina"}
  constructor() { }

  ngOnInit(): void {
  }

}
