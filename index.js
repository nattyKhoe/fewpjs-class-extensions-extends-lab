// Your code here
class Polygon {
    constructor (array) {
        this.array = array;
    }

    get countSides () {
        return this.array.length;
    }

    get perimeter () {
        let perimeter = 0;

        for(let i = 0; i<this.array.length; i++){
            perimeter = perimeter+this.array[i];
        }

        return perimeter;
    }
}

class Triangle extends Polygon {
    constructor (array){
        super (array);
    }
    
    get isValid () {
        let sides = this.array;
        
        if (this.countSides === 3){
            if ((sides[0]+sides[1]>sides[2])&&(sides[1]+sides[2]>sides[0])&&(sides[0]+sides[2]>sides[1])){
                return true;
            }
        }

        return false;

    }
}

class Square extends Polygon {
    get isValid () {
        let sides = this.array;

        if (this.countSides === 4){
            if (sides[0]===sides[1]&&sides[2]===sides[3]&&sides[0]===sides[2]){
                return true;
        //     } else {
        //         return false;
        //     }
        // } else {
        //     return false;
        }
    }
    return false;
}

    get area () {
        if (this.isValid === true) {
            return this.array[0]**2;
        } else {
            return 'Not a square';
        }
    }
}