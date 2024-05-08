import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Contact } from "../../types";
import { deleteContact } from "../features/contactSlice";

interface ContactCardProps {
  contactDetails: Contact;
}

const ContactCard: React.FC<ContactCardProps> = ({ contactDetails }) => {
  const dispatch = useDispatch();
  const { id, firstname, lastname, status } = contactDetails;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          {firstname} {lastname}
        </h1>
        <p className="mt-2 text-gray-600">
          Status:{" "}
          <span
            className={`font-semibold ${
              status === "active" ? "text-green-600" : "text-red-600"
            }`}
          >
            {status}
          </span>
        </p>
        <div className="flex mt-4">
          <Link
            to={`/edit-contact/${id}`}
            className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-600"
          >
            Edit
          </Link>
          <button
            type="button"
            className="inline-block px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            onClick={() => dispatch(deleteContact(contactDetails))}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
