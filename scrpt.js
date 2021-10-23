// alert("tess")
const Keterangan = ['Pelajar','Programmer','Kelas X','RPL 2 ;'];
let count = 0;
let txtIndex = 0;
let currenTxt = '';
let words = '';

(function ketik(){
    if(count == Keterangan.length){
        count = 0;
    }
    currenTxt = Keterangan[count];
    words = currenTxt.slice(0, ++ txtIndex);

    document.querySelector('.ngetik').textContent = words
    setTimeout(ketik,500);

    if(words.length == currenTxt.length){
        count++;
        txtIndex = 0;
    }
})();