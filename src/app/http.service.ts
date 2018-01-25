import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService {

  constructor(private _http: HttpClient){
  }

  getWeatherData(id){
    return this._http.get(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=a942dcd96649b0c970a6d8c99a763b0b`)
  }
}