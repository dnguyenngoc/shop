
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';
import { faHackerNews } from "@fortawesome/free-brands-svg-icons";
import { Routes } from "../routes";


export default () => {

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Dropdown className="btn-toolbar">
          <Dropdown.Toggle as={Button} variant="primary" size="sm" className="me-2">
            <FontAwesomeIcon icon={faPlus} className="me-2" />Chess
          </Dropdown.Toggle>
          <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faHackerNews} className="me-2"/>New Game
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faRocket} className="text-danger me-2" /> Your Rank
            </Dropdown.Item>
          </Dropdown.Menu>
          
        </Dropdown>
      </div>

    </>
  );
};
