import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Chart } from "react-google-charts";

export const data = [
  ["Destination", "Source", "Nickname"],
  [
    {
      v: "Terry",
      f: 'Terry<div style="color:red; font-style:italic">President</div>',
    },
    "",
    "The President",
  ],
  [
    {
      v: "Alex",
      f: 'Alex<div style="color:red; font-style:italic">Vice President</div>',
    },
    "Terry",
    "VP",
  ],
  ["Alice", "Mike", "Human"],
  ["Bob", "Jim", "Bob Sponge"],
  ["Carol", "Bob", ""],
];

export const options = {
  allowHtml: true,
};

export default function Welcome() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  // Function to handle logout
  // This function removes the user from localStorage and redirects to the home page
  function logout() {
    localStorage.removeItem('user');
    navigate('/');
  }

  if (!user) {
    return (
      <div className='feedback'>
        <div>
          <h1>You are not logged in.</h1>
          <button onClick={() => navigate('/')}>Go to Login</button>
        </div>
      </div>
    );
  }

  return (
    <div className='feedback'>
      <div>
        <h1>Welcome, {user.name}</h1>
        <p>Email: {user.email}</p>
        <button type="button" onClick={logout}>Logout</button>
        <Chart
          chartType="OrgChart"
          data={data}
          options={options}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
