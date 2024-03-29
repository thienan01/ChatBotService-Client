import React from "react";
import { Modal, ModalBody } from "reactstrap";
import ChatContent from "../Chat/ChatContent/ChatContent";
import uniqueID from "../../functionHelper/GenerateID";
function ModalChatTrial({ openChat, closeModal }) {
  return (
    <div>
      <Modal
        isOpen={openChat}
        style={{ width: "600px" }}
        className="modal-setting"
        zIndex={1000}
      >
        <ModalBody style={{ padding: "0px", height: "inherit" }}>
          <ChatContent sessionId={uniqueID()} />
        </ModalBody>
        <div className="close-button" onClick={closeModal}>
          <i className="fa-solid fa-circle-xmark"></i>
        </div>
      </Modal>
    </div>
  );
}

export default ModalChatTrial;
