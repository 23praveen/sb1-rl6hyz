export interface StreamSettings {
  resolution: '720p' | '1080p';
  bitrate: number;
  fps: number;
  platform: 'twitch' | 'youtube' | 'facebook';
  orientation: 'portrait' | 'landscape';
  audioSettings: {
    micVolume: number;
    appVolume: number;
  };
}

export class StreamConfig {
  private static instance: StreamConfig;
  private _settings: StreamSettings;

  private constructor() {
    this._settings = {
      resolution: '1080p',
      bitrate: 6000,
      fps: 60,
      platform: 'twitch',
      orientation: 'landscape',
      audioSettings: {
        micVolume: 1.0,
        appVolume: 1.0
      }
    };
  }

  static getInstance(): StreamConfig {
    if (!StreamConfig.instance) {
      StreamConfig.instance = new StreamConfig();
    }
    return StreamConfig.instance;
  }

  get settings(): StreamSettings {
    return this._settings;
  }

  updateSettings(newSettings: Partial<StreamSettings>) {
    this._settings = { ...this._settings, ...newSettings };
  }
}