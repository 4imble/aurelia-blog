import { autoinject } from 'aurelia-dependency-injection';
import { bindable, bindingMode } from 'aurelia-framework';
import { SharedState } from '../state/shared-state';

@autoinject()
export class HeaderLayout {
  activeRoute = '';
  @bindable({ defaultBindingMode: bindingMode.twoWay }) routerConfig;

  constructor(private sharedState: SharedState) { }

  routerConfigChanged(newValue, oldValue) {
    if(!newValue)
      return;
      
    this.activeRoute = newValue.name;
  }
}
