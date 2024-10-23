import { CommonModule, JsonPipe } from '@angular/common';
import { Component , afterNextRender, inject} from '@angular/core';
import { Observable } from 'rxjs';
import { EndpointSimulationService } from '../../services/endpoint-simulation.service';

@Component({
  selector: 'app-async',
  standalone: true,
  imports: [CommonModule, JsonPipe],
  templateUrl: './async.component.html',
  styleUrl: './async.component.scss'
})
export class AsyncComponent {
  endpointSimulationService = inject(EndpointSimulationService);
  // data$ :Observable<any> = new Observable<any>();
  data$ :Observable<any> = this.endpointSimulationService.hitEndpoint();

  constructor(){
    //Solo se llama una unica vez
    // afterNextRender(() => {
    //   console.log(window.location.pathname);
      
    // })
  }
}
