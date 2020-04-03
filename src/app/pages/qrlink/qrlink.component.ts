import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-qrlink',
  templateUrl: './qrlink.component.html',
  styleUrls: ['./qrlink.component.css']
})
export class QrlinkComponent implements OnInit {
  getId;
  linkurl;
  amount;
  constructor(private route: Router, private routes: ActivatedRoute) { }

  ngOnInit() {
    this.amount=localStorage.getItem('amount')
    this.routes.params.subscribe(params => {
      this.getId = params.id;
      this.linkurl= environment.inviteRouteUrl+"notification/"+this.getId+"/"+this.amount;
    });
    
  }
  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
transferCancel(){}
}
