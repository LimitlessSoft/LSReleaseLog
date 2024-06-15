## Usage

LSReleaseLog is tool used to easy log your project releases to the client.

To install it, run `npm i ls-release-log`

To use it, simply attach `<LSReleaseLog githubBearerToken="personal-access-token" repoOwner="owner-of-the-repo" repoName="your-repository-name" />` to your React.js application and that is it.

After that, each PR created to the tracking branch (default: master) with attached label (default: release) will be displayed shown in your application.

To generate personal access token see https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens

Optional parameters are:
 - releaseLabel (default: release)
 - trackingBranch (default: master)

Logs are displayed by looking at all PRs to the [trackingBranch] and if that PR has [releaseLabel] attached, it will use display it as new item in release log.
Description of the PR will be used as text of the log, and `closed_at` date will be used as title.

![](https://i.postimg.cc/28JvkFTC/Screenshot-2.png)

## Contribution
If you want to implement some feature to this package, feel free to fork it and create PR
