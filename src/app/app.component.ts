import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  name1 = '';
  public test = 'Test Message';
  
  public upperCase(): string {
    console.log('Clicked');
    this.name1 = this.name1.toUpperCase();
    return 'test';
  }

  public parentMethodCall() : void{
    alert("Parent method called from First Component!!");
    this.upperCase();
  }
}
