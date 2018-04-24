import {bindable, computedFrom} from 'aurelia-framework';
import {autoinject} from 'aurelia-framework';
import {SharedState} from "../../shared/state/shared-state";

@autoinject()
export class CommentCustomElement {
  @bindable comment;
  @bindable deleteCb;

  constructor(private sharedState: SharedState) {  }

  @computedFrom('comment.author.username')
  get canModify() {
    return this.comment.author.username === this.sharedState.currentUser.username;
  }
}
