import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {reducer as formReducer} from 'redux-form'

import login from './reducers/login-reducer';
import loanProducts from './reducers/loan-products-reducer';
import myProducts from './reducers/my-products-reducer';
import borrow from './reducers/borrow-product-reducer';
import register from './reducers/register-reducer';
import borrowedProducts from './reducers/get-borrowed-products-reducer';
import loanedProducts from './reducers/get-loaned-products-reducer';
import addProduct from './reducers/add-product-reducer';
import deleteProduct from './reducers/delete-product-reducer';
import editProduct from './reducers/edit-product-reducer';
import loadUsers from './reducers/load-users-reducer';
import createAdmin from './reducers/create-admin-reducer';
import deleteUser from './reducers/delete-user-reducer';
import searchProduct from './reducers/search-product-reducer';

export const createReduxStore = (config, toInject) => {

    const rootReducer = combineReducers({
        login,
        loanProducts,
        myProducts,
        borrow,
        register,
        borrowedProducts,
        loanedProducts,
        addProduct,
        deleteProduct,
        editProduct,
        loadUsers,
        createAdmin,
        deleteUser,
        searchProduct,
        form: formReducer,
    });

    return createStore(rootReducer,
        getDefaultStoreObject(config),
        compose(
            applyMiddleware(thunkMiddleware.withExtraArgument(toInject)),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
};

function getDefaultStoreObject(config) {
    return {
        login: {
            loginInProgress: false,
            loginSuccess: false,
            loginError: undefined,
            loggedInUser: {
                email: "",
                firstName: "",
                lastName: "",
                role: undefined,
                userId: undefined
            }
        },
        register: {
            registerInProgress: false,
            registerSuccess: false,
            registerError: undefined
        },
        loanProducts: {
            loadInProgress: false,
            loadError: undefined,
            products: []
        },
        myProducts: {
            loadInProgress: false,
            loadError: undefined,
            products: []
        },
        borrow: {
            borrowInProgress: false,
            borrowError: undefined,
            borrowSuccess: false
        },
        borrowedProducts: {
            getBorrowedProductsInProgress: false,
            getBorrowedProductsSuccess: false,
            getBorrowedProductsError: undefined,
            products: []
        },
        loanedProducts: {
            getLoanedProductsInProgress: false,
            getLoanedProductsSuccess: false,
            getLoanedProductsError: undefined,
            products: []
        },
        addProduct: {
            addProductInProgress: false,
            addProductError: undefined
        },
        deleteProduct: {
            deleteProductInProgress: false,
            deleteProductError: undefined
        },
        editProduct: {
            editProductInProgress: false,
            editProductError: undefined
        },
        loadUsers: {
            loadInProgress: false,
            loadError: undefined,
            users: []
        },
        createAdmin: {
            createAdminInProgress: false,
            createAdminError: undefined
        },
        deleteUser: {
            deleteUserInProgress: false,
            deleteUserError: undefined
        },
        searchProduct: {
            searchProductInProgress: false,
            searchProductError: undefined,
            products: []
        }
    };
}