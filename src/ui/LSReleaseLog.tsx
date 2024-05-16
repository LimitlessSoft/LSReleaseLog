import React, { useEffect } from "react"
import "../styles/LSReleaseLog.css"
import { LSReleaseLogItem } from "./LSReleaseLogItem"
import { ILSReleaseLogProps } from "../interfaces/ILSReleaseLogProps"

export const LSReleaseLog = (props: ILSReleaseLogProps): React.JSX.Element => {

    useEffect(() => {
        fetch
    })
    
    return (
        <div className={`ls-release-log-wrapper`}>
            <LSReleaseLogItem />
        </div>
    )
}