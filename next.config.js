/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

module.exports = {
  reactStrictMode: true,
  basePath: "/TsWeb",
  i18n,
  env: {
    AUTHORIZATION: process.env.AUTHORIZATION,
    PERIODID: process.env.PERIODID,
    DATABASEID: process.env.DATABASEID,
  },
};
