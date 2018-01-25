import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weather : any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWeatherData();
  }

  getWeatherData(){
    let obs = this._httpService.getWeatherData('4885983');
    obs.subscribe(data => {
      this.weather = data;
    })
  }
}