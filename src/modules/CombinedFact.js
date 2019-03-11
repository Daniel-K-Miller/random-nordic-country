import React, { Component } from 'react';
import styled from 'styled-components';
import Name from './Name.js'
import FactBox from './Facts.js'

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin: 1em auto;
  align-items: center;
  position: relative;
`

class Combined extends Component {
    render() {
        return (
            <Wrapper>
                <Name clicked={this.props.clicked} country={this.props.country} text={this.props.text} />
                <FactBox clicked={this.props.clicked} country={this.props.country} testArray={this.props.testArray} text={this.props.text} />
            </Wrapper>
        )
    }
}

export default Combined;