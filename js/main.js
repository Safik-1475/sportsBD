const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', function () {
    const searchInput = document.querySelector('#player-search');
    const searchValue = searchInput.value;
    searchInput.value = '';

    // load sport bd api here
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayPlayer(data.player))
});

// Player Details here 
const displayPlayer = players => {
    const playerColumn = document.querySelector('#player-column');
    for (const player of players) {
        // create a div here 
        const div = document.createElement('div');
        div.classList.add('col-md-5', 'col-sm-12', 'col-lg-5', 'border', 'shadow-lg', 'g-4');
        div.innerHTML = `
        <img src="${player.strThumb}" alt="" class='img-responsive w-100' >
        <div class='d-flex justify-content-between my-3' >
            <div>
                <h3 class='fs-6' >Country : ${player.strNationality} </h3>
                <h3 class='fs-6' >Name : ${player.strPlayer}</h3>
            </div>
            <div class='d-flex justify-content-center align-self-center'>
                <button type="button" class="btn btn-sm btn-outline-primary">Delete</button>
                <button type="button" class="btn btn-sm btn-outline-primary" onclick="loadDetails(${player.idPlayer})">More..</button>
            </div>
        </div>
        `;
        playerColumn.appendChild(div)
    }
};

const loadDetails = player => {
    console.log(player);
}