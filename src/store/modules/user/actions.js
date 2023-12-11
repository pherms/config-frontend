import axios from "axios";

export default {
    async login(context, data) {
        console.log(data.emailAddress);
        // const request = {
        //     emailAddress: data.emailAddress,
        //     password: data.password
        // };
        
        const response = await axios.post('http://127.0.0.1:8081/api/v1/auth', {
            emailAddress: data.emailAddress,
            password: data.password
        });

        console.log('Awaiting response...');
        const responseData = await response.data;
        console.log(responseData);

        if (!response.status === 201) {
            const error = new Error(response.message || 'Failed to send request.');
            throw error;
        }

        const sessionData = {}
        sessionData.authKey = responseData.accessToken,
        sessionData.loggedInStatus = true,
        sessionData.emailAddress = data.emailAddress,
        sessionData.fullName = responseData.fullName

        context.commit('setLoginData', sessionData);
    },
    async registerUser(context, payload) {
        const userData = {
            firstName: payload.firstName,
            lastName: payload.lastName,
            password: payload.password,
            emailAddress: payload.emailAddress,
        }

        const response = await axios.post('http://127.0.0.1:8081/api/v1/users', {
            body:JSON.stringify(userData)
        });

        const responseData = await response.json();

        if (!response.status === 201) {
            const error = new Error(responseData.message || 'Failed to send request');
            throw error;
        }

        const newUser = {
            authKey: responseData.accessToken,
            loggedInStatus: true,
            fullName: responseData.fullName,
            emailAddress: responseData.emailAddress
        }

        context.commit('setLoginData', newUser);
    },
    logout(context,payload) {
        console.log(payload);
        if(payload) {
            context.commit('setloggedInState', false);
        }   
        context.commit('removeUserData');
    },
};