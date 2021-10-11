import styled from "styled-components"


export const Entrar = styled.input`

    text-align: center;
    display: block;
    width: 50vw;
    margin-top: 2vh;
    padding: .8rem 1.2rem;
    text-indent: .8rem;

    border: .2rem solid var(--blue);
    border-radius: 1.8rem;

    background-color: var(--light-gray);
    font-family: 'Montserrat';
    font-size: 1.2rem;

    &::placeholder{
        color: var(--dark-gray);
    }

    &:focus{
        outline-width: 0;
        border-color: var(--dark-yellow);
    }

`

export const Botoes = styled.a`

    font-family: 'Montserrat';
    font-size: 1.2rem;
    padding: .8rem 1.2rem;
    width: 20vw;
    margin-top: 2vh;

    border: .2rem solid var(--blue);
    border-radius: 1.8rem;

    background-color: var(--blue);
    border-color: var(--light-gray);
    color: var(--light-gray);

    transition-duration: 0.5s;
    cursor: pointer;
    display: block;

    &:focus{
        outline-width: 0;
        background-color: var(--dark-yellow);
        color: var(--dark-gray);
    }

    &:active{
        transform: translateY(2px);
    }

    &:hover{
        background-color: var(--dark-yellow);
        color: var(--dark-gray);    
    }
`

export const Cadastrar = styled.input`

    display: block;
    width: 50vw;
    height: 5vh;
    margin-top: 2vh;
    padding: .8rem 1.2rem;
    text-indent: .8rem;

    border: .2rem solid var(--blue);
    border-radius: 1.8rem;

    background-color: var(--light-gray);
    font-family: 'Montserrat';
    font-size: 1.2rem;

    &::placeholder{
        color: var(--dark-gray);
    }

    &:focus{
        outline-width: 0;
        border-color: var(--dark-yellow);
    }
`

