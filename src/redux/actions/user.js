import axios from 'axios';

import {
  LOGIN,
  GET_USER_BY_ID,
  CREATE_USER,
  GET_ALL_USERS,
  DISCHARGE_USER,
} from '../constants/index'

import IP from './ip';

const createUser = (user) => {
  return {
    type: CREATE_USER,
    user
  };
};

const getUser = (user) => {
  return {
    type: GET_USER_BY_ID,
    user
  };
};

const getAllUsers = (user) => {
  return {
    type: GET_ALL_USERS,
    user
  };
};

const dischargeUser = (user) => {
  return {
    type: DISCHARGE_USER,
    user
  };
};

const logUser = (user) => {
  return {
    type: LOGIN,
    user
  };
}

const logoutUser = (user) => {
  return {
    type: LOGOUT,
    user
  };
}

export const createNewUser = (user) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`http://${IP}:3001/user`, user);
      dispatch(createUser(res.data));
      if (res.data.email) {
        const email = res.data.email;
        await axios.post(`http://${IP}:3001/email`, { email });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const getUserByID = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`http://${IP}:3001/user/${id}`);
      dispatch(getUser(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`http://${IP}:3001/user`);

      dispatch(getAllUsers(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const dischargeNewUser = (updateUser) => {
  const firstName = updateUser.first_name.charAt(0).toUpperCase() + updateUser.first_name.slice(1);
  const lastName =updateUser.last_name.charAt(0).toUpperCase() + updateUser.last_name.slice(1);
  return async (dispatch) => {
    try {
      const res = await axios.put(`http://${IP}:3001/user/alta/${updateUser.id}`, {
        firstName: firstName,
        lastName: lastName,
        mobile: updateUser.phone_number,
        street: 'Bs As',
        streetNumber: 299,
        city: 'Junin',
        province: 'Mendoza',
        country: updateUser.country,
        birthdate: updateUser.birthday_date,
        typeDNI: updateUser.typeID,
        DNI: updateUser.document_number
      });
      dispatch(dischargeUser(res.data));
      console.log('Action', res.data);
      alert(`Usuario registrado correctamente`);
    } catch (err) {
      console.log(err);
    }
  };
};

export const createAccount = (updateUser) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`http://${IP}:3001/account/${updateUser.id}`);
    } catch (err) {
      console.log(err)
    };
  };
};

  export const login = (user) => {
    return async (dispatch) => {
      try {
        const res = await axios.post(`http://${IP}:3001/auth/login`, user);
        dispatch(logUser(res.data))
      } catch (err) {
        console.log(err);
      }
    };
  };

  export const logout = () => {
    return async (dispatch) => {
      try {
        dispatch(logoutUser(res.data))
      } catch (err) {
        console.log(err);
      }
    };
  };
