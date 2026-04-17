#!/bin/bash
echo "Building new image..."
cd /home/nikel/Documents/projects/website
docker buildx build -t nikel-website:latest .

echo "Redeploying container..."
cd /home/nikel/homelab
docker compose up -d --force-recreate website

echo "Done! Website updated."
