import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OptenAssessmentsAngularApiService } from '../../../api-client/api/optenAssessmentsAngularApi.service';

@Injectable({
  providedIn: 'root'
})
export class MachineServiceService {

  constructor(private apiService: OptenAssessmentsAngularApiService) { }

  getMachines(): Observable<any> {
    return this.apiService.apiMachinesGet();
  }

  addMachine(machineData: any): Observable<any> {
    return this.apiService.apiMachinesPost(machineData);
  }

  updateMachine(machineId: string, machineData: any): Observable<any> {
    return this.apiService.apiMachinesIdPut(machineId, machineData);
  }

  deleteMachine(machineId: string): Observable<any> {
    return this.apiService.apiMachinesIdDelete(machineId);
  }
}
