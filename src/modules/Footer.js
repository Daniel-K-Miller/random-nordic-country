import React, { Component } from 'react';
import styled from 'styled-components';
import GitHub from '../img/GitHub.png';

const Nav = styled.footer`
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        background-color: transparent;
        
        padding: 1em 0;
        bottom: 0;
    ul {
        padding: 1em 0;
        bottom: 1em;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
            a {
            color: white;
            list-style-type: none;
            text-decoration: none;
            user-select: none;
            filter: invert(100);
            opacity: .2;
            &:hover {
                opacity: .8;
                animation: all .3 ease-in-out;
            }
        }
    }
    p {
        position: absolute;
        display: flex;
        align-items: flex-end;
        bottom: 0;
        left: 0;
        margin: 0 0 2em 3em;
        color: #595959;
    }


    // tablet
    @media (min-width: 768px) and (max-width: 1024px) {
    
        
    
    }
    // Potrait mobile
    @media (min-width: 320px) and (max-width: 480px) {
        position: absolute;
        width: 100vw;
        img {
            width: 15vw;
        }
        p {
            visibility: hidden;
        }
    
    }
`

class Footer extends Component {
    render() {
        return (
            <Nav>
                <ul>
                    <a href="https://github.com/Daniel-K-Miller" target={"_blank"}><img src={GitHub} alt="gitHub" /></a>
                </ul>
                <p>&copy; 2019 Daniel Kieron Miller</p>
            </Nav>
        )
    }
}

export default Footer;