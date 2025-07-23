import React, { useEffect, useState } from 'react';
import UserModal from "./UserModal";

export default function UserModalFetcher () {
    const [data, setData] = useState(null);

    const getMyModal = async () => {
    const res = await fetch("https://api.github.com/users/github-john-doe");
    const json = await res.json();
    setData(json);
  };

  useEffect(() => {
    getMyModal();
  }, []);

  return (
      <UserModal data={data} />
  );
}
