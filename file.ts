import fs from 'fs';
import string_decoder from 'string_decoder';

// Synchronously read the content of a text file one line at a time
// Note, caller must complete the iteration for file to be closed
//        ie: don't break out early from the loop calling this function
export function* getFileLinesSync(filename: string, encoding: BufferEncoding) {
  let fd = fs.openSync(filename, 'r');
  let buf = Buffer.allocUnsafe(32768);
  let pos = 0;
  let decoder = new string_decoder.StringDecoder(encoding || 'UTF8');
  let lineStart = '';

  while (true) {
    // Read buffer
    let bytesRead = fs.readSync(fd, buf, 0, buf.length, pos);
    pos += bytesRead;

    // Decode string
    let str;
    if (bytesRead < buf.length) str = lineStart + decoder.end(buf.subarray(0, bytesRead));
    else str = lineStart + decoder.write(buf);

    // Split into lines and yield the complete ones
    let lines = str.split(/\r?\n/);
    for (let i = 0; i < lines.length - 1; i++) {
      yield lines[i];
    }

    // The last line is the start of the first line in the next chunk
    lineStart = lines[lines.length - 1];

    // quit if eof
    if (bytesRead < buf.length) break;
  }

  // Final line
  yield lineStart;

  fs.closeSync(fd);
}
