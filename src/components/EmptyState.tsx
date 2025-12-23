interface EmptyStateProps {
  message?: string;
}

function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="text-5xl mb-4">🌸</div>

      <p className="text-gray-500 max-w-xs">
        {message ?? "No tasks to show yet."}
      </p>
    </div>
  );
}

export default EmptyState;
