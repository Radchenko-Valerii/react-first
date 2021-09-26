import React, { Component } from 'react';
const a = require("./../../img/facebook.png")
class Links extends Component {

  generateLinks(contacts){

    const linksArray = contacts.map((contact) => {
      const url = new URL(contact).hostname;
      if(contact.includes('facebook')||contact.includes('twitter')||contact.includes('instagram')){
        const link = React.createElement('a', {url: url, href: contact}, <img src={a} alt="img"></img>)
        return link;
      };
    });
    return linksArray;
  }

  render() {
    const {contacts} = this.props
    const arrContacts = this.generateLinks(contacts)
    return (
      <div>
        {arrContacts}
      </div>
    );
  }
}

export default Links;
