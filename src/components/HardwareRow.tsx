type HardwareRowProps = {
  setName: string;
  checkedOut: number;
};

function HardwareRow({ setName, checkedOut }: HardwareRowProps) {
  return (
    <div className="hardware-row">
      <span>{setName}</span>
      <span>{checkedOut} checked out</span>
    </div>
  );
}

export default HardwareRow;