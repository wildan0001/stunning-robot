<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kelas 8C - Pulau Wakatobi</title>
  <style>
    body {
      margin: 0;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #ff9a9e, #fad0c4, #a1c4fd, #c2e9fb);
      background-size: 400% 400%;
      animation: gradient 10s ease infinite;
      color: white;
      text-align: center;
    }

    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    /* Bar atas seperti status HP */
    header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.3);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 16px;
      font-size: 1em;
      color: #fff;
      backdrop-filter: blur(6px);
    }

    .title {
      font-weight: bold;
      font-size: 0.95em;
      letter-spacing: 0.5px;
    }

    .status {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    /* Gaya jam digital */
    #clock {
      font-size: 0.9em;
      font-weight: bold;
    }

    /* Gaya baterai */
    .battery {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .battery-icon {
      width: 24px;
      height: 12px;
      border: 2px solid #fff;
      border-radius: 3px;
      position: relative;
    }

    .battery-icon::after {
      content: "";
      position: absolute;
      top: 2px;
      right: -6px;
      width: 4px;
      height: 6px;
      background: #fff;
      border-radius: 1px;
    }

    .battery-level {
      height: 100%;
      background: #4CAF50;
      width: 70%; /* default */
      border-radius: 2px;
    }

    h1 {
      font-size: 2em;
      margin-top: 80px;
      margin-bottom: 10px;
    }

    h2 {
      font-size: 1.3em;
      margin: 0 0 20px 0;
    }

    video {
      width: 80%;
      max-width: 500px;
      border-radius: 10px;
      box-shadow: 0 0 20px rgba(255,255,255,0.3);
    }
  </style>
</head>
<body>
  <!-- Bar atas -->
  <header>
    <div class="title">Kelas: 8C (Pulau Wakatobi)</div>
    <div class="status">
      <div id="clock">00:00</div>
      <div class="battery">
        <div class="battery-icon">
          <div class="battery-level" id="battery-level"></div>
        </div>
        <span id="battery-percent">70%</span>
      </div>
    </div>
  </header>

  <!-- Isi utama -->
  <h1>Nama: Wildan, Adrian, Supri, Satyo, Febby</h1>
  <h2>Hasil Wawancara</h2>

  <video controls>
    <source src="https://files.catbox.moe/u7msaw.mp4" type="video/mp4">
    Browser Anda tidak mendukung video tag.
  </video>

  <script>
    // Fungsi untuk menampilkan jam digital real-time
    function updateClock() {
      const now = new Date();
      let h = now.getHours();
      let m = now.getMinutes();
      if (h < 10) h = "0" + h;
      if (m < 10) m = "0" + m;
      document.getElementById("clock").textContent = `${h}:${m}`;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // Menampilkan status baterai
    if ('getBattery' in navigator) {
      navigator.getBattery().then(function(battery) {
        function updateBattery() {
          const percent = Math.round(battery.level * 100);
          document.getElementById("battery-percent").textContent = percent + "%";
          document.getElementById("battery-level").style.width = percent + "%";
          if (percent < 30) {
            document.getElementById("battery-level").style.background = "#ff4d4d";
          } else if (percent < 60) {
            document.getElementById("battery-level").style.background = "#ffcc00";
          } else {
            document.getElementById("battery-level").style.background = "#4CAF50";
          }
        }
        updateBattery();
        battery.addEventListener('levelchange', updateBattery);
      });
    } else {
      // Simulasi jika browser tidak mendukung API baterai
      let fakeBattery = 70;
      setInterval(() => {
        fakeBattery = fakeBattery > 0 ? fakeBattery - 1 : 100;
        document.getElementById("battery-percent").textContent = fakeBattery + "%";
        document.getElementById("battery-level").style.width = fakeBattery + "%";
      }, 3000);
    }
  </script>
</body>
</html>
