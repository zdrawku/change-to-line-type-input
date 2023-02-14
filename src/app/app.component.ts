import { Component } from '@angular/core';
import { IGX_INPUT_GROUP_TYPE } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{provide: IGX_INPUT_GROUP_TYPE, useValue: 'line' }]
})
export class AppComponent {
  title = 'Home - IgniteUI for Angular';
}
