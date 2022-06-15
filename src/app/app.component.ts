import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo2';
  param = { value: 'world' };
  currLang = 'tw';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('tw');
    translate.use('tw');
  }

  test() {
    this.translate.use(this.currLang);
  }
}
