import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router'
import { Injectable } from '@angular/core'

import { EventsService } from '../events/shared/events.service'

@Injectable()
export class EventRouteActivator implements CanActivate{
  constructor(
    private eventService:EventsService,
    private router: Router
  ){

  }
  canActivate(route:ActivatedRouteSnapshot){
    const eventExist = !!this.eventService.getEvent(+route.params['id'])
    if ( !eventExist ){
      this.router.navigate(['/404'])
    }

    return eventExist;
  }
}
