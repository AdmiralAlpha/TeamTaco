# TeamTaco
team projekt3

To add live server remote:

Inside the project directory, write:
git remote add live ssh://taco@gotham.highstone.biz:30420/var/repo/site.git

Make changes as usual, commit and push to github as usual(using git push origin master), and when ready to push to live server:

git push live master

When prompted, enter the password. Notify Kristian of any errors.