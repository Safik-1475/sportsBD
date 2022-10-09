const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', function () {
    const searchInput = document.querySelector('#player-search');
    document.getElementById('spinner').style.display = 'block';
    const searchValue = searchInput.value;
    searchInput.value = '';

    // load sport bd api here
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
    document.getElementById('spinner').style.display = 'block';
    fetch(url)
        .then(response => response.json())
        .then(data => displayPlayer(data.player))
});

// Player Details here 
const displayPlayer = players => {
    document.getElementById('spinner').style.display = 'none';
    document.getElementById('spinner').style.display = 'none';
    const playerColumn = document.querySelector('#player-column');
    playerColumn.innerHTML = '';
    for (const player of players) {
        // create a div here 
        const div = document.createElement('div');
        div.classList.add('col-md-5', 'col-sm-12', 'col-lg-5', 'border', 'shadow-lg', 'g-4', 'column');
        div.innerHTML = `
        <img src="${player.strThumb}" alt="" class='img-responsive w-100' >
        <div class='d-flex justify-content-between my-3' >
            <div>
                <h3 class='fs-6' >Country : ${player.strNationality} </h3>
                <h3 class='fs-6' >Name : ${player.strPlayer}</h3>
            </div>
            <div class='d-flex justify-content-center align-self-center'>
                <button type="button" class="btn btn-sm btn-outline-primary" onclick="deleteBox()">Delete</button>
                <button type="button" class="btn btn-sm btn-outline-primary" onclick="loadDetails(${player.idPlayer})">More..</button>
            </div>
        </div>
        `;
        playerColumn.appendChild(div)
    }
};

const loadDetails = player => {
    // console.log(player);
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${player}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPlayerDetails(data.players[0]))
};
const displayPlayerDetails = player => {
    // console.log(player);
    const playerDetails = document.getElementById('player-details');
    playerDetails.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('col-12', 'col-md-10', 'col-lg-10');
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${player.strThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <ul class="list-group list-group-flush">  
            <li class="list-group-item">Name : ${player.strPlayer}</li>
            <li class="list-group-item">Birthday : ${player.dateBorn}</li>
            <li class="list-group-item">Gender : ${player.strGender}</li>
            <li class="list-group-item">Height : ${player.strHeight}</li>
            <li class="list-group-item">Country : ${player.strNationality}</li>
            <li class="list-group-item">Jersey : ${player.strNumber}</li>
            <li class="list-group-item">Weight : ${player.strWeight}</li>
            <li class="list-group-item">Instagram : ${player.strInstagram}</li>
            <li class="list-group-item">Facebook : ${player.strFacebook}</li>
        </ul>
        </div>
    </div>
    `;
    playerDetails.appendChild(div)
};

const deleteBox = () => {
    const parent = document.getElementById('player-column');
    const parentChild = document.getElementsByClassName('column')[0];
    // console.log(parentChild);
    parent.removeChild(parentChild);
}