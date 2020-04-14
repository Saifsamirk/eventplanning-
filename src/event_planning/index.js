import React, { useState } from "react";
import { Button, Icon, Divider, Popover, Menu, MenuItem } from "@blueprintjs/core";
import { ListGroup, ListGroupItem, Card, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Organizations from "./Components/Organizations"
import Food from "./Components/Catering"
import Events from "./Components/Events";
import Marketing from "./Components/Marketing";
import Vendors from "./Components/Vendors";
import Timeline from "./Components/Timeline/main";
import "./style.scss";

let dt = new Date();
let time = dt.toLocaleString('en-US', { hour: 'numeric', minute: "numeric", hour12: true });

const navbar = [
  { id: 0, name: "Organizations", icon: "projects", path: "/", exact: true, component: Organizations },
  { id: 1, name: "Events & Activities", icon: "timeline-events", path: "/events", component: Events },
  { id: 2, name: "Vendors", icon: "annotation", path: "/vendors", component: Vendors },
  { id: 3, name: "Food & Drinks", icon: "glass", path: "/catering", component: Food },
  { id: 4, name: "Marketing Campaigns", icon: "volume-up", path: "/marketing", component: Marketing },
  { id: 5, name: "Floor Planning & venus", icon: "text-highlight", path: "todo", component: null },
  { id: 6, name: "Seating Planning", icon: "horizontal-distribution", path: "todo", component: null },
  { id: 7, name: "List of Artists & Shows", icon: "mugshot", path: "todo", component: null },
  { id: 8, name: "Cust and Budget & Payroll", icon: "bank-account", path: "todo", component: null },
  { id: 9, name: "Tv Production & Broadcasting", icon: "film", path: "todo", component: null },
  { id: 10, name: "Media Assets", icon: "video", path: "todo", component: null },
  { id: 11, name: "Staff", icon: "follower", path: "todo", component: null },
  { id: 12, name: "Timeline", icon: "waterfall-chart", path: "/timeline", component: Timeline },
  { id: 13, name: "Logistics", icon: "map", path: "todo", component: null },
  { id: 14, name: "Parking", icon: "path", path: "todo", component: null },
  { id: 15, name: "Sponsors", icon: "user", path: "todo", component: null }
];

function EventPlanning() {
  const [isOpen, setOpen] = useState(false);
  const [isCol, setCol] = useState("col-md-1");

  const drawerToggleHandler = () => {
    setOpen(!isOpen)
    !isOpen ? setCol("col-md-3") : setCol("col-md-1")
  }

  const RenderSidebar = () => {
    return (
      navbar.map(route =>
        <Link to={route.path}>
          <ListGroupItem key={route.id}><Icon icon={route.icon} />{route.name}</ListGroupItem>
        </Link>
      ))
  }

  return (
    <Router>
      <div id="event-planning" dir="ltr">
        <div id="rowHeader" className="row">
          <div className={`${isCol} col-sm-3 col-xs-3 mt-3`}>
            <div id="sideBarHeader">
              <Button id="menuBtn" icon="menu" onClick={drawerToggleHandler} />
              {isOpen && <><div className="logo">Logo</div>
                <div id="dateTime">
                  <div id="time">{time}</div>
                  <div id="date">{dt.getDate()} - {dt.getMonth() + 1} - {dt.getFullYear()}</div>
                </div></>}
            </div>
          </div>
          <div id="searchBar" className="col-md col-sm mt-3 ">
            <div id="searchBarRow">
              <div id="filters" className="bp3-input-group bp3-large ">
                <span className="bp3-icon bp3-icon-search"></span>
                <input type="text" className="bp3-input" placeholder="Find people, event, and more" />
              </div>

              <Divider />

              <div><Icon id="notifications" icon="notifications" /></div>

              <Divider />

              <div id="profile">
                <div className='row'>
                  <img src={"https://news.stanford.edu/wp-content/uploads/sites/2/2016/10/Decker.jpg"} width={50} height={50}></img>
                  <div>
                    <div id="name">
                      Manuel Gozeya
                  </div>
                    <div id="title">Software Manager</div></div>
                  <Popover
                    position={"auto"}
                    content={
                      <Menu>
                        <MenuItem text="Profile" icon="user" />
                        <MenuItem text="Settings" icon="settings" />
                        <MenuItem intent="danger" text="Logout" icon="log-out" />
                      </Menu>
                    }>
                    <Button minimal className="col-md-2" icon="caret-down"></Button></Popover>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          {isOpen ?
            <ListGroup className="col-md-3 col-sm" id="sideBar" >
              <div className="col-md-12 col-sm-12">
                <RenderSidebar key={navbar.id} />
              </div>
            </ListGroup>
            :
            <ListGroup className="col-md-1 col-sm-12" id="sideBar" >
              <div className="col-md-12 col-sm-12">
                {navbar.map(route =>
                  <Link to={route.path}>
                    <ListGroupItem key={route.id}><Icon icon={route.icon} /></ListGroupItem>
                  </Link>
                )
                }
              </div>
            </ListGroup>}
          <div id="content" className="col-md">
            {navbar.map((route) => (
              <Route
                key={route.id}
                path={route.path}
                exact={route.exact}
                component={route.component} />
            ))}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default EventPlanning;
