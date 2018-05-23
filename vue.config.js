const fs = require('fs')

/**
 * @vue/cli configuration.
 *
 * https://github.com/vuejs/vue-cli/blob/dev/docs/README.md
 */

module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {
        data: fs.readFileSync('src/assets/scss/_variables.scss', 'utf-8'),
      },
    },
  },
}
