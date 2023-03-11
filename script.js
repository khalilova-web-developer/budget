let arr = [{
    id: 1,
    name: "AZIZs_KABLUK",
    budget: 500000,
    tax: 12,
    expensesPerYear: [{
            for: "design",
            total: 60000,
        },
        {
            for: "material",
            total: 70000,
        },
        {
            for: "place",
            total: 120000,
        },
    ],
},
{
    id: 2,
    name: "KAMERON_CINEMA",
    budget: 600000,
    tax: 12,
    expensesPerYear: [{
            for: "camera",
            total: 90000,
        },
        {
            for: "actors",
            total: 140000,
        },
        {
            for: "electricity",
            total: 50000,
        },
    ],
},
{
    id: 3,
    name: "ISKANDARs_ZOO",
    budget: 450000,
    tax: 12,
    expensesPerYear: [{
            for: "animals",
            total: 100000,
        },
        {
            for: "cloune",
            total: 15000,
        },
        {
            for: "food",
            total: 70000,
        },
    ],
},
{
    id: 4,
    name: "AMINs_SOOOO",
    budget: 800000,
    tax: 12,
    expensesPerYear: [{
            for: "house",
            total: 200000,
        },
        {
            for: "cars",
            total: 150000,
        },
        {
            for: "family",
            total: 300000,
        },
        {
            for: "girls",
            total: 90000,
        },
    ],
},
{
    id: 5,
    name: "new comp",
    budget: 1000000,
    tax: 12,
    expensesPerYear: [{
            for: "house",
            total: 200000,
        },
        {
            for: "cars",
            total: 150000,
        },
        {
            for: "family",
            total: 300000,
        },
        {
            for: "girls",
            total: 90000,
        },
    ],
},
];





for (let item of arr){
    item.expensesPerMonth = item.expensesPerYear.reduce((a,b)=>{
    return a + b.total}, 0) / item.tax
    item.calculation = item.budget/item.tax
    let comparison = item.calculation - item.expensesPerMonth
    console.log(Math.round(comparison))
}