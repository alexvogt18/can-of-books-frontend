import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { withAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class AddBookModal extends React.Component {
    render() {
        return (
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Add A Book!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formGroupName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="Name" placeholder="Enter Book Title..." />
                        </Form.Group>
                        <Form.Group controlId="formGroupDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="Name" placeholder="Enter Book Description..." />
                        </Form.Group>
                        <Form.Group controlId="formGroupStatus">
                            <Form.Label>Status</Form.Label>
                            <Form.Control type="Name" placeholder="Enter Book Status..." />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary">Add</Button>
                </Modal.Footer>
            </Modal.Dialog>
        )
    }
}

export default withAuth0(AddBookModal);