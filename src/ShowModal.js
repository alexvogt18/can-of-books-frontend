
import React from "react";
import Button from 'react-bootstrap/Button';

const ShowModal = () => {

revealModal = () => this.props.revealModal; 

  return (<Button onClick= {() => ({this.revealModal})}> Add a Book! </Button>);
};

export default ShowModal;