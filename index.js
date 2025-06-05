class BartanDhoneKaDher {
  constructor() {
    this.bartan = [];
  }

  // 1. ऊपर रखना
  push(item) {
    this.bartan.push(item);
  }

  // 2. ऊपर वाला निकालना
  pop() {
    if(this.isEmpty()) return "Dher khali hai!";
    return this.bartan.pop();
  }

  // 3. ऊपर वाला देखना
  peek() {
    return this.bartan[this.bartan.length-1];
  }

  // 4. खाली है या नहीं
  isEmpty() {
    return this.bartan.length === 0;
  }

  // 5. कितने बर्तन हैं
  size() {
    return this.bartan.length;
  }
}

// उपयोग:
let kitchen = new BartanDhoneKaDher();
kitchen.push("कटोरी");
kitchen.push("गिलास");
kitchen.pop();  // 'गिलास' निकलेगा
kitchen.peek(); // 'कटोरी' दिखेगा
