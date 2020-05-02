# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Stock.create([
{
    ticker: "FB",
    company: "Facebook"
},
{
    ticker: "AMZN",
    company: "Amazon"
},{
    ticker: "AAPL",
    company: "Apple"
},{
    ticker: "MSFT",
    company: "Microsoft"
}
])

Price.create([
    {
        avg_price: 202.27,
        stock_id: 1
    },
    {
        avg_price: 2286.04,
        stock_id: 2
    },
    {
        avg_price: 289.07,
        stock_id: 3
    },
    {
        avg_price: 174.57,
        stock_id: 4
    },
])