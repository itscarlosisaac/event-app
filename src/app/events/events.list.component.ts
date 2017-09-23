import { Component, OnInit } from '@angular/core'
import { EventSingleComponent } from './event.single.component'
import { EventsService } from './shared/events.service'
import { NotificationService } from '../common/notifications.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'events-list',
  templateUrl: './events.list.component.html'
})

export class EventListComponent implements OnInit {
  events:any
  constructor(
    private eventsService: EventsService,
    private notification: NotificationService,
    private route: ActivatedRoute
   )
  { }

  ngOnInit(){
    this.events = this.route.snapshot.data['events']
    // this.events = this.eventsService.getEvents();
    // this.eventsService.getEvents().subscribe( events => this.events = events )
  }

  handleSingleClick(eventName){
    this.notification.uiNotify(eventName)
  }
}
