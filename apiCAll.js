let axios=require("axios");

axios.get("https://reqres.in/api/users?page=2").then(

    function(response)
    {
        console.log(response)
}
).catch(
    function(error)
    {
        console.log(error)
    }
)