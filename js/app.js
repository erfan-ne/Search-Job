const jobs = [
  {
    id: 1,
    title: "استخدام برنامه‌نویس React",
    company: "تراشه هوشمند نوین",
    city: "تهران",
    salary: 35_000_000,
    isRemote: true,
  },
  {
    id: 2,
    title: "برنامه‌نویس ReactJs (شیراز)",
    company: "چادکو | Chadco",
    city: "شیراز",
    salary: "توافقی",
    isRemote: false,
  },
  {
    id: 3,
    title: "برنامه‌نویس ReactJs(قزوین)",
    company: "فراگستر | Faragostar",
    city: "قزوین",
    salary: 31_000_000,
    isRemote: false,
  },
  {
    id: 4,
    title: "برنامه‌نویس ReactJs (یزد)",
    company: "ایرانیان پوشش",
    city: "یزد",
    salary: "توافقی",
    isRemote: false,
  },
  {
    id: 5,
    title: "React Native Developer",
    company: "پنکو | Panco",
    city: "تهران",
    salary: "توافقی",
    isRemote: false,
  },
  {
    id: 6,
    title: "React Native Developer",
    company: "پنکو | Panco",
    city: "تهران",
    salary: "توافقی",
    isRemote: false,
  },
  {
    id: 7,
    title: "برنامه‌نویس فرانت اند (Next-JS)",
    company: "دابز | Dubz",
    city: "تهران",
    salary: 4_000_000,
    isRemote: true,
  },
  {
    id: 8,
    title: "Senior Full-Stack Developer (Js)",
    company: "توسعه و فناوری آوید",
    city: "تهران",
    salary: "توافقی",
    isRemote: false,
  },
  {
    id: 9,
    title: "برنامه‌نویس Vue Js) Front-End)",
    company: "پیشگامان فن‌آوری هوداد",
    city: "تهران",
    salary: 32_000_000,
    isRemote: false,
  },
  {
    id: 10,
    title: "برنامه‌نویس (Full-Stack(Node JS",
    company: "تلمیس | Telmis",
    city: "مشهد",
    salary: "توافقی",
    isRemote: false,
  },
  {
    id: 11,
    title: "برنامه‌نویس بک اند (Nest.js-Node js-کرج)",
    company: "سیزپک | Sizpack",
    city: "کرج",
    salary: 28_000_000,
    isRemote: true,
  },
  {
    id: 12,
    title: "برنامه‌نویس ارشد Vue js) Front-End-مشهد)",
    company: "صنایع سنجش انرژی بهینه سازان توس",
    city: "مشهد",
    salary: "توافقی",
    isRemote: false,
  },
  {
    id: 13,
    title: "برنامه‌نویس Javascript",
    company: "هوشان کاوش برنا",
    city: "تبریز",
    salary: 22_000_000,
    isRemote: false,
  },
  {
    id: 14,
    title: "برنامه‌نویس React Js",
    company: "نوآوران بوم گستر امید",
    city: "تبریز",
    salary: "توافقی",
    isRemote: false,
  },
  {
    id: 15,
    title: "برنامه‌نویس (Full-Stack(Node JS",
    company: "المو | ELMO",
    city: "اصفهان",
    salary: 48_000_000,
    isRemote: false,
  },
  {
    id: 16,
    title: "Junior Front-end Developer (React)",
    company: "سحاب | Sahab",
    city: "تهران",
    salary: "توافقی",
    isRemote: true,
  },
];

const jobsContainer = document.querySelector(".jobs-container");
const workInput = document.querySelector("#work-input");
const cityInput = document.querySelector("#city-input");
const remoteOnlyCheckbox = document.querySelector("#remoteOnly-checkbox");
const priceRangeInput = document.querySelector("#price-range-input");
const priceRange = document.querySelector(".price-range");
const searchBtn = document.querySelector("#search-btn");

const filters = {};
let showJobs = [...jobs];

const loadPage = () => {
  if (showJobs.length) {
    showJobs.forEach((job) => {
      jobsContainer.insertAdjacentHTML(
        "beforeend",
        `
        <article class="job-card" id=${job.id}>
          <header>
            <p class="job-title">${job.title}</p>
            <p class="job-company">${job.company}</p>
          </header>
          <main class="job-content">
            <div>
              <span>
                <i class="fas fa-map-marker-alt"></i>
              </span>
              <span>${job.isRemote ? job.city + "/ ریموت" : job.city}</span>
            </div>
            <div>
              <span>
                <!-- Salary Icon -->
                <i class="fas fa-dollar-sign"></i>
              </span>
              <span class="job-salary">${
                job.salary === "توافقی"
                  ? "توافقی"
                  : (+job.salary).toLocaleString() + " تومان/ماهانه"
              }</span>
            </div>
            <div>
              <span>
                <!-- Time icon -->
                <i class="fas fa-clock"></i>
              </span>
              <span class="job-time"> تمام وقت </span>
            </div>
          </main>
          <footer>
            <p class="work-time-status">تمام وقت</p>
            <p class="work-time-status">${job.city}</p>
          </footer>
        </article>
        `
      );
    });
  } else {
    jobsContainer.innerHTML = `<p class="font-Sans-Bold text-zinc-800 text-base">
              هیچ شغلی پیدا نشد :(
            </p>`;
  }
};

const searchByWork = () => {
  filters.title = workInput.value.trim()
}

const searchByCity = () => {
  filters.city = cityInput.value.trim()
}

const remoteOnly = () => {
  filters.isRemote = remoteOnlyCheckbox.checked
}

const priceRangeAct = () => {
  priceRange.innerHTML= (+priceRangeInput.value).toLocaleString()
  filters.maxSalary = +priceRangeInput.value
  
}

const searchJob = () => {
  showJobs = jobs.filter((job) => {

    const titleMatch = filters.title
      ? job.title.toLowerCase().includes(filters.title.toLowerCase())
      : true;

    const cityMatch = filters.city
      ? job.city.toLowerCase().includes(filters.city.toLowerCase())
      : true;

    const remoteMatch =
      filters.isRemote !== undefined ? job.isRemote === filters.isRemote : true;

    const salaryMatch =
      typeof filters.maxSalary === "number"
        ? job.salary === "توافقی" || +job.salary <= filters.maxSalary
        : true;

    return titleMatch && cityMatch && remoteMatch && salaryMatch;
  });

  jobsContainer.innerHTML = "";
  loadPage();
};


searchBtn.addEventListener("click", searchJob);
workInput.addEventListener("change" , searchByWork);
cityInput.addEventListener("change" , searchByCity);
remoteOnlyCheckbox.addEventListener("change", remoteOnly)
priceRangeInput.addEventListener("input" , priceRangeAct);