import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from "@angular/common/http";
// import swal from 'sweetalert';
import Swal from "sweetalert2";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
 ngOnInit(): void {
   this.getAllTasks();
  }
  constructor(private http:HttpClient){}
  title = 'jeetmaterial';
  date;
  model: NgbDateStruct;
  check(){
    console.log(this.taskform.value)
  }
  onDateSelect(r){
    console.log(r)
  }

  taskform = new FormGroup({
    task: new FormControl('',Validators.required),
    date: new FormControl('',Validators.required),
    priority: new FormControl('',Validators.required),
    createDate: new FormControl('',Validators.required),
    description:new FormControl('',Validators.required)
  });
  taskformSubmit(){
    this.taskform.get('createDate').setValue(Date.now());
    console.log(this.taskform.value);
    if(this.taskform.valid){
      this.http.post('http://localhost:3000/api/task/create',this.taskform.value).subscribe(r=>{
      if(r){
        this.getAllTasks();
        Swal.fire("Done!", "Your Task has been Saved!", "success");
        this.taskform.reset();

      }
    })
    }else{
      Swal.fire("Attention!", "Please fill all the fields!", "warning");

    }
  }
  AllTask;
  getAllTasks(){
    this.http.get('http://localhost:3000/api/task/getall').subscribe(result=>{
      this.AllTask=result;
      console.log(this.AllTask)
    })
  }
  temp=0;
  EditTask(task){
    console.log(task);
    this.temp=task._id;
    this.editForm.get('task').setValue(task.taskName);
    this.editForm.get('description').setValue(task.description);
    this.editForm.get('date').setValue(task.date);
    this.editForm.get('id').setValue(task._id);
  }
  editForm=new FormGroup({
    id: new FormControl('',Validators.required),
    task: new FormControl('',Validators.required),
    date: new FormControl('',Validators.required),
    priority: new FormControl('',Validators.required),
    description:new FormControl('',Validators.required)
  })
  DeleteTask(task){
    var obj={
      id:task._id
    }
    this.http.post('http://localhost:3000/api/task/deleteTask',obj).subscribe(result=>{
      console.log(result);
      if(result){
        Swal.fire("Done!", "Your Task has been Deleted!", "success");

        this.getAllTasks();
      }
    })
  }
  SaveTask(task){
    if(this.editForm.valid){
      console.log(this.editForm.value);
      this.http.post('http://localhost:3000/api/task/editTask',this.editForm.value).subscribe(result=>{
        console.log(result);
        if(result){
          Swal.fire("Done!", "Your Task has been Edited!", "success");
          this.editForm.reset();
          this.temp=0;
          this.getAllTasks();

        }
      })
    }
  }
  CancleTask(){
    this.temp=0;
  }
  
}
