const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add("hidden");
    //const artistName = document.getElementById('artist-name');
    //const artistImage = document.getElementById('artist-img');
    resultArtist.innerHTML = '';


    result.forEach(element => {
        const artistCard = document.createElement('div');
        artistCard.classList.add('artist-card');
        const artistName = document.createElement('h2');
        artistName.innerText = element.name;

        const artistImage = document.createElement('img');
        artistImage.src = element.urlImg;

        artistCard.appendChild(artistImage);
        artistCard.appendChild(artistName);

        resultArtist.appendChild(artistCard);


        //artistName.innerText = element.name;
        //artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return
    }
    
    requestApi(searchTerm);
})