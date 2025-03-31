ufu allow 8080

sudo systemctl start concourse-web.service
sudo systemctl start concourse-worker.service

sudo systemctl enable concourse-web.service
sudo systemctl enable concourse-worker.service