import React, { useState, useEffect } from "react";
import { Button, Icon, Divider, Popover, Menu, MenuItem, Breadcrumbs } from "@blueprintjs/core";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "../style.scss";
import StarRatings from 'react-star-ratings';


function Marketing() {

    const [ratingVal, setRating] = useState(0)

    const changeRating = (newRating, name) => {
        setRating(newRating);
    }
    return (
        <div id="marketing-campaigns">
            <div className="breadcrumb-row mt-3 mb-3">
                <Breadcrumbs items={[{ href: "/marketing", icon: "", text: 'Marketing Campaigns', disabled: true }, { href: "/marketing", icon: "", text: 'Launch Campaigns' }]} />
                <div className="spacer" />
                <div id="sideBarTabs" className="bp3-input-group bp3-large">
                    <span className="bp3-icon bp3-icon-timeline-events"></span>
                    <input type="text" className="bp3-input" placeholder="The Fight Night of the Year" />
                    <span id="eventLabel" style={{ position: "absolute", right: "40px", color: "#6076FF", fontSize: "small", borderRight: "1px solid white", padding: "10px 15px 8px" }}>Campaigns Running</span>
                    <DropdownButton id="dropdown-basic-button" alignRight>
                        <Dropdown.Item href="#/action-1">All Campaigns</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Running</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Finishing</Dropdown.Item>
                    </DropdownButton>
                </div>
                <Button id="createCampaignBtn" rightIcon="add">Create Campaign</Button>
            </div>
            <Divider />
            <div id="content-box" className="row mx-auto">
                <h5 className="col">Contact Us</h5>
                <div className="spacer" />
                <div id="rating-label" className="mr-2">Credit Rating</div>
                <StarRatings
                    rating={ratingVal}
                    starRatedColor="#5063FF"
                    starHoverColor="#5063FF"
                    changeRating={changeRating}
                    numberOfStars={5}
                    name='rating'
                    starDimension="17px"
                    starSpacing="0px"
                />
                <div id="contactus-row" className="col-md-12 col-sm-12">
                    <img className="mt-3" src={"https://mma.prnewswire.com/media/128167/bbdo_worldwide_logo.jpg?p=facebook"} />
                    <div className="first-col">
                        <div id="name"><span >Advertising Agency:</span> TBWA, Lisbon, Portugal</div>
                        <div id="name"><span >General Manager:</span> Leon Frind, Ben Eckersall</div>
                        <div id="name"><span >Status:</span><span id="tag"> Active</span> </div>
                        <div id="name"><span >Published/Aired:</span> June 2019</div>
                        <div id="name"><span >End Date:</span> 25/2/2019</div>
                    </div>
                    <div className="second-col">
                        <div id="name"><Icon icon="phone" /><span >Telephone:</span> +966 (0) 13 887 7831</div>
                        <div id="name"><Icon icon="phone" /><span >Mobile:</span> +966 (0) 13 887 7831</div>
                        <div id="name"><Icon icon="envelope" /><span >Email:</span> Info@tbwa.com.sa</div>
                        <div id="name"><Icon icon="globe-network" /><span >Website:</span> June 2019</div>
                        <div id="name"><Icon icon="geosearch" /><span >Location:</span> 25/2/2019</div>
                    </div>
                    <div className="third-col">
                        <div id="name"><Icon icon="phone" /><span >Phone</span> (920000222)</div>
                        <div id="name"><Icon icon="phone" /><span >Customer Service Center</span> (920001100)</div>
                        <div id="name"><Icon icon="envelope" /><span >Emergency</span> (933)</div>
                    </div>
                </div>
            </div>
            <div id="paragraph" className="row mx-auto">
                <h5>Description</h5>
                <p>The Saudi Arabian Grid Code is designed to ensure that transmission facilities and services are provided to all grid participants in the country in an efficient, economic, fair, non-discriminatory, and transparent manner. To facilitate this liaison, the Code sets out obligations and accountabilities of the TSP as well as of users for grid access and use and provides a set of rules, regulations, and standards of performance for this purpose. <br /><br />Being a key regulatory instrument to effectively deal with the new institutional arrangement and market operation, the development of the Saudi Arabian Grid Code is a landmark achievement by Saudi Electricity Company and has been termed a milestone in the Kingdom’s reform process.</p>
            </div>
            <div id="content-box" className="row mx-auto">
                <div id="breadcrumb-container">
                    <h5 className="col">Timeline Processes</h5>
                    <div id="process-breadcrumb" className="col-md-12 col-sm-12">
                        <div id="progress-track">
                            <Button icon="tick" minimal />
                            <div id="line"></div>
                            <Button icon="tick" minimal />
                            <div id="line" ></div>
                            <Button icon="tick" minimal />
                            <div id="line"></div>
                            <Button icon="tick" minimal />
                        </div>
                        {/* <div id="progress-track-headlines">
                            <div>Inprocess</div>
                            <div id="spacer"></div>
                            <div>Inprocess</div>
                            <div id="spacer"></div>
                            <div>Inprocess</div>
                            <div id="spacer"></div>
                            <div>Done</div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div id="media-campaigns" className="mx-auto">
                <div id="media-header">
                    <h5>Media Campaigns</h5>
                    <div className="spacer" />
                    <Button id="edit-btn" rightIcon="add" text="Edit" large />
                    <Button id="add-media-btn" rightIcon="volume-up" text="Add Media" large />
                </div>
                <div id="media-content">
                    <div id="img-container">
                        <img src={"https://image.dhgate.com/0x0s/f2-albu-g9-M01-8F-08-rBVaWFx_F8WAOkCmAAMmk5wsRyE293.jpg/2019-gym-men-039-s-hat-cover-guard-clothes.jpg"} />
                        <div id="img-title">Unbelievable Lives Here</div>
                        <div id="img-subtitle">Published/Aired July 2019</div>
                    </div>
                    <div id="img-container">
                        <img src={"https://image.dhgate.com/0x0s/f2-albu-g9-M01-8F-08-rBVaWFx_F8WAOkCmAAMmk5wsRyE293.jpg/2019-gym-men-039-s-hat-cover-guard-clothes.jpg"} />
                        <div id="img-title">Unbelievable Lives Here</div>
                        <div id="img-subtitle">Published/Aired July 2019</div>
                    </div>
                    <div id="img-container">
                        <img src={"https://image.dhgate.com/0x0s/f2-albu-g9-M01-8F-08-rBVaWFx_F8WAOkCmAAMmk5wsRyE293.jpg/2019-gym-men-039-s-hat-cover-guard-clothes.jpg"} />
                        <div id="img-title">Unbelievable Lives Here</div>
                        <div id="img-subtitle">Published/Aired July 2019</div>
                    </div>
                    <div id="img-container">
                        <img src={"https://image.dhgate.com/0x0s/f2-albu-g9-M01-8F-08-rBVaWFx_F8WAOkCmAAMmk5wsRyE293.jpg/2019-gym-men-039-s-hat-cover-guard-clothes.jpg"} />
                        <div id="img-title">Unbelievable Lives Here</div>
                        <div id="img-subtitle">Published/Aired July 2019</div>
                    </div>
                    <div id="img-container">
                        <img src={"https://image.dhgate.com/0x0s/f2-albu-g9-M01-8F-08-rBVaWFx_F8WAOkCmAAMmk5wsRyE293.jpg/2019-gym-men-039-s-hat-cover-guard-clothes.jpg"} />
                        <div id="img-title">Unbelievable Lives Here</div>
                        <div id="img-subtitle">Published/Aired July 2019</div>
                    </div>
                </div>
            </div>
            <div id="media-campaigns" className="mx-auto">
                <div id="media-header">
                    <h5>Doc Campaigns</h5>
                    <div className="spacer" />
                    <Button id="edit-btn" rightIcon="add" text="Edit" large />
                    <Button id="add-media-btn" rightIcon="document" text="Add Document" large />
                </div>
                <div id="media-content">
                    <div id="img-container">
                        <img src={"https://www.wada-ama.org/sites/default/files/resources/thumbnails/tdssa_2017_eng_page_01.jpg"} />
                        <div id="img-title">Unbelievable Lives Here</div>
                        <div id="img-subtitle">Published/Aired July 2019</div>
                    </div>
                    <div id="img-container">
                        <img src={"https://www.wada-ama.org/sites/default/files/resources/thumbnails/tdssa_2017_eng_page_01.jpg"} />
                        <div id="img-title">Unbelievable Lives Here</div>
                        <div id="img-subtitle">Published/Aired July 2019</div>
                    </div>
                    <div id="img-container">
                        <img src={"https://www.wada-ama.org/sites/default/files/resources/thumbnails/tdssa_2017_eng_page_01.jpg"} />
                        <div id="img-title">Unbelievable Lives Here</div>
                        <div id="img-subtitle">Published/Aired July 2019</div>
                    </div>
                    <div id="img-container">
                        <img src={"https://www.wada-ama.org/sites/default/files/resources/thumbnails/tdssa_2017_eng_page_01.jpg"} />
                        <div id="img-title">Unbelievable Lives Here</div>
                        <div id="img-subtitle">Published/Aired July 2019</div>
                    </div>
                    <div id="img-container">
                        <img src={"https://www.wada-ama.org/sites/default/files/resources/thumbnails/tdssa_2017_eng_page_01.jpg"} />
                        <div id="img-title">Unbelievable Lives Here</div>
                        <div id="img-subtitle">Published/Aired July 2019</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Marketing;