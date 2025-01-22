import React ,{ createContext, useContext } from "react";
import PropTypes from 'prop-types'

const UserContext = createContext({})

export const UserProvider = ({children})=>{
	const user = {name:'teste',age:26 }
	const otherUser = {name:'te',age:16 }

	return(
		<UserContext.Provider value={{user,otherUser}}>
			{children}
		</UserContext.Provider>
	)
}

export const useUser = ()=>{
	const context = useContext(UserContext)

	if(!context){
		throw new Error('useUser must be used with UserContext')
	}

	return context
}



UserProvider.propTypes = {
	children: PropTypes.node
}