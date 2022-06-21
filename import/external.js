if (localStorage.septleStats && confirm("Here for Septle? Were moving to septle.com, and your statistics can come too!")) {
    location.href = "https://septle.com/import/?stats=" + window.btoa(localStorage.septleStats);
}