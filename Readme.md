## Usage

LSReleaseLog is tool used to publish releases logs to the client application.

To use it, simply attach `<LSReleaseLog githubBearerToken="personal-access-token" repoOwner="owner-of-the-repo" repoName="your-repository-name" />` to your React.js application and that is it.

To generate personal access token see https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens

Optional parameters are:
 - releaseLabel (default: release)
 - trackingBranch (default: master)

Logs are displayed by looking at all PRs to the [trackingBranch] and if that PR has [releaseLabel] attached, it will use display it as new item in release log.
Description of the PR will be used as text of the log, and `closed_at` date will be used as title.

## Contribution
If you want to implement some feature to this package, feel free to fork it and create PR