# JWT Authentication

## Vocabulary

* Credentials
  * Username
  * Password
  * Used to log in.
* JWT
  * A unique token
  * Given to a user when they login 

## Outline 

* Introduction
  * Review of Mod 2 Auth
    * Devise / password_digest
    * Session
    * Session won't work with the state
* ![Screen Shot 2019-02-11 at 5.37.54 PM](/Users/joshua.miles/Desktop/Screen Shot 2019-02-11 at 5.37.54 PM.png)
  * Outline
    * Create a user that can be authenticated
    * Create a token for that user
    * Provide an endpoint to create a token using credentials
    * Before processing every request, check for authentication
    * Send the token in the header of a request
    * Parse the token when we check for authentication

* Create a user that can be authenticated
  * Devise
    * username
    * password_digest
    * has_secure_password
    * Bcrypt
    * `.authenticate`
* Create a token for that user
  * JWT.io
    * header
    * payload 
    * signature

* Provide an endpoint to create a token using credentials

* Send the token in the header of a request

* Parse the token when we check for authentication
