/* eslint-disable class-methods-use-this */
import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket
} from "@nestjs/websockets";
import { Socket } from "socket.io";
import { HandlerService } from "./handler.service";
import { KeyVal } from "./keyVal.entity";

@WebSocketGateway(4001, { namespace: "/keyVal" })
export class KeyValGateway {
  constructor(private handlerService: HandlerService) {}

  @SubscribeMessage("saveKey")
  handleSendMessage(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket
  ) {
    const { key, value } = JSON.parse(JSON.stringify(data));
    if (!(key && value)) {
      client.emit("socket-error", "Invalid data");
      return;
    }
    const keyVal = new KeyVal();
    keyVal.key = key;
    keyVal.value = value;
    this.handlerService.save(keyVal);
    client.emit("saveKey", "a");
  }
}
