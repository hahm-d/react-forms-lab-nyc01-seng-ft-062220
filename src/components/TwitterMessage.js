import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { message: ""};
  }

  handleTwitterMessage = e => {
   this.setState({ message: e.target.value
    }, () => console.log(e.count))
  }




  render() {
    console.log(this.props.maxChars)
    //maxChars is being passed down from App.js as an object {280}
    let charNumber = this.props.maxChars - this.state.message.length

    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={e => this.handleTwitterMessage(e) } name="message" id="message" value={this.state.message}/>
        <p>message count: {charNumber}</p>
      </div>
    );
  }
}

export default TwitterMessage;
