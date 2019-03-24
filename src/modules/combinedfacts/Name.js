import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const NameCom = styled.h1`
  color: white;
  padding: .5em 1em;
  font-size: 1.2em;
  background: transparent;
  border-top: 2px solid white;
  border-left: 2px solid white;
  border-right: 2px solid white;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  text-align: center;
  display: inline-block;
  margin: 0 auto;
  right: 250px;
  position: relative;
  width: 6em;
  text-decoration: none;
  user-select: none;
  ${props => props.styles === "Finland" && css`
    color: #003580;
    background: white;
    border-color: white;
  `}
  ${props => props.styles === "Norway" && css`
    color: #002868;
    background: #EF2B2D;
    border-color: white;
  `}
  ${props => props.styles === "Sweden" && css`
    color: #FECC00;
    background: #006AA7;
    border-color: #006AA7;
  `}
  ${props => props.styles === "Denmark" && css`
    color: white;
    background: #C60C30;
    border-color: #C60C30;
  `}
  ${props => props.styles === "Iceland" && css`
    color: white;
    background: #02529C;
    border-color: #DC1E35;
  `}
  :hover {
      animation: myMove 2s ease-in-out;
  }
  @keyframes myMove {
      0% {
          opacity: 1;
      }
      50% {
          opacity: .5;
      }
      100% {
          opacity: 1;
      }
  }
`

class Name extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.text === "Click again!" && <NameCom styles={this.props.country}>{this.props.country}</NameCom>}
      </React.Fragment>
    );
  }
}

export default Name;