# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
easy = Image.create(url: 'skiSlopes', description: 'easy')
medium = Image.create(url: 'spaceStation', description: 'medium')
hard = Image.create(url: 'fruitLand', description: 'hard')

easy.characters.create(name: 'charOne', x_location: 85.52, y_location: 72.4, picture: 'character1')
easy.characters.create(name: 'charTwo', x_location: 49.1, y_location: 41.6, picture: 'character2')
easy.characters.create(name: 'charThree', x_location: 6.97, y_location: 75.4, picture: 'character3')
easy.characters.create(name: 'charFour', x_location: 31.87, y_location: 63.85, picture: 'character4')

medium.characters.create(name: 'charOne', x_location: 40.5, y_location: 62.5, picture: 'character1')
medium.characters.create(name: 'charTwo', x_location: 29.43, y_location: 52.06, picture: 'character2')
medium.characters.create(name: 'charThree', x_location: 78.17, y_location: 57.07, picture: 'character3')
medium.characters.create(name: 'charFour', x_location: 7.08, y_location: 69.22, picture: 'character4')

hard.characters.create(name: 'charOne', x_location: 89.16, y_location: 66.53, picture: 'character1')
hard.characters.create(name: 'charTwo', x_location: 13.38, y_location: 85.12, picture: 'character2')
hard.characters.create(name: 'charThree', x_location: 25.15, y_location: 49.31, picture: 'character3')
hard.characters.create(name: 'charFour', x_location: 66.09, y_location: 56.26, picture: 'character4')