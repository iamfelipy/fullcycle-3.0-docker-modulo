.PHONY: help build up down logs clean test

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-15s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

build: ## Build all containers
	docker compose build

up: ## Start all services
	docker compose up -d

down: ## Stop all services
	docker compose down

logs: ## Show logs for all services
	docker compose logs -f

clean: ## Remove all containers and volumes
	docker compose down -v --remove-orphans

test: ## Run tests
	docker compose exec app npm test

dev: ## Start development environment
	docker compose -f docker-compose.yml -f docker-compose.override.yml up -d

prod: ## Start production environment
	docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d
