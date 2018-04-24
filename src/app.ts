import { autoinject } from 'aurelia-dependency-injection';
import { UserService } from './shared/services/user-service';
import { Router } from 'aurelia-router';

@autoinject()
export class App {
  message: string = 'Hello World!'; // just for unit testing ;)
  router: Router;

  constructor(private userService: UserService) { }

  configureRouter(config, router: Router) {
    config.title = 'Conduit';
    config.map([
      {route: ['', 'home'], moduleId: 'components/home/home-component', name: 'home', title: 'Home'},
      {route: ['login'], moduleId: 'components/auth/auth-component', name: 'login', title: 'Sign in'},
      {route: ['register'], moduleId: 'components/auth/auth-component', name:'register', title: 'Sign up'},
      {route: ['settings'], moduleId: 'components/settings/settings-component', name:'settings', title: 'Settings'},
      {route: [':name'], moduleId: 'components/profile/profile-component', name:'profile', title: 'Profile'},
      {route: ['editor/:slug?'], moduleId: 'components/editor/editor-component', name:'editor', title: 'Editor'},
      {route: ['article/:slug'], moduleId: 'components/article/article-component', name:'article', title: 'article'}
    ]);

    this.router = router;
  }

  attached() {
    this.userService.populate();
  }
}
