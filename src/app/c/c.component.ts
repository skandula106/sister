import { Component, OnInit } from '@angular/core';
import { AnanthaService } from '../anantha.service';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit {
praveen:any
  constructor(public p:AnanthaService) { }

  ngOnInit(): void {
    this.praveen=this.p.getYear()
  }

}
