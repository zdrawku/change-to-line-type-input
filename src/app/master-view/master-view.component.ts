import { Component } from '@angular/core';

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent {
  public date = new Date('2023-02-01T00:00');
  public date1 = new Date('2023-02-24T00:00');
}
