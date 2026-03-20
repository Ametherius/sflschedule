import { driverList } from "../data/driverList.js";

const scheduleRow = document.querySelector(".schedule-row");

const displayDrivers = function (unit) {
  scheduleRow.textContent = "";
  unit.forEach((u) => {
    const html = ` 
    <div class="unit-row">
          <div class="driver-card">
            <div class="driver-card__header">
              <div class="row-2">
                <div class="row-2__col-1">
                  <h3 class="driver-name">${u.name}</h3>
                </div>
                <div class="row-2__col-2">
                  <p class="unit">Unit: ${u.unit}</p>
                </div>
              </div>
            </div>
            <div class="driver-card__body">
              <div class="row-2">
                <div class="row-2__col-1">
                  <p class="driver-phone__number">${u.phone}</p>
                </div>
                <div class="row-2__col-2">
                  <p class="driver-pin__number">DriverPIN: ${u.pin}</p>
                </div>
              </div>
              <div class="row-2">
                <div class="row-2__col-1">
                  <p class="petro-number">Petro#: ${u.petro}</p>
                </div>
                <div class="row-2__col-2">
                  <p class="petro-pin">Petro Pin: ${u.petroPIN}</p>
                </div>
              </div>
              <div class="row-2">
                <div class="row-2__col-1">
                  <p class="ufa-number">UFA#: ${u.ufa}</p>
                </div>
                <div class="row-2__col-2">
                  <p class="ufa-pin">UFA Pin: ${u.ufaPIN}</p>
                </div>
              </div>
              <div class="row-2">
                <div class="row-2__col-1">
                  <p class="motive-user">Motive User: ${u.user}</p>
                </div>
                <div class="row-2__col-2">
                  <p class="motive-pass">Motive Pass: ${u.pass}</p>
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
            <div class="day-1">
              <div class="day-1__header">
                <h4 class="sunday">Sunday (25)</h4>
              </div>
              <div class="load-1">
                <div class="load-container">
                  <p class="pickup">Warner - Providence Farms</p>
                  <p class="unload">Regina - South Sask</p>
                  <div class="load-1__footer">
                    <div class="mt-container">
                      <p class="mt">40</p>
                    </div>
                    <div class="fsc-container">
                      <p class="fsc">20</p>
                    </div>
                    <div class="revenue-container">
                      <p class="revenue">$1,700</p>
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
                  <p class="pickup">Shaunavon - Bench Farming</p>
                  <p class="unload">Taber - Kasko Sandy Hill</p>
                  <div class="load-2__footer">
                    <div class="mt-container">
                      <p class="mt">40</p>
                    </div>
                    <div class="fsc-container">
                      <p class="fsc">20</p>
                    </div>
                    <div class="revenue-container">
                      <p class="revenue">$1,400</p>
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
                  <p class="pickup">Frontier - TS Organics</p>
                  <p class="unload">Herbert - Paterson</p>
                  <div class="load-3__footer">
                    <div class="mt-container">
                      <p class="mt">40</p>
                    </div>
                    <div class="fsc-container">
                      <p class="fsc">20</p>
                    </div>
                    <div class="revenue-container">
                      <p class="revenue">$800</p>
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
          </div>
        </div>
    `;
    scheduleRow.insertAdjacentHTML("beforeend", html);
  });
};
displayDrivers(driverList);
