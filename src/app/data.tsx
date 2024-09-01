


const categories = [
  {id: 1, name: 'Food'},
  {id: 2, name: 'Utilities'},
  {id: 3, name: 'Entertainment'},
];

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith"}
]


const  expenses =  [
    {
      id: 1,
      userId: 1,
      description: "Groceries", 
      categoryId: 1,
      amount: 50,
      date: "2024-08-25"
    }, 
    {
      id: 2,
      userId: 1,
      description: "Electricity Bill", 
      categoryId: 2,
      amount: 100,
      date: "2024-08-22"
    }, 
    {
      id: 3,
      userId: 2, 
      description: "Netflix Subscription",
      categoryId: 3,
      amount: 50, 
      date: "2024-07-15"
    },
    {
      id: 3,
      userId: 2, 
      description: "Spotify Subscription",
      categoryId: 3,
      amount: 150, 
      date: "2024-07-15"
    }
    
  ]


  export { categories, users, expenses};