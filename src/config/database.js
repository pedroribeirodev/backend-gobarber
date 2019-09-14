module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarbar',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
