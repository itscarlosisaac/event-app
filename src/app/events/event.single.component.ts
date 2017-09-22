import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'event-single',
  templateUrl:'./event.single.component.html'
})

export class EventSingleComponent{
  @Input() eventInput:any;
  @Output() eventClick = new EventEmitter()
  handleClickMe(){
    this.eventClick.emit(this.eventInput)
  }
}
