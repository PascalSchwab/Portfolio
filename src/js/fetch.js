async function PostData(url, data={}, token=""){
    return await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer "+ token
        },
        method: "POST",
        body: JSON.stringify(data)
    }).then(async(response)=>{
        if(response.ok){
            var resp = await response.json();
            return {data: resp, status: response.status, ok: response.ok};
        }
    }).catch((error)=>{
        console.log("Error");
    })
}

async function GetData(url, token=""){
    return await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer "+ token
        },
        method: "GET"
    }).then(async(response)=>{
        if(response.ok){
            var resp = await response.json()
            return {data: resp, status: response.status, ok: response.ok};
        }
    }).catch((error)=>{
        console.log("Error");
    });
}

async function PutData(url, data={}, token=""){
    return await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer "+ token
        },
        method: "PUT",
        body: JSON.stringify(data)

    }).then(async(response)=>{
        if(response.ok){
            var resp = await response.json()
            return {data: resp, status: response.status, ok: response.ok};
        }
    }).catch((error)=>{
        console.log("Error");
    });
}

async function DeleteData(url, data={}, token=""){
    return await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer "+ token
        },
        method: "DELETE",
        body: JSON.stringify(data)
    }).then(async(response)=>{
        if(response.ok){
            var resp = await response.json()
            return {data: resp, status: response.status, ok: response.ok};
        }
    }).catch((error)=>{
        console.log("Error");
    });
}

export {GetData, PostData, PutData, DeleteData};