import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
   <h3 style="color:white;font-size:40px;margin-left:200px">
    ERROR 404: PAGE NOT FOUND 
   </h3>
  `,
  styles: []
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
