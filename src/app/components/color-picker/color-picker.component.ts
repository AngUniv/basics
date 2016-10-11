import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  @Input() color='green';
  @Output() colorOutput= new EventEmitter();
  colorChoose(color){
    this.colorOutput.emit(color);
  }
  constructor() { }

  ngOnInit() {
  }

}
