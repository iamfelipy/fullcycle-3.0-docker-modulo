# Full Cycle 3.0 - Professional Docker Setup

## 🚀 Overview

This is a professional-grade Docker setup for the Full Cycle 3.0 course, featuring:
- **Nginx** as reverse proxy
- **Node.js** application with Express
- **MySQL** database
- **Health checks** and monitoring
- **Multi-stage builds** for optimization
- **Environment-specific configurations**

## 📁 Project Structure

```
desafio-nginx-nodejs-professional/
├── app/                    # Node.js application
├── nginx/                  # Nginx configuration
├── db/                     # Database scripts
├── scripts/                # Utility scripts
├── docs/                   # Documentation
└── docker-compose files    # Environment configurations
```

## 🛠️ Quick Start

### Development
```bash
# Copy environment file
cp .env.example .env

# Start development environment
docker compose up -d

# View logs
docker compose logs -f
```

### Production
```bash
# Start production environment
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

## ⚙️ Configuration

### Environment Variables
- `NODE_ENV`: Environment (development/production)
- `DB_HOST`: Database host
- `DB_USER`: Database user
- `DB_PASSWORD`: Database password
- `DB_NAME`: Database name
- `NGINX_PORT`: Nginx port (default: 80)

### Services
- **Nginx**: Reverse proxy on port 80
- **Node.js App**: Application server on port 3000
- **MySQL**: Database on port 3306

## 📊 Monitoring

### Health Checks
- Nginx: `http://localhost/health`
- Node.js: `http://localhost:3000/health`
- MySQL: Automatic via docker healthcheck

### Logs
```bash
# View all logs
docker compose logs

# View specific service logs
docker compose logs app
docker compose logs nginx
docker compose logs db
```

## 🔒 Security Features

- Non-root users in containers
- Security headers in Nginx
- Input validation in Node.js
- Rate limiting
- CORS configuration

## 🚀 Performance Optimizations

- Multi-stage Docker builds
- Connection pooling
- Gzip compression
- Keep-alive connections
- Resource limits

## 📝 Development

### Adding Dependencies
```bash
# Add production dependency
docker compose exec app npm install package-name

# Add development dependency
docker compose exec app npm install --save-dev package-name
```

### Database Migrations
```bash
# Access database
docker compose exec db mysql -u root -p nodedb

# Run migrations
docker compose exec db mysql -u root -p nodedb < db/migrations/migration.sql
```

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Check what's using the port
   sudo lsof -i :80
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
   ```

## 📚 Additional Resources

- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Nginx Configuration](https://nginx.org/en/docs/)
- [Node.js Best Practices](https://nodejs.org/en/docs/guides/)
- [MySQL Documentation](https://dev.mysql.com/doc/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is part of the Full Cycle 3.0 course.
