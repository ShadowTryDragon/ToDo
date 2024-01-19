import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ToDo } from '../../models/to-do';
import { ToDoDataService } from '../../service/to-do-data.service';


@Component({
  selector: 'app-to-do-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})

export class ToDoFormComponent implements OnInit {

  toDo : ToDo;

  constructor(private ToDoDataServices: ToDoDataService) {
    this.toDo = new ToDo(null,false,null)
   }

  ngOnInit() {
  }

  save() {
    this.ToDoDataServices.saveToDo(this.toDo);
  }
}
