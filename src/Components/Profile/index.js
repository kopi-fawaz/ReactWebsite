import React, { Component } from 'react';
import {ProfileSection, ProfileInfo, ProfileTitle, Span, ProfileList, ProfileItem, ProfileItemSpan, Skills, SkillsTitle, SkillsDesc, Bar, BarTitle, BarPerc, BarParent, BarParentSpan} from './style.js';
import axios from 'axios'

class Profile extends Component {

  state = {
    profile : []
  }

  componentDidMount() {
    axios.get('js/data.json').then(res => { this.setState({profile : res.data.profile} ) } )
  }

  render(){

    const {profile} = this.state;
    const profileInfoList = profile.map( (info) => {
      return(
        <Bar key={info.id}>
          <BarTitle>{info.lang}</BarTitle>
          <BarPerc>{info.percentage}%</BarPerc>
          <BarParent>
            <BarParentSpan sp={info.percentage}></BarParentSpan>
          </BarParent>
        </Bar>
      )
    })

    return (
        <ProfileSection>
            <div className="container">
                <ProfileInfo>
                    <ProfileTitle><Span>My </Span>Profile</ProfileTitle>
                    <ProfileList>
                        <ProfileItem>
                            <ProfileItemSpan>Name</ProfileItemSpan>
                            Adam Damir
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Birthday</ProfileItemSpan>
                            1/1/1994
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Address</ProfileItemSpan>
                            Turkey / Kocaeli
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Phone</ProfileItemSpan>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Email</ProfileItemSpan>
                            Kopi@Kopi.com
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Website</ProfileItemSpan>
                            <ProfileItemSpan web>www.google.com</ProfileItemSpan>
                        </ProfileItem>
                      </ProfileList>
                </ProfileInfo>
                
                <Skills>
                    <SkillsTitle>Some <Span>skills</Span></SkillsTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    <div>
                      {profileInfoList}
                    </div>
                </Skills>
            </div>
        </ProfileSection>
    );
  }
}

export default Profile;
