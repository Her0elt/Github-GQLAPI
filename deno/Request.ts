const GITUB_API_URI = "https://api.github.com/graphql";

export const GQLRequest = (
  RequestString: String,
  variables: object,
  token: any
): Promise<any> => {
  return fetch(GITUB_API_URI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${token}`,
    },
    body: JSON.stringify({ query: RequestString, variables: variables }),
  });
};
