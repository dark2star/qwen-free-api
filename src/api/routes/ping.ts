export default {
  prefix: "/api/ping",
  get: {
    "": async () => "pong",
  },
};
