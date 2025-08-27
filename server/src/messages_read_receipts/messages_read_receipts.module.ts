import { Module } from '@nestjs/common';
import { MessagesReadReceiptsService } from './messages_read_receipts.service';
import { MessagesReadReceiptsGateway } from './messages_read_receipts.gateway';

@Module({
  providers: [MessagesReadReceiptsGateway, MessagesReadReceiptsService],
})
export class MessagesReadReceiptsModule {}
