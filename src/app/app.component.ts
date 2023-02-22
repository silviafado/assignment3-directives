import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  paragraphStatus = false;
  arrayLogs = [];


  ngOnInit() {
  }

  showParagraph() {
    this.paragraphStatus = !this.paragraphStatus;
    this.arrayLogs.push(this.arrayLogs.length + 1);
  }
}
