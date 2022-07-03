import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  
  email=""
  password=""
  full_Name=""

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


}
