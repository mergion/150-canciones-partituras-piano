export interface FaqItem {
  question: string;
  answer: string;
}

export interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
}

export interface PlanProps {
  title: string;
  subtitle: string;
  image: string;
  features: string[];
  oldPrice: string;
  newPrice: string;
  installments: string;
  savings: string;
  isFeatured?: boolean;
  checkoutUrl: string;
}