import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";

const ManagerService = () => {
  const [services, setServices] = useState([]);
  document.title = "Manage Services-Celluloid Studios";
  useEffect(() => {
    fetch("https://celluloid-studios-server.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);
  const handleDelete = (id) => {
    fetch(`https://celluloid-studios-server.herokuapp.com/services/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const newData = services.filter((service) => {
          return service._id !== data._id;
        });
        setServices(newData);
      });
  };
  return (
    <div className="container">
      <div>
        <h2 className="text-center heading-txt mb-3">Manage Services</h2>
        <Table responsive>
          <thead>
            <tr>
              <th>Sl no.</th>
              <th>Package Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, idx) => (
              <tr>
                <td>{idx + 1}</td>
                <td>{service.packageName} </td>
                <td>${service.price} </td>
                <td>
                  {" "}
                  <FontAwesomeIcon
                    onClick={() => handleDelete(service._id)}
                    style={{ color: "red", cursor: "pointer" }}
                    icon={faTrashAlt}
                  />{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ManagerService;
