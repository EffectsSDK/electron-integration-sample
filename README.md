# Video Effects SDK - Electron Integration Sample
Add real-time AI video enhancement that makes video meeting experience more effective and comfortable to your application in a few hours. 

## Requirements

- Obtaining Effects SDK Customer ID
- Electron
- Nodejs

## Supported system
Windows, macOS, Linux (Astra Common Edition, RedOS, Ubuntu 16-20)

## Documentation
[SDK Documentation](https://effectssdk.com/sdk/web/docs/classes/tsvb.html)

## Obtaining Effects SDK Customer ID
Effects SDK Customer ID is required to get SDK working.

To receive a new trial Customer ID please fill in the contact form on [effectssdk.com](https://effectssdk.com/contacts) website.

## Techical Details

- CUSTOMER_ID should be provided to the SDK constructor.
- SDK has 3 speed/quality presets (different segmentationn models).
- To improve output FPS SDK has ability to skip the frames.
- Segmentation is implemented as a native C++ module.

## Features

- Virtual backgrounds (put image or video as a background) - **implemented**
- Use Desktop Capture as a background - **implemented**
- Background blur - **implemented**
- Beautification/Touch up my appearance - **implemented**
- Layouts - **implemented**
- Auto framing - **in progress**
- Auto color correction - **in progress**
- Color grading - **in progress**

## Application Structure
```sh
├─┬ dist-electron
│ ├─┬ main
│ │ └── index.js    > Compiled Electron-Main
│ └─┬ preload
│   └── index.js    > Compiled Preload-Scripts
├─┬ dist
│ └── index.html    > Compiled Electron-Renderer
├── public/             
│   └── assets/     > Static files
├─┬ electron
│ ├─┬ main
│ │ └── index.ts    > Electron-Main
│ └─┬ preload
│   └── index.ts    > Preload-Scripts
├── src/
│   └── App.vue     > Renderer-Scripts         
│   └── ...         
├── libs/           
│   └── ...         > Native C++ module
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── electron-builder.json5
```

- `dist-electron/` - This folder contains the compiled files for your Electron application. It contains two subfolders: `main/` and `preload/`.
  - `main/` - This folder contains the `index.js` file, which is the entry point for your Electron main process.
  - `preload/` - This folder contains the `index.js` file, which is the Preload process script.
- `dist/` - This folder contains the compiled `index.html` file of your Electron application.
- `public/` - This folder contains static files.
- `src/` - This folder contains the source code of your application.
- `public/` - This folder contains native C++ modules for OS.
- `index.html` - This file is the entry point for your Vue application.
- `package.json` - This is the npm configuration file that contains dependencies, scripts, and other information about your application.
- `tsconfig.json` - This is the TypeScript configuration file that allows you to configure the TypeScript compilation options.
- `vite.config.ts` - This is the Vite configuration file that allows you to configure the build options of your React application.
- `electron-builder.json5` - This is the Electron Builder configuration file that allows you to configure the build options of your Electron application.

## Environment setup and local run

Clone the repository

```sh
git clone git@github.com:EffectsSDK/electron-integration-sample.git
```

Update CUSTOMER_ID in index.html

```js
const sdk = new window.tsvb('{CUSTOMER_ID}', window.inferer);
```

Install dependencies

```sh
npm install
```

To start the application in development mode, run the following command:

```sh
npm run dev
```

To build an application, run the following command:

```sh
npm run build
```

## Build on production

After the build, the `release` folder appears in the root of the project, which contains the application installer, as well as the already unpacked application. The corresponding distribution is compiled for each platform.

## Manage effects

Use the SDK API according to the documentation after SDK instance is ready.

```js
sdk.onReady = () => {
    sdk.run();
    sdk.setBackground('./assets/image-background.jpg');
}
```