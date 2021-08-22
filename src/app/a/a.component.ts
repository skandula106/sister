import { Component, OnInit } from '@angular/core';
import { AnanthaService } from '../anantha.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
lakshmi: any;

  constructor(public x: AnanthaService) { }

  ngOnInit(): void {
    // console.log(this.x.getDate());
    this.lakshmi = this.x.getDate();
  }
}
