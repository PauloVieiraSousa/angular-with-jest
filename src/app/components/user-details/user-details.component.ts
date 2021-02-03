import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public list: User[];

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    
  }


  public getListUsers(): void {
    this.ApiService.getUsers().subscribe( items => {
      this.list = items;
    });
  }

}
