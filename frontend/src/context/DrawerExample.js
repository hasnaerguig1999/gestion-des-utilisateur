import React, { useContext,useEffect,useState, } from 'react'
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
    const { isOpen, onOpen, onClose ,Add,errors,setErrors,user,Update} =useContext(GlobalContext)
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

   const onUpdate = ()=>{ 
   Update(form,setForm,form._id)
    }

    useEffect(()=>{
        setForm(user)
    },[user])
    

    
    return (
        <>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton 
                    onClick={()=>{onClose();
                    setErrors({})
                    setForm({})
                    }}
                    />
                    <DrawerHeader>Create / update</DrawerHeader>

                    <DrawerBody>
                        <Stack spacing='24px'>
                            <InputsGroup name="fullname" onchangeHandler={onchangeHandler}  errors={errors?.fullname} value={form?.fullname} />
                            <InputsGroup  name="email" onchangeHandler={onchangeHandler} errors={errors?.email} value={form?.email} />
                            <InputsGroup  name="age" onchangeHandler={onchangeHandler} errors={errors?.age} value={form?.age} />
                            <InputsGroup name="country" onchangeHandler={onchangeHandler} errors={errors?.country} value={form?.country}  />
                         </Stack>   
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={() => {
                            onClose();
                            setErrors({})
                            setForm({})
                        }}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue' onClick={()=>(form._id? onUpdate(): onAdd())}>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
