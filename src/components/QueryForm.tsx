import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";

interface QueryFormProps {
  runQuery: (s: string) => any;
}

export default function QueryForm(props: QueryFormProps) {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");

  const handleChangeTitle = (e: React.ChangeEvent<HTMLElement>) => {
    setTitle((e.target as HTMLInputElement).value);
  };

  const submitForm = async () => {
    setLoading(true);
    props.runQuery(title);
    setLoading(false);
    console.log("loading...");
  };

  return (
    <div>
      {loading && (
        <span>
          <Spinner animation="grow" variant="info" />
          &nbsp;Querying...
        </span>
      )}
      {!loading && (
        <Form>
          <Form.Group controlId="title">
            {/* <Form.Label>Query</Form.Label> */}
            <Form.Control
              as="textarea"
              placeholder="Query"
              onChange={handleChangeTitle}
              rows={1}
              required
            />
          </Form.Group>
          <br />
          <Button variant="primary" size="sm" onClick={submitForm}>
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
}
