// import { symlink } from 'fs';

var fs = require('fs');
var THE_FILE = `${process.env.PWD}/files/file.txt`;
var THE_FILE_COPY = `${process.env.PWD}/files/fileCopy.txt`;

const writeFile = (str) => {
  const buffer = Buffer.from(str, 'utf-8');

  fs.writeFile(THE_FILE, str, (err) => {
    console.log('Write error: ', err);
  });
};

const appendFile = (str) => {
  fs.appendFile(THE_FILE, str, (err) => {
    console.log('Append err: ', err);
  });
};

const readFile = () => {
  fs.readFile(THE_FILE, 'utf-8', (err, data) => {
    if (err) {
      console.log('Read file err: ', err);
    } else {
      console.log(data);
    }
  });
};

const copyFile = (fromFile, destFile) => {
  // fs.copyFile(fromFile, destFile, (err) => {
  //   if (err) {
  //     console.log('Copy file err: ', err);
  //   } else {
  //     console.log('Copied! ');
  //   }
  // });

  const fr = fs.createReadStream(fromFile);
  const to = fs.createWriteStream(destFile);

  //readStream.pipe(writeStream) -> working with streams

  fr.pipe(to)
    .on('finish', () => console.log('done'));
};

const renameFile = (oldName, newName) => {
  fs.rename(oldName, newName, (err) => {
    if (err) {
      console.log('Rename file err: ', err);
    } else {
      console.log('Renamed to ', newName);
    }
  });
};

const removeFile = (path) => {
  fs.unlink(path, (err) => {
    if (err) {
      console.log('Remove file err: ', err);
    } else {
      console.log('Removed file', path);
    }
  });
};

const symLink = (link) => {
  fs.symlink(THE_FILE, link, (err) => {
    if (err) {
      console.log('Symlink file err: ', err);
    } else {
      console.log('Symlinked file', link);
    }
  });
};

const statFile = (file) => {
  fs.open(file, 'r', (err, fd) => {
    if (err) {
      console.log('Open file err: ', err);
      return;
    }

    fs.fstat(fd, (err, stats) => {
      if (err) {
        console.log('Fstat file err: ', err);
        return;
      }

      console.log('Fstats of file: ', file, stats);
    });
  });
};

//writeFile('Hello there!!!! \n');
//appendFile('Let it snow!\n');
//readFile();
copyFile(THE_FILE, 'files/copy.txt');
//rename('files/link.txt', 'files/file.txt');
//removeFile('files/link.txt');
//symLink('files/link.txt');
//statFile('files/link.txt');





// const base64 = Buffer.from('HELLO', 'utf-8').toString('base64');
// console.log(base64, 'base64');
// const str = Buffer.from(base64, 'base64').toString('utf-8');
// console.log(str, 'str');