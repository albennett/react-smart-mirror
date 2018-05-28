#!/bin/sh

#copy all images / vids to tmp
rm /tmp/last-ip
cp /_MIRROR/img/* /tmp/.

#creator for the ip / etc (imageMagick)
killall status.sh
/usr/bin/nohup /_MIRROR/system/status.sh >/dev/null 2>&1 &

#clear the terminal display (text / etc)..
clear > /dev/tty1

#kill all things...
killall fbi #for image display to terminal
#killall omxplayer.bin  #dont do this, b/c it is the boot screen (see below)
killall -9 nodejs.sh
killall -9 nodejs
killall -9 node

#nodejs "forever" loop (in case nodejs dies, it re-starts)
/usr/bin/nohup /_MIRROR/system/nodejs.sh >/dev/null 2>&1 &
sleep 10

#for web display
killall xinit
killall midori
/usr/bin/xinit /_MIRROR/startMidori.sh >/dev/null 2>&1 &
sleep 10
killall omxplayer.bin
