export type ParityStatus = 'legacy-backed' | 'native-reimagined' | 'migration-required';

export interface ParityCapability {
  id: string;
  label: string;
  surface: string;
  status: ParityStatus;
}

export const parityCapabilities: ParityCapability[] = [
  { id: 'home', label: 'Home and media shelves', surface: 'HomeTab', status: 'native-reimagined' },
  { id: 'sources', label: 'Media source discovery, scan, repair and verification', surface: 'MediaSourcesTab', status: 'migration-required' },
  { id: 'downloads', label: 'Downloads and acquisition queue', surface: 'DownloadsTab', status: 'migration-required' },
  { id: 'livetv', label: 'IPTV, channels, guide and live playback', surface: 'LiveTVTab', status: 'migration-required' },
  { id: 'server', label: 'CinaVault server and Jellyfin fallback', surface: 'ServerTab', status: 'migration-required' },
  { id: 'security', label: 'Security, credentials and access controls', surface: 'SecurityTab', status: 'migration-required' },
  { id: 'remote', label: 'Remote access, relay and VPN', surface: 'RemoteAccessTab', status: 'migration-required' },
  { id: 'advanced', label: 'Advanced repair, chapters, duplicates and diagnostics', surface: 'AdvancedTab', status: 'migration-required' },
  { id: 'cloud-nas', label: 'Cloud, Synology and WD My Cloud libraries', surface: 'CloudNASTab', status: 'migration-required' },
  { id: 'plugins', label: 'Plugin catalog, install, uninstall and execution', surface: 'PluginsTab', status: 'migration-required' },
  { id: 'ai', label: 'AI diagnostics, routing and provider fallback', surface: 'AIDiagnosticsTab', status: 'migration-required' },
  { id: 'settings', label: 'Themes, preferences and persistent settings', surface: 'SettingsTab', status: 'native-reimagined' },
  { id: 'playback', label: 'Local and remote media playback', surface: 'Rust player commands', status: 'migration-required' },
  { id: 'casting', label: 'Google Cast, AirPlay and Smart View device playback', surface: 'Casting service layer', status: 'migration-required' },
  { id: 'metadata', label: 'Metadata routing, enrichment and sidecars', surface: 'Metadata engines', status: 'migration-required' },
  { id: 'serverless', label: 'Cloud control plane and adaptive delivery', surface: 'Cloud architecture', status: 'migration-required' },
];

export const parityReleaseGate = {
  forbidSilentRemoval: true,
  requireWindowsInstaller: true,
  requireStandaloneTests: true,
  requireBuildNotes: true,
} as const;
