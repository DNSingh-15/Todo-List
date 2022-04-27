import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-list With Angular';

// for creating a list we have to make and array
  list:any[]=[];

  addTask(item:string)
  {
    this.list.push({id:this.list.length, name:item});
    console.warn(this.list)
  }

  removeTask(id:number)
  {
    console.warn(id)                                                      // for getting item id
    this.list=this.list.filter(item=>item.id!==id)                         // for removing element
  }
}
