require 'pry'

# GOOD
class BankAccount
  attr_accessor :name, :balance

  @@all = []

  def initialize(name, balance)
    @name = name
    @balance = balance

    @@all << self
  end

  def self.all
    @@all
  end

  def withdraw(amount)
    self.balance = self.balance - amount
  end

  def tell_me_how_much_money_i_have

  end

  def withdraw_75

  end

  def self.richest_person
    richest_person = @@all[0]

    @@all.each do |account|
      if richest_person.balance < account.balance
        richest_person = account
      end
    end

    richest_person
  end
end

Pry.start

# NOT GOOD
# bank_accounts = [
#   {
#     first_name: 'Michael',
#     last_name: 'something',
#     balance: 100
#   },
#   {
#     first_name: 'David',
#     last_name: 'something',
#     balance: 200
#   },
#   {
#     first_name: 'Claire',
#     last_namee: 'clares last name',
#     balance: 101
#   }
# ]

# bank_accounts[1][:balance]

# bank_accounts.find do |account|

# end