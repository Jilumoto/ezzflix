// lm Data fi(contoh)
const movies = [
    { title: "ELONA HOLME 2", genre: "Misteri", year: 2022, actor: "Louis Partidge", image: "holmes.jpg" },
    { title: "PENGABDI SETAN 2", genre: "Horor", year: 2022, actor: "Ratu Felisha", image: "horor.jpg" },
    { title: "AVATAR", genre: "Fiksi Ilmiah", year: 2009, actor: "Zoe Saldana", image: "avatar.jpg" },
    { title: "THE AVENGERS", genre: "Laga", year: 2012, actor: "Robert Downey Jr.", image: "avengers3.jpg" },
    { title: "AVENGERS ENDGAME", genre: "Laga", year: 2019, actor: "Chris Evans", image: "avengers.jpg" },
    { title: "REDEEMING LOVE", genre: "Romance", year: 2022, actor: "Abigail Cowen", image: "love.jpg" },
    { title: "A Man Called Otto", genre: "Drama", year: 2022, actor: "Tom Hanks", image: "otto.jpg" },
    { title: "COCO", genre: "Fantasi", year: 2017, actor: "Antony Gonzalez", image: "coco.jpg" },
    { title: "Jurassic Wolrd Dominion", genre: "Laga", year: 2022, actor: "Chris Pratt", image: "jurasic.jpg" },
    { title: "Money Heist", genre: "Laga", year: 2017, actor: "Alvaro Morte", image: "money.jpg" },
    { title: "The GodFather", genre: "Comedy", year: 1972, actor: "Robert De Niro", image: "the.jpg" },
    { title: "Ancika", genre: "Romance", year: 2024, actor: "Azizi Asadel", image: "ancika.jpg" },
    { title: "My Name", genre: "Laga", year: 2021, actor: "Han So Hee", image: "myname.jpg" },
    { title: "Oppenheimer", genre: "Misteri", year: 2023, actor: "Cillian Murphy", image: "Oppenheimer.jpg" },
    { title: "Jhon Wick 4", genre: "Laga", year: 2023, actor: "Keanu Reeves", image: "jhon.jpg" },
    { title: "Imperial Dreams", genre: "Drama", year: 2014, actor: "John Boyega", image: "imperial.jpg" },
    { title: "Extraction 2", genre: "Laga", year: 2023, actor: "Cris Hemsworth", image: "Extraction2.jpg" },
    { title: "The Moon", genre: "Fiksi Ilmiah", year: 2023, actor: "D.o.", image: "themoon.jpg" },
    { title: "Gran Turismo", genre: "Olahraga/Laga", year: 2023, actor: "Archie Madekwe", image: "gran.jpg" },
    { title: "SpiderMan No Way Home", genre: "2021", year: 2021, actor: "Tom Holland", image: "spider.jpg" },
    { title: "Lucy", genre: "Fiksi ilmiah", year: 2014, actor: "Scarlett Johansson", image: "lucy.jpg" },
    { title: "Gundala", genre: "Laga", year: 2019, actor: "Abimana Aryasatya", image: "gundla.jpg" },
    { title: "Galaksi", genre: "Romance", year: 2023, actor: "Bryan Domani", image: "galaksi.jpg" },
    { title: "There's Someone Inside Your House", genre: "Horor", year: 2021, actor: "Sydney Park", image: "there.jpg" },
    { title: "Luther", genre: "Cerita seru", year: 2023, actor: "Idris Elba", image: "luther.jpg" },
    { title: "Misiion Impossible", genre: "Laga", year: 2023, actor: "Tom Cruise", image: "mission.jpg" },
  
    // Tambahkan data film lainnya
  ];
  
  // Fungsi untuk menampilkan daftar film
  function displayMovies() {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '';
  
    movies.forEach(movie => {
      const movieItem = document.createElement('div');
      movieItem.classList.add('movie');
      movieItem.innerHTML = `
              <img src="${movie.image}" alt="${movie.title}">
              <h3>${movie.title}</h3>
              <p>Genre: ${movie.genre}</p>
              <p>Tahun: ${movie.year}</p>
              <p>Aktor: ${movie.actor}</p>
          `;
      movieList.appendChild(movieItem);
    });
  }
  
  
  
  // Fungsi untuk mengisi opsi filter
  function fillFilterOptions() {
    const genreFilter = document.getElementById('genre');
    const yearFilter = document.getElementById('year');
    const actorFilter = document.getElementById('actor');
  
    // Isi opsi genre, tahun, dan aktor dari data film
    // ...
  
    // Contoh sederhana:
    const genres = [...new Set(movies.map(movie => movie.genre))];
    const years = [...new Set(movies.map(movie => movie.year))];
    const actors = [...new Set(movies.map(movie => movie.actor))];
  
    genres.forEach(genre => {
      const option = document.createElement('option');
      option.value = genre;
      option.text = genre;
      genreFilter.add(option);
    });
  
    years.forEach(year => {
      const option = document.createElement('option');
      option.value = year;
      option.text = year;
      yearFilter.add(option);
    });
  
    actors.forEach(actor => {
      const option = document.createElement('option');
      option.value = actor;
      option.text = actor;
      actorFilter.add(option);
    });
  }
  
  // Fungsi untuk menerapkan filter
  function applyFilters() {
    // Dapatkan nilai filter dari elemen HTML
    const selectedGenre = document.getElementById('genre').value;
    const selectedYear = document.getElementById('year').value;
    const selectedActor = document.getElementById('actor').value;
  
    // Lakukan filter berdasarkan nilai yang dipilih
    const filteredMovies = movies.filter(movie =>
      (selectedGenre === 'All' || movie.genre === selectedGenre) &&
      (selectedYear === 'All' || movie.year == selectedYear) &&
      (selectedActor === 'All' || movie.actor === selectedActor)
    );
  
    // Tampilkan daftar film yang sudah difilter
    displayMovies(filteredMovies);
  }
  
  // Panggil fungsi untuk menampilkan daftar film dan mengisi opsi filter saat halaman dimuat
  window.onload = function() {
    fillFilterOptions();
    displayMovies();
  };