import { autoinject } from 'aurelia-dependency-injection';
import { ApiService } from './api-service';

@autoinject()
export class TagService {

  constructor(private apiService: ApiService) { }

  getList() {
    return this.apiService.get('/tags')
      .then(data => data.tags)
  }
}
