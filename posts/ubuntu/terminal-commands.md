---
layout: post
title: 实用终端命令集锦
date: 2024-05-18
category: ubuntu
tags: [ubuntu, 终端, 命令行, shell]
---

# Ubuntu 实用终端命令集锦

## 引言

终端是 Ubuntu 系统中最强大的工具之一，掌握常用的命令行操作可以大幅提高工作效率。本文收集了一系列实用的终端命令，从基础操作到高级技巧，帮助您更高效地使用 Ubuntu 系统。

## 基础文件操作

```bash
# 列出目录内容
ls -la  # 包含隐藏文件的详细列表

# 创建目录
mkdir -p dir1/dir2/dir3  # 创建嵌套目录

# 复制文件/目录
cp -r source destination  # 递归复制目录

# 移动/重命名文件
mv oldname newname

# 删除文件/目录
rm -rf directory  # 递归强制删除（谨慎使用！）

# 查找文件
find /path -name "filename"  # 按名称查找
find /path -type f -size +100M  # 查找大于100MB的文件
```

## 文本处理

```bash
# 查看文件内容
cat file.txt  # 显示整个文件
head -n 20 file.txt  # 显示前20行
tail -f log.txt  # 实时查看日志文件更新

# 文本搜索
grep "pattern" file.txt  # 在文件中搜索
grep -r "pattern" /path  # 递归搜索目录

# 文本编辑
nano file.txt  # 简单的文本编辑器
vim file.txt  # 高级文本编辑器

# 文本处理
sed 's/old/new/g' file.txt  # 替换文本
awk '{print $1}' file.txt  # 提取第一列

# 统计
wc -l file.txt  # 统计行数
```

## 系统信息与监控

```bash
# 系统信息
uname -a  # 显示系统信息
lsb_release -a  # 显示发行版信息
free -h  # 显示内存使用情况
df -h  # 显示磁盘使用情况

# 进程管理
ps aux  # 显示所有进程
top  # 动态显示进程信息
htop  # 增强版进程管理器

# 系统监控
vmstat 1  # 每秒显示系统状态
iostat  # 显示IO统计信息
netstat -tuln  # 显示网络连接
```

## 网络操作

```bash
# 网络配置
ip addr  # 显示网络接口信息
ip route  # 显示路由表

# 网络测试
ping example.com  # 测试网络连通性
traceroute example.com  # 跟踪路由
nslookup example.com  # DNS查询
dig example.com  # 详细DNS查询

# 网络传输
wget https://example.com/file  # 下载文件
curl -O https://example.com/file  # 另一种下载方式
rsync -avz source/ destination/  # 同步文件
```

## 用户和权限管理

```bash
# 用户管理
whoami  # 显示当前用户
id  # 显示用户ID和组信息
sudo command  # 以管理员权限执行命令

# 权限管理
chmod 755 file  # 修改文件权限
chown user:group file  # 修改文件所有者
```

## 压缩与解压

```bash
# 压缩文件
tar -czvf archive.tar.gz directory/  # 创建gzip压缩包
tar -cjvf archive.tar.bz2 directory/  # 创建bzip2压缩包
zip -r archive.zip directory/  # 创建zip压缩包

# 解压文件
tar -xzvf archive.tar.gz  # 解压gzip压缩包
tar -xjvf archive.tar.bz2  # 解压bzip2压缩包
unzip archive.zip  # 解压zip压缩包
```

## Shell 技巧

```bash
# 命令历史
history  # 显示命令历史
!!  # 重复上一条命令
!n  # 重复历史中第n条命令

# 重定向
command > file.txt  # 输出重定向到文件
command >> file.txt  # 追加输出到文件
command 2>&1  # 将错误重定向到标准输出

# 管道
command1 | command2  # 将command1的输出作为command2的输入

# 后台运行
command &  # 在后台运行命令
nohup command &  # 在后台运行命令，且关闭终端后仍继续运行
```

## 定时任务

```bash
# 使用crontab
crontab -e  # 编辑定时任务
crontab -l  # 列出定时任务

# 示例crontab条目（每天3点执行备份）
# 0 3 * * * /path/to/backup.sh
```

## 系统服务管理

```bash
# systemd服务管理
systemctl status service  # 查看服务状态
systemctl start service  # 启动服务
systemctl stop service  # 停止服务
systemctl enable service  # 设置开机自启动
systemctl disable service  # 禁用开机自启动
```

## 实用的组合命令

```bash
# 查找并删除大于100MB的日志文件
find /var/log -type f -size +100M -exec rm {} \;

# 按文件大小排序并显示前10个最大的文件
du -h /path | sort -hr | head -n 10

# 查找所有空目录
find /path -type d -empty

# 列出当前目录下的文件总大小
du -sh .

# 监控系统实时日志
tail -f /var/log/syslog
```

## 总结

熟练掌握这些终端命令将大大提高您在 Ubuntu 系统上的工作效率。建议您将常用命令记录下来，并经常练习，以便在需要时能够快速应用。

## 参考资料

- Ubuntu 官方文档
- Linux Command Line and Shell Scripting Bible
- The Linux Command Line (William Shotts)
- Bash 参考手册 