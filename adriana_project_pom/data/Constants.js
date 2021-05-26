import dotenv from 'dotenv'
dotenv.config()


export const URLS = {
    LOGIN_PAGE: 'https://www.saucedemo.com/'
}

export const CREDENTIALS = {
    VALID_USER:{
        USERNAME: process.env.VALID_USERNAME,
        PASSWORD: process.env.VALID_PASSWORD
},
    INVALID_USER:{
        USERNAME: process.env.INVALID_USERNAME,
        PASSWORD: process.env.INVALID_PASSWORD
    }
}

export const MESSAGES = {
    ERROR_MESSAGES:{
        INVALID_LOGIN: 'Epic sadface: Username and password do not match any user in this service'
    }
}

export const USER_INFORMATION = {
        FIRST_NAME: 'Adriana',
        LAST_NAME: 'Trejo',
        ZIP_CODE: '12345'
}