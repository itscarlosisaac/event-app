import { Component, Input } from '@angular/core'

@Component({
  selector: 'event-single',
  templateUrl:'./event.single.component.html'
})

export class EventSingleComponent{
  @Input() eventInput:any;
}
