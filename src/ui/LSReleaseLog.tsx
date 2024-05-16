import React, { useEffect } from "react"
import "../styles/LSReleaseLog.css"
import { LSReleaseLogItem } from "./LSReleaseLogItem"
import { ILSReleaseLogProps } from "../interfaces/ILSReleaseLogProps"
import { Octokit } from "octokit"

export const LSReleaseLog = (props: ILSReleaseLogProps): React.JSX.Element => {

    const octokit = new Octokit({
        auth: "Bearer " + props.githubBearerToken
    })

    useEffect(() => {
        octokit.request('GET /repos/{owner}/{repo}/pulls?state=closed', {
            owner: props.repoOwner,
            repo: props.repoName,

        }).then((response: any) => {
            console.log(response.data)
        }).catch((error: any) => {
            console.log(error)
        })
    }, [])
    
    return (
        <div className={`ls-release-log-wrapper`}>
            <LSReleaseLogItem />
        </div>
    )
}