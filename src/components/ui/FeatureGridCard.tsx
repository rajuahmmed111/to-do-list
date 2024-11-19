interface FeatureCardProps {
  title: string;
  description: string;
  Icon: React.ElementType;
}

const FeatureGridCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  Icon,
}) => (
  <div className="bg-white/90 rounded-lg p-5">
    <div className="mb-4 flex flex-col gap-2">
      <div className="text-7xl text-secondary-green">
        <Icon />
      </div>
      <h3 className="text-text-green font-ubuntu font-bold text-xl">{title}</h3>
    </div>
    <p className="text-sm">{description}</p>
  </div>
);
export default FeatureGridCard;
