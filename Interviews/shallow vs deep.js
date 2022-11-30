const object = {
    value: 1,
    f1: function () {
        return {
            value2: 2
        }
    },
    nested1: {
        nestedValue: 3,
        nested2: {
            nestedValue2: 4,
            f2: function() {
                return 'f2 nested + nested'
            }
        },
        f3: function() {
            return 'f3 nested'
        }
    }
}

const object2 = object

object2.f1 = 'function'

console.log(object2.nested1.nested2.f2 === object.nested1.nested2.f2) // true hence shallow copy

const object3 = function function1() {
    console.log('simple function 2')
}

const object4 = new object3

console.log('OBJECT 1 : ', object, 'OBJECT 2 :' , object2)
console.log('OBJECT 3 : ', object3, 'OBJECT 2 :' , object4, object3 === object4, object3 == object4)