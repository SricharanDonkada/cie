import { Component, OnInit } from '@angular/core';
import { Subscribe} from '../subscribe' ;
import { SubscribeService} from '../subscribe.service';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  subscribeModel = new Subscribe("","");
  status = 0;
  checkStatus(data){
    console.log();
    if(data.message == 'sucess'){
      this.status = 2;
    }
    else if(data.message == 'email'){
      this.status = 1;
    }
    
  }



  constructor(private _subscribeService: SubscribeService) { }

  
  onSubmit(){
    this._subscribeService.subscribe(this.subscribeModel)
    .subscribe(
      data => this.checkStatus(data),
      error => console.log('Error!',error)
    )
  }

  ngOnInit() {
  }

}
