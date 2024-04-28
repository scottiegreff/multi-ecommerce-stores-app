"use client";
import useEmployeeSelectionStore from "@/hooks/use-employee-selection-store";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { ApiList } from "@/components/ui/api-list";

import { EmployeeColumn, columns } from "./columns";


interface EmployeesClientProps {
  data: EmployeeColumn[];
}

export const EmployeesClient: React.FC<EmployeesClientProps> = ({
  data,
  // shiftData,
}) => {
  const params = useParams();
  const router = useRouter();
  const employeeId = data[0]?.employeeId;

  const selectedRow = useEmployeeSelectionStore((state) => state.selectedRow);
  const employeeIdSelected = selectedRow?.employeeId;

console.log(selectedRow);

  return (
    <>
      {/* Employees Table & New Employee */}
      <div className="flex items-center justify-between">
        <Heading
          title={`Employees (${data.length})`}
          description="Manage employees"
        />
        <Button onClick={() => {employeeIdSelected ? router.push(`/${params.storeId}/employees/${employeeIdSelected}`) : router.push(`/${params.storeId}/employees/new`)}}>
          <Plus className="mr-2 h-4 w-4" /> {employeeIdSelected ? `Edit ${selectedRow.name}` : "New Employee"}
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      
      <Separator />
     
    </>
  );
};
