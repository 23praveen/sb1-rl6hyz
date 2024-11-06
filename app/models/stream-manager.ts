import { Observable } from '@nativescript/core';

export class StreamManager extends Observable {
  private _isStreaming = false;
  private _streamHealth = 100;
  private _chatMessages: string[] = [];

  constructor() {
    super();
  }

  get isStreaming(): boolean {
    return this._isStreaming;
  }

  get streamHealth(): number {
    return this._streamHealth;
  }

  get chatMessages(): string[] {
    return this._chatMessages;
  }

  startStream() {
    this._isStreaming = true;
    this.notifyPropertyChange('isStreaming', true);
    this.monitorStreamHealth();
  }

  stopStream() {
    this._isStreaming = false;
    this.notifyPropertyChange('isStreaming', false);
  }

  private monitorStreamHealth() {
    // Simulate stream health monitoring
    setInterval(() => {
      const healthChange = Math.random() * 10 - 5;
      this._streamHealth = Math.max(0, Math.min(100, this._streamHealth + healthChange));
      this.notifyPropertyChange('streamHealth', this._streamHealth);

      if (this._streamHealth < 50) {
        this.notifyStreamIssue('Stream quality is degrading');
      }
    }, 5000);
  }

  private notifyStreamIssue(message: string) {
    // Implement notification logic
    console.log(`Stream Issue: ${message}`);
  }

  addChatMessage(message: string) {
    this._chatMessages.push(message);
    this.notifyPropertyChange('chatMessages', this._chatMessages);
  }
}