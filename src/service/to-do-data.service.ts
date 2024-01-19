import { Injectable } from '@angular/core';
import { ToDo } from '../models/to-do';

@Injectable()
export class ToDoDataService {

  toDos : ToDo[] = [];
  
  constructor() { 
    this.toDos.push(new ToDo('Einkaufen', false));
    this.toDos.push(new ToDo('Fleisch pökeln', true, '28.12.2022'));
    this.toDos.push(new ToDo('Hinterm Bahnhof prügeln', true));
    this.toDos.push(new ToDo('Essen', false, '18.02.2023'));
    this.toDos.push(new ToDo('Geschenke kaufen', true, '14.12.2022'));
    this.toDos = this.toDos.filter(t => t === t);
  }
  

  saveToDo(toDo : ToDo) {
    this.toDos.unshift(toDo);
  }

  toggleToDo(toDo : ToDo) {
    toDo.done = !toDo.done;
    this.toDos = this.toDos.filter(t => t === t);
  }

}
