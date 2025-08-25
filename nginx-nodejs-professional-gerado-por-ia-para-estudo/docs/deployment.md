# Deployment Guide

## Quick Start

### 1. Clone and Setup
```bash
git clone <repository-url>
cd desafio-nginx-nodejs-professional
cp .env.example .env
```

### 2. Development Environment
```bash
# Start all services
docker compose up -d

# View logs
docker compose logs -f

# Access application
open http://localhost
```

### 3. Production Environment
```bash
# Start production stack
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d

# Scale services if needed
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d --scale app=3
```

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| NODE_ENV | development | Environment mode |
| DB_HOST | db | Database host |
| DB_USER | root | Database user |
| DB_PASSWORD | root | Database password |
| DB_NAME | nodedb | Database name |
| NGINX_PORT | 80 | Nginx port |
| APP_PORT | 3000 | Node.js app port |

## Monitoring

### Health Checks
- **Nginx**: `http://localhost/health`
- **Node.js**: `http://localhost:3000/health`
- **MySQL**: Automatic via Docker healthcheck

### Logs
```bash
# All services
docker compose logs

# Specific service
docker compose logs app
docker compose logs nginx
docker compose logs db
```

## Troubleshooting

### Common Issues

1. **Port conflicts**
   ```bash
   # Check port usage
   sudo lsof -i :80
   sudo lsof -i :3000
   ```

2. **Database connection issues**
   ```bash
   # Check database health
   docker compose exec db mysqladmin ping -h localhost -u root -p
   ```

3. **Container not starting**
   ```bash
   # Check container logs
   docker compose logs service-name
   
   # Check container status
   docker compose ps
   ```

## Performance Tuning

### Resource Limits
- **App**: 512M memory limit
- **Nginx**: 128M memory limit  
- **MySQL**: 1G memory limit

### Scaling
```bash
# Scale Node.js app
docker compose up -d --scale app=3

# Scale with production config
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d --scale app=3
```

## Security

- Non-root users in containers
- Security headers in Nginx
- Input validation in Node.js
- Rate limiting (10 req/s per IP)
- CORS configuration
