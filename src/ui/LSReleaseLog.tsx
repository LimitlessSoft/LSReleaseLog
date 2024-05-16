import React, { useEffect } from "react"
import "../styles/LSReleaseLog.css"
import { LSReleaseLogItem } from "./LSReleaseLogItem"
import { ILSReleaseLogProps } from "../interfaces/ILSReleaseLogProps"

export const LSReleaseLog = (props: ILSReleaseLogProps): React.JSX.Element => {

    const [pullRequests, setPullRequests] = React.useState<any[] | undefined>(undefined)
    const [error, setError] = React.useState<string | undefined>(undefined)

    useEffect(() => {
        fetch(`https://api.github.com/repos/${props.repoOwner}/${props.repoName}/pulls?state=closed&base=${props.trackingBranch ?? 'master'}&page=1`, {
            headers: {
                Authorization: `Bearer ${props.githubBearerToken}`
            }
        }).then((response) => {
            if (response.ok) {
                return response.json().then((data) => {
                    setPullRequests(data)
                }).catch((error) => {
                    setError(error.message)
                })
            } else {
                throw new Error('Failed to fetch release log')
            }
        }).catch((error) => {
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