import { v2 as cloudinary } from "cloudinary"

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export class CloudinaryService {
  static async UploadFile(file: string, folder?: string) {
    try {
      const res = await cloudinary.uploader.upload(file, {
        resource_type: 'auto',
        eager: [{ width: 1000, height: 1000, crop: 'fit' }],
        folder: folder ? folder : 'General',
      });
      return res;
    } catch (error) {
      console.log(error)
    }
  }

  static async DeleteFile(publicID: string) {
    return cloudinary.uploader.destroy(publicID);
  }
}
