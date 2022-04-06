module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'adaf426a3a8e7b5d50334ba6b665161c'),
  },
});
