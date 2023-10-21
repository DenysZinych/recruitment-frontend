import clsx from "clsx";

interface IPlusCircleProps {
  className?: string;
}

export const PlusCircle = ({ className }: IPlusCircleProps) => (
  <svg
    className={clsx("stroke-white", className)}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
