import { Expose } from 'class-transformer';
import { CloudFile } from '../models/cloudFile.model';

export class User {
  @Expose()
  userId: number;

  @Expose()
  username: string;

  @Expose()
  profileImageId: number;

  @Expose()
  coverImageId: number;

  @Expose()
  email: string;

  password: string;

  @Expose()
  userType: string;

  @Expose()
  userStatus: string;

  @Expose()
  rating: number;

  @Expose()
  isSetupComplete: boolean;

  verificationCode: string;

  accessCode: string;

  resetCode: string;
  
  @Expose()
  lastLogin: number;
  
  @Expose()
  lastActive: number;
  
  @Expose()
  dateCreated: number;

  profileImage: CloudFile;
  coverImage: CloudFile;
}
