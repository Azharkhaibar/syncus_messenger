export class GetRoomDto {
  room_id: number;
  room_name: string;
  room_description?: string;
  age_limit: number;
  rule?: string;
  created_at: Date;
  updated_at: Date;
  category_room_id: number;
  room_tag: string;
  creator_id: number;
  creator_name: string;
  member_count: number;
}
