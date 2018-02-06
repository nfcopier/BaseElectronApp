if (_inRenderProcess())
    _startApplication();
else
    _startElectron();

function _inRenderProcess(){
    return (process && process.type === 'renderer');
}

function _startApplication() {
    const assembler = require("./assembler");
    assembler.init()
}

function _startElectron() {
    const electronProcess = require("./electron_process");
    electronProcess.init();
}