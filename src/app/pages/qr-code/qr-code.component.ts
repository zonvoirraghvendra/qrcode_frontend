import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QrcodeService } from 'src/app/services/qrcode.service';
import { HttpClient } from '@angular/common/http';
import {Location} from '@angular/common';
type Transections = {

}
type getQrCode = {
  'id': any;
  '__typename': string
}
@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent implements OnInit {
  ipAddress;
  value: any;
  display = false;
  href: string;
  getQr: any = {};
  userId: any;
  errors: any;
  paymentId:any;
  notify:any={};
  cashierId: any;
  timerInterval: any;

  getNotificactons:any={};
  amount:string;
  voterId:string;
  voter_ip_address: string;
  cashier_ip_address:string;
  cashier_id:string;
  type:string;
  transaction_id :string;
  payment_id:string;


  getNotificactions: any = {};
  constructor(private route: Router, private qrservice: QrcodeService, private routes: ActivatedRoute,
    private http: HttpClient,private _location: Location) { }
  elementType: 'url' | 'canvas' | 'img' = 'url';
  ngOnInit() {
    this.getIPAddress();
    this.routes.params.subscribe(params => {
      this.cashier_id = params.id;
      console.log(this.cashier_id)
    });
    this.userId = localStorage.getItem('dataSource');
    this.amount =localStorage.getItem('amount');
  }
  getIPAddress() {
    this.http.get("https://api.ipify.org/?format=json").subscribe((res: any) => {
      this.ipAddress = res.ip;
      this.generateQRCode()
    });
  }
  generateQRCode() {
    setTimeout(() => {
      this.value = this.userId + '=' + this.ipAddress + '=' + this.amount ;
    }, 1000);
    this.display = true;
  }

  downloadImage() {
    this.href = document.getElementsByTagName('img')[2].src;
  }

  gotocontact() {
    this.route.navigate(['contact']);
  }
  goback(){
    this._location.back();
  }

}
