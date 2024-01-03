const categories_capital= [
{
    id: 1,
    name: "HOT BEVERAGES"
},
{
    id: 2,
    name: "COLD BEVERAGES"
},
{
    id: 3,
    name: "SOUPS"
},
{
    id: 4,
    name: "MAGGI/PASTA"
},
{
    id: 5,
    name: "SANDWICHES"
},
{
    id: 6,
    name: "MOMOS"
},
{
    id: 7,
    name: "ROLLS"
},
{
    id: 8,
    name: "VEG. COMBOS"
},
{
    id: 9,
    name: "PARATHAS"
},
{
    id: 10,
    name: "NON VEG."
},{
    id: 10,
    name: "fsf VEG."
},

];
function sentenceCase (str) {
    if ((str===null) || (str===''))
        return false;
    else
    str = str.toString();
     
    return str.replace(/\w\S*/g,
    function(txt){return txt.charAt(0).toUpperCase() +
        txt.substr(1).toLowerCase();});
    }
const categories=categories_capital;
categories_capital.forEach((item,index)=>{categories[index].name=sentenceCase(item.name)})
export default categories;