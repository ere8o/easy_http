class easyHTTPv2 {

    get(url) {

        return new Promise((resolve, reeject) => {
            fetch(url)
                //.then(function(res){return res.json})
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }

    post(url, data) {

        return new Promise((resolve, reeject) => {
            fetch(url, {
                method: 'POST',
                headers:{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                //.then(function(res){return res.json})
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }

    put(url, data) {

        return new Promise((resolve, reeject) => {
            fetch(url, {
                method: 'PUT',
                headers:{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                //.then(function(res){return res.json})
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }
    
    put(url, data) {

        return new Promise((resolve, reeject) => {
            fetch(url, {
                method: 'PUT',
                headers:{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                //.then(function(res){return res.json})
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }
    
    delete(url) {

        return new Promise((resolve, reeject) => {
            fetch(url, {
                method: 'DELETE',
                headers:{
                    'Content-type': 'application/json'
                }
            })
                //.then(function(res){return res.json})
                .then(res => res.json())
                .then(() => resolve('Resource Deleted...'))
                .catch(err => reject(err))
        })
    }
}