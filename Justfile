set windows-shell := ["powershell.exe", "-NoLogo", "-Command"]

exe := if os_family() == "windows" { ".exe" } else { "" }
bin := "bin/kubeworld" + exe

default: help

help:
    @just --list

# Install Go dependencies
install-go:
    go mod tidy

# Install frontend dependencies
[working-directory: 'web']
install-web:
    bun install

# Install all dependencies
install: install-go install-web

# Lint and format Go
check-go:
    go vet ./...
    go fmt ./...

# Lint and format the frontend
[working-directory: 'web']
check-web:
    bun run check

# Lint and format the codebase
check: check-go check-web

# Run the Vite dev server
[working-directory: 'web']
dev-web:
    bun run dev

# Build the Go binary to bin
build-go:
    go build -o {{bin}} ./cmd/kubeworld

# Build the frontend to web/dist
[working-directory: 'web']
build-web:
    bun run build

# Build the frontend, then the Go binary
build: build-web build-go

# Run the Go server
run:
    go run ./cmd/kubeworld
