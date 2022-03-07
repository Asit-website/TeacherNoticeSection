import React, { useState } from "react";
import CreateNoticeSelectApi from "../Api/CreateNoticeSelectApi";
const CreateNotice = ({ setShow }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");

  const [text, setText] = useState("");
  const [link, setLink] = useState("");

  const [entry, setEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();

    if (!name && !date && title && !text && !link) {
     alert("Plz add an item")
    }

    else{
      const newEntry = {id: new Date().getTime().toString(), name, date, title, text, link};

      setEntry([...entry,newEntry]);
      setName("");
      setDate("");
      setTitle("");
      setText("");
      setLink("");
    }
  };
  return (
    <div>
      <div className="border-2 border-black w- block mx-auto py-2 w-[80%]">
        <h2 className="mx-3">Create Notice</h2>

        <form className=" flex flex-col w-[70%] " onSubmit={submitForm}>
          <select
            className=" border border-gray-400 mx-3 my-2 py-2 px-4 rounded-lg outline-none"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          >
            <option>Select Classes</option>
            {CreateNoticeSelectApi.map((val) => {
              return <option key={val.id}>{val.class}</option>;
            })}
          </select>

          <input
            className=" border border-gray-400 mx-3 my-2 py-2 px-4 rounded-lg outline-none"
            placeholder="Select Date"
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <input
            className=" border border-gray-400 mx-3 my-2 py-2 px-4 rounded-lg outline-none"
            placeholder="Enter Title of Notice"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            style={{ resize: "none" }}
            className=" border border-gray-400 mx-3 my-2 py-2 px-4 rounded-lg outline-none"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <div className=" flex flex-col">
            <input
              className=" border border-gray-400 mx-3 my-2 py-2 px-4 rounded-lg outline-none"
              type="text"
              name="link"
              value={link}
              placeholder="Attach Link"
              onChange={(e) => setLink(e.target.value)}
            />
          </div>

          <div className=" flex">
            <button
              className="my-5 block mx-auto py-2.5 px-4  text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Create Notice
            </button>
            <button
              onClick={() => setShow(false)}
              className="my-5 block mx-auto py-2.5 px-4  text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Back
            </button>
            <button className="my-5 block mx-auto py-2.5 px-4  text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              Send Individually to ID
            </button>
          </div>
        </form>

        {
          entry.map(val=>{
            return(
              <>
                <h2>{val.name}</h2>
                <h2>{val.date}</h2>
                <h2>{val.title}</h2>
                <h2>{val.text}</h2>
                <h2>{val.link}</h2>
              </>
            )
          })
        }
      </div>
    </div>
  );
};

export default CreateNotice;
