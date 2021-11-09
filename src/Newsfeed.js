import React from 'react'
import './Newsfeed.css'

function Newsfeed() {
    return (
        <div className="newsfeed">
            <div className="newsfeed__container">
                {/* CHART */}
                <div className="newsfeed__chartSection">
                    <div className="newsfeed__portfolioValue">
                        <h1>$114,656</h1>
                        <p>$44.63 (+0.04%) Today</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsfeed
