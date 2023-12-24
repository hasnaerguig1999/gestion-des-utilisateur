import React, { useContext,useState, } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Stack,
} from '@chakra-ui/react'
import InputsGroup from './InputsGroup'
import { GlobalContext } from './GlobalWrapper'

export default function DrawerExample() {
    const { isOpen, onOpen, onClose ,Add,errors} =useContext(GlobalContext)
    const [form,setForm] = useState({})
    const onchangeHandler = (e)=>{
        setForm({
        ...form,
        [e.target.name]:e.target.value
    });
    };
    
   const onAdd = ()=>{
    Add(form,setForm)
   }
    
    return (
        <>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create / update</DrawerHeader>

                    <DrawerBody>
                        <Stack spacing='24px'>
                            <InputsGroup name="fullname" onchangeHandler={onchangeHandler}  errors={errors?.fullname} />
                            <InputsGroup  name="email" onchangeHandler={onchangeHandler} errors={errors?.email}/>
                            <InputsGroup  name="age" onchangeHandler={onchangeHandler} errors={errors?.age} />
                            <InputsGroup name="country" onchangeHandler={onchangeHandler} errors={errors?.country} />
                         </Stack>   
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue' onClick={()=> onAdd()}>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
