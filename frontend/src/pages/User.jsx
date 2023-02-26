import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  Image,
  Box,
  Select,
  FormLabel,
  HStack,
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

  return (
    <>
      <Heading mb={5}>User Details Page</Heading>
      <Button colorScheme={"blackAlpha"}>
        <Link to="/">Go to Home</Link>
      </Button>

      {loading}

      {data.length === 0 ? (
        <Box mt={"-2rem"}>
          {/* <Image w="60%" m="auto" src="./No_data.svg" /> */}
        </Box>
      ) : (
        <>
          <Box pt={"2rem"} alignContent="left"></Box>
          <HStack m={4}>
            {/* Filter part */}
            <FormLabel>Filter By Gender</FormLabel>
            <Select
              placeholder="All"
              value={filter}
              w="150px"
              onChange={handleFilter}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
          </HStack>

          {/* Table part */}
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Gender</Th>
                  <Th>Location (country)</Th>
                  <Th>Picture</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data &&
                  data?.map((user, i) => {
                    return (
                      <Tr key={user.email}>
                        <Td>{user.name}</Td>
                        {/* <Td>{user.location.country}</Td> */}
                        <Td>{user.email}</Td>
                        <Td>{user.gender}</Td>
                        <Td>{user.location}</Td>
                        <Td>
                          {/* <Image src={user.picture.medium} alt={user.name} /> */}
                        </Td>
                      </Tr>
                    );
                  })}
              </Tbody>
            </Table>
          </TableContainer>

          {/* pagination part */}
          <Pagination
            totalPages={totalPages}
            currentPage={page}
            handlePageChange={handleChangepage}
          />
        </>
      )}
    </>
  );
}

export default User;
