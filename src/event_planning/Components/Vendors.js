import React, { useState } from "react";
import { Button, Icon, Divider } from "@blueprintjs/core";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { FormGroup, Label, Input } from "reactstrap";
import StarRatings from 'react-star-ratings';
import "../style.scss";

function Vendors() {
    const [ratingVal, setRating] = useState(0)

    const [showModal, setShow] = useState(false);

    const handleModalClose = () => setShow(false);

    const handleModalShow = () => setShow(true);

    const changeRating = (newRating, name) => {
        setRating(newRating);
    }
    let modal =
        <>
            <div id="modal-container" onClick={handleModalClose}></div>
            <div id="modal">
                <div id="modal-header" >
                    <div id="modal-title-container">
                        <div id="modal-title">Vendors info</div>
                    </div>
                    <div id="progress-track">
                        <div id="circle" className="active"></div>
                        <div id="line" ></div>
                        <div id="circle"></div>
                        <div id="line"></div>
                        <div id="circle"></div>
                        <div id="line"></div>
                        <div id="circle"></div>
                    </div>
                    <Button id="modal-btn" rightIcon="caret-right" text="Next Step" />
                </div>
                <div id="textarea-box" >
                    <FormGroup>
                        <Label className="mt-2">
                            <div className="col">Description Vendors</div>
                            <Input id="subtitle" placeholder="Be clear and descriptive."></Input>
                        </Label>
                        <Divider />
                        <Input type="textarea" name="text" rows={4} />
                        <div className="tag-icons">
                            <Button minimal icon="timeline-events" />
                            <Button minimal icon="document-open" />
                            <Button minimal icon="user" />
                        </div>
                    </FormGroup>
                </div>
                <div id="feesRow" className="row mx-auto">
                    <div id="wrapper" className="col-md-3 col-sm-3 mt-2">
                        <div id="item" className="col-md-12 col-sm-12">
                            <div id="title" className="col-md-12 col-sm-12">Base Price (AU$)</div>
                            <Input id="subtitle" className="col" placeholder="Be clear and descriptive"></Input>
                        </div>
                    </div>
                    <div id="wrapper" className="col-md-3 col-sm-3 mt-2">
                        <div id="item" className="col-md-12 col-sm-12">
                            <div id="title" className="col-md-12 col-sm-12">Total Tickets</div>
                            <Input id="subtitle" className="col" placeholder="Be clear and descriptive"></Input>
                        </div>
                    </div>
                    <div id="wrapper" className="col-md-3 col-sm-3 mt-2">
                        <div id="item" className="col-md-12 col-sm-12">
                            <div id="title" className="col-md-12 col-sm-12">Max. Per Customer</div>
                            <Input id="subtitle" className="col" placeholder="Be clear and descriptive"></Input>
                        </div>
                    </div>
                    <div id="wrapper" className="col-md-3 col-sm-3 mt-2">
                        <div id="item" className="col-md-12 col-sm-12">
                            <div id="title" className="col-md-12 col-sm-12">Max. Per Customer</div>
                            <Input id="subtitle" className="col" placeholder="Be clear and descriptive"></Input>
                        </div>
                    </div>
                </div>
                <div id="feesRow" className="row mx-auto">
                    <div id="wrapper" className="col-md-3 col-sm-3 mt-2">
                        <div id="item" className="col-md-12 col-sm-12">
                            <div id="title" className="col-md-12 col-sm-12">Base Price (AU$)</div>
                            <Input id="subtitle" className="col" placeholder="Be clear and descriptive"></Input>
                        </div>
                    </div>
                    <div id="wrapper" className="col-md-3 col-sm-3 mt-2">
                        <div id="item" className="col-md-12 col-sm-12">
                            <div id="title" className="col-md-12 col-sm-12">Total Tickets</div>
                            <Input id="subtitle" className="col" placeholder="Be clear and descriptive"></Input>
                        </div>
                    </div>
                    <div id="wrapper" className="col-md-3 col-sm-3 mt-2">
                        <div id="item" className="col-md-12 col-sm-12">
                            <div id="title" className="col-md-12 col-sm-12">Max. Per Customer</div>
                            <Input id="subtitle" className="col" placeholder="Be clear and descriptive"></Input>
                        </div>
                    </div>
                    <div id="wrapper" className="col-md-3 col-sm-3 mt-2">
                        <div id="item" className="col-md-12 col-sm-12">
                            <div id="title" className="col-md-12 col-sm-12">Max. Per Customer</div>
                            <Input id="subtitle" className="col" placeholder="Be clear and descriptive"></Input>
                        </div>
                    </div>
                </div>
                <div id="feesRow" className="row mx-auto">
                    <div id="wrapper" className="col-md-3 col-sm-3 mt-2">
                        <div id="item" className="col-md-12 col-sm-12">
                            <div id="title" className="col-md-12 col-sm-12">Base Price (AU$)</div>
                            <Input id="subtitle" className="col" placeholder="Be clear and descriptive"></Input>
                        </div>
                    </div>
                    <div id="wrapper" className="col-md-3 col-sm-3 mt-2">
                        <div id="item" className="col-md-12 col-sm-12">
                            <div id="title" className="col-md-12 col-sm-12">Total Tickets</div>
                            <Input id="subtitle" className="col" placeholder="Be clear and descriptive"></Input>
                        </div>
                    </div>
                    <div id="wrapper" className="col-md-3 col-sm-3 mt-2">
                        <div id="item" className="col-md-12 col-sm-12">
                            <div id="title" className="col-md-12 col-sm-12">Max. Per Customer</div>
                            <Input id="subtitle" className="col" placeholder="Be clear and descriptive"></Input>
                        </div>
                    </div>
                    <div id="wrapper" className="col-md-3 col-sm-3 mt-2">
                        <div id="item" className="col-md-12 col-sm-12">
                            <div id="title" className="col-md-12 col-sm-12">Max. Per Customer</div>
                            <Input id="subtitle" className="col" placeholder="Be clear and descriptive"></Input>
                        </div>
                    </div>
                </div>
            </div>
        </>

    let rows = [];

    let rating = <StarRatings
        rating={ratingVal}
        starRatedColor="#5063FF"
        starHoverColor="#5063FF"
        changeRating={changeRating}
        numberOfStars={5}
        name='rating'
        starDimension="17px"
        starSpacing="0px"
    />

    let status = { value: "" };

    for (let i = 0; i <= 20; i++) {
        rows.push(<tr id="table-content" className="mx-auto" key={i} style={{ backgroundColor: i % 2 !== 0 ? "white" : "#F5F6FA" }}>
            <td>AUSTRALI0001</td>
            <td>Australian Bike</td>
            <td>Australian Bike</td>
            <td>Australian Bike</td>
            <td>{rating}</td>
            <td><span id="preference-tag" style={{ padding: '5px 10px' }}>Referred</span></td>
            <td><span id="status-tag" style={{ padding: '5px 10px', backgroundColor: status.value.localeCompare("Active") === 0 ? "#04B799" : "#DC858D" }}>
                {i === 0 || i === 6 || i === 13 ? status.value = "Active" : status.value = "Inactive"}
            </span></td>
            <td id="table-icons"><Icon icon="globe-network" /><Icon icon="inbox-filtered" /><Icon icon="map-marker" /><Icon icon="phone" /></td>
            <td>25/2/2019</td>
        </tr>)
    }
    return (
        <div id="vendors">
            <div id="content-row-header" className="row">
                <div className="">
                    <div id="tabs-row">
                        <div className="tab-header">Vendors</div>
                    </div>
                </div>
                <div id="spacer" />
                <div id="btn-group">
                    <div id="toolbar" className="bp3-input-group bp3-large">
                        <span className="bp3-icon bp3-icon-timeline-events"></span>
                        <input type="text" className="bp3-input" placeholder="The Fight Night of the Year" />
                        <span id="event-label">Suppliers</span>
                        <DropdownButton id="dropdown-basic-button" title="" alignRight>
                            <Dropdown.Item href="#/action-1">Suppliers</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Purchasers</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <Button id="action-btn" rightIcon="add" text="Excel" large />
                    <Button id="action-btn" rightIcon="add" text="Print" large />
                    <Button id="action-btn" rightIcon="add" text="Send" large />
                    <Button id="add-vendors-btn" rightIcon="add" text="Add Vendors" large onClick={handleModalShow} />
                </div>
                {showModal && modal}
                {/* Modal */}
                {/* <Modal show={showModal} onHide={handleModalClose} dialogClassName="modal-90w" aria-labelledby="modal-styling">
                    <Modal.Header id="modal-styling">
                        <Modal.Title>Vendors Info</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button intent="danger" onClick={handleModalClose}>
                            Close
                         </Button>
                        <Button intent="primary" onClick={handleModalClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal> */}
                {/* Modal */}
            </div>
            <Divider />
            <div id='table-container'>
                <table>
                    <thead>
                        <tr id="table-header">
                            <th>Account Number</th>
                            <th>Name</th>
                            <th>Company</th>
                            <th>Department</th>
                            <th>Credit Rating</th>
                            <th>Preference</th>
                            <th>Active Status</th>
                            <th>Contact</th>
                            <th>Modified Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Vendors;