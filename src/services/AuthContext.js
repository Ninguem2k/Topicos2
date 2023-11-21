import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import api from './api';

export const AuthContext = createContext();

const LOGIN_ENDPOINT = '/sessions';
const CONTENT_TYPE_JSON = 'application/json';
const REFRESH_TOKEN_ENDPOINT = '/refresh_token';

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const navigation = useNavigation();

    const login = async (username, password) => {
        try {
            const config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: LOGIN_ENDPOINT,
                headers: { CONTENT_TYPE_JSON },
                data: {
                    email: username,
                    password: password,
                },
            };
            const response = await api.request(config);

            const { token: accessToken } = response.data.authorization;
            const { user: userData } = response.data;
            await AsyncStorage.setItem('accessToken', accessToken);
            userData['token'] = accessToken;
            setUser(userData);
            setToken(accessToken);
            navigation.navigate('MenuScreen');
        } catch (error) {
            console.log(error);
        }
    };

    const loginWithToken = async () => {
        try {
            const oldRefreshToken = await AsyncStorage.getItem('accessToken');
    
            if (oldRefreshToken) {
                const config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: REFRESH_TOKEN_ENDPOINT,
                    headers: {
                        'Content-Type': CONTENT_TYPE_JSON,
                        Authorization: `Bearer ${oldRefreshToken}`,
                    },
                };
    
                const response = await api.request(config);
                if (response.status !== 200) {
                    navigation.navigate('LoginScreen');
                    return;
                }
    
                const { token: accessToken } = response.data.authorisation;
                const { user: userData } = response.data;
                await AsyncStorage.setItem('accessToken', accessToken);
                userData['token'] = accessToken;
                setUser(userData);
                setToken(accessToken);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const logout = async () => {
        try {
            await AsyncStorage.removeItem('accessToken');
            setUser(null);
            setToken(null);
            navigation.navigate('HomeScreen');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                loginWithToken,
                user,
                token,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
