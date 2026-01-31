import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

const ServiceCard = ({ icon: Icon, title, description, buttonText, href }: ServiceCardProps) => {
  return (
    <div className="card-premium p-8 flex flex-col items-center text-center h-full">
      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
        <Icon className="w-10 h-10 text-primary" />
      </div>
      <h3 className="font-serif text-2xl font-medium text-foreground mb-4">{title}</h3>
      <p className="text-muted-foreground mb-8 flex-grow">{description}</p>
      <a
        href={href}
        className="btn-premium px-8 py-3 text-sm font-semibold tracking-wider text-primary-foreground rounded-sm"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default ServiceCard;
