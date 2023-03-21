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

    this.people.next()

    .error
  )


}

}