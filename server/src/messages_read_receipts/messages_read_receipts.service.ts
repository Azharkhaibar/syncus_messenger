import { Injectable } from '@nestjs/common';
import { CreateMessagesReadReceiptDto } from './dto/create-messages_read_receipt.dto';
import { UpdateMessagesReadReceiptDto } from './dto/update-messages_read_receipt.dto';

@Injectable()
export class MessagesReadReceiptsService {
  create(createMessagesReadReceiptDto: CreateMessagesReadReceiptDto) {
    return 'This action adds a new messagesReadReceipt';
  }

  findAll() {
    return `This action returns all messagesReadReceipts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} messagesReadReceipt`;
  }

  update(id: number, updateMessagesReadReceiptDto: UpdateMessagesReadReceiptDto) {
    return `This action updates a #${id} messagesReadReceipt`;
  }

  remove(id: number) {
    return `This action removes a #${id} messagesReadReceipt`;
  }
}
