module.exports = {
    plugins: {
      "postcss-pxtorem": {
        rootValue:100, 
        propList: ["*"], 
        unitPrecision: 5, 
        replace: true, 
        mediaQuery: false, 
        minPixelValue: 2,
        exclude:(e)=>{
          return false;
        }
      },
    },
  };