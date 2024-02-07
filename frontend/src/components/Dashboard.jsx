import React from "react";
import Container from "./Container";
import Navbar from "./Navbar";
import UserComp from "./UserComp";

const dummyUser = {
  firstName: "Bully",
  lastName: "Singh",
  id: "12215346235634",
};
const dummyUsers = [
  { firstName: "Bully", lastName: "Singh", id: "12215346235634" },
  { firstName: "John", lastName: "Doe", id: "98765432101234" },
  { firstName: "Alice", lastName: "Johnson", id: "55443322116677" },
  { firstName: "Bob", lastName: "Smith", id: "11223344556678" },
  { firstName: "Eva", lastName: "Williams", id: "87654321098765" },
  { firstName: "Charlie", lastName: "Brown", id: "54321098765432" },
  { firstName: "Grace", lastName: "Taylor", id: "99988877766655" },
  { firstName: "David", lastName: "Miller", id: "12345678901234" },
  { firstName: "Sophia", lastName: "Anderson", id: "45678901234567" },
  { firstName: "Max", lastName: "Thompson", id: "76543210987654" },
  { firstName: "Olivia", lastName: "Clark", id: "23456789012345" },
  { firstName: "Daniel", lastName: "Lee", id: "67890123456789" },
  { firstName: "Emma", lastName: "Hill", id: "34567890123456" },
  { firstName: "Ryan", lastName: "Martin", id: "89012345678901" },
  { firstName: "Ava", lastName: "Jones", id: "11223344556677" }
];
const dummyAccount = { userId: "12215346235634", balance: 369 };

function Dashboard() {
  return (
    <div className="">
      <Navbar user={dummyUser} />
      <h2 className="text-xl p-5 font-semibold">
        Wallet balance: ₹{dummyAccount.balance}
      </h2>
      <h2 className="text-xl px-5 font-semibold">Users</h2>
      <div className="text-center">
        <input
          type="text"
          placeholder="Type here to filter users"
          className="box-border mb-2 text-sm text-center font-medium text-gray-900 border border-gray-300 rounded-lg focus:ring-gray-500 focus:border-gray-500 p-2.5 mx-auto w-1/2"
        />
      </div>
      <div className="max-w-7xl mx-auto">

      {dummyUsers.map(user=><UserComp user={user}/>)}
      </div>
    </div>
  );
}

export default Dashboard;
