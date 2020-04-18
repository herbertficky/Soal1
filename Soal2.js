function hitungKembalian(totalBelanja, uangBayar, kembalian, kembalian_max, angka1, angka2, kembalian1) {
    this.totalBelanja = totalBelanja;
    this.uangBayar = uangBayar;
    this.kembalian = kembalian;
    this.kembalian_max = kembalian_max;
    this.angka1 = angka1;
    this.angka2 = angka2;
    this.kembalian1 = kembalian1;
}

hitungKembalian.prototype.introMyself = function () {
    setTimeout(() => {
        console.log(`${this.angka1} x ${this.kembalian_max}`)
        console.log(`${this.angka2} Disumbangkan karena tidak ada pecahan dibawah ${this.kembalian1}`)    
    }, 300)
}
 
const result = new hitungKembalian(220000, 250000, [5000, 10000, 20000, 50000], 50000, 1, 2000, 5000);
result.introMyself();
