module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
      rootValue: 75,
      // selectorBlackList: ["vant-"],
      propList: ["*"],
      exclude: /node_modules/,
    },
  },
};
