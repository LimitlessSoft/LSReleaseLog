export interface ILSReleaseLogProps {
    githubBearerToken: string,
    repoOwner: string,
    repoName: string,
    releaseLabel?: string,
    trackingBranch?: string
}