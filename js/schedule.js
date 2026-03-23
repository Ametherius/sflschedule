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
          <div class="daily-schedule">
            ${renderWeek(driver.id)}
          </div>
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

  dates.forEach((d) => {
    console.log(`${dayfmt.format(d)} (${datefmt.format(d)})`);
  });
  return `
            <div class="day day-1">
              <div class="day__header">
                <h4 class="sunday">Sunday (25)</h4>
              </div>
              <div class="load-1">
                <div class="load-container">
                  <p class="pickup"></p>
                  <p class="unload"></p>
                  <div class="load-1__footer">
                    <div class="mt-container">
                      <p class="mt"></p>
                    </div>
                    <div class="fsc-container">
                      <p class="fsc"></p>
                    </div>
                    <div class="revenue-container">
                      <p class="revenue"></p>
                    </div>
                  </div>
                </div>
                <div class="notes-container">
                  <div class="notes-container__header">
                    <h4>Load Notes</h4>
                  </div>
                  <div class="notes-container__body">
                    <p class="load-1__notes"></p>
                  </div>
                </div>
              </div>
              <div class="load-2">
                <div class="load-container">
                  <p class="pickup"></p>
                  <p class="unload"></p>
                  <div class="load-2__footer">
                    <div class="mt-container">
                      <p class="mt"></p>
                    </div>
                    <div class="fsc-container">
                      <p class="fsc"></p>
                    </div>
                    <div class="revenue-container">
                      <p class="revenue"></p>
                    </div>
                  </div>
                </div>
                <div class="notes-container">
                  <div class="notes-container__header">
                    <h4>Load Notes</h4>
                  </div>
                </div>
              </div>
              <div class="load-3">
                <div class="load-container">
                  <p class="pickup"></p>
                  <p class="unload"></p>
                  <div class="load-3__footer">
                    <div class="mt-container">
                      <p class="mt"></p>
                    </div>
                    <div class="fsc-container">
                      <p class="fsc"></p>
                    </div>
                    <div class="revenue-container">
                      <p class="revenue"></p>
                    </div>
                  </div>
                </div>
                <div class="notes-container">
                  <div class="notes-container__header">
                    <h4>Load Notes</h4>
                  </div>
                </div>
              </div>
            </div>
  `;
};

scheduleRow.innerHTML = driverList.map(renderDriver).join("");
