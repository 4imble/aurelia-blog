import { autoinject } from 'aurelia-dependency-injection';
import { ApiService } from './api-service';

@autoinject()
export class CommentService {

  constructor(private apiService: ApiService) { }

  add(slug, payload) {
    return this.apiService.post(`/articles/${slug}/comments`, {comment: {body: payload}})
      .then(data => data.comment)
  }

  getList(slug) {
    return this.apiService.get(`/articles/${slug}/comments`)
      .then(data => data.comments)
  }

  destroy(commentId, articleSlug) {
    return this.apiService.delete(`/articles/${articleSlug}/comments/${commentId}`)
  }
}
