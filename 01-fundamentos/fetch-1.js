

var request = new XMLHttpRequest();

request.open('GET', 'https://reqres.in/api/users', true);
request.send(null);

request.onreadystatechange = function( state ) {

    if ( request.readyState === 4 ) {
    
        var resp = request.response;
        var respObj = JSON.parse( resp );
        console.log( respObj );
    }
};

const readData = async () => {
    const resp = await fetch('https://reqres.in/api/users');
    const data = await resp.json();
    console.log(data);
}
readData();




