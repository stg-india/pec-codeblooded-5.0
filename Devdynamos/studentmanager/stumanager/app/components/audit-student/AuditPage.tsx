"use client";
import axios from "axios";
import { tr } from "date-fns/locale";
import React, { useEffect, useState } from "react";

interface Attributes {
  sid: number;
  operation: string;
  attribute: string;
  from: string;
  to: string;
  updateat: string;
}

var entry = [
  {
    id: 18,
    object_pk: "77",
    object_id: null,
    object_repr: "Log object (77)",
    serialized_data: null,
    action: 1,
    changes:
      '{"step": ["2", "1"], "name": ["Jatin Kharbanda", "None"], "gender": ["Male", "None"], "city": ["Chd", "None"], "pincode": ["160013", "None"]}',
    remote_addr: null,
    timestamp: "2023-10-16T01:35:54.113390Z",
    additional_data: null,
    content_type: 7,
    actor: null,
  },
];

const AuditPage = () => {
  const [data, setData] = useState(entry);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/api/log-entries/?format=json")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, [data]);

  return (
    <div>
      <div className="App">
        <h1>Audit Tables</h1>
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>ID</th>
                <th>SID</th>
                <th>Changes</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.object_pk}</td>
                    <td>
                      {Object.keys(JSON.parse(item.changes)).map((key) => {
                        return (
                          <tr>
                            <td>{key}</td>
                            <td>{JSON.stringify(JSON.parse(item.changes)[key])}</td>
                          </tr>
                        );
                      })}
                    </td>
                    <td>{item.timestamp}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AuditPage;
