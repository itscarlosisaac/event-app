import { Component, OnInit } from '@angular/core'
import { EventSingleComponent } from './event.single.component'
import { EventsService } from './shared/events.service'
import { NotificationService } from '../common/notifications.service'

@Component({
  selector: 'events-list',
  templateUrl: './events.list.component.html'
})

export class EventListComponent implements OnInit {
  events:any[]
  constructor(
    private eventsService: EventsService,
    private notification: NotificationService )
  { }

  ngOnInit(){
    this.events = this.eventsService.getEvents();
  }

  handleSingleClick(eventName){
    this.notification.uiNotify(eventName)
  }
}
