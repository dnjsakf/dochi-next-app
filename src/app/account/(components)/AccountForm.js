"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AccountForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    const res = await fetch("/api/auth/account", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });

    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.message);
    } else {
      router.refresh();
      router.push("/");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col gap-3 w-1/2"
      >
        <h1>Create New User</h1>
        <div>
          <label>ID</label>
          <input
            id="userId"
            name="userId"
            type="text"
            onChange={handleChange}
            required={true}
            value={formData.userId}
            className="m-2 bg-slate-400 rounded"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            id="userPwd"
            name="userPwd"
            type="password"
            onChange={handleChange}
            required={true}
            value={formData.userPwd}
            className="m-2 bg-slate-400 rounded"
          />
        </div>
        <div>
          <label>Name</label>
          <input
            id="userNm"
            name="userNm"
            type="text"
            onChange={handleChange}
            required={true}
            value={formData.userNm}
            className="m-2 bg-slate-400 rounded"
          />
        </div>
        <input
          type="submit"
          value="Create User"
          className="bg-blue-300 hover:bg-blue-100"
        />
      </form>
      <p className="text-red-500">{errorMessage}</p>
    </>
  );
}

export default AccountForm;