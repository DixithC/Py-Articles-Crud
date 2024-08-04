In app.py to create the tables
>>>from app import app,db  //First app is file and second app is variable
>>>app.app_context().push()
>>>db.create_all()

Way to create the Virtual Environment (For Python):
*In the VsCode write this "python -m venv projectlocation_should_be_put_here"
*It creates a "venev" file in the selcetd path
*Now press "ctrl+shift+p" here select "python:select interpretor" [Python should already be installed for this, Use VS code extension]
*Now select "Enter interpreter Path"  and "Find" 
*Now open a terminal and we will be inside the Virtual environment. We will see "(venev)"

*Sometimes if the (venv) doesnot get activated then use this:
*.\projectlocation_should_be_put_here\Scripts\activate


Python Project for Article Insertion/Update/Delete:
-In this project we are doing 3 important operation that is add/update/delete.
-We are having Article with Title, Description and Time.
-3 buttons are present in the page "InsertArticle" , "Update" and "Delete"
-"InsertArticle" is a button on the top When clicked, produces empty text area for "Title", "Description"
-After Entering the data, click on "Insert" button and this shows up on the page with title, description and date.
-Now Click on the "Update" button for a particular article and we see the Entered data with the option to edit, after making the changes click on "Update" button which saves the changes.
-Now "Delete" button under the Article deletes the article, removes that article from the database and from the page.
-Backend runs in the "http://localhost:5000/"
-FrontEnd runs in the "http://localhost:3000/   

Technology used:
-Python 3.12.4
-Flask 2.0.0
-Flask SQLAlchemy 2.5.1
-mysqlclient 2.0.3
-flask-marshmallow 0.14.0
-React JS(with fetch and bootstrap)
-Mysql
