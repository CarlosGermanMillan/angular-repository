import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IframeVideoComponent, MainContainerComponent } from '../components';

@Component({
  selector: 'app-trailer-video',
  standalone: true,
  imports: [MainContainerComponent, IframeVideoComponent],
  templateUrl: './trailer-video.component.html',
  styleUrl: './trailer-video.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrailerVideoComponent {
  videoSrc : string = "https://www.youtube.com/embed/H8_o9NrBC8U?si=Me5OdIL6iXZNf4Js"
}
