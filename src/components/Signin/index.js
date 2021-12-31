import React from 'react'
import { Icon } from '../Sidebar/SidebarElements'
import { 
    Container, 
    FormButton, 
    FormContent, 
    FormH1, 
    FormInput, 
    FormLabel, 
    FormWrap, 
    Text,
    Form
 } from './SigninElement';

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'> Clyde
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Sign In To your Account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                              <FormInput type='email' required />
                              <FormLabel htmlFor='for'>Password</FormLabel>
                              <FormInput type='password' required />
                              <FormButton type='submit'>Continue</FormButton>
                              <Text>Forgot password</Text>

                        </Form>
                    </FormContent>

                    </Icon>
                </FormWrap>
            </Container>
            
        </>
    )
}

export default SignIn;
