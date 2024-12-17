import { Expose } from 'class-transformer';
import { CloudFile } from '../models/cloudFile.model';
import { User as PrismaUser } from '@prisma/client';

export class User implements PrismaUser {
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

  @Expose()
  bio: string;

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
  lastLogin: string;
  
  @Expose()
  lastActive: string;
  
  @Expose()
  dateCreated: string;
  
  @Expose()
  googleId: string;
  
  @Expose()
  yandexId: string;
  
  @Expose()
  vkontakteId: string;

  @Expose()
  profileImage?: CloudFile;
  
  @Expose()
  coverImage?: CloudFile;
}
