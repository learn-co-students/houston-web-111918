require_relative '../config/environment';

describe "Hero" do
  before do
    @thor = Hero.new([ 
        {
            name: 'Super Strength',
            coolness: 3
        },
        {
            name:'Flight',
            coolness: 5
        },
        {
            name: 'Lighting Blast',
            coolness: 10
        }
    ])
  end

  it "should return the coolest ability" do
    expect(@thor.coolest_ability).to eq({
        name: 'Lighting Blast',
        coolness: 10
    })
  end

  it "should return ordered abilities" do
    expect(@thor.ordered_abilities).to eq(['Flight', 'Lighting Blast', 'Super Strength'])
  end

  it "should add an ability correctly" do
    @thor.add_ability({
      name: 'dancing',
      coolness: 100
    })

    expect(@thor.abilities).to include({
      name: 'dancing',
      coolness: 100
    })
  end

  it "should handle dumb users" do
    expect{@thor.add_ability('i love muffins')}.to raise_error(ArgumentError)
  end
end