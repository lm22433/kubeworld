import { defineConfig } from 'vitest/config';

export default defineConfig({
  server: { proxy: { '/api': 'http://localhost:8900' } },
  test: { environment: 'node' },
});