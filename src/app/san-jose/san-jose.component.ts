import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWeatherData();
  }

  weather : any;
  
  getWeatherData(){
    let obs = this._httpService.getWeatherData('5392171');
    obs.subscribe(data => {
      this.weather = data;
    })
  }
}
