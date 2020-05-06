# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Song.create([
{
    title: 'Box of Rain',
    artist: 'Grateful Dead',
    album: 'American Beauty',
    duration: 180
},
{
    title: 'Candyman',
    artist: 'Grateful Dead',
    album: 'American Beauty',
    duration: 150
},{
    title: 'Friend of the Devil',
    artist: 'Grateful Dead',
    album: 'American Beauty',
    duration: 130
},{
    title: 'Sugar Magnolia',
    artist: 'Grateful Dead',
    album: 'American Beauty',
    duration: 180
},{
    title: 'Ripple',
    artist: 'Grateful Dead',
    album: 'American Beauty',
    duration: 160
},{
    title: 'Brokedown Palace',
    artist: 'Grateful Dead',
    album: 'American Beauty',
    duration: 180
},
])

Playlist.create([
{
    name: "Running Playlist"
},
{
    name: "Studying Playlist"
},
{
    name: "Party Playlist"
},
{
    name: "Chill Playlist"
},
{
    name: "Fun Playlist"
},
{
    name: "Driving Playlist"
},
{
    name: "Snowboarding Playlist"
},
])