import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ms8qAwN6QOsyBY8DFnPg_dPGcW4JVpeA9eJZCjFTagQ",
  },
});
