import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { EventListComponent } from './events/events.list.component'
import { CreateEventComponent } from './events/create.event.component'
import { EventDetailsComponent } from './event.details/event.details.component'
import { Error404Component } from './errors/404.component'
import { EventRouteActivator } from './event.details/event.route.activator.service'
import { EventListResolver } from './events/events.list.resolver.service'
import { userRoutes } from './user/user.routes'
import { UserModule } from  './user/user.module'

export const router:Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate:['canDeactivateCreateEvent'] },
  { path: 'events', component: EventListComponent, resolve: { events:EventListResolver } },
  { path: 'events/:id' , component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  // { path: 'user', loadChildren: './user/user.module#UserModule', component: UserModule }
];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(router);
