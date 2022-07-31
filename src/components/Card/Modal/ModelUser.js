import React, {useState,useEffect} from 'react'
import { Modal, Button } from "react-bootstrap";


function ModalUser(props){
    const handleClose = () => props.setShow(false);
    return (
        <>            
            <Modal show={props.show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{props.header}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.message}</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalUser;




// import { Modal } from 'bootstrap';
// import React, { useState, useEffect, spread } from 'react';
// import Button from 'react-bootstrap/Button';


// export default function modalView({props}) {

//   const [modalShow, setModalShow] = useState(false);


//   // const showModal = () => {
//   //     setModalShow(true);
//   //   };




  
//   // useEffect(() => {
//   //   setModalShow(true);
//   // }, []);



//   // const hideModal = () => {
//   //   setModalShow(false);
//   // };
  

  
//     const handleClose = () => props.setShow(true);
  
//   return (
//     <>            
//     <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//         <Modal.Title>{props.header}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>{props.message}</Modal.Body>
//         <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>
//             Close
//         </Button>
//         <Button variant="primary" onClick={handleClose}>
//             Save Changes
//         </Button>
//         </Modal.Footer>
//     </Modal>
// </>


//     // <Modal

//     //   size="lg"
//     //   aria-labelledby="contained-modal-title-vcenter"
//     //   centered
//     // >
//     //   <Modal.Header closeButton>
//     //     <Modal.Title id="contained-modal-title-vcenter">
//     //       Modal heading
//     //     </Modal.Title>
//     //   </Modal.Header>
//     //   <Modal.Body>
//     //     <h4>aaaaaaaaaa</h4>
//     //     <p>
          
//     //     </p>
//     //   </Modal.Body>
//     //   <Modal.Footer>
//     //     <Button >Close</Button>
//     //   </Modal.Footer>
//     // </Modal>
//   )
// }


