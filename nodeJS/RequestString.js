"use strict";
exports.__esModule = true;
exports.RepoViewerString = exports.RepoString = exports.PinnViewerString = exports.PinnRequestString = void 0;
exports.PinnRequestString = "\n      query($userName:String!, $nr:Int!){\n        user(login:$userName) {\n        pinnedItems(first:$nr) {\n          nodes {\n            ... on Repository {\n              name\n              description\n              url\n            }\n          }\n        }\n      }\n    }\n  ";
exports.PinnViewerString = "\n    query ($nr:Int!) {\n        viewer {\n            pinnedItems(first:$nr) {\n                nodes {\n                    ... on Repository {\n                        name\n                        description\n                        url\n                    }\n                }\n            }\n        }\n    }\n";
exports.RepoString = "\nquery ($userName:String!, $nr:Int!){\n    user(login:$userName) {\n      repositories(first:$nr) {\n        nodes {\n          name\n          description\n          url\n        }\n      }\n    }\n  }\n";
exports.RepoViewerString = "\nquery ($nr:Int!) {\n    viewer {\n      repositories(first:$nr) {\n        nodes {\n          name\n          description\n          url\n        }\n      }\n    }\n  }\n";
//# sourceMappingURL=RequestString.js.map