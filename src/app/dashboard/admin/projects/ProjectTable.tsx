/* eslint-disable @typescript-eslint/no-explicit-any */
import { Edit3, Trash2 } from "lucide-react";

export default function ProjectTable({ projects, onEdit, onDelete }: any) {
  return (
    <table className="w-full border-collapse bg-white shadow-sm rounded-lg">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="p-3">Name</th>
          <th className="p-3">Goal</th>
          <th className="p-3">Raised</th>
          <th className="p-3 text-right">Actions</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((p: any) => (
          <tr key={p.id} className="border-b hover:bg-gray-50">
            <td className="p-3">{p.name}</td>
            <td className="p-3">${p.goal.toLocaleString()}</td>
            <td className="p-3">${p.raised.toLocaleString()}</td>
            <td className="p-3 text-right flex justify-end gap-3">
              <button
                onClick={() => onEdit(p)}
                className="text-blue-600 hover:text-blue-800"
              >
                <Edit3 size={18} />
              </button>
              <button
                onClick={() => onDelete(p.id)}
                className="text-red-600 hover:text-red-800"
              >
                <Trash2 size={18} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
