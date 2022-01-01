import {extendObservable, observable} from 'mobx'

class UserStore{
    constructor(){
        //Observatr that will contain the properties for the userStore. 
        extendObservable(this, {
            loading: true, 
            isLoggedIn: false, 
            username: ''
        })
    }
}
export default UserStore