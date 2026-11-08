set windows-shell := ["powershell.exe", "-NoLogo", "-Command"]

exe := if os_family() == "windows" { ".exe" } else { "" }
bin := "bin/kubeworld" + exe

default: help

help:
    @just --list

# Install frontend dependencies
[working-directory: 'web']
install:
    bun install

# Run the Go server
run:
    go run ./cmd/kubeworld

# Build the Go binary to bin
build-go:
    go build -o {{bin}} ./cmd/kubeworld

# Run the Vite dev server
[working-directory: 'web']
dev-web:
    bun run dev

# Build the frontend to web/dist
[working-directory: 'web']
build-web:
    bun run build

# Build the frontend, then the Go binary
build: build-web build-go
