import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const Paper = styled.div`
    background-color: #1f1f1f;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    width: 25rem;
    
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #ffffff;
`

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    border-radius: 4px 4px 0 0; /* Top-left, top-right, bottom-right, bottom-left */
    margin-bottom: 1rem;
    background-color: #7b1fa2;
`

export const List = styled.div`
    width: 100%;
    max-height: 30rem;
    overflow-y: auto;
    margin-bottom: 1rem;
`

export const ListItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    background-color: #7b1fa2;
    margin-bottom: 0.5rem;
`

export const Bottom = styled(Top)`
    margin-bottom: 0;
    display: flex;
    justify-content: center;
`

export const IconButton = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: #ffffff;
    width: 30px;
    height: 30px;
    border-radius: 0 0 4px 4px; /* Top-left, top-right, bottom-right, bottom-left */
`

export const SubmitButton = styled.button`
    font-family: 'Ubuntu', sans-serif;
    width: 5rem;
    height: 100%;
    line-height: 1;
    font-weight: bold;
    border: 1px solid #FFFFFF;
    background: #FFFFFF;
    color: #7b1fa2;
    border-radius: 40px;
    cursor: pointer;
    overflow: hidden;
    transition: all .35s;
    &:hover {
        background: #000000;
        color: #ffffff;
        border: 1px solid #000000;
    }
`


export const Title = styled.div`
    display: flex;
    flex-direction: column;
`

export const Description = styled.div`
    width: 100%;
    height: fit-content;
`

export const TextBox = styled.textarea`
    width: 100%;
    height: 100%;
    resize: none;
    white-space: pre-wrap;
    overflow-x: hidden;
    overflow-y: auto;
    height: 7rem;
    border-radius: 4px;
    background-color: #00000000;
    color: white;
    border: 1px solid #FFFFFF;
`

export const ModalBody = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    border-top: 1px solid #000000;
    border-bottom: 1px solid #000000;
    display: block;
    background-color: #000000;
    height: fit-content;
    color: white;
`

export const ModalFooter = styled.div`
    background-color: #7b1fa2;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const ModalHeader = styled.div`
    background-color: #7b1fa2;
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
`

export const ModalTitle = styled.h4`
    margin: 0;
`

export const ModalFrame = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #00000080;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
`

export const ModalContent = styled.div`
    width: 500px;
    height: fit-content;
`

export const TitleInput = styled.input`
    width: 100%;
    background-color: #00000000;
    color: white;
    border-radius: 4px;
    border: 1px solid #FFFFFF;
`