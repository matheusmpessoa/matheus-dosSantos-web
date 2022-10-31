import { Component, Input } from '@angular/core';
import { UserData } from 'src/app/models/user.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  @Input() result!: any;
  public columndefs: any[] = ['avatar_url', 'login', 'type'];

  constructor() { }

}
