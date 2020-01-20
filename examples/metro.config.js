const path = require('path');

module.exports = {
  /**
   * Ensure any imports inside the shared 'components' folder resolve to the local node_modules folder
   */
  resolver: {
    extraNodeModules: new Proxy(
      {},
      {
        get: (target, name) => path.join(process.cwd(), `node_modules/${name}`),
      },
    ),
  },
  /**
   * Add our workspace roots so that react native can find the source code for the included packages
   * in the monorepo
   */
  projectRoot: path.resolve(__dirname),
  watchFolders: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../node_modules')],
};
