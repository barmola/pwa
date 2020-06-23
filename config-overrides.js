const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
      fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
           style: true,
    }),
   addLessLoader({
     javascriptEnabled: true,
     modifyVars: { '@primary-color': '#304AFF',
                    '@success-color':"#1fcc50"  
    },
  }),
  );