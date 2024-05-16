import React, { useEffect } from "react"
import "../styles/LSReleaseLog.css"
import { LSReleaseLogItem } from "./LSReleaseLogItem"
import { ILSReleaseLogProps } from "../interfaces/ILSReleaseLogProps"
import { Octokit } from "octokit"

export const LSReleaseLog = (props: ILSReleaseLogProps): React.JSX.Element => {

    const [pullRequests, setPullRequests] = React.useState<any[] | undefined>(undefined)
    const [error, setError] = React.useState<string | undefined>(undefined)

    const octokit = new Octokit({
        auth: "Bearer " + props.githubBearerToken
    })

    useEffect(() => {
        octokit.request(`GET /repos/{owner}/{repo}/pulls?state=closed&base={trackingBranch}&page=1`, {
            owner: props.repoOwner,
            repo: props.repoName,
            trackingBranch: props.trackingBranch ?? `master`,
        }).then((response: any) => {
            setPullRequests(response.data.filter((pull: any) => pull.labels.find((label: any) => label.name === (props.releaseLabel ?? "release"))))
        }).catch((error: any) => {
            setError(error.message)
        })
    }, [])
    
    return (
        <div className={`ls-release-log-wrapper`}>
            { error && <div>{error}</div> }
            { !pullRequests && <div>Loading...</div> }
            { pullRequests && pullRequests.length === 0 && <div>No recent releases found</div> }
            { pullRequests && pullRequests.map((pullRequest: any, index: number) => {
                return (
                    <LSReleaseLogItem key={index} pullRequest={pullRequest} />
                )
            })}
        </div>
    )
}