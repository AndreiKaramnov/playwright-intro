export const APP_URL = process.env.APP_URL
export const APP_USER = process.env.APP_USER
export const APP_PASSWORD = process.env.APP_PASSWORD

if(!APP_URL){
    throw new Error('APP_URL is not defined');
}
if(!APP_USER){
    throw new Error('APP_USER is not defined');
}
if(!APP_PASSWORD){
    throw new Error('APP_PASSWORD is not defined');
}