import { PartialType } from '@nestjs/mapped-types';
import { CreateMessagesReadReceiptDto } from './create-messages_read_receipt.dto';

export class UpdateMessagesReadReceiptDto extends PartialType(CreateMessagesReadReceiptDto) {
  id: number;
}
