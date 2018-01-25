import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  weather : any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWeatherData();
  }

  getWeatherData(){
    let obs = this._httpService.getWeatherData('4190598');
    obs.subscribe(data => {
      this.weather = data;
    })
  }
}