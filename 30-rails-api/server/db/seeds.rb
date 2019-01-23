# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Dog.destroy_all
Owner.destroy_all

owners = [
    {
        "name": "Vidhi"
    },
    {
        "name": "Claire"
    }
]

owners = owners.map do | owner |
    Owner.create(owner)
end


dogs = [
    {
        "name": "Lady",
        "breed": "Collie",
        "image_url": "https://vignette.wikia.nocookie.net/ladyandtramp/images/2/23/Tramp-disneyscreencaps_com-1216.jpg/revision/latest?cb=20121108202046",
        "owner": owners[0]
    },
    {
      "name": "Tramp",
      "breed": "Mut",
      "image_url": "http://www.cornel1801.com/disney/Lady-Tramp-II-Scamps-Adventure-2001/characters/Tramp.jpg",
      "owner": owners[0]
    },
    {
      "name": "Ann",
      "breed": "Coon Hound",
      "image_url": "http://rfern111.weebly.com/uploads/7/1/0/4/71046507/481812.jpg",
      "owner": owners[0]
    },
    {
      "name": "Brady",
      "breed": "Puli",
      "image_url": "https://images.fineartamerica.com/images-medium-large-5/puli-in-pink-fraida-gutovich.jpg",
      "owner": owners[1]
    }
  ]

dogs.each do | dog |
    Dog.create(dog)
end