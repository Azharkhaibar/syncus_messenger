export class GetMessageDto {
  sender: number;
  receiver?: number;
  room_id?: number;
  content: string;
  type?: string;
  status?: string;
}
