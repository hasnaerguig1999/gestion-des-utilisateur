
import './App.css';
import React, { useContext, useEffect } from 'react';
import {
  Box,
  Container,
  FormControl,
  Button,
  Input,
  Text,
  Th,Tr,Thead,Tbody,Table,TableContainer
} from '@chakra-ui/react';
import { CiSearch } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";
import Row from './components/Row';
import { GlobalContext } from './context/GlobalWrapper';


function App() {
  const {FetchUsers,users} = useContext(GlobalContext);
  useEffect(() =>{
    FetchUsers();
  },[]);
  return (
    <div className="App">
      <Container maxW={'full'} p="4" fontSize={'18px'}>
        <Box rounded="lg" boxShadow="base" p="4">
          <Box mt="2" gap={"2"} mb={"4"} display={"flex"}>
            <FormControl>
              <Input type='email' />
            </FormControl>
            <Button leftIcon={<CiSearch />}
              colorScheme='teal'
              variant='outline'
              maxW={"300px"}
              minW={"150px"}

            >
              Search
            </Button>
          </Box>
        </Box>
        <Box mt="5" rounded={'lg'} boxShadow="base">
          <Box p="4" display={'flex'} justifyContent="space-between">
            <Text fontSize="xl" fontWeight="bold">
              List Users
            </Text>
            <Button
              colorScheme="teal"
              variant="outline"
              maxW={"300px"}
              minW={"150px"}
              leftIcon={<AiOutlinePlus fontSize={'20px'} />}
            >
              Add User
            </Button>
          </Box>
          <TableContainer>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>Avatar</Th>
                  <Th>Fullname</Th>
                  <Th>Email</Th>
                  <Th>Age</Th>
                  <Th>Country</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  users?.map(({_id, fullname,email,age,country}) =>{
                    return <Row
                    id={_id}
                    fullname={fullname}
                    email={email}
                    age={age}
                    country={country} 
                    />;
                  })
                }
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </div>
  );
}

export default App;
