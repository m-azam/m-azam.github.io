export class Hypothesis {
    constructor(text, displayText, certainty) {
        this.text = text;
        this.displayText = displayText;
        this.certainty = certainty;
    }
    adjustCertainfty(factor) {
        this.certainty = this.certainty * factor;
    }
    get questionText() {
        return this.displayText;
    }
}