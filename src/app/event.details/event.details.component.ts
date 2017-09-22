import { Component } from '@angular/core'
import { EventsService } from '../events/shared/events.service'
@Component({
  templateUrl:'./event.details.component.html'
})

export class EventDetailsComponent {
  event:any;
  constructor( private eventService: EventsService ){}

  ngOnInit(){
    this.event = this.eventService.getEvent(1)
  }
}
