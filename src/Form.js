import React from 'react';
export default class Form extends React.Component {
	state = {
		firstName: 'dog',
		lastName: '',
		username: '',
		email: '',
		password: '',


	}

render()
{
	return(
		<form>
		<input placeholder='First name' value={this.state.firstName}/>
		</form>
		);
}

}