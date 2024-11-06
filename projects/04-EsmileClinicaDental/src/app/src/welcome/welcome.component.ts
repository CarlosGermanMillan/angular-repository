import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FadeInDirective, MainContainerComponent } from '../components';

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
