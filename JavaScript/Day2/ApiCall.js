const axios = require('axios') 

axios.get("http://dummy.restapiexample.com/api/v1/employees").then(
    function(response){
        console.log(response.data)
    }
).catch(function(error){
    console.log(error)
}
    )