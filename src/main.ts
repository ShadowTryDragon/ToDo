import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { ToDoFormComponent } from './components/to-do-form/to-do-form.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ToDoDataService } from './service/to-do-data.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToDoListComponent,ToDoFormComponent],
  providers: [ToDoDataService],
  template: `
    <h1><app-to-do-list></app-to-do-list><app-to-do-form><app-to-do-form>

   
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
