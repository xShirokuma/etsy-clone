// constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";
const ADD_FAV = "session/ADD_FAV"
const DELETE_FAV = "session/DELETE_FAV"

const setUser = (user) => ({
	type: SET_USER,
	payload: user,
});

const removeUser = () => ({
	type: REMOVE_USER,
});

const addFav = (updatedUser) => ({
	type: ADD_FAV,
	updatedUser
})
const deleteFav = (updatedUser) => ({
	type: DELETE_FAV,
	updatedUser
})


const initialState = { user: null };

export const authenticate = () => async (dispatch) => {
	const response = await fetch("/api/auth/", {
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (response.ok) {
		const data = await response.json();
		if (data.errors) {
			return;
		}

		dispatch(setUser(data));
	}
};

export const login = (email, password) => async (dispatch) => {
	const response = await fetch("/api/auth/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email,
			password,
		}),
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(setUser(data));
		return null;
	} else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};

export const logout = () => async (dispatch) => {
	const response = await fetch("/api/auth/logout", {
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (response.ok) {
		dispatch(removeUser());
	}
};

export const signUp = (username, email, password) => async (dispatch) => {
	const response = await fetch("/api/auth/signup", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username,
			email,
			password,
		}),
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(setUser(data));
		return null;
	} else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};

export const thunkAddFav = (productId, userId) => async (dispatch) => {
	const response = await fetch(`/api/users/${userId}/favorites/products/${productId}`,{
        method:'PUT',
        headers:{ "Content-Type" : 'application/json' },
        // body: JSON.stringify(editreview)
    })
    if(response.ok) {
        const updatedUser = await response.json();
        dispatch(addFav(updatedUser))
        return updatedUser;  
    };
}

export const thunkDeleteFav = (productId, userId) => async (dispatch) => {
	const response = await fetch(`/api/users/${userId}/favorites/products/${productId}`,{
        method:'DELETE',
	})
	if(response.ok) {
        const updatedUser = await response.json();
        dispatch(deleteFav(updatedUser))
        return updatedUser;  
    };
}


//reducer
export default function reducer(state = initialState, action) {
	switch (action.type) {
		case SET_USER:
			return { user: action.payload };
		case REMOVE_USER:
			return { user: null };
		case ADD_FAV:
			return { ...action.updatedUser}
		case DELETE_FAV:
			return { ...action.updatedUser}
		default:
			return state;
	}
}
