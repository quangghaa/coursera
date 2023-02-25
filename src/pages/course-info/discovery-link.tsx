import React from "react";
import { ArrowRightLinkIcon } from "../../utils/course-info";

function DiscoveryLink(props: any) {
    return (
        <div className="about-bg">
                <div className="cin-content">
                    <div className="discover-link-wrapper">
                        <a href="#" className="discover-link">
                            <p>
                            Build employee skills, drive business results
                            </p>

                            <a href="#" className="dl-link">
                            Discover Coursera for Business
                            &nbsp;
                            <ArrowRightLinkIcon />
                            </a>
                        </a>
                    </div>
                </div>
            </div>
    )
}

export default DiscoveryLink;