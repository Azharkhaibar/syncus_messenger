import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { MessagesReadReceiptsService } from './messages_read_receipts.service';
import { CreateMessagesReadReceiptDto } from './dto/create-messages_read_receipt.dto';
import { UpdateMessagesReadReceiptDto } from './dto/update-messages_read_receipt.dto';

@WebSocketGateway()
export class MessagesReadReceiptsGateway {
  constructor(
    private readonly messagesReadReceiptsService: MessagesReadReceiptsService,
  ) {}

  @SubscribeMessage('createMessagesReadReceipt')
  create(
    @MessageBody() createMessagesReadReceiptDto: CreateMessagesReadReceiptDto,
  ) {
    return this.messagesReadReceiptsService.create(
      createMessagesReadReceiptDto,
    );
  }

  @SubscribeMessage('findAllMessagesReadReceipts')
  findAll() {
    return this.messagesReadReceiptsService.findAll();
  }

  @SubscribeMessage('findOneMessagesReadReceipt')
  findOne(@MessageBody() id: number) {
    return this.messagesReadReceiptsService.findOne(id);
  }

  @SubscribeMessage('updateMessagesReadReceipt')
  update(
    @MessageBody() updateMessagesReadReceiptDto: UpdateMessagesReadReceiptDto,
  ) {
    return this.messagesReadReceiptsService.update(
      updateMessagesReadReceiptDto.id,
      updateMessagesReadReceiptDto,
    );
  }

  @SubscribeMessage('removeMessagesReadReceipt')
  remove(@MessageBody() id: number) {
    return this.messagesReadReceiptsService.remove(id);
  }
}
