import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {


  imagen = [ 'assets/img/4.jpg'] ;


  constructor() { }

  ngOnInit(): void {
  }

}
