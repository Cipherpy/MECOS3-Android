module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
   plugins: [
//     "transform-remove-console"
//   // ['@babel/plugin-transform-flow-strip-types'],
  [
    "@babel/plugin-proposal-decorators",
    {
      "legacy": true
    }
  ],
//   // [
//   //   "@babel/plugin-proposal-class-properties",
//   //   {
//   //     "loose": true
//   //   }
//   // ]
 ]

};
