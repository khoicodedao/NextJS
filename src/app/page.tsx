"use client";
import useSWR from "swr";
import Table from "@/components/table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
interface Author {
  id: number;
  title: string;
  author: string;
  content: string;
}
export default function Home() {
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getTitle: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(e.currentTarget.value);
  };
  const fetchData = (url: string) => {
    return fetch(url).then((res) => res.json());
  };
  const { data, error, isLoading } = useSWR<Author[], any, any>(
    "http://localhost:8000/blogs",
    fetchData,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return isLoading ? (
    "Loading..."
  ) : (
    <main>
      <div>
        <p>Table blogs:!</p>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new blogs</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Label>ID:</Form.Label>
          <Form.Control size="lg" type="text" placeholder="ID" />
          <br />
          <Form.Label>Title:</Form.Label>
          <Form.Control
            onChange={getTitle}
            size="lg"
            type="text"
            placeholder="Title"
          />
          <br />
          <Form.Label>Author:</Form.Label>
          <Form.Control size="lg" type="text" placeholder="Author" />
          <br />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Button className="mb-2" variant="primary" onClick={handleShow}>
        Add new!
      </Button>
      {data && <Table blogs={data}></Table>}
    </main>
  );
}
