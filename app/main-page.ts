import { EventData, NavigatedData, Page, Observable } from '@nativescript/core';

export class MainViewModel extends Observable {
  constructor() {
    super();
    
    this.set('recentStreams', [
      { title: 'Gaming Session', date: '2024-03-20 15:30' },
      { title: 'Art Stream', date: '2024-03-19 18:00' },
      { title: 'Live Coding', date: '2024-03-18 20:00' }
    ]);
  }

  navigateToStream() {
    const frame = require('@nativescript/core').Frame;
    frame.topmost().navigate({
      moduleName: 'views/stream-page',
      transition: {
        name: 'slide'
      }
    });
  }
}

export function onNavigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new MainViewModel();
}