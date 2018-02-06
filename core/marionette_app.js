module.exports = {init: function (
    RootLayout,
    Application
) {

    return Application.extend({

        region: "body",

        constructor: function () {
            this._rootLayout = new RootLayout();
            Application.prototype.constructor.apply(this, arguments);
        },

        onStart: function () {
            this.showView( this._rootLayout );
        }

    });

}};