import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-top',
  templateUrl: 'nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})

export class NavbarTopComponent implements OnInit {

  title: string = "go happyhour";
  
  constructor() { }

  ngOnInit() { }
}