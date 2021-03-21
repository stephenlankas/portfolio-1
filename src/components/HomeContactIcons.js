
import github from '../assets/github.svg';
import linkedin1 from '../assets/linkedin1.svg';
import email from '../assets/email.svg';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const HomeContactIcons = () => {
    return (
        <StyledDivFirst className = "home">
            <div className = "contact">
                <div className = "icon">
                    <StyledLiImg>
                        <StyledLi1>Let's connect</StyledLi1>
                    <StyledLine>
                        <div> - - /// - - </div>
                    </StyledLine>
                    <li>
                        <Link to = {{pathname:"https://github.com/aegli84"}} target={"_blank"} rel="noopener noreferrer">
                        <StyledImg src={github} alt="html" width = "20" height = "20"/>
                        </Link>
                    </li>
                    <li>
                        <Link to = {{pathname: "https://www.linkedin.com/in/andreeaegli/"}} target={"_blank"} rel="noopener noreferrer">
                            <StyledImg src={linkedin1} alt="html"  width = "20" height = "20"/>
                        </Link>
                    </li>

                    <li>
                        <Link to = {{pathname:"https://github.com/aegli84"}} target={"_blank"} rel="noopener noreferrer">
                            <StyledImg src={email} alt="html"  width = "20" height = "20"/>
                        </Link>
                    </li>

                    </StyledLiImg>
                </div>
            </div>
        </StyledDivFirst>
    )
}

const StyledDivFirst = styled.div`
    margin-top: -53vh;
    display: flex;
    float: right;
    align-items: flex-end;
    justify-content: space-around;
    line-height: 2rem;
    list-style: none;
`
const StyledLi1 = styled.li`
    writing-mode: vertical-rl;
    text-orientation: mixed;
    color: whitesmoke;
    margin-right: 4.5rem;
    list-style: none;
    margin-left: 0.2.rem;
    
    
`
const StyledLiImg = styled.ul`
    list-style: none;
    &:hover {
        color: lightgreen;
            transition: all 0.5s ease;
    }
    
`

const StyledLine = styled.li`
    writing-mode: vertical-rl;
    text-orientation: mixed;
    margin-top: 1rem;
    margin-bottom: 1rem;
`
const StyledImg = styled.img `
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);
    
`
export default HomeContactIcons;

