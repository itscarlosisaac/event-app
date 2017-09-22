import { Component } from '@angular/core'
import { EventSingleComponent } from './event.single.component'

@Component({
  selector: 'events-list',
  templateUrl: './events.list.component.html'
})

export class EventListComponent {
  event1 = {
    id: 1,
    name: 'Angular & Typescript',
    date: '9/26/2017',
    time: '10:00 am',
    price: 399.99,
    imgUrl: '/app/assets/images/angular-shield.png',
    locations: {
      address: '1074 DT',
      city: 'London',
      country: 'England'
    }
  }

  handleEventClicked(data){
    console.log(data);
  }
}
