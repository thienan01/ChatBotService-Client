import React, { Component } from "react";
import ChatContent from "../components/Chat/ChatContent/ChatContent";
import {Col} from "reactstrap"
import "../components/Chat/ChatList/chatList.css"
import Button from "../components/DashboardObject/Button"
import { MdOutlineCancel } from 'react-icons/md';

import "../styles/chat.css";


export default class ChatBody extends Component {
  render() {
    return (
      <div className="nav-item absolute right-5 md:right-52 top-16 bg-white dark:bg-[#42464D]  rounded-lg w-96">
         <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <button type="button" className="text-white  text-xs rounded p-1 px-2 bg-orange">
            5 New
          </button>
        </div>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
        <ChatContent/>
      </div>
    );
  }
}