import React, {Component} from 'react'
import axios from 'axios'
import { Social, SocialIcon, SocialMediaSection, SpanInfo, SocialP, Span } from './style.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBolt, faLink, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
class SocailMedia extends Component {

  state = {
    social : []
  }

  componentDidMount(){
    axios.get('js/data.json').then(res => { this.setState({ social : res.data.social})})
  }

  render(){

    const {social} = this.state;
    const socialList = social.map( (soc) => {
      return(
        <Social item={soc.name} key={soc.id}>
          <SocialIcon><FontAwesomeIcon icon={faLink} size="lg" /></SocialIcon>
          <SocialP>
            <Span>{soc.title}</Span>
            <SpanInfo>{soc.body}</SpanInfo>
          </SocialP>
        </Social>
      )
    })

    return (
        <SocialMediaSection>
          {socialList}
        </SocialMediaSection>
    );
  }
}

export default SocailMedia;
