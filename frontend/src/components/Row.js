import React from 'react'
import {
   Tr,Td,Button,Box
  } from '@chakra-ui/react';
  import { FaEdit } from "react-icons/fa";
  import { MdDeleteOutline } from "react-icons/md";
  import { Avatar} from '@chakra-ui/react'

export default function Row({id, fullname,email,age,country}) {
    return (
        <>
            <Tr>
            <Avatar src='https://bit.ly/broken-link' mt={'13px'}/>
                <Td>{fullname}</Td>
                <Td>{email}</Td>
                <Td>{age}</Td>
                <Td>{country}</Td>
              
                <Td>
                    <Box display="flex" gap="1">
                        <Button colorScheme='yellow'>
                        <FaEdit />
                        </Button>
                        <Button colorScheme='red'>
                        <MdDeleteOutline />
                        </Button>

                    </Box>
                </Td>
            </Tr>
        </>
    )
}
