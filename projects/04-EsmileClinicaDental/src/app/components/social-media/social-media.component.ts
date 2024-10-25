import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SocialMediaElementComponent } from './social-media-element/social-media-element.component';
import { SocialMediaElement } from './models';
import { MainContainerComponent } from '../layout';
import { WobbleDirective } from '../directives/animations';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [SocialMediaElementComponent, MainContainerComponent, WobbleDirective],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialMediaComponent {
  socialMediaList: SocialMediaElement[] = [
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/esmile.clinicadental/profilecard/?igsh=MWdjenEzY2swMXJmNA==',
      imgPath: 'assets/images/social-media/instagram_logo.png'
    },
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/share/WWACgypS84anKSq9/?mibextid=LQQJ4d',
      imgPath: 'assets/images/social-media/facebook_logo.png'
    },
    {
      name: 'TikTok',
      link: 'https://www.tiktok.com/@esmile.clinicadental?_t=8qnsE9sTG8M&_r=1',
      imgPath: 'assets/images/social-media/tiktok_logo.png'
    }
  ]
}
