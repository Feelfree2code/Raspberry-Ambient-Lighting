import { Component } from '@angular/core';
import { Color } from './models/Color.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public colorOptions: Color[];
  public currentColor: string;

  constructor() {
    this.colorOptions = [
      { value: 1, text: 'Red, Purple, Blue' },
      { value: 2, text: 'Green, Blue, Red' },
      { value: 3, text: 'Pink, Purple, Blue' }
    ];
  
    this.currentColor = '-';
  }

  public setColor(color: Color): void {
    this.currentColor = color.text;
  }
}
