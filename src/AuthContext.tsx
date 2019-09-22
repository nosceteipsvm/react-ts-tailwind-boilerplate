import React, { useState, createContext } from 'react';
import jwt_decode from 'jwt-decode';

//@ts-ignore
export const AuthContext = createContext();

const AuthContextProvider = (props: any) => {
	const [user, updateUser] = useState<string|null>(null);

	const checkAuthorized = (): void => {
		const jwt_token = localStorage.getItem('jwt_token');

		if (jwt_token !== null && jwt_token !== undefined) {
			try {
				const user: any = jwt_decode(jwt_token);
				// expired token
				if (Date.now() >= user.exp * 1000) { /* 6 horas */
					localStorage.removeItem('jwt_token');
				} else {
					updateUser(user);
				}
			} catch(err) {
				throw err;
			}
		} 
		
	}

	const login = async (jwt_token: string) => {
		localStorage.setItem('jwt_token', jwt_token);
		await checkAuthorized();
	}

	const logout = async () => {
		localStorage.removeItem('jwt_token');
		updateUser(null);
	}

	return (
		<AuthContext.Provider value={{
			user,
			login,
			logout
		}}>
			{ props.children }
		</AuthContext.Provider>
	)
}


export { AuthContextProvider };