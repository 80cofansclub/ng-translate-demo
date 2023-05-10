import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo2';
  param = { value: 'world' };
  currLang = 'tw';

  multiply = (x) => {
    return (y) => {
      return x * y;
    };
  };

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('tw');
    translate.use('tw');
  }

  test() {
    console.log(this.multiply(2)(6));
    this.translate.use(this.currLang);

    console.log(this.translate.instant('HOME.WELCOME', { name: 'Allen' }));
  }
}
