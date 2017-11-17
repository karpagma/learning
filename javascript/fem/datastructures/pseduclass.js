class Tree {
    constructor() {
        this.name = 'test'
    }

    setName(name) {
        this.name = name
    }

    toString() {
        return `tree with name ${this.name}`
    }

}

let  tree = new Tree()
console.log(tree.name)
tree.setName('new')
console.log(tree.toString())
