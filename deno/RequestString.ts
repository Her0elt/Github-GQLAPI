export const PinnRequestString = `
      query($userName:String!, $nr:Int!){
        user(login:$userName) {
        pinnedItems(first:$nr) {
          nodes {
            ... on Repository {
              name
              description
              url
            }
          }
        }
      }
    }
  `;
export const PinnViewerString = `
    query ($nr:Int!) {
        viewer {
            pinnedItems(first:$nr) {
                nodes {
                    ... on Repository {
                        name
                        description
                        url
                    }
                }
            }
        }
    }
`;
export const RepoString = `
query ($userName:String!, $nr:Int!){
    user(login:$userName) {
      repositories(first:$nr) {
        nodes {
          name
          description
          url
        }
      }
    }
  }
`;
export const RepoViewerString = `
query ($nr:Int!) {
    viewer {
      repositories(first:$nr) {
        nodes {
          name
          description
          url
        }
      }
    }
  }
`;
