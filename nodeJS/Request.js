"use strict";
exports.__esModule = true;
exports.GQLRequest = void 0;
var GITUB_API_URI = "https://api.github.com/graphql";
var fetch = require("node-fetch");
var GQLRequest = function (RequestString, variables, token) {
    return fetch(GITUB_API_URI, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "token " + token
        },
        body: JSON.stringify({ query: RequestString, variables: variables })
    });
};
exports.GQLRequest = GQLRequest;
//# sourceMappingURL=Request.js.map