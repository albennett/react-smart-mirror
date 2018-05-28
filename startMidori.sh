#!/bin/sh

setterm -blank off -powerdown off > /dev/tty0
clear > /dev/tty0
setterm -cursor off > /dev/tty0

xset -dpms     # disable DPMS (Energy Star) features.
xset s off       # disable screen saver
xset s noblank # don't blank the video device
# remove cursor on web page
/usr/bin/nice -n -20 matchbox-window-manager -use_titlebar no -use_cursor no &
xsetroot -cursor /_MIRROR/system/emptyCursor.xbm /_MIRROR/system/emptyCursor.xbm
# kill omxplayer, just in case
killall omxplayer.bin
echo "PRE!"
while :
do
	echo "STARTING midori"
	/usr/bin/nice -n -20 /usr/bin/midori -e Fullscreen -a http://127.0.0.1:3000/#
	echo "midori DIED"
done
echo "POST!"
clear > /dev/tty0
