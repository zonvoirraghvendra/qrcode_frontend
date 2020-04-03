import { Component, OnInit } from '@angular/core';
import { QrcodeService } from 'src/app/services/qrcode.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { interval } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
type Transections={

}
@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.css']
})
export class QrScannerComponent implements OnInit {
  getQr: any;
  errors: any;
  voterName;
  payAmount;
  getvoterId;
  getNotificactons:any={}
  notify:any={};
  cashierId
  getNotificactions
  recivedId
  usrId
  voterId: string;
  request_type:string
  amount: string;
  cashier_id: string;
  ip_address: string;
  timerInterval: any;
  ipAddress: any;
  cashierName;  
  qrResultString: any;
  showScanner = true;
  scannerReader = false;
  scanData: any = {};
  scanQrcode:any = {};
  scanIpAddress;
  scanUserId;
  userId;
  senderName;
  reciverName;
  scanner:boolean=true;
  confirm:boolean=false;
  constructor(private route: Router, private qrService: QrcodeService, private http: HttpClient,private _location:Location,public spinner: NgxSpinnerService) { }
  ngOnInit() {
    this.cashierId=localStorage.getItem('dataSource');
    // this.amount=localStorage.getItem('amount');
    this.getIPAddress();
  }
  clearResult(): void {
    this.qrResultString = null;
  }
  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
    console.log(this.qrResultString);
    if(this.qrResultString){
      this.scanQrCodeReader();
    }
  }
  getIPAddress() {
    this.http.get("https://api.ipify.org/?format=json").subscribe((res: any) => {
      this.ipAddress = res.ip;
      console.log(this.ipAddress);
    });
  }
  scanQrCodeReader() {
  //  this.qrResultString="5e622c3cf542862d378198a9";
    //this.qrResultString = '5e622c3cf542862d378198a9=47.8.97.253';
  //this.qrResultString = '5e58c5d6bede873c043d4988=103.110.149.133=20';
  var b = this.qrResultString.split('=', 3)
  console.log(b[0])
  console.log(b[1])
  console.log(b[2])
  this.scanIpAddress = b[1];
  this.scanUserId = b[0];
  this.amount =b[2];
    localStorage.setItem('amount', this.amount);
    this.scanner=false;
    this.confirm=true;
    this.voterId=this.scanUserId;
    this.qrService.getSacanQrCodes(this.scanUserId).subscribe(result => {
      this.scanQrcode = result.data;
      this.senderName=this.scanQrcode.user.firstName
      this.reciverName=localStorage.getItem('userName')
      this.voterId=this.scanUserId;
      console.log(this.scanQrcode)
      this.scanner=false;
      this.confirm=true;
      return;
    }, (error) => {
      this.errors = error;
      console.log(this.errors);
    })
  }
  continue(){
    this.notify.amount= this.amount;
    this.notify.voterId= this.scanUserId;
    this.notify.voter_ip_address = this.scanIpAddress;
    this.notify.cashier_ip_address = this.ipAddress;
    this.notify.cashier_id = this.cashierId;
    this.notify.request_type= localStorage.getItem('paymentMode');
    localStorage.setItem('voter_ip_address',this.scanIpAddress);
    localStorage.setItem('cashier_ip_address',this.ipAddress);
    this.route.navigate(['/payment',this.scanUserId]);
  }

  ngOnDestroy() {
    clearInterval(this.timerInterval);
  }

scanQrReader(){
  this.showScanner = false;
  this.scannerReader = true;
 // this.scanQrCodeReader();
}
back(){
  this._location.back();
}
}
