import './style.js';
import { Anchor, ListItem, Logo, LogoText, NavbarSection, UlList } from './style.js';

function Navbar() {
  return (
    <NavbarSection>
      <div className="container">
        <Logo>
          <LogoText className="logo-text">Ultra Profile</LogoText>
        </Logo>
        <UlList className="ul-list">
          <ListItem><Anchor to="/" >HOME</Anchor></ListItem>
          <ListItem><Anchor to="/work" >Work</Anchor></ListItem>
          <ListItem><Anchor to="/portfolio" >Portfolio</Anchor></ListItem>
          <ListItem><Anchor to="/Profile" >Profile</Anchor></ListItem>
          <ListItem><Anchor to="/about" >About</Anchor></ListItem>
          <ListItem><Anchor to="contact" >Contact</Anchor></ListItem>
        </UlList>
      </div>
    </NavbarSection>
  );
}

export default Navbar;
