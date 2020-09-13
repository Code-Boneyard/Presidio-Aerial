import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'presidio-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private http: HttpClient) {}
}
