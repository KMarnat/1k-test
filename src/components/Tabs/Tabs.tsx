interface TabsProps {
  isActive: string;
  setIsActive: React.Dispatch<React.SetStateAction<string>>;
  packetTitles: string[];
}

const Tabs: React.FC<TabsProps> = ({ isActive, setIsActive, packetTitles }) => {
  return (
    <div className="tabs">
      {packetTitles.map((type: string, i: number) => (
        <button
          className={`tabs__btn ${isActive === type && "active"}`}
          onClick={() => setIsActive(type)}
          key={i}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
