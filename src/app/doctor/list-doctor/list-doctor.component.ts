import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-doctor',
  templateUrl: './list-doctor.component.html',
  styleUrls: ['./list-doctor.component.css']
})
export class ListDoctorComponent implements OnInit {

 Doctors: any=[
  {
    name:"girish Shelke",
    Speciality:"Software Engineer",
    Country:"india",
    phone:"123456787",
    email:"girish@gmail.com"
  },
  {
    name:"Girish Shelke",
    Speciality:"Software Engineer",
    Country:"india",
    phone:"123456787",
    email:"girish@gmail.com"
  },
  {
    name:"Girish Shelke",
    Speciality:"Software Engineer",
    Country:"india",
    phone:"123456787",
    email:"girish@gmail.com"
  },
  {
    name:"Girish Shelke",
    Speciality:"Software Engineer",
    Country:"india",
    phone:"123456787",
    email:"girish@gmail.com"
  },
  {
    name:"Girish Shelke",
    Speciality:"Software Engineer",
    Country:"india",
    phone:"123456787",
    email:"girish@gmail.com"
  },
  {
    name:"Girish Shelke",
    Speciality:"Software Engineer",
    Country:"india",
    phone:"123456787",
    email:"girish@gmail.com"
  },
  {
    name:"Girish Shelke",
    Speciality:"Software Engineer",
    Country:"india",
    phone:"123456787",
    email:"girish@gmail.com"
  },
  {
    name:"Girish Shelke",
    Speciality:"Software Engineer",
    Country:"india",
    phone:"123456787",
    email:"girish@gmail.com"
  },
  {
    name:"Girish Shelke",
    Speciality:"Software Engineer",
    Country:"india",
    phone:"123456787",
    email:"girish@gmail.com"
  },
  {
    name:"Girish Shelke",
    Speciality:"Software Engineer",
    Country:"india",
    phone:"123456787",
    email:"girish@gmail.com"
  },
 ]

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
