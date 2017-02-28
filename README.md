# rottenPotatosJS

## Directories:
- models: contains data files and code to read those files
- html: contains static HTML files to serve to the client
- views: contains the EJS templates used to rendered dynamic HTML pages
- features: contains Cucumber.js tests (not fully implemented)

## Questions:

- How do I create a mockup database in the server?

   Answer: Look up the files in the models directory. You will need
   to figure out how to store your data as a JSON object which is then
   easily read by the associated JS code.

   Look in server.js under // Respond to GET request for target '/team'
   to see how the data is read.

- How do I render HTML files using EJS?
   Answer: the ejs files stored in the views directory are templates
   that the Express view engine uses to render HTML code. 
   The syntax is easy to figure out. Visit http://ejs.co for details
   
   Example: Look in server.js under // Respond to GET request for target '/team'

   
