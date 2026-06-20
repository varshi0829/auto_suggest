var API_url = "https://autosuggest-backend.onrender.com/api/autosuggest"

//https://autosuggest-backend.onrender.com/api/autosuggest?q=a&weighted=true&algorithm=trie&limit=8


var searchbar = document.getElementById("search");
var searchsuggestions = document.getElementById("search-suggestions");


//get user input 
//use user typed data in the query in the API call
//API call
//append all the search suggestions to div tag in UI

searchbar.addEventListener("input", function(){
    var query = searchbar.value.trim();
    console.log(query);
    fetchsugg(query);
})


function showsugg(data){
    var val = data.results;
    if(data.count === 0){
        searchsuggestions.innerHTML = "<div>No suggestions found</div>";
    }else{
        var htmlString = "";
        for(var i =0;i<val.length;i++)
        {
            htmlString += "<div>" + val[i].text + "</div>";
        }
        searchsuggestions.innerHTML = htmlString;
    }
}

function fetchsugg(query){
    if(query === ""){
        searchsuggestions.innerHTML = "";
        return;
    }

    var fullAPI = API_url + "?q=" + encodeURIComponent(query) + "&weighted=true&algorithm=trie&limit=8";

    fetch(fullAPI)
    .then(function(data){
        return data.json();
    })

    .then(function(data){
        showsugg(data);
    })

    .catch(function(err){
        console.log("Error : " + err);
    })
}
