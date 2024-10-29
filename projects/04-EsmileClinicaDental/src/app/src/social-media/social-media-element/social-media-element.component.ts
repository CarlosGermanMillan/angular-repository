import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';
import { SocialMediaElement } from '../models';
import {MatTooltip} from '@angular/material/tooltip';
import { NgOptimizedImage } from '@angular/common';


@Component({
  selector: 'app-social-media-element',
  standalone: true,
  imports: [MatTooltip, NgOptimizedImage],
  templateUrl: './social-media-element.component.html',
  styleUrl: './social-media-element.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SocialMediaElementComponent {
  // socialMediaItem = input.required<SocialMediaElement>();
  @Input() socialMediaItem : SocialMediaElement = {
    name: '',
    link: '',
    imgPath: ''
  }
}
