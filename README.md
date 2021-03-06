# Wordpress REST API + React JS

This boilerplate will help you use React JS with Wordpress REST API.
Clone the project and install node packages:
```
1.	Git clone from repo
```
```
2.	CD wp-react-starter-kit
```
```
3.	Npm install
```
```
4.	CD back to the project root dir
```
```
5.	Check for open ports and kill them
	a.	lsof -ti:3000 | xargs kill
```
```
6.	Run the following command to setup WP install using Docker
	a. docker-compose up -d
```
```
7.	Go to http://localhost:8000 and install Wordpress
```
```
8.	Change Permalink settings from Plain to Post name
```
```
9.	Add JWT Authentication plugin to WP and
	Update .htaccess file with the following
	a. RewriteCond %{HTTP:Authorization} ^(.*)
   	RewriteRule ^(.*) - [E=HTTP_AUTHORIZATION:%1]
	SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1
```
```
10. In wp.config add the following for your secret key
	a. define('JWT_AUTH_SECRET_KEY', 'tallwave-access');
```
```
11. Add CORS for JWT auth
	a. define('JWT_AUTH_CORS_ENABLE', true);
```
```
12. Add custom post type ui plugin to WP
```
```
13. Add Advanced Custom Fields plugin to WP
```
```
14. Add Advanced Custom Fields For Rest API plugin to WP 
```
```
15. Create Custom Field Group "Template Type"
```
```
	a. Add field template_type as select
```
```
	b. Add these choices
```
```
		none
```
```
		templateA
```
```
		templateB
```
```
		templateC
```
```
		templateD
```
```
16. Add Location Rule "Page Template is equal to Default Template"
```
```
17. Add the following pages and assign them a "template_type"
```
```
	a. Home page = templateA
```
```
	b. About page = templateB
```
```
	c. Contact page = templateC
```
```
	d. Footer page = none
```
```
Basic WP fucntionality is complete, see the frontend readme to get React up and running.