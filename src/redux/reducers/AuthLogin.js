/** @format */

const initialState = {
	loading: false,
	data: {
		success: false,
		message: '',
		status: '',
		data: {},
	},
	error: null,
	isLogin: false,
};

const Fetch = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'LOGIN_REQUEST':
			return { ...state, loading: true };
		case 'LOGIN_ERROR':
			return {
				...state,
				loading: false,
				data: state.data,
				error: action.payload,
				isLogin: false,
			};
		case 'LOGIN_SUCCESS':
			return {
				...state,
				loading: false,
				data: action.payload,
				error: null,
				isLogin: true,
			};
		case 'AUTH_LOGOUT':
			return { loading: false, data: {}, error: null, isLogin: false };
		default:
			return state;
	}
};

const RegisterRequest = () => {
	return {
		type: 'REGISTER_REQUEST',
	};
};

const RegisterSuccess = (data) => {
	return {
		type: 'REGISTER_SUCCESS',
		payload: data,
	};
};

const RegisterError = (error) => {
	return {
		type: 'REGISTER_ERROR',
		payload: error,
	};
};

export const AuthRegister = (formData) => {
	return (dispatch) => {
		dispatch(RegisterRequest());
		axios({
			method: 'POST',
			url: 'https://seahorse-app-bmw8s.ondigitalocean.app/api/v1/auth/register',
			data: {
				email: formData.email,
				phoneNumber: formData.phoneNumber,
				password: formData.password,
				confirmpassword: formData.confirmpassword,
			},
		})
			.then((res) => {
				dispatch(RegisterSuccess(res.data));
				alert(res.data.message);
			})
			.catch((err) => {
				dispatch(RegisterError(alert(err.response.data.message)));
			});
	};
};

export default Fetch;
