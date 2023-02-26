import { Button, ButtonGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [isFetching, setIsFetching] = useState(false);

  const handleFetchUsers = async () => {
    if (isFetching) {
      alert("A fetch is already in progress!");
      return;
    }
    try {
      setIsFetching(true);
      await axios.post("https://cointab-server-w6qx.onrender.com/fetch-users");
      alert("Users fetched successfully!");
    } catch (error) {
      console.log(error);
      alert("Error occurred while fetching users!");
    } finally {
      setIsFetching(false);
    }
  };

  const handleDeleteUsers = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete all users?"
    );
    if (confirmDelete) {
      try {
        await axios.delete("https://cointab-server-w6qx.onrender.com/delete-users");
        alert("Users deleted successfully!");
      } catch (error) {
        console.log(error);
        alert("Error occurred while deleting users!");
      }
    }
  };

  const handleUserDetails = () => {
    navigate("/user");
  };

  return (
    <>
      <ButtonGroup
        gap="4"
        mt={"2rem"}
        border={"2px dotted red"}
        padding={"5rem"}
      >
        <Button colorScheme='yellow' onClick={handleFetchUsers} disabled={isFetching}>
          {isFetching ? "Fetching..." : "Fetch Users"}
        </Button>
        <Button colorScheme='red' onClick={handleDeleteUsers}> Delete Users</Button>
        <Button colorScheme='messenger' onClick={handleUserDetails}>User Details</Button>
      </ButtonGroup>
    </>
  );
};

export default Home;
