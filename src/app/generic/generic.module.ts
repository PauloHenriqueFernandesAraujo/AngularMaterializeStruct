import { NgModule } from '@angular/core';
import { AllServices } from './services/all-service.class';
import { CommunicationService } from './services/communication.service';


@NgModule({
  declarations: [],
  imports: [],
  providers: [
    AllServices,
    CommunicationService
  ]
})
export class GenericModule { }
