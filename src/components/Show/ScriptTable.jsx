import { Table, Button } from "reactstrap";
import { Pagination } from "antd";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GET, POST } from "../../functionHelper/APIFunction";
import { NotificationManager } from "react-notifications";
import { ScriptContext } from "../Context/ScriptContext";
import ModalUpdateScript from "./ModalUpdateScript";
import ModalShowCode from "./ModalShowCode";
import "../../styles/common.css";
import Filter from "../Filter/Filter";
import { Breadcrumb } from "antd";
import LoadingAnt from "../Loading/LoadingAnt";
import SearchBar from "../Filter/SearchBar";
import ModalUpdateScriptName from "./ModalUpdateScriptName";

function ScriptTable() {
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [pagination, setPagination] = useState({});
  const [openModalCode, setOpenModalCode] = useState(false);
  const [currentScript, setCurrentScript] = useState({});
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [scripts, setScripts] = useState([]);
  const [isOpenEditScriptModal, setOpenEditScriptModal] = useState(false);
  let context = useContext(ScriptContext);
  const loadScript = (page, pageSize) => {
    if (page === undefined) page = 1;
    GET(
      process.env.REACT_APP_BASE_URL +
        "api/script/get_pagination/by_user_id?page=" +
        page +
        "&size=" +
        pageSize
    )
      .then((res) => {
        setLoading(false);
        setPagination({
          totalPage: res.total_pages,
          totalItems: res.total_items,
        });

        res.items.map((item) => {
          const createdDate = new Date(item.created_date);
          const updatedDate = new Date(item.last_updated_date);
          item.created_date = createdDate.toLocaleString("en-US");
          item.last_updated_date = updatedDate.toLocaleString("en-US");
          return item;
        });
        setScripts(res.items);
      })

      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    loadScript(1, 12);
  }, []);

  const handleToggleModal = () => {
    setOpenModalUpdate(!openModalUpdate);
  };
  const handleToggleCode = () => {
    setOpenModalCode(!openModalCode);
  };
  const handleDelete = (id) => {
    let body = {
      id: id,
    };
    POST(
      process.env.REACT_APP_BASE_URL + "api/script/delete",
      JSON.stringify(body)
    )
      .then((res) => {
        if (res.http_status === "OK") {
          NotificationManager.success("Delete successfully", "success");
          loadScript(1, 12);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleFilter = ({ val, date }) => {
    let body = {
      page: 1,
      size: 12,
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
    POST(
      process.env.REACT_APP_BASE_URL + `api/script/get_pagination/`,
      JSON.stringify(body)
    ).then((res) => {
      setPagination({
        totalPage: res.total_pages,
        totalItems: res.total_items,
      });
      res.items.map((item) => {
        const createdDate = new Date(item.created_date);
        const updatedDate = new Date(item.last_updated_date);
        item.created_date = createdDate.toLocaleString("en-US");
        item.last_updated_date = updatedDate.toLocaleString("en-US");
        return item;
      });
      setScripts(res.items);
    });
  };
  const handleJumpPagination = (page, pageSize) => {
    loadScript(page, pageSize);
  };
  return (
    <>
      <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Scripts</Breadcrumb.Item>
      </Breadcrumb>

      <div className="d-flex justify-content-end">
        <Button
          onClick={() => {
            handleToggleModal();
          }}
          className="btn-table"
          style={{ background: "#56cc6e", border: "none" }}
        >
          <i className="fa-solid fa-plus" style={{ marginRight: "4px" }}></i>
          Create
        </Button>
      </div>

      <Filter func={handleFilter} />

      <div className="shadow-sm table-area">
        <div className="header-Table">
          <SearchBar func={handleFilter} />
          <span className="total-script">
            Total: {pagination.totalItems} Scripts
          </span>
        </div>
        <Table borderless hover responsive className="tableData">
          <thead style={{ background: "#f6f9fc" }}>
            <tr style={{ width: "10%" }}>
              <th>#</th>
              <th>
                <span className="vertical" />
                Script name
              </th>
              <th>
                <span className="vertical" />
                Created at
              </th>
              <th>
                <span className="vertical" />
                Last updated at
              </th>
              <th style={{ width: "15%" }}>
                <span className="vertical" />
                <i className="fa-regular fa-square-minus"></i>
              </th>
            </tr>
          </thead>
          <tbody>
            {scripts.map((script, index) => {
              return (
                <tr key={script.id}>
                  <td>{++index}</td>
                  <td
                    onClick={() => {
                      context.setValue({ id: script.id, name: script.name });
                      navigate("/script-detail/" + script.id.toString());
                    }}
                    style={{
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      maxWidth: "400px",
                    }}
                  >
                    {script.name}
                  </td>
                  <td
                    onClick={() => {
                      context.setValue({ id: script.id, name: script.name });
                      navigate("/script-detail/" + script.id.toString());
                    }}
                  >
                    {script.created_date}
                  </td>
                  <td
                    onClick={() => {
                      context.setValue({ id: script.id, name: script.name });
                      navigate("/script-detail/" + script.id.toString());
                    }}
                  >
                    {script.last_updated_date}
                  </td>
                  <td className="d-flex action-row">
                    <div
                      onClick={() => {
                        setOpenEditScriptModal(!isOpenEditScriptModal);
                        setCurrentScript({
                          id: script.id,
                          name: script.name,
                        });
                      }}
                    >
                      <i className="fa-solid fa-pen-to-square text-primary"></i>
                    </div>
                    <div
                      onClick={() => {
                        setCurrentScript({
                          id: script.id,
                          name: script.name,
                        });
                        handleToggleCode();
                      }}
                    >
                      <i
                        className="fa-regular fa-eye actionIntent "
                        style={{ color: "#56cc6e" }}
                      ></i>
                    </div>
                    <div
                      onClick={() => {
                        handleDelete(script.id);
                      }}
                    >
                      <i className="fa-regular fa-trash-can text-danger"></i>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Pagination
          showQuickJumper
          defaultCurrent={1}
          total={pagination.totalItems}
          pageSize={12}
          onChange={handleJumpPagination}
        />

        <div className="d-flex justify-content-center">
          <LoadingAnt display={isLoading} />
        </div>
        <ModalUpdateScript open={openModalUpdate} toggle={handleToggleModal} />
        <ModalShowCode
          open={openModalCode}
          toggle={handleToggleCode}
          scriptID={currentScript.id}
        />
        {isOpenEditScriptModal ? (
          <ModalUpdateScriptName
            open={isOpenEditScriptModal}
            toggle={() => {
              setOpenEditScriptModal(!isOpenEditScriptModal);
            }}
            data={currentScript}
            reload={loadScript}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default ScriptTable;
