import type { TaskFilter } from "../types/filter";

interface TaskFiltersProps {
  activeFilter: TaskFilter;
  onChange: (filter: TaskFilter) => void;
}

const filters: TaskFilter[] = ["all", "pending", "completed"];

function TaskFilters({ activeFilter, onChange }: TaskFiltersProps) {
  return (
    <div className="flex gap-2 mb-6">
      {filters.map((filter) => {
        const isActive = activeFilter === filter;

        return (
          <button
            key={filter}
            onClick={() => onChange(filter)}
            className={`px-3 py-1 rounded-full text-sm transition
              ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        );
      })}
    </div>
  );
}

export default TaskFilters;
