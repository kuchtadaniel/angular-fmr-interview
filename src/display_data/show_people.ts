import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'show-people',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show_people.html',
})
export class ShowPeople implements OnInit{
ngOnInit(): void {

this.getDataService.getPeople();

throw new Error('Method not implemented.');
}
  name = 'Angular';


}


