import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-hospital',
  templateUrl: './list-hospital.component.html',
  styleUrls: ['./list-hospital.component.css']
})
export class ListHospitalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  temp=false;
  toogleButton(){
    if(this.temp==true){
      this.temp=false
    }
    else{
      this.temp= true
    }
    
  }

}
