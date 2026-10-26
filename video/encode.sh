#!/bin/sh
# Turn the Remotion master into the files the site serves: 720p MP4 (H.264) and WebM (VP9),
# both silent with faststart, plus a poster frame. Run after `npm run render`.
set -e
IN=out/reel-master.mp4
OUT=../public/video
mkdir -p "$OUT"
ffmpeg -loglevel error -y -i "$IN" -vf "scale=1280:720:flags=lanczos" -an -c:v libx264 -preset slow -crf 30 -profile:v high -pix_fmt yuv420p -movflags +faststart "$OUT/reel.mp4"
ffmpeg -loglevel error -y -i "$IN" -vf "scale=1280:720:flags=lanczos" -an -c:v libvpx-vp9 -b:v 0 -crf 46 -row-mt 1 -deadline good "$OUT/reel.webm"
ffmpeg -loglevel error -y -ss 0 -i "$IN" -frames:v 1 -vf "scale=1280:720:flags=lanczos" -q:v 3 out/poster.jpg
cwebp -quiet -q 60 -resize 960 0 out/poster.jpg -o "$OUT/reel-poster.webp"
ls -la "$OUT"
