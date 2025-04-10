const { contextBridge, ipcRenderer } = require('electron')
const tsvb = require("./libs/win/tsvb");
//const tsvb = require("./libs/linux/TSVB");
//const tsvb = require("./libs/mac/tsvb");

const inference = new tsvb.InferenceSession();
let port;

//this method works started from sdk v3.5.3
window.addEventListener('message', (event) => {
     if (event.source !== window) return;
     if (event.data.type === 'tsvb-custom-inference-port') {
          port = event.data.port;
          port.onmessage = async (event) => {
               const input = new Float32Array(event.data.input);
               const output = new Float32Array(event.data.output);
               await inference.run(input, output);
               port.postMessage({ input, output }, [input.buffer, output.buffer]);  
          };
     }
});

contextBridge.exposeInMainWorld('inferer', {
     configure: (data) => {
          return inference.configure(data);
     },
     auth: (data) => {
          return inference.auth(data);
     },
     setPreset: (preset) => {
          inference.setPreset(preset);
     }
});