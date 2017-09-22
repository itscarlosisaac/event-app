import { Component } from '@angular/core'
import { EventsService } from '../events/shared/events.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  templateUrl:'./event.details.component.html'
})

export class EventDetailsComponent {
  event:any;
  constructor(
    private eventService: EventsService,
    private route: ActivatedRoute
   ){}

  ngOnInit(){
    let id = parseInt( this.route.snapshot.params['id'] );
    this.event = this.eventService.getEvent(id)
  }
}
