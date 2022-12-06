import React, { useState } from 'react';
import Button from '../components/DashboardObject/Button';
import  Header  from '../components/DashboardObject/Header';
import { useStateContext } from '../contexts/ContextProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Col } from 'reactstrap';


const Trainpage = () => { 
    const[topicShow,setTopicShow] =useState(true)
    const[objectShow,setObjectShow] =useState(false)
  function activeShow(topicShow,objectShow,historyShow) {
    if (topicShow === true)
    {
      setTopicShow(true);
      setObjectShow(false);

    } else if (objectShow === true)
    {
      setObjectShow(true);
      setTopicShow(false);
    } else if (historyShow === true)
    {
      setTopicShow(false);
      setObjectShow(false);
    }
  }
  
    const { currentColor } = useStateContext();
  return (
   
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Train" />
      <div className='d-flex mx-5'>
        <Col className="col-7 mb-4">

          {topicShow ? (  <div> <div class="testing">
    <label for="training" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Khách hàng trình bày hoặc đặt vấn đề</label>
    <input type="text" placeholder='Nhập giá trị' id="training" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          </div>    
      <div class="mb-3">
      <label for="goal" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Chủ đề đào tạo</label>
      <input type="text" placeholder='Nhập chủ đề mong muốn' id="goal" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <Button
              color="white"
              bgColor={currentColor}
              text="Tiến hành đào tạo"
              borderRadius="10px"
            />
            </div>
          ) : null}
          {objectShow ? (<div>Du lieu da dao tao</div>):null}
        </Col>
        <Col className='col-5'>
          <div className='ml-3 mt-8 px-20'>
            <button onClick={() => activeShow(true)} className='p-2 block'>Chủ đề đào tạo</button>
            {/* <button onClick={() => activeShow(false,true,false)} className='p-2 block'>Dữ liệu đã đào tạo</button> */}
            </div>
          </Col>
      </div>
      
    
            
        </div>
    );
  };
export default Trainpage
