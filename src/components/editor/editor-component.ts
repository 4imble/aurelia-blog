import { autoinject, observable } from 'aurelia-framework';
import { Router, RouteConfig } from 'aurelia-router';
import { ArticleService } from "../../shared/services/article-service";

@autoinject()
export class EditorComponent {
  routeConfig: RouteConfig;
  slug: String;

  article;
  @observable() tag;

  constructor(private articleService: ArticleService, private router: Router) { }

  activate(params, routeConfig) {
    this.routeConfig = routeConfig;
    this.slug = params.slug;

    if (this.slug) {
      return this.articleService.get(this.slug)
        .then(article => {
          this.article = article;
        });
    } else {
      this.article = {
        title: '',
        description: '',
        body: '',
        tagList: []
      };
    }
    return null;
  }

  tagChanged(newValue, oldValue) {
    if (newValue !== undefined && newValue !== '')
      this.addTag(this.tag);
  }

  addTag(tag) {
    this.article.tagList.push(tag);
  }

  removeTag(tag) {
    this.article.tagList.splice(this.article.tagList.indexOf(tag), 1);
  }

  publishArticle() {
    this.articleService.save(this.article)
      .then((article) => {
        this.slug = article.slug;
        this.router.navigateToRoute('article', { slug: this.slug })
      })
  }
}
