# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Tvquote.create(text: Faker::TvShows::Friends.quote, stars:1, source:'google', username:"Ross")
Tvquote.create(text:Faker::TvShows::Friends.quote, stars:1, source:'google', username:"Phoebe")
Tvquote.create(text: Faker::TvShows::Friends.quote, stars:0, source:'internet', username:"Chandler")
Tvquote.create(text: Faker::TvShows::Friends.quote, stars:4.2, source:'internet', username:"Joey")
Tvquote.create(text: Faker::TvShows::Friends.quote, stars:3.3, source:'internet', username:"Monica")

puts "seeded tvquote size: #{Tvquote.all.size}"
