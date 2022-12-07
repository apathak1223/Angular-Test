import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  @Input() value: string;
  @Output() outEvent : EventEmitter<string> = new EventEmitter<string>();
  ngOnInit() {
  }

  public first() : void{
    console.log("First button clicked"); 
    this.outEvent.emit("First Button Clicked...");
  }

}