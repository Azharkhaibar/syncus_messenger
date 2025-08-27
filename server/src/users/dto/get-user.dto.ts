import {
  countryEnum,
  genderEnum,
  UserStatus,
} from '../interface/users.interface';

export class GetUserDto {
  user_id: string;
  username: string;
  email: string;
  age?: number;
  country: countryEnum;
  gender: genderEnum;
  status: UserStatus;
  create_at: Date;
  updated_at: Date;
  last_login?: Date;
}
