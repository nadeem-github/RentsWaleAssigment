import { Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Task, TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  tasks: Task[] = [];
  filteredTasks: Task[] = []; 
  searchTerm: string = '';
  currentTask: Task = {
    id: 0,
    title: '',
    description: '',
    dueDate: '',
    priority: 'Low',
    status: 'In Progress',
  };


  @ViewChild('editModal') editModal: any;
  @ViewChild('deleteModal') deleteModal: any;

  constructor(private taskService: TaskService, private modalService: NgbModal) {
    this.tasks = this.taskService.getTasks();
    this.filteredTasks = [...this.tasks];
  }

  addNewTask(): void {
    const newTask: Task = {
      id: Date.now(),
      title: 'New Task',
      description: 'Description here...',
      dueDate: new Date().toISOString(),
      priority: 'Medium',
      status: 'In Progress',
    };
    
    // Add the new task to tasks
    this.taskService.addTask(newTask);
    this.tasks = this.taskService.getTasks();
    this.filterTasks(); 
  }
  

  markAsCompleted(taskId: number): void {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.status = 'Completed';
      this.taskService.updateTask(task);
      this.tasks = this.taskService.getTasks();
    }
  }

  editTask(task: Task): void {
    this.currentTask = { ...task }; 
    this.modalService.open(this.editModal, { centered: true });
  }


  updateTask(): void {
    if (this.currentTask) {
      this.taskService.updateTask(this.currentTask);
      this.tasks = this.taskService.getTasks();
      this.filterTasks();
    }
  }

  confirmDelete(task: Task): void {
    this.currentTask = task;
    this.modalService.open(this.deleteModal, { centered: true });
  }

  deleteTask(taskId: number | undefined): void {
    if (taskId) {
      this.taskService.deleteTask(taskId);
      this.tasks = this.taskService.getTasks();
      this.filterTasks();
    }
  }

  filterTasks(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredTasks = this.tasks.filter(task =>
      task.priority.toLowerCase().includes(term) ||
      task.dueDate.toLowerCase().includes(term) || 
      task.status.toLowerCase().includes(term)
    );
  }
}
