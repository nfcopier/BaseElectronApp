const rootLayout = require("./root_layout");
const marionetteApp = require("./marionette_app");

module.exports = {init:function (libraries) {

    const RootLayout = rootLayout.init(
        libraries.marionette.View
    );

    return marionetteApp.init(
        RootLayout,
        libraries.marionette.Application
    );

}};