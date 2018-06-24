import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DropdownService {

  constructor(private http: Http) { }

  getTimes() {
    return this.http.get('assets/docs/times.json')
    .map((res: Response) => res.json());
  }

  getTimeszone(){
    return this.http.get('assets/docs/times-zone.json')
    .map((res: Response) => res.json());
  }
}
