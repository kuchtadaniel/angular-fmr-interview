import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


Injectable({
  providedIn: 'root'
})
export class DataService {

  private people = new BehaviorSubject<any>([]);
  poblic People = this.people.asObservable();


getpeople()

{

  hhttp.get(url).subcribe(

    url = https://interview-fmr.onrender.com/employees

    this.people.next()

    .error
  )


}

}