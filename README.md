# Steps to solve the issue

1. Create a new /api directory (Node.js runtime)
2. Add the route to that directory `/api/hello.js` instead of `pages/api/hello.js`
3. Change the configuration in `vercel.json` to support that
4. Remove all custom webpack configuration inside of `next.config.js`
5. Change the `FONTCONFIG_PATH` environment variable to `/var/task/fonts/`
6. Change the contents of `api/hello.js` to match the current
