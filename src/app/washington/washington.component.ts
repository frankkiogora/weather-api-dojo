import { Component, OnInit } from '@angular/core';
import{HttpService} from './../http.service'
@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
 weather: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWeatherData()
  }


  getWeatherData(){
    let obs = this._httpService.getWeatherData('4229546')
    obs.subscribe(data=>{this.weather = data})
  }

}
