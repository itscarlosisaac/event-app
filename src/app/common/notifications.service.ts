import { Injectable } from '@angular/core'
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

Injectable()
export class NotificationService {
  uiNotify(message: string, status?: string){
    UIkit.notification({
      message: message,
      status: status,
      pos: 'top-right',
      timeout: 3000
    });
  }
}
