import path from "path";
import SftpClient from 'ssh2-sftp-client';
import dotenv from 'dotenv';

dotenv.config();

const config = {
  host: process.env.HOST,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  port: process.env.PORT || 22,
};

async function main() {
  const client = new SftpClient();

  const localPath = path.join(new URL('.', import.meta.url).pathname, 'dist');
  const remotePath = process.env.REMOTE_PATH;

  try {
    client.on('upload', info => {
      console.log(`Uploaded ${info.source}`);
    });

    await client.connect(config);
    await client.uploadDir(localPath, remotePath);
  } finally {
    return client.end();
  }
}

main()
  .then(msg => {
    console.log(msg);
  })
  .catch(err => {
    console.log(`main error: ${err.message}`);
  });
