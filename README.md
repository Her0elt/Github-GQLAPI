# Deno module for getting github profile pinns

To use the module you will need the JavaScript and TypeScript runtime [Deno](https://deno.land/)

## Usage

```typescript

//without types

import { getPinned } from "https://github.com/Her0elt/Github-GQLAPI/raw/master/deno/main.ts"

const pinns = await getPinned("github_username", nr_of_pinns, "github_token")

//with types

import { getPinned, Repo } from "https://github.com/Her0elt/Github-GQLAPI/raw/master/deno/main.ts"

const pinns: Array<Repo> = await getPinned("github_username", nr_of_pinns, "github_token")

//If you only want your own pinns 

import { getYourPinned, Repo } from "https://github.com/Her0elt/Github-GQLAPI/raw/master/deno/main.ts"

const pinns : Array<Repo> = await getYourPinned(10, "github_token");

//Module also exports the following functions that work the same way

import { geRepositories, getYourRepositories } from "https://github.com/Her0elt/Github-GQLAPI/raw/master/deno/main.ts"

//The module also exports a function that can be used to create your own request,
// to the Github GQL API or any other GQL API.
import { GQLRequest } from "https://github.com/Her0elt/Github-GQLAPI/raw/master/deno/main.ts"

GQLRequest("GQL_query_string", variables_object, token)
```
To run a program using the module use the following command:
```
deno run --allow-net file_name.ts  
```

You need the --allow-net flag because the module uses fetch to make the request to the github graphQL API.

## Important!
Make sure that your GitHub Token is correct, If it's not correct this might result in TypeError

## NodeJS 
It also does support nodeJS from the mainNode.js file, but this is not the main focus of this project and is just a copy paste version of the Deno implementation just roughly translate into JS with tsc, this is al.
