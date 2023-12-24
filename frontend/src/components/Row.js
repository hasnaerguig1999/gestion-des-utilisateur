import React from 'react'
import {
    Tr, Td, Button, Box
} from '@chakra-ui/react';
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Avatar } from '@chakra-ui/react'
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalWrapper';

export default function Row({ id, fullname, email, age, country }) {
    const {Delete,onOpen,FindOne} = useContext(GlobalContext);

    return (
        <>
            <Tr>
                <Td>
                    <Avatar src='https://bit.ly/broken-link' mt={'13px'} />
                </Td>
                <Td>{fullname}</Td>
                <Td>{email}</Td>
                <Td>{age}</Td>
                <Td>{country}</Td>

                <Td>
                    <Box display="flex" gap="1">
                        <Button colorScheme='yellow' onClick={()=>{onOpen();
                        FindOne(id);}}>
                            <FaEdit />
                        </Button>
                        <Button colorScheme='red' onClick={() => Delete(id)}>
                            <MdDeleteOutline />
                        </Button>

                    </Box>
                </Td>
            </Tr>
        </>
    )
}
