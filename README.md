# Automated Nginx Deployment Using Ansible

This project demonstrates end-to-end automation of Linux server configuration and Nginx web server deployment using Ansible. 
It follows Infrastructure as Code (IaC) principles to ensure consistent, repeatable, and scalable provisioning across environments.

# 🚀 Project Overview

The goal of this project is to automate web server setup using Ansible. 
Instead of configuring Linux servers manually, Ansible playbooks handle everything — from installing dependencies to starting and enabling Nginx.
This eliminates configuration drift and reduces deployment time.

# 🛠️ Features
1. Automated installation and configuration of Nginx
2. Idempotent Ansible playbooks ensuring repeatable deployments
3. Playbook structured with roles for scalability and modularity
4. Inventory-based deployment to multiple hosts
5. Service validation and start/restart automation

# To Run the Playbook:
ansible-playbook -i inventory/hosts.ini playbook.yml

# ✔️ Expected Output
1. Nginx installed and running
2. Service enabled to start on boot
3. Server accessible via browser using server IP
