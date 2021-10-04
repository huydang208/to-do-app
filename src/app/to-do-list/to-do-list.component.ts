import { Component } from '@angular/core';

interface ToDo {
  name: string;
  isCompleted: boolean;
}

@Component({
  selector: 'to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})

export class ToDoListComponent{
  tasks: ToDo[] = [];
  taskName: string = '';

  add() {
    const toDo: ToDo = {
      name: this.taskName,
      isCompleted: false
    }
    if(this.taskName.trim() !== ''){
      this.tasks.push(toDo);
    }
    this.taskName = '';
  }

  toggleComplete(id: number) {
    this.tasks[id].isCompleted = !this.tasks[id].isCompleted;
  }

  delete(id: number, e: MouseEvent) {
    e.preventDefault();
    this.tasks.splice(id, 1);
  }

}
