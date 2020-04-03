import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import gql from 'graphql-tag';
type PaymentInputType = {
  userId: string;
  amount: string;
  cashier_id: string;
  card_number: string;
  exp_month: string;
  exp_year: string;
  cvc: string;
}
type NotificationInput = {
  voterId: string;
  amount: string;
  cashier_id: string;
  voter_ip_address: string;
  cashier_ip_address: string;
  payment_id: string;
}
@Injectable({
  providedIn: 'root'
})
export class QrcodeService {
  constructor(private apollo: Apollo, httpLink: HttpLink) { }
  userId: string;
  ipAddress: string;
  amountSend;
  public voterName;
  userLogin(email, password) {
    return this.apollo.mutate({
      mutation: gql`mutation($email: String!,$password: String!) {
        loginUser(email: $email,password: $password) { 
        token
        user{
          id
          firstName
          lastName
          email
          contact_no
          user_type
        }
        } 
      }`,
      variables: { email: email, password: password }
    })
  }
  getSacanQrCodes(id) {
    return this.apollo.query({
      query: gql`query getQrCode($userId: String!){
        user(id: $userId){
          firstName
          id
        }
      }`,
      variables: { userId: id }
    })
  }
  payment(paymentInput: PaymentInputType) {
    return this.apollo.mutate({
      mutation: gql`mutation($input: PaymentInput!) {
        addPayment(input: $input) { 
          balance_transaction
          amount
          cashier{
            firstName
          }
          user{
            firstName
          }
          id
        }
      }`,
      variables: { input: paymentInput }
    })
  }
  sendNotification(notificationInput: NotificationInput) {
    return this.apollo.mutate({
      mutation: gql`mutation($input: NotificationInput!){
        addNotification(input: $input){
          id
          amount
          transaction_id
          payment_id
          voter_ip_address
          cashier_ip_address
          cashier{
            firstName

          }
          user{
            firstName
          }
        }
      }`,
      variables: { input: notificationInput }
    })
  }
  getNotification(id, ip) {
    return this.apollo.query({
      query: gql`query getVoterNoti($voterId: String!,$ip_address: String!){
        getVoterConfirmNotification(voterId: $voterId,
          ip_address: $ip_address){
          _id
          amount
          transaction_id
          payment_id
          voter_ip_address
          cashier_ip_address
          user{
            firstName
            id
          }
          cashier{
            firstName
            id
          }
          created_date
        }
        
      }
      `,
      variables: { voterId: id, ip_address: ip }
    })
  }
  getQrCode(id) {
    return this.apollo.query({
      query: gql`query getQrCode($userId: String!){
        getQrCode(id: $userId){
          id
        }
      }`,
      variables: { userId: id }
    })
  }
  getCashierNotification(id,ip) {
    return this.apollo.query({
      query: gql`query getCashierConfirm($cashier_id: String!,$ip_address: String!){
        getCashierConfirmNotification(cashier_id: $cashier_id,
          ip_address: $ip_address){
          _id
          amount
          transaction_id
          payment_id
          voter_ip_address
          cashier_ip_address
          user{
            firstName
            id
          }
          cashier{
            firstName
            id
          }
          created_date
        }
        
      }
      `,
      variables: { cashier_id: id , ip_address: ip }
    })
  }
  getTransectionsById(id: string) {
    return this.apollo.query({
      query: gql`query Transaction($id: String!){
        transaction(id: $id) { 
         user{
           firstName
           id
         }
         balance_transaction
         amount
         cashier{
           firstName
           id
         }
       }
     }`,
      variables: { id: id }
    })
  }
  getContactList(id) {
    return this.apollo.query({
      query: gql`query contacts($userId: String!){
        contacts(filter: { limit: 2, keywords: "", userId: $userId } ){
          contact_id
          userss{
            firstName
            lastName
            email
            contact_no
          }
        }
      }`,
      variables: { userId: id }
    })
  }
  getContactSearchList(id,keywords) {
    return this.apollo.query({
      query: gql`query contacts($userId: String!, $keywords: String!){
        contacts(filter: { limit: 2, keywords: $keywords, userId: $userId })
        {
          userId
          userss{
            firstName
            lastName
          }
        }
      }`,
      variables: { userId:id, keywords:keywords}
    })
  }
  getnotifictionById(id) {
    return this.apollo.query({
      query: gql`
      query notification($id: String!){
        notification(id: $id){
          id
          cashier{
            firstName
          }
          amount
          voterId
          voter_ip_address
          cashier_ip_address
          cashier_id
          request_type
        }
      }
      `,
      variables: { id:id}
    })
  }
  getBalanceById(id) {
    return this.apollo.query({
      query: gql`query balance($userId: String!){
        balance(userId: $userId){
          amount
        }
      }`,
      variables: { userId:id}
    })
  }
}
