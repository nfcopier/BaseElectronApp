module.exports = {init: function (View) {

    return View.extend({

        regions: {
            mainContent: ".main-content"
        },
        
        template: function () { return `
            <div class="main-content"></div>
        `}

    });

}};