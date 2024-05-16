LSReleaseLog is tool used to publish releases logs for easy client understanding.

To use it, simply attach `<LSReleaseLog githubrepo={'url'} trackinBranch={'master'} releaseTag={'release'} />` to your Next.js application and that is it.

Logs are displayed by looking at all PRs to the [trackingBranch] and if that PR has [releaseTag] attached, it will use title and message to create new log.