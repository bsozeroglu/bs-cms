module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'de6a0fbb73a46c9d3012233211036762'),
  },
});
