import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainContainerComponent } from '../layout';
import { FadeInDirective } from '../directives/animations';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [MainContainerComponent, FadeInDirective],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent {

}
