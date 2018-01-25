
import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  weather : any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWeatherData();
  }

  getWeatherData(){
    let obs = this._httpService.getWeatherData('4887398');
    obs.subscribe(data => {
      this.weather = data;
    })
  }
}