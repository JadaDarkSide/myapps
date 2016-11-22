#decode APP boilerplate
decode App Boilerplate for NodeHeroku Dev Setup

<strong>Tools</strong>

1. Web Framework: [NodeJS](https://nodejs.org/en/download/)
1. Text Editor: [Sublime](https://www.sublimetext.com/3)
1. Version Control: [Git](https://git-scm.com/download/win)
1. Remote Repository: [Github](https://github.com/)
1. Cloud Platform: [Heroku](https://www.heroku.com/)

<strong>Checklist</strong>

 ✔ should have node installed
 
 ✔ should have Sublime Text Editor
 
 ✔ should have Github Account
 
 ✔ should have Heroku Account
 
 ✔ should have Portable Git Bash

<strong>Tasks - Setup</strong>

  ☐ ```$ node -v```
  
  ☐ ```$ git --version```

  ☐ ```$ cd /d```
  
  ☐ ```$ git clone https://github.com/clydeinwebdev/decodeapp_boilerplate.git myapp```

  ☐ ```$ cd myapp```
  
  ☐ ```$ npm install```
  
  ☐ ```$ node server```


<strong>Tasks - Upload code from local to remote repo</strong>

  ☐ Create new repo ```myapp```
  
  ☐ ```$ cd /d```
  
  ☐ ```$ mkdir github```
  
  ☐ ```$ cd github```
  
  ☐ ```$ git clone https/github.com/yourgithub-username/myapp.git```
  
  ☐ ```$ cd myapp```

  ☐ Copy your files from myapp to github/myapp

  ☐ ```$ git init```

  ☐ ```$ git add .```
  
  ☐ ```$ git config user.email "youremail@example.com"```

  ☐ ```$ git config user.name "yourgithubname"```

  ☐ ```$ git commit -m "first commit"```

  ☐ ```$ git remote add origin https://github.com/yourgithub-username/myapp.git```

  ☐ ```$ git push -u origin master```
  
<hr/>

<strong>Troubleshooting Guide</strong>

#SSH/HTTP codes

* ```$ cd ~/.ssh```
* ```$ ssh-keygen -t rsa -b 4096 -C "your email address"```

```
Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/Admin10/.ssh/id_rsa): id_rsa_clydeinwebdev
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

* ```$ eval "$(ssh-agent -s)"```
* ```$ ssh-add ~/.ssh/id_rsa_clydeinwebdev```
* ```$ clip < ~/.ssh/id_rsa_clydeinwebdev.pub```
* Paste the code in to your github ssh settings

* ```$ git remote set-url origin git@github.com:clydeinwebdev/balamanapp.git```
* ```$ git remote -v```
* ```$ git remote set-url origin https://github.com/clydeinwebdev/balamanapp.git```
* ```$ git push -u origin master```


