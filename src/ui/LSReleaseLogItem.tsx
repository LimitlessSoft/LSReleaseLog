import React from "react"

export const LSReleaseLogItem = (): React.JSX.Element => {
    return (
        <div className={`ls-release-log-item-wrapper`}>
            <div>
                <h3>Title</h3>
                <div>Date commited</div>
            </div>
            <div>This is some description of work done</div>
        </div>
    )
}