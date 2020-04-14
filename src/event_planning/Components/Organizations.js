import React, { Component, useState } from "react";
import { Button, Icon, Divider, Popover, Menu, MenuItem } from "@blueprintjs/core";
import { ListGroup, ListGroupItem, Card, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import { Dropdown, DropdownButton } from "react-bootstrap";
import "../style.scss";

function Organiztions() {
    return (
        <>
            <div id="contentRowHeader" className="row">
                <div className="col-md-6">
                    <div id="tabsRow">
                        <div className="tabHeader">All Projects</div>
                        <div id="spacer" />
                        <div className="tabs">All task</div>
                        <div className="tabs">Running</div>
                        <div className="tabs">Finishing</div>
                    </div>
                </div>
                <div style={{ flex: "1" }} />
                <div id="sideBarTabs" className="bp3-input-group bp3-large">
                    <span className="bp3-icon bp3-icon-timeline-events"></span>
                    <input type="text" className="bp3-input" placeholder="The Fight Night of the Year" />
                    <span id="eventLabel" style={{ position: "absolute", right: "40px", color: "white", fontSize: "small", borderRight: "1px solid white", padding: "10px 15px 8px" }}>Event Running</span>
                    <DropdownButton id="dropdown-basic-button" alignRight>
                        <Dropdown.Item href="#/action-1">All Event</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Running</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Finishing</Dropdown.Item>
                    </DropdownButton>
                </div>
                <Button id="createEventBtn" rightIcon="add">Create Event</Button>
            </div>
            <Divider />
            <div id="cardsContainer" className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div id="cardBox" className="col-md-12 col-sm-12 mt-2">
                        <Card inverse>
                            <CardImg width="100%" src={"https://jvmp.nl/wp-content/uploads/2019/09/shutterstock_199419065.jpg"} alt="Card image cap" />
                            <CardImgOverlay>
                                <CardText id="cardText">The Fight Night of the Year</CardText>
                            </CardImgOverlay>
                        </Card>
                        <div id="progressTrack">
                            <div id="circle"></div>
                            <div id="line"></div>
                            <div id="circle" style={{ border: "none", backgroundColor: "#5063FF" }}></div>
                            <div id="line"></div>
                            <div id="circle"></div>
                            <div id="line"></div>
                            <div id="circle"></div>
                            <div id="line"></div>
                            <div id="circle" style={{ border: "none", backgroundColor: "#02937B" }}></div>
                        </div>
                        <div id="progressTrackHeadlines">
                            <div>Process</div>
                            <div id="spacer"></div>
                            <div style={{ color: "#5063FF" }}>Intransit</div>
                            <div id="spacer"></div>
                            <div>Intransit</div>
                            <div id="spacer"></div>
                            <div>Process</div>
                            <div id="spacer"></div>
                            <div style={{ color: "#02937B" }}>Done</div>
                        </div>
                        <div id="commentSection"><div className="mb-3">Don't miss the high adrenaline action at the Super Boxing League. The Fight Night shall be packed with high adrenaline combat action where 20</div><div id="commentDate">Friday, 12 July 2019</div></div>
                        <div id="commentSection" style={{ border: "1px solid #DCF3F0" }}>
                            <div style={{ fontWeight: "bolder" }}>Reserve Booth Space</div>
                            <div>Please reserve 20x30 booth space.</div>
                            <div>Owner : Sandra Greenv</div>
                            <div className='buttonGroup'>
                                <Button text="Process" id="processButton" minimal />
                                <div id="emptySpot" />
                                <div id="emptySpot" />
                                <div id="emptySpot" />
                            </div>
                        </div>
                        <div id="commentSection" style={{ border: "1px solid #E4E7EF" }}>
                            <div style={{ fontWeight: "bolder" }}>Book Hotels</div>
                            <div>Please reserve 20x30 booth space.</div>
                            <div>Owner : Diane Beneso</div>
                            <div className='buttonGroup'>
                                <Button text="inactive" id="inactiveButton" minimal disabled />
                                <div id="emptySpot" />
                                <div id="emptySpot" />
                                <div id="emptySpot" />
                            </div>
                        </div>
                        <div id="commentSection" style={{ border: "1px solid #E4E7EF" }}>
                            <div style={{ fontWeight: "bolder" }}>Book Hotels</div>
                            <div>Please reserve 20x30 booth space.</div>
                            <div>Owner : Diane Beneso</div>
                            <div className='buttonGroup'>
                                <Button text="inactive" id="inactiveButton" minimal disabled />
                                <div id="emptySpot" />
                                <div id="emptySpot" />
                                <div id="emptySpot" />
                            </div>
                        </div>
                        <div id="commentSection" style={{ border: "1px solid #DCF3F0" }}>
                            <div style={{ fontWeight: "bolder" }}>Reserve Booth Space</div>
                            <div>Please reserve 20x30 booth space.</div>
                            <div>Owner : Sandra Greenv</div>
                            <div className='buttonGroup'>
                                <Button text="Process" id="processButton" minimal />
                                <div id="emptySpot" />
                                <div id="emptySpot" />
                                <div id="emptySpot" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div id="cardBox" className="col-md-12 col-sm-12 mt-2">
                        <Card inverse>
                            <CardImg width="100%" src={"https://jvmp.nl/wp-content/uploads/2019/09/shutterstock_199419065.jpg"} alt="Card image cap" />
                            <CardImgOverlay>
                                <CardText id="cardText">The Fight Night of the Year</CardText>
                            </CardImgOverlay>
                        </Card>
                        <div id="progressTrack">
                            <div id="circle"></div>
                            <div id="line"></div>
                            <div id="circle"></div>
                            <div id="line"></div>
                            <div id="circle"></div>
                            <div id="line"></div>
                            <div id="circle"></div>
                            <div id="line"></div>
                            <div id="circle"></div>
                        </div>
                        <div id="progressTrackHeadlines">
                            <div>Process</div>
                            <div id="spacer"></div>
                            <div>Intransit</div>
                            <div id="spacer"></div>
                            <div>Intransit</div>
                            <div id="spacer"></div>
                            <div>Process</div>
                            <div id="spacer"></div>
                            <div>Done</div>
                        </div>
                        <div id="commentSection"><div className="mb-3">Don't miss the high adrenaline action at the Super Boxing League. The Fight Night shall be packed with high adrenaline combat action where 20</div><div id="commentDate">Friday, 12 July 2019</div></div>
                    </div>
                    <div id="cardBox" className="col-md-12 col-sm-12 mt-2">
                        <Card inverse>
                            <CardImg width="100%" src={"https://static.toiimg.com/photo/73045588.cms.cms"} alt="Card image cap" />
                            <CardImgOverlay>
                                <CardText id="cardText">The Fight Night of the Year</CardText>
                            </CardImgOverlay>
                        </Card>
                        <div id="progressTrack">
                            <div id="circle"></div>
                            <div id="line"></div>
                            <div id="circle"></div>
                            <div id="line"></div>
                            <div id="circle"></div>
                            <div id="line"></div>
                            <div id="circle"></div>
                            <div id="line"></div>
                            <div id="circle" style={{ border: "none", backgroundColor: "#02937B" }}></div>
                        </div>
                        <div id="progressTrackHeadlines">
                            <div>Process</div>
                            <div id="spacer"></div>
                            <div>Intransit</div>
                            <div id="spacer"></div>
                            <div>Intransit</div>
                            <div id="spacer"></div>
                            <div>Process</div>
                            <div id="spacer"></div>
                            <div style={{ color: "#02937B" }}>Done</div>
                        </div>
                        <div id="commentSection"><div className="mb-3">Don't miss the high adrenaline action at the Super Boxing League. The Fight Night shall be packed with high adrenaline combat action where 20</div><div id="commentDate" style={{ color: "#BBBBBB" }}>Friday, 12 July 2019</div></div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div id="cardBox" className="col-md-12 col-sm-12 mt-2">
                        <Card inverse>
                            <CardImg width="100%" src={"https://jvmp.nl/wp-content/uploads/2019/09/shutterstock_199419065.jpg"} alt="Card image cap" />
                            <CardImgOverlay>
                                <CardText id="cardText">The Fight Night of the Year</CardText>
                            </CardImgOverlay>
                        </Card>
                        <div id="progressTrack">
                            <div id="circle"></div>
                            <div id="line"></div>
                            <div id="circle"></div>
                            <div id="line"></div>
                            <div id="circle"></div>
                            <div id="line"></div>
                            <div id="circle"></div>
                            <div id="line"></div>
                            <div id="circle"></div>
                        </div>
                        <div id="progressTrackHeadlines">
                            <div>Process</div>
                            <div id="spacer"></div>
                            <div>Intransit</div>
                            <div id="spacer"></div>
                            <div>Intransit</div>
                            <div id="spacer"></div>
                            <div>Process</div>
                            <div id="spacer"></div>
                            <div>Done</div>
                        </div>
                        <div id="commentSection"><div className="mb-3">Don't miss the high adrenaline action at the Super Boxing League. The Fight Night shall be packed with high adrenaline combat action where 20</div><div id="commentDate">Friday, 12 July 2019</div></div>
                        <div id="commentSection" style={{ border: "1px solid #DCF3F0" }}>
                            <div style={{ fontWeight: "bolder" }}>Reserve Booth Space</div>
                            <div>Please reserve 20x30 booth space.</div>
                            <div>Owner : Sandra Greenv</div>
                            <div className='buttonGroup'>
                                <Button text="Process" id="processButton" minimal style={{ backgroundColor: '#5063FF' }} />
                                <div id="emptySpot" />
                                <div id="emptySpot" />
                                <div id="emptySpot" />
                            </div>
                        </div>
                        <div id="commentSection" style={{ border: "1px solid #E4E7EF" }}>
                            <div style={{ fontWeight: "bolder" }}>Book Hotels</div>
                            <div>Please reserve 20x30 booth space.</div>
                            <div>Owner : Diane Beneso</div>
                            <div className='buttonGroup'>
                                <Button text="inactive" id="inactiveButton" minimal disabled style={{ backgroundColor: '#5063FF' }} />
                                <div id="emptySpot" />
                                <div id="emptySpot" />
                                <div id="emptySpot" />
                            </div>
                        </div>
                        <div id="commentSection" style={{ border: "1px solid #E4E7EF" }}>
                            <div style={{ fontWeight: "bolder" }}>Book Hotels</div>
                            <div>Please reserve 20x30 booth space.</div>
                            <div>Owner : Diane Beneso</div>
                            <div className='buttonGroup'>
                                <Button text="inactive" id="inactiveButton" minimal disabled />
                                <div id="emptySpot" />
                                <div id="emptySpot" />
                                <div id="emptySpot" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div id="cardBox" className="col-md-12 col-sm-12 mt-2">
                        <Card inverse>
                            <CardImg width="100%" src={"https://jvmp.nl/wp-content/uploads/2019/09/shutterstock_199419065.jpg"} alt="Card image cap" />
                            <CardImgOverlay>
                                <CardText id="cardText">The Fight Night of the Year</CardText>
                            </CardImgOverlay>
                        </Card>
                        <div id="progressTrack">
                            <div id="circle"></div>
                            <div id="line"></div>
                            <div id="circle"></div>
                            <div id="line"></div>
                            <div id="circle"></div>
                            <div id="line"></div>
                            <div id="circle"></div>
                            <div id="line"></div>
                            <div id="circle" style={{ border: "none", backgroundColor: "#02937B" }}></div>
                        </div>
                        <div id="progressTrackHeadlines">
                            <div>Process</div>
                            <div id="spacer"></div>
                            <div>Intransit</div>
                            <div id="spacer"></div>
                            <div>Intransit</div>
                            <div id="spacer"></div>
                            <div>Process</div>
                            <div id="spacer"></div>
                            <div style={{ color: "#02937B" }}>Done</div>
                        </div>
                        <div id="commentSection"><div className="mb-3">Don't miss the high adrenaline action at the Super Boxing League. The Fight Night shall be packed with high adrenaline combat action where 20</div><div id="commentDate">Friday, 12 July 2019</div></div>
                        <div id="commentSection" style={{ border: "1px solid #DCF3F0" }}>
                            <div style={{ fontWeight: "bolder" }}>Reserve Booth Space</div>
                            <div>Please reserve 20x30 booth space.</div>
                            <div>Owner : Sandra Greenv</div>
                            <div className='buttonGroup'>
                                <Button text="Process" id="processButton" minimal style={{ backgroundColor: '#5063FF' }} />
                                <div id="emptySpot" />
                                <div id="emptySpot" />
                                <div id="emptySpot" />
                            </div>
                        </div>
                    </div>
                    <div id="cardBox" className="col-md-12 col-sm-12 mt-2">
                        <Card inverse>
                            <CardImg src={"https://static.toiimg.com/photo/73045588.cms.cms"} alt="Card image cap" />
                            <CardImgOverlay>
                                <CardText id="cardText">The Fight Night of the Year</CardText>
                            </CardImgOverlay>
                        </Card>
                        <div id="progressTrack">
                            <div id="circle"></div>
                            <div id="line"></div>
                            <div id="circle"></div>
                            <div id="line"></div>
                            <div id="circle"></div>
                            <div id="line"></div>
                            <div id="circle"></div>
                            <div id="line"></div>
                            <div id="circle" style={{ border: "none", backgroundColor: "#02937B" }}></div>
                        </div>
                        <div id="progressTrackHeadlines">
                            <div>Process</div>
                            <div id="spacer"></div>
                            <div>Intransit</div>
                            <div id="spacer"></div>
                            <div>Intransit</div>
                            <div id="spacer"></div>
                            <div>Process</div>
                            <div id="spacer"></div>
                            <div style={{ color: "#02937B" }}>Done</div>
                        </div>
                        <div style={{ fontSize: "x-small", float: "right", fontWeight: "bolder" }}>Friday, 12 July 2019</div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Organiztions;