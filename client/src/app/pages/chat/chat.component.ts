import { Component, OnInit, OnDestroy } from '@angular/core';
import io from 'socket.io-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {

  private socket;

  listMessage = [];

  message = '';

  constructor() { }

  ngOnInit() {
    // Init socket
    this.socket = io('/');  

    // Listen for `message` event from server
    this.socket.on('message', (msg) => {
      this.listMessage.push(msg);
    });
  }

  send() {
    // Send `message` event to server
    this.socket.emit('message', this.message);
    this.message = '';
  }

  ngOnDestroy(): void {
    // close web socket
    this.socket.close();
  }
}
