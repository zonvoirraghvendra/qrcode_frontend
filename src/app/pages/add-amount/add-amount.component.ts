import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { QrcodeService } from 'src/app/services/qrcode.service';
import { HttpClient } from '@angular/common/http';
import {Location} from '@angular/common';
type Transections={

}
@Component({
  selector: 'app-add-amount',
  templateUrl: './add-amount.component.html',
  styleUrls: ['./add-amount.component.css']
})
export class AddAmountComponent implements OnInit {
  req:any;
  getQr: any;
  errors: any;
  voterName;
  payAmount;
  getvoterId;
  getNotificactons:any={};
  notify:any={};
  cashierId;
  getNotificactions;
  recivedId;
  usrId;
  voterId: string;
  amount: string;
  cashier_id: string;
  ip_address: string;
  timerInterval: any;
  ipAddress: any;
  cashierName;
  sub;
  constructor(private route: Router,private http: HttpClient,private routes: ActivatedRoute,
    private _location: Location) { 
  }

  ngOnInit() {
    this.routes.params.subscribe(params => {
      this.req = params.id;
      console.log(this.req)
    });
    this.cashierId=localStorage.getItem('dataSource');
    this.cashierName=localStorage.getItem('userName');
  }


  continue(amount){
    localStorage.setItem('amount',amount);
    this.route.navigate(['/contact']);
  }

  ngOnDestroy() {
    clearInterval(this.timerInterval);
  }

  goback(){
    this._location.back();
  }
  gotolink(){
    
  }
}
