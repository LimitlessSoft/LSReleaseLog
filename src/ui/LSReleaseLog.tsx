import React, { useEffect } from "react"
import "../styles/LSReleaseLog.css"
import { LSReleaseLogItem } from "./LSReleaseLogItem"
import { ILSReleaseLogProps } from "../interfaces/ILSReleaseLogProps"
import { Octokit } from "octokit"

export const LSReleaseLog = (props: ILSReleaseLogProps): React.JSX.Element => {

    useEffect(() => {
        const octokit = new Octokit({
            auth: process.env.REACT_APP_GITHUB_TOKEN
        })

        octokit.repos.list({
            owner: "LimitlessSoft",
            repo: "termodom--ecosystem"
        }).then((response: any) => {
            console.log(response)
        })
    
    })
    return (
        <div className={`ls-release-log-wrapper`}>
            <LSReleaseLogItem />
        </div>
    )
}