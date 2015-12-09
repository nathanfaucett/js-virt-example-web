var virt = require("virt"),
    virtDOM = require("virt-dom"),
    environment = require("environment"),
    eventListener = require("event_listener"),
    app = require("app_name-virt"),
    config = require("./config");


eventListener.on(environment.window, "load DOMContentLoaded", function() {
    app.init(config);
    virtDOM.render(virt.createView(app.Component), environment.document.getElementById("app"));
});
