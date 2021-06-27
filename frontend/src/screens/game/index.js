
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown } from '@themesberg/react-bootstrap';

import React, { useState } from 'react';
import { Toast } from '@themesberg/react-bootstrap';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import Progress from "../../components/progress/progress";
import { Form } from '@themesberg/react-bootstrap';
import { Alert } from '@themesberg/react-bootstrap';
import  UploadService from '../../services/upload' 
import Moment from 'moment';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import Chess  from '../../components/game/chess/index'

export default () => {
  const [showDefault, setShowDefault] = useState(true);
 
return (

  <>
    <div className="d-block justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
      <Dropdown className="btn-toolbar">
        <Dropdown.Toggle as={Button} variant="primary" size="sm" className="me-2">
          <FontAwesomeIcon icon={faPlus} className="me-2" />New Game
        </Dropdown.Toggle>
        <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
          <Dropdown.Item className="fw-bold" onClick={() => setShowDefault(true)}>
            <FontAwesomeIcon icon={faCloudUploadAlt} className="me-2"/> Machine
          </Dropdown.Item>
          <Dropdown.Item className="fw-bold" onClick={() => setShowDefault(true)}>
            <FontAwesomeIcon icon={faCloudUploadAlt} className="me-2"/> Solo
          </Dropdown.Item>
          <Dropdown.Item className="fw-bold" onClick={() => setShowDefault(true)}>
            <FontAwesomeIcon icon={faCloudUploadAlt} className="me-2"/> Rank
          </Dropdown.Item>
          <Dropdown.Divider />
        </Dropdown.Menu>
      </Dropdown>
      <div className='d-flex justify-content-between flex-md-nowrap align-items-left py-4 height-1000'>
          <div className='width-per-80'>
            <React.Fragment>
                <Chess/>
            </React.Fragment>
          </div>
          <div className='width-per-20'>
              <div>rank</div>
              <div>chat</div>
            </div>
      </div>
    </div>
    </>
  );
}
