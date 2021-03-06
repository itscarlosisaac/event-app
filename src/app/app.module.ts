import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { EventListComponent } from './events/events.list.component'
import { EventSingleComponent } from './events/event.single.component'
import { CreateEventComponent } from './events/create.event.component'
import { EventDetailsComponent } from './event.details/event.details.component'


// NavBar Component
import { NavbarComponent } from './nav/navbar.component'
import { EventsService } from './events/shared/events.service'

// Services
import { NotificationService } from './common/notifications.service'

// Routes
import { appRoutes } from './routes'

// errors
import { Error404Component } from './errors/404.component'
import { EventRouteActivator } from './event.details/event.route.activator.service'
import { EventListResolver } from './events/events.list.resolver.service'

@NgModule({
  imports: [
    BrowserModule,
    appRoutes
  ],
  declarations: [
    AppComponent,
    EventListComponent,
    EventSingleComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NavbarComponent,
    Error404Component
  ],
  providers: [
    EventsService,
    NotificationService,
    EventRouteActivator,
    EventListResolver,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Check the state of the form for the usear leaving the page when the form is dirty
export function checkDirtyState(component: CreateEventComponent ){
  if( component.isDirty ){
    return window.confirm('Yoy have not saved this event, do you really want to cancel?')
  }
  return true;
}
