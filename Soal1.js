function Check(key1, key2, key3, key4, dataKey, word) {
    this.key1 = key1;
    this.key2 = key2;
    this.key3 = key3;
    this.key4 = key4;
    this.dataKey = dataKey;
    this.word = word;
}

Check.prototype.introMyself = function () {
    setTimeout(() => {
        console.log(`${this.key1} => true`)
        console.log(`${this.key2} => true`)
        console.log(`${this.key3} => false`)
        console.log(`${this.key4} => false`)
    }, 300)
}
 
const hasil = new Check("dumb", "ways", "the", "best", ["Coding", "Read book", "Ping-pong"], "dumbways");
hasil.introMyself();