
import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'


})

// install signal r package 
// use signale r by start connection ans initialize it 
// start connection 
// the fuction that run 
// backroll function 
export class SignalRService {
  
  private HubConnection!:signalR.HubConnection  // declare the connection 
  
  startConnection(){
   this.HubConnection=new signalR.HubConnectionBuilder().withUrl('https://localhost:7271/chathub').withAutomaticReconnect().build();
   this.HubConnection.start().then(()=>{console.log("conected")}).catch(err=>{console.log(err)})

  }
  sendmsg(user:string,msg:string){
    this.HubConnection.invoke('SendAsync',user,msg); // fuction that send to server 
  }

  // callback function
  public addeventListener(callback:(user:string,message:string)=>void){

    this.HubConnection.on("receive message",callback)

  }
}
