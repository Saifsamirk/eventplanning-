import React, { useState } from "react";
import { Button, Icon, Divider, Popover, Menu, MenuItem, TagInput } from "@blueprintjs/core";
import { DateInput } from "@blueprintjs/datetime";
import { Card, CardText, CardImg, CardImgOverlay, CardBody, FormGroup, Label, Input } from 'reactstrap';
import Select, { components } from "react-select";
import { Form, Dropdown, DropdownButton } from "react-bootstrap";
import "../style.scss";

let VALUES = ["saif", "Mo"]

const AddIcon = () => {
    return (
        <div id="addIcon">
            <Icon icon="add" /></div>
    );
};

const DropdownIndicator = props => {
    return (
        <components.DropdownIndicator {...props}>
            <AddIcon />
        </components.DropdownIndicator>
    );
};

function Events() {
    const [leftIcon, handleLeftIcon] = useState(true);
    const [disabled, handleDisabledChange] = useState(false);
    const [values, setValues] = useState(VALUES);
    const handleClear = () => setValues(VALUES.length > 0 ? [] : VALUES);

    const clearButton = (
        <Button
            disabled={disabled}
            icon={values.length > 1 ? "cross" : "refresh"}
            minimal={true}
            onClick={handleClear}
        />
    );

    return (
        <div id="events_activities">
            <div id="events_header" >
                <div id="tabRow">
                    <div id="tabHeader">Event info</div>
                </div>
                <div id="progressTrack">
                    <div id="circle" className="active"></div>
                    <div id="line" ></div>
                    <div id="circle"></div>
                    <div id="line"></div>
                    <div id="circle"></div>
                    <div id="line"></div>
                    <div id="circle"></div>
                </div>
                <div id="sideBarTabs" className="bp3-input-group bp3-large">
                    <span className="bp3-icon bp3-icon-timeline-events"></span>
                    <input type="text" className="bp3-input" placeholder="The Fight Night of the Year" />
                    <DropdownButton id="dropdown-basic-button" alignRight>
                        <Dropdown.Item href="#/action-1">All Event</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Running</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Finishing</Dropdown.Item>
                    </DropdownButton>
                </div>
                <Button id="nextStepBtn" rightIcon="caret-right" text="Next Step" />
            </div>
            <Divider />
            <div id="textareaBox" className="row mx-auto">
                <FormGroup>
                    <Label className="mt-2">
                        <div className="col">Title Event</div>
                        <Input id="subtitle" placeholder="Be clear and descriptive."></Input>
                    </Label>
                    <Divider className="row mx-auto" />
                    <Input type="textarea" name="text" rows={5} />
                </FormGroup>
            </div>
            {/* <div className="vBackground" /> */}
            <div id="icons_row" className="row">
                <div className="tagIcons">
                    <Button minimal icon="timeline-events" />
                    <Button minimal icon="document-open" />
                    <Button minimal icon="user" /></div>
                <div id="selectContainer">
                    <div id="label">Responsible person</div>
                    <Select className="col-md col-sm-4" placeholder="" isSearchable isMulti components={{ DropdownIndicator }}
                        options={[{ label: "saif", value: "saif" }, { label: "Muhammad", value: "Muhammad" }]} />
                </div>
                {/* <TagInput
                    leftIcon={leftIcon ? "add" : undefined}
                    //    onChange={this.handleChange}
                    placeholder="Separate values with commas..."
                    rightElement={clearButton}
                    //    tagProps={getTagProps}
                    values={values}
                /> */}
            </div>
            <div id="feesRow" className="row">
                <div id="wrapper" className="col-md-4 col-sm-4 mt-2">
                    <div id="item" className="col-md-12 col-sm-12">
                        <div id="title" className="col-md-12 col-sm-12">Base Price (AU$)</div>
                        <Input id="subtitle" className="col" placeholder="Be clear and descriptive"></Input>
                    </div>
                </div>
                <div id="wrapper" className="col-md-4 col-sm-4 mt-2">
                    <div id="item" className="col-md-12 col-sm-12">
                        <div id="title" className="col-md-12 col-sm-12">Total Tickets</div>
                        <Input id="subtitle" className="col" placeholder="Be clear and descriptive"></Input>
                    </div>
                </div>
                <div id="wrapper" className="col-md-4 col-sm-4 mt-2">
                    <div id="item" className="col-md-12 col-sm-12">
                        <div id="title" className="col-md-12 col-sm-12">Max. Per Customer</div>
                        <Input id="subtitle" className="col" placeholder="Be clear and descriptive"></Input>
                    </div></div>
            </div>
            <div id="feesRow" className="row mt-2">
                <div id="wrapper" className="col-md-4 col-sm-4 mt-2">
                    <div id="item" className="col-md-12 col-sm-12">
                        <div id="title" className="col-md-12 col-sm-12" style={{ color: "#5A6CFD" }}>Deadline</div>
                        <Input id="subtitle" className="col" type="datetime-local"></Input>
                        {/* <DateInput
                            id="dateInput"
                            className="col-md"
                            formatDate={date => date.toLocaleString()}
                            parseDate={str => new Date(str)}
                            placeholder={"MM/DD/YYYY"}
                        /> */}
                    </div>
                </div>
                <div id="wrapper" className="col-md-4 col-sm-4 mt-2">
                    <div id="item" className="col-md-12 col-sm-12" style={{ border: '1px solid #5769FF' }}>
                        <div id="title" className="col-md-12 col-sm-12" style={{ color: "#5A6CFD" }}>Start Event</div>
                        <Input id="subtitle" className="col" type="datetime-local"></Input>
                    </div></div>
                <div id="wrapper" className="col-md-4 col-sm-4 mt-2">
                    <div id="item" className="col-md-12 col-sm-12">
                        <div id="title" className="col-md-12 col-sm-12">End Event</div>
                        <Input id="subtitle" className="col" type="datetime-local"></Input>
                    </div>
                </div>
            </div>
            <div id="feesRow" className="row mt-2"><div className="col" style={{ fontWeight: "bolder", fontSize: "Large", padding: "15px" }}>Location</div></div>
            <div id="feesRow" className="row mt-2">
                <div id="maps" className="col-md-8 col-sm-8">
                    <Card inverse className="mb-3">
                        <CardImg src={"https://www.sevendays.nl/sites/default/files/styles/node_image/public/Screenshot-2017-12-20-at-14.35.44.png?itok=pjMTXGwu"} alt="Card image cap" />
                        <CardImgOverlay>
                            <CardText id="cardText">Saudi Arabiariyadh, riyadh, Dubai, riyadh, 11231<Button minimal icon="edit" />
                            </CardText>
                        </CardImgOverlay>
                    </Card>
                </div>
                <div className="col-md col-sm">
                    <div className="mb-3">
                        <div id="wrapper">
                            <div id="item" style={{ border: '1px solid #5769FF' }} >
                                <div id="title" className="col-md-12 col-sm-12" style={{ color: "#5769FF" }}>Address</div>
                                <Input id="subtitle" className="col" placeholder="Be clear and descriptive"></Input>

                            </div>
                        </div>
                    </div>
                    <div id="selectorRow" className="row">
                        <div className="col-md col-sm">
                            <Form.Group id="formSelect">
                                <div className="col-md-12 col-sm-12">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control as="select">
                                        <option>Riyadh</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </div>
                            </Form.Group>
                            <Form.Group id="formSelect">
                                <div className="col-md-12 col-sm-12">
                                    <Form.Label>Online Event</Form.Label>
                                    <Form.Control as="select">
                                        <option>Riyadh</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </div>
                            </Form.Group>
                            <Form.Group id="formSelect">
                                <div className="col-md-12 col-sm-12">
                                    <Form.Label>Online Event</Form.Label>
                                    <Form.Control as="select">
                                        <option>Riyadh</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </div>
                            </Form.Group>
                        </div>
                        <div className="col-md col-sm">
                            <Form.Group id="formSelect">
                                <div className="col-md-12 col-sm-12">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control as="select">
                                        <option>Saudi Arabia</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </div>
                            </Form.Group>
                            <Form.Group id="formSelect">
                                <div className="col-md-12 col-sm-12">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control as="select">
                                        <option>Be clear and descriptive</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </div>
                            </Form.Group>
                            <Form.Group id="formSelect">
                                <div className="col-md-12 col-sm-12">
                                    <Form.Label>Zipcode</Form.Label>
                                    <Form.Control as="select">
                                        <option>Be clear and descriptive</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </div>
                            </Form.Group>
                        </div>
                        <div className="col-md-offset-2 col-sm-offset-2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events;