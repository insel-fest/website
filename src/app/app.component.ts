import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landingpage/landingPage.component';
import  {CommonModule} from '@angular/common'
import { NavbarComponent } from "./navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { MusikComponent } from './lineup/musik/musik.component';
import { WorkshopsComponent } from './lineup/workshops/workshops.component';
import { DrummherumComponent } from './lineup/drummherum/drummherum.component';

import { routes } from './app.routes';
import { PfannenwendeComponent } from './info/pfannenwende/pfannenwende.component';
import { AnreiseComponent } from './info/anreise/anreise.component';
import { LageplanComponent } from './info/lageplan/lageplan.component';
import { TicketsComponent } from './tickets/tickets.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,LageplanComponent, TicketsComponent, AnreiseComponent,PfannenwendeComponent, LandingPageComponent, WorkshopsComponent, DrummherumComponent, NavbarComponent, FormsModule, MusikComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Inselfest2025';

   accessGranted = true;
  passwordInput = '';
  wrongPassword = false;
  userRole: 'admin' | 'guest' | null = null;

  // Zwei erlaubte Passwörter
  private passwords = {
    guest: 'wirfüruns',
    admin: 'orgaoverload'
  };

  checkPassword() {
    if (this.passwordInput === this.passwords.admin) {
      this.userRole = 'admin';
      this.accessGranted = true;
      this.wrongPassword = false;
    } else if (this.passwordInput === this.passwords.guest) {
      this.userRole = 'guest';
      this.accessGranted = true;
      this.wrongPassword = false;
    } else {
      this.wrongPassword = true;
    }
  }
}
