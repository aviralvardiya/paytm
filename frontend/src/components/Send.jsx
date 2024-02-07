import React from "react";
import InitialsIcon from "./InitialsIcon";
import Container from "./Container";

const dummyUser = {
  firstName: "Eva",
  lastName: "Williams",
  id: "87654321098765",
};

function Send() {
  return (
    <Container>
      <div className="flex flex-col p-5 rounded-xl items-center bg-white">
        <h1 className="text-3xl font-bold mt-3">Send money</h1>
        <p className="m-4 text-gray-600">
          Enter the amount to be sent to the following user
        </p>
        <div className="flex flex-col gap-3 items-center">
          <InitialsIcon user={dummyUser} />
          <h2 className="font-bold text-xl">
            {dummyUser.firstName} {dummyUser.lastName}
          </h2>
        </div>
        <div className="w-full my-5">
          <label
            htmlFor="amount"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Amount in rupees
          </label>
          <input
            id="amount"
            type="text"
            placeholder="rupees"
            className="block mb-2 text-sm font-medium text-gray-900 border border-gray-300 rounded-lg focus:ring-gray-500 focus:border-gray-500 w-full p-2.5"
          />
        </div>

        <button className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-5 w-full">
          Initiate Transaction
        </button>
      </div>
    </Container>
  );
}

export default Send;
