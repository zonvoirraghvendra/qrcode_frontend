import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QrcodeService } from 'src/app/services/qrcode.service';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import {Location} from '@angular/common';
type Transections = {

}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  amount;
  request: any = {};
  allContactsList:any=[];
  allContacts;
  searchdata;
  keywords:string;
  userId:string;
  paymentMode;
  constructor(private route: Router, private qrservice: QrcodeService, private http: HttpClient,
    private routes: ActivatedRoute,
    public spinner: NgxSpinnerService,private _location: Location) { }

  ngOnInit() {
    this.request.userId = localStorage.getItem('dataSource');
    console.log(this.request);
    this.getContactList();
    this.paymentMode=localStorage.getItem('paymentMode');
  }
  searchData(event: any) {
    this.allContacts=[];
    this.keywords = event.target.value;
    this.qrservice.getContactSearchList(this.request.userId,this.keywords).subscribe(result => {
      this.allContacts = result.data as Transections[];
      this.allContactsList=this.allContacts.contacts;
    }), (error) => {
      console.log(error);
    };
  }
  goTransaction() {
    this.route.navigate(['transaction']);
  }
  getContactList() {
    this.allContactsList=[{
       contact_id:'5e58c5d6bede873c043d4988',
        userss:{contact_no:'9876544696', firstName:"john", lastName:"doe"}
    },
 ]
    console.log(this.allContactsList);
  }
  linkUrl(id){
      this.route.navigate(['/qrlink',id]);
  }
  qrUrl(id){
      this.route.navigate(['/qr-code',id]);
  }
  goback(){
    this._location.back();
  }


}


