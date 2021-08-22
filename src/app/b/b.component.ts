import { Component, OnInit } from '@angular/core';
import { AnanthaService } from '../anantha.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {
  srinu: any
  constructor(public y: AnanthaService) { }

  ngOnInit(): void {
    this.srinu = this.y.getDate()

  }

}
