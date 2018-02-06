const core = require("./core");

module.exports = {init:function () {

    const libraries = {
        marionette: require("backbone.marionette"),
        backbone: require("backbone"),
        underscore: require("underscore"),
        jquery: require("jquery")
    };

    const App = core.init(
        libraries
    );

    const theApp = new App();
    theApp.start();

}};