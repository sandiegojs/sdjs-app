import React from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import {connect} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import {FormLabel, FormInput, Button} from 'react-native-elements';
import authenticateWithGithubAsync from '../SignupContainer/authenticateWithGithubAsync';
import {emailLoginEntry, passwordLoginEntry, loginEntry, loadingScreen} from './loginActions';

class LoginContainer extends React.Component {
	constructor(props) {
		super(props);

		this.handleLoginEmailInput = this.handleLoginEmailInput.bind(this);
		this.handleLoginPasswordInput = this.handleLoginPasswordInput.bind(this);
		this.handleLoginSubmission = this.handleLoginSubmission.bind(this);
	}

	handleLoginEmailInput(text) {
		const {dispatch} = this.props;
		dispatch(emailLoginEntry(text));
	}

	handleLoginPasswordInput(text) {
		const {dispatch} = this.props;
		dispatch(passwordLoginEntry(text));
	}

	handleLoginSubmission() {
		const {dispatch, email, password} = this.props;
		const {navigate} = this.props.navigation;
		dispatch(loginEntry({loginEmail: email, loginPassword: password}, navigate));
	}

	// _authenticateWithGithubAsync = async () => {
	//     const { dispatch } = this.props;
	//     try {
	//         let user = await authenticateWithGithubAsync();
	//         const githubObj = {
	//             "first_name": user.name.split(' ')[0],
	//             "last_name": user.name.substr(user.name.indexOf(' ') + 1),
	//             "email": user.email,
	//             "password": user.id.toString()
	//         };
	//         dispatch(thirdPartyLogin(githubObj));
	//         this.setState({ githubToken: result });
	//     } catch (e) {
	//         this.setState({ error: JSON.stringify(e) });
	//     }
	// };

	render() {
		const {user, loadingScreen, email} = this.props;
		return (
			<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
				<View style={styles.container}>
					<View style={styles.formContainer}>
						<FormLabel>EMAIL</FormLabel>
						<FormInput
							defaultValue={email}
							onChangeText={this.handleLoginEmailInput}/>
						<FormLabel>PASSWORD</FormLabel>
						<FormInput
							secureTextEntry={true}
							onChangeText={this.handleLoginPasswordInput}/>
					</View>
					<Button
						style={styles.button}
						onPress={this.handleLoginSubmission}
						backgroundColor={'#346abb'}
						borderRadius={3}
						large
						icon={{name: 'sign-in', type: 'font-awesome'}}
						title='LOG IN'/>
					{/* <View style={styles.socialButtonsContainer}>
                    <Button
                        onPress={this._authenticateWithGithubAsync}
                        backgroundColor={'#346abb'}
                        borderRadius={3}
                        large
                        icon={{ name: 'github', type: 'font-awesome' }}
                        title='GITHUB' />
                </View> */}
					<View style={{paddingTop: 30}}>
						<Button
							title='CREATE ACCOUNT'
							style={styles.button}
							borderRadius={3}
							backgroundColor={'#346abb'}
							onPress={() => this.props.navigation.navigate('Signup')}
						/>
					</View>
					<View>
						<Button
							title='FORGOT PASSWORD?'
							style={styles.button}
							backgroundColor={'#346abb'}
							onPress={() => this.props.navigation.navigate('Password')}
						/>
					</View>
				</View>
			</TouchableWithoutFeedback>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#DCDCDC',
		alignItems: 'center',
		paddingTop: 30,
		paddingBottom: 300
	},
	button: {
		borderRadius: 8,
		marginTop: 30,
		marginBottom: 20,
		width: 320
	},
	socialButtonsContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		width: 350,
		paddingTop: 8,
		paddingHorizontal: 25
	},
	formContainer: {
		paddingBottom: 20,
		width: 350
	},
	formMessage: {
		height: 200,
		width: 200
	}
});

function mapStoreToProps(store) {
	return {
		email: store.loginData.email,
		password: store.loginData.password,
		user: store.loginData.user,
		loadingScreen: store.loginData.loadingScreen,
		token: store.loginData.token,
		id: store.loginData.id
	};
}

export default connect(mapStoreToProps)(LoginContainer)
