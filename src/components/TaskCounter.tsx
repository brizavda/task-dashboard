interface TaskCounterProps {
  total: number;
  pending: number;
}

function TaskCounter({ total, pending }: TaskCounterProps) {
  return (
    <div className="flex items-center justify-between mb-4 text-sm">
      <span className="text-gray-600">
        Total: <strong className="text-rose-500">{total}</strong>
      </span>

      <span className="text-gray-600">
        Pending: <strong className="text-rose-500">{pending}</strong>
      </span>
    </div>
  );
}

export default TaskCounter;
