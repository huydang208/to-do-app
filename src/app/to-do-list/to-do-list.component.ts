import { Component } from '@angular/core';

// Tạo interface ToDo
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
  // Tạo một mảng rỗng
  tasks: ToDo[] = [];
  // Tạo chuỗi ban đầu rỗng
  taskName: string = '';

  // Phương thức thêm
  add() {
    /**
     * Tạo 1 object toDo có 2 thuộc tính là name và isCompleted
     * name gán bằng giá trị nhập vào input
     */
    const toDo: ToDo = {
      name: this.taskName,
      isCompleted: false
    }
    // Kiểm tra nếu chuỗi không rỗng thì push object toDo vào mảng
    if(this.taskName.trim() !== ''){
      this.tasks.push(toDo);
    }
    // Xóa input sau khi enter
    this.taskName = '';
  }

  /**
   * Toggle class
   * isCompleted ban đầu là false, gán bằng true
   */
  toggleCompleted(index: number) {
    this.tasks[index].isCompleted = !this.tasks[index].isCompleted;
  }

  // Phương thức xóa, xóa phần tử khỏi mảng
  delete(index: number) {
    this.tasks.splice(index, 1);
  }

}
