import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../models/to-do';
import { SortDonePipe } from '../../pipes/sort-done.pipe';
import { ToDoDataService } from '../../service/to-do-data.service';



@Component({
  selector: 'app-to-do-list',
  imports: [NgFor,SortDonePipe],
  standalone: true,
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  toDo :ToDo;

  constructor(private ToDoDataService : ToDoDataService) { }

  ngOnInit() {
  }

  get toDos(): ToDo[] {
    return this.ToDoDataService.toDos;
  }

  toggle(toDo : ToDo){
    this.ToDoDataService.toggleToDo(this.toDo);
  }
}