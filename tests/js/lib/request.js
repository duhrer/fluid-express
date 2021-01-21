"use strict";
var fluid = require("infusion");

var kettle = fluid.require("%kettle");
kettle.loadTestingSupport();

fluid.defaults("fluid.test.express.request", {
    gradeNames: ["kettle.test.request.httpCookie"],
    url: {
        expander: {
            funcName: "fluid.stringTemplate",
            args:     ["%baseUrl%endpoint", { baseUrl: "{testEnvironment}.options.baseUrl", endpoint: "{that}.options.endpoint"}]
        }
    },
    port: "{testEnvironment}.options.port",
    method: "GET"
});
