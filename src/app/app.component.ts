import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'department-front';
  isShowSpinner: boolean;

  constructor(private titleService: Title, private store: Store<{ spin: number }>) {
    this.titleService.setTitle('Departamentos');
    this.isShowSpinner = false;
    store.select('spin').subscribe(spin => this.isShowSpinner = spin > 0);
  }
}
