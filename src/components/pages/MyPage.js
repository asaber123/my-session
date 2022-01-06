import React from 'react'

function MyPage()  {
    if (localStorage.getItem('token').length > 1) {
    return (
        <div>
            
        </div>
    )
    }else{
        return (
            <div>
                sorry you do not have acess
            </div>
        ) 
    }
}

export default MyPage
