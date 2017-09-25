import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector:'',
  templateUrl:'./create.event.component.html'
})
export class CreateEventComponent{
<<<<<<< HEAD
  isDirty:boolean = true;

||||||| merged common ancestors
=======
  isDirty: boolean = true
>>>>>>> master
  constructor( private router: Router){}

  cancel(){
      this.router.navigate(['/events'])
  }
}
