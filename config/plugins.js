module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("diqa5ydqj"),
      api_key: env("563462577422767"),
      api_secret: env("7PQegpMWM5MTNCZCLnK56sB0g-g"),
    },
    actionOptions: {
      upload: {},
      delete: {},
    },
  },
  // ...
});
