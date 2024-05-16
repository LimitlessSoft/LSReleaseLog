import React from "react"
import { ILSReleaseLogItemProps } from "../interfaces/ILSReleaseLogItemProps"

export const LSReleaseLogItem = (props: ILSReleaseLogItemProps): React.JSX.Element => {
    return (
        <div className={`ls-release-log-item-wrapper`}>
            <div>
                <div>{props.pullRequest.closed_at.toString()}</div>
            </div>
            <div>{props.pullRequest.body}</div>
        </div>
    )
}