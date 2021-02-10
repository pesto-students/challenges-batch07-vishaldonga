# Git Excercise insights
1.
$ touch File1.txt
$ git add File1.txt
$ git commit -m "Create File1"
$ gitk

2.
git cat-file -t f2651cc57fbf3ac554fd3534e751448759a4ba17
git cat-file -p f2651cc57fbf3ac554fd3534e751448759a4ba17

3.
git ls-files -s

4.
git reset f2651cc57fbf3ac554fd3534e751448759a4ba17

5.
$ echo "Hello Everyone!!!" > File1.txt
$ git stash push -m "Add content in File1"
$ git stash list
$ git stash pop stash@{0}
$ git stash list
 # In new repo
 $ git add sum.txt
$ git commit -m "Add sum.txt"
$ git stash save "WIP: sum.txt file"
$ git status
$ git stash list
$ git stash show stash@{0}
$ git stash apply stash@{0}
$ git stash list
$ touch untracked.txt
$ git status
$ git stash save "WIP: Sum and untracked text file" --include-untracked
$ git status
$ git stash list

6.
$ git tag "tag-1.0"
$ git tag
$ git status
$ git add test1.txt
$ git commit -m "Update test1"
$ git log
$ git checkout tag-1.0

7.
$ git checkout master
$ git tag -a "tag-1.1" -m "Annoted Tag"
$ git show tag-1.1

8. 
    # Considering no conflicts are there
$ git checkout feature/sample1
$ git merge master
$ gitk
$ git log

9.
$ git checkout master
$ touch sample.txt
$ echo "Some sample text" > sample.txt
$ git add sample.txt
$ git checkout feature/sample1
$ git add test1.txt
$ git add sample.txt
$ git status
$ git add sample.txt
$ git merge master
$ git checkout master
$ git status
$ git commit -m "update sample file"
$ echo "master sample" > sample.txt
$ git checkout feature/sample1
$ git add sample.txt
$ git checkout feature/sample1
$ git commit -m "Update sample file"
$ git checkout feature/sample1
$ echo "Feature sample text" > sample.txt
$ git add sample.txt
$ git merge master
$ git commit -m "Update sample from feature"
$ git merge master
Automatic merge failed; fix conflicts and then commit the result.


10.
$ git log
$ git log --oneline
$ git log --since="2 hour ago"
$ git log --since="yesterday"
$ git log --grep=<grep-regex>
$ git log --since="20 minute ago"

11.
$ echo 'Hello, World!' | git hash-object -w --stdin
$ echo 'blob 14\0Hello, World!' | openssl sha1
$ git cat-file -t 8ab68
$ git cat-file -p 8ab68

12.
$ echo "Git revert update" > File1.txt
$ git add File1.txt
$ git commit -m "bad commit"
$ git log
$ git revert a694b18045c5b9abc54eb1cc131368201f48b9cc
$ git log






