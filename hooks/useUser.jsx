"use client";

import { supabase } from "@/lib/supabase";
import React from "react";

function useUser() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from("users").select("*");
      if (error) console.log(error.message);
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const insertUser = async (id, email, imgUrl) => {
    const { data, error } = await supabase.from("users").insert({
      id: id,
      email: email,
      imgUrl: imgUrl,
    });

    if (error) {
      console.log(error.message);
    } else {
      console.log("User added", data);
    }
  };

  return { users, insertUser };
}

export default useUser;
