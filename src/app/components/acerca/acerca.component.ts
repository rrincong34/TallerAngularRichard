import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {

  imagen = [ 'assets/img/z.jpg'] ;


  constructor() { }

  ngOnInit(): void {
  }

}
