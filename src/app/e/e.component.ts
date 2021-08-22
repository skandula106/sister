import { Component, OnInit } from '@angular/core';
import { AnanthaService } from '../anantha.service';

@Component({
  selector: 'app-e',
  templateUrl: './e.component.html',
  styleUrls: ['./e.component.css']
})
export class EComponent implements OnInit {
pavani:any
pavan:any
  constructor(public n:AnanthaService) { }

  ngOnInit(): void {
    this.pavani = this.n.getMinutes()
    this.n.getCountries().subscribe(
      (res =>{
        this.pavan = res
        console.log(this.pavan);
        
      })
    )
  }

}
