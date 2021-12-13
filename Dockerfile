# 元にするイメージの指定
FROM postgres:14-alpine

# タイムゾーンの設定
ENV TZ Asia/Tokyo

# 言語の設定
ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL ja_JP.UTF-8