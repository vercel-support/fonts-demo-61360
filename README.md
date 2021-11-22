# Reproduction of a problem with serverless functions

Check out `/pages/api/hello.js`.

 * A font file is used by a SVG, which is located in `/fonts/inconsolata.ttf`
 * There is a `fonts/fonts.conf` file specifying where to look for fonts
 * An env variable is set like so: `FONTCONFIG_PATH=/var/task/.next/server/chunks/fonts/`
 * The `copy-webpack-plugin` plugin is used and configured in `next.config.js`
 * The `fonts` dir is in `vercel.json` in the `includeFiles` prop

## What happens on the server

Upon the font not showing, it puts the following error into the log:

```
Fontconfig error: Cannot load default config file: No such file: (null)
```

## Relevant issues

 * https://github.com/vercel/next.js/issues/8251
 * https://github.com/lovell/sharp/issues/2499
