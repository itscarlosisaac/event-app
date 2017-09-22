import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { EventListComponent } from './events/events.list.component'
import { EventDetailsComponent } from './event.details/event.details.component'

export const router:Routes = [
  { path: 'events', component: EventListComponent },
  { path: 'events/:id' , component: EventDetailsComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(router);