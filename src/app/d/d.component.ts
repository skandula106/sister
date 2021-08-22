import { Component, OnInit } from '@angular/core';
import { AnanthaService } from '../anantha.service';

@Component({
  selector: 'app-d',
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.css']
})
export class DComponent implements OnInit {
jyothi:any
  constructor(public m:AnanthaService) { }

  ngOnInit(): void {
    this.jyothi = this.m.getHours()
  }

}
