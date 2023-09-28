import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { Socket, Server } from 'socket.io';

@WebSocketGateway()
export class DateGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('date')
  handleEvent(
    @MessageBody() body: any,
    @ConnectedSocket() client: Socket,
  ): any {
    // this.server.emit('date', body);
    return body;
  }
  handleDisconnect(client: any) {}
  handleConnection(client: any) {}
}
