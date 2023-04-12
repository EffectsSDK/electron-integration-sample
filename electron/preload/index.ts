const os = require('os')

let tsvb;
switch (os.platform()) {
  case 'win32':
    tsvb = require("../../libs/win/tsvb");
    break
  case 'linux':
    tsvb = require("../../libs/linux/TSVB");
    break
  case 'darwin':
    tsvb = require("../../libs/mac/tsvb");
    break
  default:
    console.error('Unsupported platform');
}

const inference = new tsvb.InferenceSession();

interface Window {
  inferer: any;
}

window.inferer = {
  run: (data) => {
       return inference.run(data);
  },
  configure: (data) => {
       return inference.configure(data);
  },
  auth: (data) => {
       return inference.auth(data);
  },
  setPreset: (preset) => {
       inference.setPreset(preset);
  }
}