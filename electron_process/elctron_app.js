module.exports = {init: function(
    electron,
    BrowserWindow,
    url,
    path
) {

    function ElectronApp() {
    }

    ElectronApp.prototype.start = function () {
        electron.on("window-all-closed", this._closeApp.bind(this));
        electron.on("activate", this._activate.bind(this));
        electron.on("ready", this._showWindow.bind(this));
    };

    ElectronApp.prototype._closeApp = function () {
        if (process.platform === "darwin") return;
        electron.quit();
    };

    ElectronApp.prototype._activate = function () {
        if (this._browserWindow !== null) return;
        this._showWindow();
    };

    ElectronApp.prototype._showWindow = function () {
        this._browserWindow = new BrowserWindow({width: 800, height: 600});
        this._browserWindow.setMenu(null);
        this._browserWindow.loadURL(url.format({
            pathname: path.join(__dirname, "index.html"),
            protocol: "file:",
            slashes: true
        }));
        this._browserWindow.webContents.openDevTools();
    };

    return ElectronApp;

}};