import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Select,
  FormLabel,
  HStack,
  Text,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
// import Loading from "../Components/Loading";

function User() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [filter, setFilter] = useState("");

  // GET USERS FUNCTION
  const getUsers = async (page, filter) => {
    let res = await axios.get(
      `https://cointab-server-w6qx.onrender.com/get-users?page=${page}&limit=10&filter=${filter}`
    );
    return res;
  };

  const handleChangepage = (val) => {
    setPage(val);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    getUsers(page, filter).then((res) => {
      // console.log("res.data :>> ", res.data);
      setData(res.data.data);
      setTotalPages(res.data.totalPages);
    });
    setLoading(false);
  }, [page, filter]);

  if (loading) {
    return <h1>....Loading</h1>;
  }

  console.log("data",data)
  return (
    <>
      {/* <Heading mb={5}>User Details Page</Heading> */}
      <Button colorScheme='green' mt={"2rem"}>
        <Link to="/">Go to Home</Link>
      </Button>

      {data.length === 0 ? (
       <Text display={"flex"} justifyContent={"center"} alignItems={"center"} margin={"auto"} border={"1px dotted red"} height={"20vh"} textAlign={"center"} width={"50vw"}  mt={"2rem"}>No User details available, plaese fetch the Users</Text>
      ) : (
        <>
        {loading}
          <Box  alignContent="center"></Box>
          <HStack m={4} display={"flex"} alignItems={"center"}>
            {/* Filter part */}
            <FormLabel>Filter By Gender</FormLabel>
            <Select  border={"1px solid black"}
              placeholder="All"
              value={filter}
              w="150px"
              onChange={handleFilter}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>

          </HStack>
              {/* pagination part */}
          <Pagination
            totalPages={totalPages}
            currentPage={page}
            handlePageChange={handleChangepage}
          />

          {/* Table part */}
          <TableContainer mb={"2em"}  >
            <Table  colorScheme="red" >
              <Thead>
                <Tr>
               
                  <Th color={"red"} >Name</Th>
                  <Th color={"red"}>Email</Th>
                  <Th color={"red"}>Gender</Th>
                  <Th color={"red"}>Location (country)</Th>
                  
                </Tr>
              </Thead>
              <Tbody>
                {data &&
                  data?.map((el) => {
                    return (
                      <Tr key={el._id}>
                        <Td>{el.name}</Td>
                        <Td>{el.email}</Td>
                        <Td>{el.gender}</Td>
                        <Td>{el.location}</Td>
                        <Td>
                          {/* <Image src={user.picture.medium} alt={user.name} /> */}
                        </Td>
                      </Tr>
                    );
                  })}
              </Tbody>
            </Table>
          </TableContainer>

        
        </>
      )}
    </>
  );
}

export default User;
