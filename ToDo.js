import React from 'react';
import styled from 'styled-components';

function ToDo() {
    return (
        <Container>
            <Heading>ToDo List</Heading>
            <ToDoContainer>
                <SubHeading>Things to be Done</SubHeading>
                <ToDoList>
                    <ListItems>
                        <LeftContainer>
                            <CheckContainer></CheckContainer>
                            <ItemContent>1, Buy 1Kg Tomato</ItemContent>
                        </LeftContainer>
                        <RightContainer>
                            <ActionButton>
                                <ButtonImage src={require(",/assets/delete.svg").default} alt="Delete" />
                            </ActionButton>
                        </RightContainer>
                    </ListItems>
                </ToDoList>
            </ToDoContainer>
            <NewToDoForm>
                <FormInput placeholder="Type new Task" />
                <FormSubmitButton>Add New</FormSubmitButton>
            </NewToDoForm>
            <ToDoContainer>
                <SubHeading>Things to be Done</SubHeading>
                <ToDoList>
                    <ListItems>
                        <LeftContainer>
                            <CheckContainerCompleted>
                                <TickImage />
                            </CheckContainerCompleted>
                            <ItemContentCompleted>
                                1, Buy 1Kg Tomato
                            </ItemContentCompleted>
                        </LeftContainer>
                        <RightContainer>
                            <ActionButton>
                                <ButtonImage src={require(",/assets/delete.svg").default} alt="Delete" />
                            </ActionButton>
                            <ActionButton>
                                <ButtonImage src={require(",/assets/delete.svg").default} alt="Delete" />
                            </ActionButton>
                        </RightContainer>
                    </ListItems>
                </ToDoList>
            </ToDoContainer>
        </Container>
    );
}

export default ToDo;

const Container = styled.div``;
const Heading = styled.h1``;
const ToDoContainer = styled.div``;
const SubHeading = styled.h3``;
const ToDoList = styled.ul``;
const ListItems = styled.li``;
const LeftContainer = styled.div``;
const CheckContainer = styled.span``;
const ItemContent = styled.span``;
const RightContainer = styled.div``;
const ActionButton = styled.button``;
const ButtonImage = styled.img``;
const NewToDoForm = styled.form``;
const FormInput = styled.input``;
const FormSubmitButton = styled.button``;
const CheckContainerComplete = styled(CheckContainer)``;
const ItemContentCompleted = styled(ItemContent)``;
const TickImage = styled.img``;
