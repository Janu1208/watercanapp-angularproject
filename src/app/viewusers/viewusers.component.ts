import { Component, OnInit } from '@angular/core';
import { ViewusersService } from '../core/viewusers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit {
  data: any;

  constructor(private viewUsers:ViewusersService,private  router:Router) { }

  ngOnInit() {
    this.viewUserList();
  }
  viewUserList()
  {
    
    this.viewUsers.viewUsers().subscribe( (res) => {
      console.log(JSON.stringify(res));
      this.data=res;
    });
  }
  back() {
    this.router.navigate(['adminhome']);
  }
}
