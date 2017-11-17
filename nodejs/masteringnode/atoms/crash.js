var count = 0;
(function curse() {
    console.log(++count);
    curse();
})();
