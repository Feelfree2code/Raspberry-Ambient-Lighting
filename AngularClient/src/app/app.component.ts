import { Component, OnInit } from '@angular/core';
import { Color } from './models/Color.model';
import { APIService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public colorOptions: Color[];
  public currentColor: string;

  constructor(private service: APIService) {
    this.colorOptions = [
      { value: 1, text: 'Red, Purple, Blue' },
      { value: 2, text: 'Green, Blue, Red' },
      { value: 3, text: 'Pink, Purple, Blue' }
    ];

    this.currentColor = '-';
  }

  ngOnInit() {
    this.service.get().subscribe(data => {
      if (data) {
        const color = this.colorOptions.find(a => a.value === data.mode);

        if (color) {
          this.currentColor = color.text;
        }
      }
    });
  }

  public setColor(color: Color): void {
    this.currentColor = color.text;

    this.service.set(color).subscribe(() => {
      console.log('Color has been set!');

      this.service.get().subscribe(data => {
        console.log(data);
      });
    });
  }
}
