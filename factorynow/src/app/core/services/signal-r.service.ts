import { computed, Injectable, signal, Signal } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { MachineStatus } from '../models/machine-status';


@Injectable({ providedIn: 'root' })
export class SignalRService {
  private hubConnection: signalR.HubConnection;
  private machineStatusMap = signal<Map<string, MachineStatus>>(new Map());

  constructor() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://ng-demo-api.opten.io/hubs/machines')
      .withAutomaticReconnect()
      .build();

    this.registerEvents();
    this.hubConnection.start().catch(console.error);
  }

  private registerEvents() {
    this.hubConnection.on('statusUpdate', (machine: MachineStatus) => {
      const updated = new Map(this.machineStatusMap());
      updated.set(machine.id, machine);
      this.machineStatusMap.set(updated);
    });

    this.hubConnection.on('machineCreated', (m: MachineStatus) => {
      const updated = new Map(this.machineStatusMap());
      updated.set(m.id, m);
      this.machineStatusMap.set(updated);
    });

    this.hubConnection.on('machineDeleted', (id: string) => {
      const updated = new Map(this.machineStatusMap());
      updated.delete(id);
      this.machineStatusMap.set(updated);
    });
  }

  get statuses(): Signal<Map<string, MachineStatus>> {
    return this.machineStatusMap;
  }

  getStatusById(id: string): Signal<MachineStatus | undefined> {
    return computed(() => this.machineStatusMap().get(id));
  }
}

