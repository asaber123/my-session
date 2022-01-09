export async function getRoutes(){
    const response = await fetch(`http://localhost:3001/api/`, {
            method: "GET",
            headers: headers()
        });
    const data = await response.json();
    return data;
}

export async function postRoute(climbingLog){
    const response = await fetch('http://localhost:3001/api/', {
        body: JSON.stringify(climbingLog),
        method: "POST",
        headers: headers()
    })
    const err = response.err;
    if (err) {
        console.log(err.response.data.message);
        console.log(err.response.status);
        console.log(err.response.headers);
        alert(err.response.data.message)  
    }
    return response;
}

export async function updateRoute(id, climbingLog){
    const response = await fetch(`http://localhost:3001/api/${id}`, {
        body: JSON.stringify(climbingLog),
        method: "PATCH",
        headers: headers()
    })
    return response;
}

export async function deleteRoute(id){
    return await fetch(`http://localhost:3001/api/${id}`, {
        method: "DELETE",
        headers: headers()
    });
}


function headers() {
    const headers = {'Content-Type': 'application/json'}
    const token = localStorage.token
    if (token){
        headers['Authorization'] = `Bearer ${token}`;
    }
    return headers;
}