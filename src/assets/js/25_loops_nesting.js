// CLASS 25: Nesting Loops


// Example 01
var partner = false
var age = 25

if(partner == true || age >= 65){
    console.log('Free')
}else{
    if(age >= 18){
        console.log('R$ 12,00')
    }else{
        console.log('R$ 6,00')
    }
}


// Example 02
var employees = [
    {
        'name': 'John Constantine',
        'age': 32
    },
    {
        'name': 'Dracula',
        'age': 500,
        'children': ['Alucard']
    },
    {
        'name': 'Homer Simpson',
        'age': 45,
        'children': ['Lisa', 'Bart', 'Meggie']
    }
]

var list_element = document.getElementById('children');

for(var a = 0; a < employees.length; a++){

    if(employees[a].children){
        var list_children = employees[a].children;
    
        for(var b = 0; b < list_children.length; b++){
            list_element.innerHTML += "<li>" + list_children[b] + ", " + employees[a].name + "'s child." + "</li>"
        }
    }

}
