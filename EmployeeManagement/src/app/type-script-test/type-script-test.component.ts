import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-type-script-test',
  templateUrl: './type-script-test.component.html',
  styleUrls: ['./type-script-test.component.css']
})
export class TypeScriptTestComponent implements OnInit {


  model;

  x: string;

  constructor() {


  }
  ngOnInit() { }

}
