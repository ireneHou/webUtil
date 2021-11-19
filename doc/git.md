# git 忽略某个目录或文件不上传

## Example

git status

查看能被上传的文件

touch .gitignore

看到 node_modules 目录是默认可上传，需要在总目录下创建.gitignore 文件

创建完在.gitignore 里面添加 node_modules，设置忽略成功

git status

再次查看状态，会发现没有 node_modules 文件了

git add .

添加当前所有文件

git commit -m "package"

提交

git push

上传
