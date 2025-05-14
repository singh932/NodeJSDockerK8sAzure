# Node.js Dockerized App with Azure Kubernetes Deployment

This project demonstrates how to containerize a simple Node.js application using Docker, push the image to Azure Container Registry (ACR), and deploy the containerized app to Azure Kubernetes Service (AKS).

## 🛠️ Project Overview

- **Application Stack**: Node.js (Express)
- **Containerization**: Docker
- **Image Registry**: Azure Container Registry (ACR)
- **Orchestration**: Azure Kubernetes Service (AKS)

---

## 📁 Repository Structure

```bash
.
├── app/                     # Node.js application code
│   ├── index.js             # Main application entry point
│   └── package.json         # Dependencies and scripts
├── Dockerfile               # Dockerfile to build the app image
├── kubernetes/              # Kubernetes manifests
│   ├── deployment.yaml      # Deployment configuration
│   └── service.yaml         # Service configuration
└── README.md                # Project documentation

##🚀 Getting Started
Prerequisites
Node.js installed locally

Docker CLI installed

Azure CLI installed and configured

An active Azure subscription

kubectl configured

----
## 🔧 Setup Instructions
1. Clone the Repository
git clone https://github.com/singh932/NodeJSDockerK8sAzure.git
cd NodeJSDockerK8sAzure

2. Build the Docker Image
docker build -t nodejs-azure-demo .

3. Push to Azure Container Registry (ACR)
# Log in to Azure
az login
# Create ACR (if not already created)
az acr create --resource-group <your-resource-group> --name <your-acr-name> --sku Basic
# Log in to ACR
az acr login --name <your-acr-name>
# Tag your image
docker tag nodejs-azure-demo <your-acr-name>.azurecr.io/nodejs-azure-demo
# Push the image
docker push <your-acr-name>.azurecr.io/nodejs-azure-demo

4. Deploy to Azure Kubernetes Service (AKS)
# Create AKS Cluster (if not already created)
az aks create --resource-group <your-resource-group> --name <your-aks-cluster> --node-count 1 --enable-addons monitoring --generate-ssh-keys
# Get credentials
az aks get-credentials --resource-group <your-resource-group> --name <your-aks-cluster>
# Apply Kubernetes manifests
kubectl apply -f kubernetes/

5.Accessing the App
kubectl get services
(Visit the external IP in your browser to view the running Node.js application.)
