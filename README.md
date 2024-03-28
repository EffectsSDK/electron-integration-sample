# Video Effects SDK - Electron Integration Sample
Add real-time AI video enhancement that makes video meeting experience more effective and comfortable to your application in a few hours. 

## Requirements

- Obtaining Effects SDK Customer ID
- Electron
- Nodejs

## Supported system
Windows, macOS, Linux (Astra Common Edition, RedOS, Ubuntu 16-20)

## Documentation
- [API Reference](https://effectssdk.com/sdk/web/docs/classes/tsvb.html)
- [Feature Usage](docs/Features-Usage-Examples.md)

## Obtaining Effects SDK Customer ID
Effects SDK Customer ID is required to get SDK working.

To receive a new trial Customer ID please fill in the contact form on [effectssdk.ai](https://effectssdk.ai/contacts) website.

## Techical Details

- CUSTOMER_ID should be provided to the SDK constructor.
- SDK has 4 speed/quality presets (different segmentationn models).
- To improve output FPS SDK has ability to skip the frames.
- Segmentation is implemented as a native C++ module.

## Features

- Virtual backgrounds (put image or video as a background) - **implemented**
- Use Desktop Capture as a background - **implemented**
- Background blur - **implemented**
- Beautification/Touch up my appearance - **implemented**
- Auto framing - **implemented**
- Auto color correction - **implemented**
- Layouts - **implemented**
- One basic Lower-Third - **implemented**
- Overlays - **implemented**
- New Lower-Thirds (5) - **implemented**
- Color filters - **implemented**
- Low-light mode - **implemented**
- Video clarity/Sharpness - **in progress**

## Environment setup and local run

Clone the repository

```sh
git clone git@github.com:EffectsSDK/electron-integration-sample.git
```

Update CUSTOMER_ID in index.html

```js
const sdk = new window.tsvb('{CUSTOMER_ID}', window.inferer);
```

Use native module depending on OS in preload.js

```js
const tsvb = require("./libs/win/tsvb");
const tsvb = require("./libs/linux/TSVB");
const tsvb = require("./libs/mac/tsvb");
```

Install dependencies

```sh
npm install
```

Run electron

```sh
npm start
```

## Manage effects

Use the SDK API according to the documentation after SDK instance is ready.

```js
sdk.onReady = () => {
    sdk.run();
    sdk.setBackground('image-background.jpg');
}
```