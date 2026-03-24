import { FormsModule } from '@angular/forms';
import { SignalRService } from './../signal-r.service';
import { Component, inject, OnInit } from '@angular/core';


@Component({
  selector: 'app-signal-r',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './signal-r.component.html',
  styleUrl: './signal-r.component.scss'
})
export class SignalRComponent implements OnInit {
  user!:string
  message!:string
  messages:{user:string,message:string}[]=[]
  _signalR=inject(SignalRService);
  
 ngOnInit(): void {
    this._signalR.startConnection();
    this._signalR.addeventListener((user,message)=>{this.messages.push({user,message})})
  }
  sendmessage(){
    this._signalR.sendmsg(this.user,this.message)
  }
}
