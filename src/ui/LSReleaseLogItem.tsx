import React from "react"
import { ILSReleaseLogItemProps } from "../interfaces/ILSReleaseLogItemProps"
import moment from "moment"

export const LSReleaseLogItem = (props: ILSReleaseLogItemProps): React.JSX.Element => {
    return (
        <div className={`ls-release-log-item-wrapper`}>
            <div>
                <div>{moment(props.pullRequest.closed_at).format("DD.MM.yyyy (HH:mm)").toString()}</div>
            </div>
            <div>{props.pullRequest.body}</div>
        </div>
    )
}