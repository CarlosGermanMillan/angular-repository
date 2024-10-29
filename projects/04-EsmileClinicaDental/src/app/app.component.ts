import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './src/toolbar/toolbar.component';
import { WelcomeComponent } from './src/welcome/welcome.component';
import { SocialMediaComponent } from './src/social-media/social-media.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ToolbarComponent, WelcomeComponent, SocialMediaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EsmileClinicaDental';
}
