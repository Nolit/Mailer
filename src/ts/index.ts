/// <reference path="../../typings/index.d.ts" />

const electron = require('electron');
const config = require('config');
const path = require('path');

const BrowserWindow: typeof Electron.BrowserWindow = electron.BrowserWindow;
const app: Electron.App = electron.app;
const indexPath = path.join(config.path.dist, 'index.html');

class MyApplication {
    mainWindow: Electron.BrowserWindow = null;

    constructor(public app: Electron.App){
        this.app.on('window-all-closed', this.onWindowAllClosed);
        this.app.on('ready', this.onReady);
    }

    onWindowAllClosed(){
        if(process.platform != 'darwin'){
            this.app.quit();
        }
    }

    onReady(){
        this.mainWindow = new BrowserWindow({
            width: 600,
            height: 400,
            minWidth: 300,
            minHeight: 200,
            acceptFirstMouse: true,
            titleBarStyle: 'hidden'
        });
    
        console.log(indexPath);
        this.mainWindow.loadURL(indexPath);

        this.mainWindow.on('closed', () => {
            this.mainWindow = null;
        });
    }
}
const myapp = new MyApplication(app);