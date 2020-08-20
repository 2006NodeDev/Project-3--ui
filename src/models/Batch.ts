import { EmployeeAssignment } from "./EmployeeAssignment";
import { AssociateAssignment } from "./AssociateAssignment";

export interface Batch {
    
    batchId: string
    name: string
    startDate: string
    endDate: string
    skill: string
    location: string
    type: string
    goodGrade: number
    passingGrade: number
    employeeAssignments:EmployeeAssignment[]
    associateAssignments:AssociateAssignment[]
    currentWeek: number
<<<<<<< HEAD
}
=======
}
>>>>>>> df6f3ecb40710f7e8022424dfdbef55fc9de5813
