class ARRAY {
    constructor() {
        this.store = []
    }

    push(value) {
        this.store.push(value)
        return this
    }

    pop() {
        return this.store.pop()
    }

    pushAt(pos, val) {
        this.store = [...this.store.slice(0, pos-1), val, ...this.store.slice(pos-1)]
        return this
    }

    popAt(pos) {
        var v = this.store[pos-1]
        this.store = [...this.store.slice(0, pos-1), ...this.store.slice(pos)]
        return v 
    }

    remove() {
        this.store.pop()
        return this
    }

    removeAt(pos) {
        this.popAt(pos)
        return this
    }

    fill(input, count) {
        var till = count || this.store.length
        for(let i = 0; i < till; i++)
            this.store[i] = input
        return this
    }

    fillRandom(count) {
        var till = count || this.store.length
        for(let i = 0; i < till; i++)
            this.store[i] = Math.random()
        return this
    }

    fillRandomInteger(count) {
        var till = count || this.store.length
        for(let i = 0; i < till; i++)
            this.store[i] = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
        return this
    }

    fillRandomIntegerBelow(input, count) {
        var till = count || this.store.length
        for(let i = 0; i < till; i++)
            this.store[i] = Math.floor(Math.random() * input)
        return this
    }

    fillRandomIntegerAbove(input, count) {
        var till = count || this.store.length
        this.fillRandomInteger(till)
        return this.store.map(i => (i + input) % Number.MAX_SAFE_INTEGER)
    }

    fillRandomIntegerBetween(lowerBound, upperBound, count) {
        var till = count || this.store.length
        for(let i = 0; i < till; i++)
            this.store[i] = lowerBound + Math.floor(Math.random() * (upperBound - lowerBound))
        return this
    }
}

if(module) {
    module.exports = ARRAY
}

