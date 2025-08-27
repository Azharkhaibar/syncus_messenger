import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: true })
export class MessagesGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly messagesService: MessagesService) {}

  @SubscribeMessage('createMessage')
  create(@MessageBody() createMessageDto: CreateMessageDto) {
    const msg = this.messagesService.create(createMessageDto); // hapus await jika create() sinkron
    this.server.emit('newMessage', msg);
    return msg;
  }

  @SubscribeMessage('findAllMessages')
  findAll() {
    return this.messagesService.findAll(); 
  }

  @SubscribeMessage('findOneMessage')
  findOne(@MessageBody() id: number) {
    return this.messagesService.findOne(id);
  }

  @SubscribeMessage('updateMessage')
  update(@MessageBody() updateMessageDto: UpdateMessageDto) {
    const updatedMsg = this.messagesService.update(
      updateMessageDto.id,
      updateMessageDto,
    );
    this.server.emit('updatedMessage', updatedMsg);
    return updatedMsg;
  }

  @SubscribeMessage('removeMessage')
  remove(@MessageBody() id: number) {
    const result = this.messagesService.remove(id);
    this.server.emit('removedMessage', id);
    return { id, result };
  }
}
