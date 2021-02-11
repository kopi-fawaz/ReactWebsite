import React, {Component} from 'react'
import axios from 'axios'
import {BoxDesc, BoxTitle, Line, WorkBox, WortSection, WorkTitle, Span, Icon} from './style.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBolt, faLink, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
class work extends Component {

  state = {
    works : []
  }

  componentDidMount() {
     axios.get("js/data.json").then(res => {this.setState({works: res.data.works})})
  }
  
  render(){
    const {works} = this.state;
    const workList =  works.map((item) => {
       return(
            <WorkBox first={item.id} key={item.id} >
              <FontAwesomeIcon icon={faLink} size="2x"/>{item.icon_name}
                <BoxTitle>{item.title}</BoxTitle>
                <Line />
                <BoxDesc>{item.body}</BoxDesc>
            </WorkBox>
      )
    })
    return (
        <WortSection>
            <div className="container">
                <WorkTitle><Span>My</Span> Work</WorkTitle>
                {workList}
            </div>
        </WortSection>
    );
  }

}

export default work;
