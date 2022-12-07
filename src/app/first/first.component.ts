import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private myService: MyServiceService) { }

  @Input() value: string;
  @Output() outEvent : EventEmitter<string> = new EventEmitter<string>();
  ngOnInit() {
  }

  public first() : void{
    console.log("First button clicked"); 
    this.outEvent.emit("First Button Clicked...");
  }

  public increment() :void{
    this.myService.increment();
  }

}