require 'pry'
require 'rest-client'
require 'json'

class Application
  def get_search_term
    puts "Enter search term:"

    search_term = gets.chomp
  end

  def get_items(search_term)
    json_result = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{search_term}")

    parsed_result = JSON.parse(json_result)

    parsed_result["items"]
  end

  def print_title(title)
    puts title
  end

  def print_authors(authors)
    if authors
      puts authors.join(', ')
    else
      puts "YO! NO AUTHOR, BRO."
    end
  end

  def print_description(description)
    if description
      puts description[0..140]
    else
      puts "YO! NO DESCRIPTION, BRO."
    end
  end
  
  def run
    search_term = get_search_term

    items = get_items(search_term)

    items.each do |book_hash|
      volume_info = book_hash["volumeInfo"]

      print_title(volume_info["title"])
      print_authors(volume_info["authors"])
      print_description(volume_info["description"])

      20.times do
        print "*"
      end
      puts ""
    end

    return nil
  end
end
