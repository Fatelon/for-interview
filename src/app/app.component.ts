import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '@common/menu';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterModule, MenuComponent,
  ],
})
export class AppComponent {
  protected items = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      routerLink: '/',
      routerLinkActiveOptions: { exact: true },
    },
    {
      label: 'My Form',
      icon: 'pi pi-fw pi-file',
      routerLink: '/form',
      routerLinkActiveOptions: { exact: true },
    },
  ];
}
