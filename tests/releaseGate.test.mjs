import test from 'node:test';
import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');

const requiredFiles = [
  'src/App.tsx',
  'src/core/features.ts',
  'src/core/parity.ts',
  'src-tauri/Cargo.toml',
  'src-tauri/tauri.conf.json',
  '.github/workflows/windows-release.yml',
  'README.md',
  'RELEASE_NOTES.md',
];

const requiredSurfaces = [
  'HomeTab',
  'MediaSourcesTab',
  'DownloadsTab',
  'LiveTVTab',
  'ServerTab',
  'SecurityTab',
  'RemoteAccessTab',
  'AdvancedTab',
  'CloudNASTab',
  'PluginsTab',
  'AIDiagnosticsTab',
  'SettingsTab',
];

test('standalone repository contains required release files', async () => {
  for (const path of requiredFiles) {
    await access(resolve(root, path));
  }
});

test('feature and parity contracts preserve the declared product surface', async () => {
  const features = await readFile(resolve(root, 'src/core/features.ts'), 'utf8');
  const parity = await readFile(resolve(root, 'src/core/parity.ts'), 'utf8');

  for (const surface of requiredSurfaces) {
    assert.ok(parity.includes(surface), `Missing parity surface: ${surface}`);
  }

  for (const capability of ['cloudLibraries', 'chromecast', 'airPlay', 'smartView', 'networkDeviceDiscovery']) {
    assert.ok(features.includes(capability), `Missing feature contract: ${capability}`);
  }
});

test('Tauri produces both Windows installer formats', async () => {
  const config = JSON.parse(await readFile(resolve(root, 'src-tauri/tauri.conf.json'), 'utf8'));
  assert.deepEqual(config.bundle.targets, ['msi', 'nsis']);
  assert.equal(config.bundle.active, true);
});

test('release identity is synchronized and dependencies are reproducible', async () => {
  const packageJson = JSON.parse(await readFile(resolve(root, 'package.json'), 'utf8'));
  const packageLock = JSON.parse(await readFile(resolve(root, 'package-lock.json'), 'utf8'));
  const tauri = JSON.parse(await readFile(resolve(root, 'src-tauri/tauri.conf.json'), 'utf8'));
  const cargo = await readFile(resolve(root, 'src-tauri/Cargo.toml'), 'utf8');

  assert.equal(packageJson.version, '0.0.2');
  assert.equal(packageLock.version, packageJson.version);
  assert.equal(packageLock.packages[''].version, packageJson.version);
  assert.equal(tauri.version, packageJson.version);
  assert.match(cargo, /version = "0\.0\.2"/);
});
