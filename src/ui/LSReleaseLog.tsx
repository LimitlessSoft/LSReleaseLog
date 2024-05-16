import React from "react"
import "../styles/LSReleaseLog.css"
import { LSReleaseLogItem } from "./LSReleaseLogItem"

export const LSReleaseLog = (): React.JSX.Element => {
    return (
        <div className={`ls-release-log-wrapper`}>
            <LSReleaseLogItem />
        </div>
    )
}