import { useState, useEffect } from "react";
import { GET, POST } from "../../functionHelper/APIFunction";
import { NotificationManager } from "react-notifications";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
} from "reactstrap";
import { Pagination } from "antd";

import { BASE_URL } from "../../global/globalVar";
import "../../styles/common.css";
import Filter from "../Filter/Filter";
import SearchBar from "../Filter/SearchBar";

function ShowEntityModal({ open, toggle, entityId }) {
  const [entities, setEntities] = useState([]);
  const [pagination, setPagination] = useState({});

  const loadEntity = (page, pageSize) => {
    if (entityId !== "") {
      let body = {
        page: page,
        size: pageSize,
        entity_type_ids: [entityId],
        has_pattern: true,
      };
      POST(BASE_URL + "api/entity/", JSON.stringify(body))
        .then((res) => {
          setEntities(res.items);
          setPagination({
            totalItem: res.total_items,
            totalPage: res.total_pages,
          });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  useEffect(() => {
    loadEntity(1, 12);
  }, [entityId]);
  const handleFilter = ({ val, date }) => {
    let body = {
      page: 1,
      size: 12,
      entity_type_ids: [entityId],
      has_pattern: true,
      // keyword: val,
    };
    if (date) {
      let fromDate = new Date(date.fromDate + " 00:00:00");
      let toDate = new Date(date.toDate + " 23:59:59");
      body.date_filters = [
        {
          field_name: "created_date",
          from_date: fromDate * 1,
          to_date: toDate * 1,
        },
      ];
    }
    if (val) {
      body.keyword = val;
    }
    POST(BASE_URL + `api/entity/`, JSON.stringify(body)).then((res) => {
      setEntities(res.items);
      setPagination({
        totalItem: res.total_items,
        totalPage: res.total_pages,
      });
    });
  };
  return (
    <>
      <Modal
        isOpen={open}
        style={{ maxWidth: "1000px" }}
        className="patternModal"
      >
        <ModalHeader>Entity</ModalHeader>
        <ModalBody>
          <div className="shadow-sm table-area">
            <div className="header-Table">
              <SearchBar func={handleFilter} />
              <span className="total-script">
                {/* Total:{pagination.totalItem} Patterns */}
              </span>
            </div>
            <Table borderless hover responsive className="tableData">
              <thead style={{ background: "#f6f9fc" }}>
                <tr>
                  <th>#</th>
                  <th>
                    <span className="vertical" />
                    Value
                  </th>
                  <th>
                    <span className="vertical" />
                    Pattern
                  </th>
                  {/* <th style={{ width: "15%" }}>
                    <span className="vertical" />
                    Action
                  </th> */}
                </tr>
              </thead>
              <tbody>
                {entities.map((entity, idx) => {
                  return (
                    <tr key={entity.id}>
                      <td>{++idx}</td>
                      <td>{entity.value}</td>
                      <td>{entity.pattern.content}</td>
                      {/* <td className="d-flex action-row">
                        <div>
                          <i
                            className="fa-solid fa-pen-to-square text-primary"
                            // onClick={() => {
                            //   handleToggleModal();
                            //   setCurrentPattern({
                            //     id: pattern.id,
                            //     content: pattern.content,
                            //   });
                            // }}
                          ></i>
                        </div>
                        <div
                        //   onClick={() => {
                        //     handleDeletePattern(pattern.id);
                        //   }}
                        >
                          <i className="fa-solid fa-trash-can text-danger"></i>
                        </div>
                      </td> */}
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <Pagination
              showQuickJumper
              defaultCurrent={1}
              total={pagination.totalItem}
              pageSize={10}
              onChange={loadEntity}
            />
          </div>
          <div className="d-flex justify-content-end pt-3">
            <Button
              onClick={() => {
                toggle("");
              }}
              className="closeBtn"
            >
              Close
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}

export default ShowEntityModal;
