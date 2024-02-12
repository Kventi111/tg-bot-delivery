import { API_KEY, BASE_URL, TOKEN } from "./constants";

// Example POST method implementation:
async function postRequest(url = "", data = {}) {
  // const reqUrl = `${BASE_URL}${url}?key=${API_KEY}`
  const reqUrl = `${BASE_URL}${url}`;

  // Default options are marked with *
  const response = await fetch(reqUrl, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    // mode: "no-cors", // no-cors, *cors, same-origin
    // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: "include", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${TOKEN}`,
    },
    // redirect: "follow", // manual, *follow, error
    // referrerPolicy: "origin", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export const http = {
  post: (url, data) => postRequest(url, data),
};
