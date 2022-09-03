window.onload = () => {

  let again = true;
  let heart = 4;

  alert(`selamat datang di permainan tebak angka`);
  alert(`pemain akan diberikan nyawa sebanyak ${heart} kali`);
  alert(`jika pemain gagal menebak angka yang dimaksud sebanyak ${heart} kali. tandanya pemain kalah!`);

  function tebakAngka() {
    let guess = getRandomNumber(1, 10);
    while (again) {
      let player = prompt('tebak angka dari mulai 1 hingga 10');
      let validate = setGames(player, guess);
      if (validate == false) alert(`nyawamu tersisa ${heart} kali lagi!`);
      if (heart == 0) {
        alert('nyawamu sudah habis!');
        askAgain();
      }
    }
  }

  tebakAngka()

  alert('terima kasih sudah bermain bersama kami :)');

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function setGames(player, guess) {
    if (player < guess) {
      heart--;
      alert('nilai masih terlalu rendah!');
      return false;
    }
    if (player > guess) {
      heart--;
      alert('nilai terlalu tinggi!');
      return false;
    }
    if (player == guess) {
      alert('benar! jawaban kamu benar!');
      alert(`jawaban yang benar adalah ${player}`);
      return askAgain();
    }
  }

  function askAgain() {
    let ask = confirm('mau mencoba bermain lagi?');
    if (ask == true) {
      heart = 4;
      tebakAngka();
    } else {
      again = false;
    }
  }

}