import { driverList } from "../data/driverList.js";
const scheduleRow = document.querySelector(".schedule-row");
const renderDriver = function (driver) {
  return `
        <div class="unit-row">
          <div class="driver-card" data-id="${driver.id}">
            <div class="driver-card__header">
              <div class="row-2">
                <div class="row-2__col-1">
                  <h3 class="driver-name">${driver.name}</h3>
                </div>
                <div class="row-2__col-2">
                  <h3 class="unit">Unit: ${driver.unit}</h3>
                </div>
              </div>
            </div>
            <div class="driver-card__body">
              <div class="row-2">
                <div class="row-2__col-1">
                  <p class="driver-phone__number">${driver.phone}</p>
                </div>
                <div class="row-2__col-2">
                  <p class="driver-pin__number">DriverPIN: ${driver.pin}</p>
                </div>
              </div>
              <div class="row-2">
                <div class="row-2__col-1">
                  <p class="petro-number">Petro#: ${driver.petro}</p>
                </div>
                <div class="row-2__col-2">
                  <p class="petro-pin">Petro Pin: ${driver.petroPIN}</p>
                </div>
              </div>
              <div class="row-2">
                <div class="row-2__col-1">
                  <p class="ufa-number">UFA#: ${driver.ufa}</p>
                </div>
                <div class="row-2__col-2">
                  <p class="ufa-pin">UFA Pin: ${driver.ufaPIN}</p>
                </div>
              </div>
              <div class="row-2">
                <div class="row-2__col-1">
                  <p class="motive-user">Motive User: ${driver.user}</p>
                </div>
                <div class="row-2__col-2">
                  <p class="motive-pass">Motive Pass: ${driver.pass}</p>
                </div>
              </div>
              <div class="row-2">
                <div class="row-2__col-1">
                  <p class="weekly-rev">Weekly Revenue: $1,000</p>
                </div>
                <div class="row-2__col-2">
                  <p class="weekly-fsc">Weekly FSC: $60.00</p>
                </div>
              </div>
            </div>
          </div>
            ${renderWeek(driver.id)}
        </div>
  `;
};

const renderWeek = function (driverID) {
  const weekStart = new Date(2026, 2, 22);
  // console.log(weekStart);
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(weekStart);
    d.setDate(d.getDate() + i);
    dates.push(d);
    // console.log(dates);
  }
  const locale = navigator.language;
  const dayfmt = new Intl.DateTimeFormat(locale, { weekday: "long" });
  const datefmt = new Intl.DateTimeFormat(locale, { day: "numeric" });

  // dates.forEach((d) => {
  //   console.log(`${dayfmt.format(d)} (${datefmt.format(d)})`);
  // });
  const loadsHTML = function () {
    let loadHTML = "";
    for (let i = 0; i < 3; i++) {
      loadHTML += `
              <div class="load-${i + 1}">
                <div class="load-container">
                  <input class="pickup load-${i + 1}-pickup" type="text" placeholder="Pickup">
                  <input class="unload load-${i + 1}-unload" type="text" placeholder="Unload">
                  <div class="load-${i + 1}__footer">
                    <div class="mt-container">
                      <input class="mt load-${i + 1}-mt" type="number" placeholder="MT">
                    </div>
                    <div class="fsc-container">
                      <input class="fsc load-${i + 1}-fsc" type="number" placeholder="RATE">
                    </div>
                    <div class="revenue-container">
                      <p class="revenue load-${i + 1}-revenue"></p>
                    </div>
                  </div>
                </div>
                <div class="notes-container">
                  <div class="notes-container__header">
                    <h4>Load Notes</h4>
                  </div>
                  <div class="notes-container__body">
                    <textarea class="load-${i + 1}__notes" rows="5"></textarea>
            
                  </div>
                </div>
              </div>
      `;
    }
    return loadHTML;
  };

  const daysHTML = dates
    .map((day) => {
      return `
      <div class="day">
      <div class="day__header">
        <h4>${dayfmt.format(day)} (${datefmt.format(day)})</h4>
      </div>
        ${loadsHTML()}
      </div>
    `;
    })
    .join("");

  return `
          <div class="daily-schedule">
            ${daysHTML}
          </div>
  `;
};

scheduleRow.innerHTML = driverList.map(renderDriver).join("");
