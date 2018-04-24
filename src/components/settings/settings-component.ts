import { autoinject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';
import { UserService } from '../../shared/services/user-service';
import { SharedState } from '../../shared/state/shared-state';

@autoinject()
export class SettingsComponent {

  constructor(private userService: UserService, private sharedState: SharedState, private router: Router) {  }

  update() {
    this.userService.update(this.sharedState.currentUser);
  }

  logout() {
    this.userService.purgeAuth();
    this.router.navigateToRoute('home');
  }
}
