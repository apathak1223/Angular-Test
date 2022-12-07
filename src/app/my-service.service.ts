import { Injectable } from '@angular/core';

@Injectable()
export class MyServiceService {

  constructor() { }

  private counter = 0;

  public increment(): void {
    this.counter++;
  }

  public decrement(): void {
    this.counter--;
  }

  public getCounter(): number {
    return this.counter;
  }
}