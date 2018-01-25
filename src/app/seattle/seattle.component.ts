import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {

  weather:any;
  
  constructor(private _HttpService: HttpService) { }

    ngOnInit() {
      this.getWeather();
    }

    getWeather(){
      let obs = this._HttpService.getWeatherData('4190598');
      obs.subscribe(data=>{
        this.weather =data;
      })
    }

}
