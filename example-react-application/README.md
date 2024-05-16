This is example Next.js application which implements LSReleaseLog.
This application uses localy built version of LSReleaseLog instead of referencing it through `package.json`
To run this application you need to go to the root folder and start `npm i --legacy-peer-deps && npm run build` after which you will be able to start this application with `cd example-react-application` and then `npm run dev`

Also do not forget to populate `.env.local` with `NEXT_PUBLIC_GITHUB_BEARER_TOKEN, NEXT_PUBLIC_REPO_OWNER and NEXT_PUBLIC_REPO_NAME`