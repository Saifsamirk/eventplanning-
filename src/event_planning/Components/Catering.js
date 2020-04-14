import React, { useState } from "react";
import { Button, Icon, Divider, Popover, Menu, MenuItem } from "@blueprintjs/core";
import { Card, CardText, CardImg, CardImgOverlay, CardBody } from 'reactstrap';
import "../style.scss";

function Food() {
    //
    const [isOpen, setOpen] = useState(false);
    // const [isClose, setClose] = useState(true);
    let dropDown;

    if (isOpen) {
        dropDown = <div style={{ position: "absolute", bottom: "-10px" }}>this is the dropDown menu</div>
        console.log("NavBar is Open")
    }
    const dropDownHandler = () => {
        setOpen(!isOpen)
        // setClose(!isClose)
        console.log("Clicked")
    }
    //

    return (
        <div id="food_section">
            <div id="contentRowHeader" className="row">
                <div className="col-md-6">
                    <div id="tabsRow">
                        <div className="tabHeader">Levels Food & Drinks</div>
                    </div>
                </div>
                <div id="btnGroup">
                    <Button id="actionBtn" rightIcon="add" text="Excel" />
                    <Button id="actionBtn" rightIcon="add" text="Print" />
                    <Button id="actionBtn" rightIcon="add" text="Send" />
                    <Button id="addLevelBtn" rightIcon="add" text="Add Level" />
                </div>
            </div>
            <Divider />
            <div id="foodContent">
                <div className="row mx-auto">
                    <div id="headerIcons" className="col-md-1 col-sm-2"><Icon icon="drive-time" /></div>
                    <div className="col-md-3 col-sm">
                        <div className="col" id="title">Public Level</div>
                        <div className="col" id="subtitle">Levels Food & Drinks</div>
                    </div>
                    <div id="cardsHeaderBtn">
                        <Button id="editBtn" text="Edit" rightIcon="add" />
                        <Button id="addServiceBtn1" text="Add Service" rightIcon="add" />
                    </div>
                    <div id="publicLevel" className="col-md-12 col-sm-12">
                        <div className="cardsRow">
                            <Card className="mb-3">
                                <CardBody className=" d-flex justify-content-center">
                                    Water Bottle
                                </CardBody>
                                <Divider />
                                <div className="contacts">
                                    <div style={{ fontSize: "small" }}><span style={{ fontWeight: "bolder" }}>18</span> contacts</div>
                                    <div className="spacer" />
                                    <Popover
                                        position={"bottom-right"}
                                        minimal
                                        content={
                                            <Menu className="popoverMenu">
                                                <MenuItem text="Edit" />
                                                <MenuItem text="Delete" />
                                            </Menu>
                                        }>
                                        <Button icon="more" minimal onClick={dropDownHandler} /></Popover>
                                    {/* {isOpen ? dropDown : null} */}
                                </div>
                            </Card>
                            <Card className="mb-3">
                                <CardBody className=" d-flex justify-content-center">
                                    Water Bottle
                                </CardBody>
                                <Divider />
                                <div className="contacts">
                                    <div style={{ fontSize: "small" }}><span style={{ fontWeight: "bolder" }}>18</span> contacts</div>
                                    <div className="spacer" />
                                    <Button icon="more" minimal />
                                </div>
                            </Card>
                            <Card className="mb-3">
                                <CardBody className=" d-flex justify-content-center">
                                    Water Bottle
                                </CardBody>
                                <Divider />
                                <div className="contacts">
                                    <div style={{ fontSize: "small" }}><span style={{ fontWeight: "bolder" }}>18</span> contacts</div>
                                    <div className="spacer" />
                                    <Button icon="more" minimal />
                                </div>
                            </Card>
                            <Card className="mb-3">
                                <CardBody className=" d-flex justify-content-center">
                                    Water Bottle
                                </CardBody>
                                <Divider />
                                <div className="contacts">
                                    <div style={{ fontSize: "small" }}><span style={{ fontWeight: "bolder" }}>18</span> contacts</div>
                                    <div className="spacer" />
                                    <Button icon="more" minimal />
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
                <div id="privateLevel" className="row mx-auto mt-3">
                    <div id="headerIcons" className="col-md-1 col-sm-2"><Icon icon="drive-time" /></div>
                    <div className="col-md-3 col-sm">
                        <div className="col" id="title">Private Level</div>
                        <div className="col" id="subtitle">Levels Food & Drinks</div>
                    </div>
                    <div id="cardsHeaderBtn">
                        <Button id="editBtn" text="Edit" rightIcon="add" />
                        <Button id="addServiceBtn2" text="Add Service" rightIcon="add" />
                    </div>
                    <div className="col-md-12 col-sm-12">
                        <div className="cardsRow">
                            <Card className="mb-3">
                                <CardBody className=" d-flex justify-content-center">
                                    Water Bottle
                                </CardBody>
                                <Divider />
                                <div className="contacts">
                                    <div style={{ fontSize: "small" }}><span style={{ fontWeight: "bolder" }}>18</span> contacts</div>
                                    <div className="spacer" />
                                    <Button icon="more" minimal />
                                </div>
                            </Card>
                            <Card className="mb-3">
                                <CardBody className=" d-flex justify-content-center">
                                    Water Bottle
                                </CardBody>
                                <Divider />
                                <div className="contacts">
                                    <div style={{ fontSize: "small" }}><span style={{ fontWeight: "bolder" }}>18</span> contacts</div>
                                    <div className="spacer" />
                                    <Button icon="more" minimal />
                                </div>
                            </Card>
                            <Card className="mb-3">
                                <CardBody className=" d-flex justify-content-center">
                                    Water Bottle
                                </CardBody>
                                <Divider />
                                <div className="contacts">
                                    <div style={{ fontSize: "small" }}><span style={{ fontWeight: "bolder" }}>18</span> contacts</div>
                                    <div className="spacer" />
                                    <Button icon="more" minimal />
                                </div>
                            </Card>
                            <Card className="mb-3">
                                <CardBody className=" d-flex justify-content-center">
                                    Water Bottle
                                </CardBody>
                                <Divider />
                                <div className="contacts">
                                    <div style={{ fontSize: "small" }}><span style={{ fontWeight: "bolder" }}>18</span> contacts</div>
                                    <div className="spacer" />
                                    <Button icon="more" minimal />
                                </div>
                            </Card>
                            <Card className="mb-3">
                                <CardBody className=" d-flex justify-content-center">
                                    Water Bottle
                                </CardBody>
                                <Divider />
                                <div className="contacts">
                                    <div style={{ fontSize: "small" }}><span style={{ fontWeight: "bolder" }}>18</span> contacts</div>
                                    <div className="spacer" />
                                    <Button icon="more" minimal />
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="row mx-auto mt-3">
                    <div id="headerIcons" className="col-md-1 col-sm-2"><Icon icon="drive-time" /></div>
                    <div className="col-md-3 col-sm">
                        <div className="col" id="title">Primie Level</div>
                        <div className="col" id="subtitle">Levels Food & Drinks</div>
                    </div>
                    <div id="cardsHeaderBtn">
                        <Button id="editBtn" text="Edit" rightIcon="add" />
                        <Button id="addServiceBtn3" text="Add Service" rightIcon="add" />
                    </div>
                    <div id="primieLevel" className="col-md-12 col-sm-12">
                        <div className="cardsRow">
                            <Card className="mb-3">
                                <CardBody className=" d-flex justify-content-center">
                                    Water Bottle
                                </CardBody>
                                <Divider />
                                <div className="contacts">
                                    <div style={{ fontSize: "small" }}><span style={{ fontWeight: "bolder" }}>18</span> contacts</div>
                                    <div className="spacer" />
                                    <Button icon="more" minimal />
                                </div>
                            </Card>
                            <Card className="mb-3">
                                <CardBody className=" d-flex justify-content-center">
                                    Water Bottle
                                </CardBody>
                                <Divider />
                                <div className="contacts">
                                    <div style={{ fontSize: "small" }}><span style={{ fontWeight: "bolder" }}>18</span> contacts</div>
                                    <div className="spacer" />
                                    <Button icon="more" minimal />
                                </div>
                            </Card>
                            <Card className="mb-3">
                                <CardBody className=" d-flex justify-content-center">
                                    Water Bottle
                                </CardBody>
                                <Divider />
                                <div className="contacts">
                                    <div style={{ fontSize: "small" }}><span style={{ fontWeight: "bolder" }}>18</span> contacts</div>
                                    <div className="spacer" />
                                    <Button icon="more" minimal />
                                </div>
                            </Card>
                            <Card className="mb-3">
                                <CardBody className=" d-flex justify-content-center">
                                    Water Bottle
                                </CardBody>
                                <Divider />
                                <div className="contacts">
                                    <div style={{ fontSize: "small" }}><span style={{ fontWeight: "bolder" }}><span style={{ fontWeight: "bolder" }}>18</span></span> contacts</div>
                                    <div className="spacer" />
                                    <Button icon="more" minimal />
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Food;