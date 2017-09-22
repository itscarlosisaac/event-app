import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { EventListComponent } from './events/events.list.component'
import { EventSingleComponent } from './events/event.single.component'

// NavBar Component
import { NavbarComponent } from './nav/navbar.component'

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    EventListComponent,
    EventSingleComponent,
    NavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
