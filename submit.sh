#!/bin/sh
# langageは5058 (TypeScript 5.1 (Node.js 18.16.1))
current_directory=$(pwd)
c_id=$1
c_num=$2
oj s -l 5058 https://atcoder.jp/contests/$c_id/tasks/${c_id}_a $current_directory/$c_id/$c_num/main.ts