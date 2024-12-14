import { Readable } from 'stream';
import * as fs from 'fs';

export class FileHelper {
  static streamToBuffer(stream: any) {
    return new Promise((resolve, reject) => {
      const chunks = [];
      stream.on('data', (chunk) => chunks.push(chunk));
      stream.on('end', () => resolve(Buffer.concat(chunks)));
      stream.on('error', (error) => reject(error));
    });
  }

  static async binaryStringToStream(binaryString: string): Promise<Readable> {
    const stream = new Readable();
    stream._read = () => null; // Necessary to implement _read method

    // Write the binary string data to the stream
    stream.push(Buffer.from(binaryString, 'binary'));
    stream.push(null); // Signal the end of the stream

    return stream;
  }

  static async storeBinaryStreamAsFile(
    binaryStream: Buffer,
    filePath: string,
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      const writeStream = fs.createWriteStream(filePath, 'binary');

      // Write the binary stream to the file
      writeStream.write(binaryStream, (error: Error | null) => {
        if (error) {
          reject(error);
        } else {
          // Close the write stream
          writeStream.end();
          resolve();
        }
      });

      // Handle stream errors
      writeStream.on('error', (error: Error) => {
        reject(error);
      });
    });
  }
}
