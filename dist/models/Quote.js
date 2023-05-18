class Quote {
    constructor(lines) {
        this.lines = lines;
    }
}
class SpokenQuote extends Quote {
    speak() {
        console.log(this.lines.join("\n"));
    }
}
class AttributedQuote extends Quote {
    constructor(value, speaker) {
        super(value);
        this.speaker = speaker;
    }
}
export { Quote, SpokenQuote, AttributedQuote };
//# sourceMappingURL=Quote.js.map