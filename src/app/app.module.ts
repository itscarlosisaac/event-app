import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { EventListComponent } from './events/events.list.component'
import { EventSingleComponent } from './events/event.single.component'
import { EventDetailsComponent } from './event.details/event.details.component'

// NavBar Component
import { NavbarComponent } from './nav/navbar.component'
import { EventsService } from './events/shared/events.service'

// Services
import { NotificationService } from './common/notifications.service'

// Routes
import { appRoutes } from './routes'

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
    NavbarComponent
  ],
  providers: [ EventsService, NotificationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
