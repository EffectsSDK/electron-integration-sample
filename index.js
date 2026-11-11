const { app, BrowserWindow, systemPreferences } = require("electron");
const path = require("path");

const loadMainWindow = () => {
    const mainWindow = new BrowserWindow({
        width : 1280,
        height: 720,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
        }
    });

    mainWindow.loadFile(path.join(__dirname, "index.html"));
    //mainWindow.webContents.openDevTools();
}

app.on("ready", async () => {
    if (process.platform === "darwin") {
        const status = systemPreferences.getMediaAccessStatus("camera");
        console.log("Camera access status:", status);
        if (status !== "granted") {
            const granted = await systemPreferences.askForMediaAccess("camera");
            console.log("Camera access granted:", granted);
        }
    }
    loadMainWindow();
});
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        loadMainWindow();
    }
});