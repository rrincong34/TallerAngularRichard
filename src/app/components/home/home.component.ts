import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  imagen = [ 'assets/img/h.jpg'] ;

  constructor() { }

  ngOnInit(): void {
  }

}
