# porfolio-ui
Easy to use out of the box portfolio website built using ember.js. If you know how to edit JSON or willing to learn you can have a great looking in site for free in no time!

# Live Demo
https://www.kemptondesign.com

# Documentation

## Getting Started

  1.  npm install -g ember-cli
  2.  install npm packages
  3.  install bower packages
  4.  run ember build from inside the project directory
  5.  run ember serve
  6.  go to localhost:4200 in your browser

## Building for production

  1. remove any previous dist/ directories using rm -rf dist/
  2. run ember serve --environment=production
  3. this will compile/minify all your assets into the dist/ directory

## To edit website contents open the public folder in a text editor

## File public/data/data.json

  1. inside is where all your preferences will go for the overall website
  2. items prefixed with "show" or "is" represents a boolean value that is used to evaluate web page content.
  3. the navLogo property can take and image or text but the preference must be set accordingly
  4. fill in all the values you want to be displayed on the webpage, but make sure you are keeping the proper syntax and format or errors may occur.
  5. respect the creator and show me some love by my details for contact and credit

## File public/data/images.json

  1. inside is where links to all the home page box images will go
  2. Example:
      {
        "images": [
          {
            "id": "1",
            "path": "/images/homebox-1",
            "title": "title"
          },
          {
            "id": "2",
            "path": "/images/homebox-2",
            "title": "title"
          },
          ......
        ]
      }
    3. to avoid issues make sure each image has a unique id that also corresponds with the project id in the public/data/projects.json (more on that file later)
    4. you can place as many image paths you want in this file as long as the format is consistent

## File public/data/projects.json

  1. inside is where all your project data will live
  2. images must contain an array of objects even if only one image is present
  3. like before the id must be unique but must correspond to the images in public/data/images.json
  4. Example:
    [
      {
        "id": "1",
        "title": "website",
        "summary": "This really cool project ......",
        "client": "client",
        "images": [
          {
            "id": "1",
            "title": "title",
            "path": "/images/website-1",
            "class": "col-xs-12 col-sm-6 col-md-4"
          },
          {
            "id": "2",
            "title": "title",
            "path": "/images/website-2",
            "class": "col-xs-12 col-sm-6 col-md-4"
          },
          .....
        ]
      }
    ]
  5. the class property refers to the number of columns wide you want you image to take up on the screen and at what point in the viewport it will change to accomodate different screen sizes. Although, you can implement custom css classes in this area that will affect the parent div to the image. check out www.getbootstrap.com for the grid system documentation.
  6. ensure that the path to the image always starts with "/images/" as when the files are built they must be in this directory but you are free to implement sub directories within the images directory

## File public/images

  1. put whatever images you want in this directory or create sub directories for organization, just make sure you map the image paths correctly in the public/data/images.json and public/data/projects.json files

## Final words

  1. Feel free to contact me at kempt09@gmail.com and I will try and help you with your issues or give better clarification.
  2. Check back for updates as more features will be added in the near future to support more customization and add additional pages (maybe even a walkthrough to set up the whole webpage)
  3. if you find a bug let me know so I can get it fixed
  4. if you would like to contribute contact me
