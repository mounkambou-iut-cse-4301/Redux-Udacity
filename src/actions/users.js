import { RECEIVE_TWEETS } from "./tweets"

export const RECEIVE_USERS='RECEIVE_USERS'

export function receiveUsers(users){
    return{
        type:RECEIVE_USERS,
        users,
    }
}