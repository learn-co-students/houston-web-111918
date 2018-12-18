American.destroy_all
Lion.destroy_all

American.create(name: 'Bob', state: 'TX', num_guns: 100)
American.create(name: 'Bubba', state: 'AL', num_guns: 5000000)
American.create(name: 'Elizabeth', state: 'NY', num_guns: 1)
American.create(name: 'Wilford', state: 'CA', num_guns: 0)

Lion.create(name: 'Simba', gender: 'M', color: 'purple', american: American.fourth)
Lion.create(name: 'Musafa', gender: 'M', color: 'fuschia', american: American.third)
Lion.create(name: 'Scar', gender: 'M', color: 'black', american: American.third)
Lion.create(name: 'Nala', gender: 'F', color: 'normal', american: American.first)