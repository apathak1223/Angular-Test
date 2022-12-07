import { Component, Input } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'hello',
  template: `<h1>Hello Component</h1> <h2> Counter : {{ getCounter()}}`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  constructor(private myService: MyServiceService) {

  }

  public getCounter(): number {
    return this.myService.getCounter();
  }
}
