import styled from 'styled-components'
import Connect from './Connect'

const FooterSection = () => {
    return (
        <>
        <Connect/>
            <Div>
                <H4>Made in 🇩🇪 with ❤️ by Andreea Egli-Hehl 2021</H4>
            </Div>
        </>
    )
}

const Div = styled.div `
    display: flex;
    justify-content: center;
    margin: 1rem;
    text-align: center;
`
const H4 = styled.h4`
    color: whitesmoke;
    font-weight: lighter;
    font-size: 0.9rem;
    margin-bottom: 3rem;

@media (max-width: 480px){
        font-size: 1rem; 
    }
`

export default FooterSection;
