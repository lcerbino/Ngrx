import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/state/app.state';
import { selectListUsers } from 'src/state/selectors/user.selector';

@Component({
  selector: 'app-user-viewer',
  templateUrl: './user-viewer.component.html',
  styleUrls: ['./user-viewer.component.scss']
})
export class UserViewerComponent implements OnInit {

  users$ : Observable<any> = new Observable();

  constructor(private store : Store<AppState>) { }

  ngOnInit(): void {
    this.users$ = this.store.select(selectListUsers);
  }

}
