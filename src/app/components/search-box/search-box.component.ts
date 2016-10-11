import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Input() text="Type";
  constructor() { }

  ngOnInit() {
  }
  clearInput(input){
    input.value='';
  }
}
