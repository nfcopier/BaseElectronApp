const electron = require("electron");
const url = require("url");
const path = require("path");
const electronApp = require("./elctron_app");

module.exports = {init:function () {

    const ElectronApp = electronApp.init(
        electron.app,
        electron.BrowserWindow,
        url,
        path
    );

    const app = new ElectronApp();
    app.start();

}};