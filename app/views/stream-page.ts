import { EventData, Page, Observable, Frame } from '@nativescript/core';
import { StreamManager } from '../models/stream-manager';
import { StreamConfig } from '../models/stream-settings';

export class StreamViewModel extends Observable {
  private streamManager: StreamManager;
  private streamConfig: StreamConfig;

  constructor() {
    super();
    this.streamManager = new StreamManager();
    this.streamConfig = StreamConfig.getInstance();

    // Bind stream manager properties
    this.set('isStreaming', this.streamManager.isStreaming);
    this.set('streamHealth', this.streamManager.streamHealth);
    this.set('audioSettings', this.streamConfig.settings.audioSettings);
  }

  startStream() {
    if (!this.streamManager.isStreaming) {
      this.streamManager.startStream();
      this.set('isStreaming', true);
    }
  }

  stopStream() {
    if (this.streamManager.isStreaming) {
      this.streamManager.stopStream();
      this.set('isStreaming', false);
    }
  }

  showSettings() {
    const frame = Frame.topmost();
    frame.navigate({
      moduleName: 'views/settings-page',
      transition: {
        name: 'slide'
      }
    });
  }

  showOverlays() {
    const frame = Frame.topmost();
    frame.navigate({
      moduleName: 'views/overlays-page',
      transition: {
        name: 'slide'
      }
    });
  }

  showChat() {
    const frame = Frame.topmost();
    frame.navigate({
      moduleName: 'views/chat-page',
      transition: {
        name: 'slide'
      }
    });
  }
}