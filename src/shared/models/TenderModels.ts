export interface TenderData {
    id: number;
    category: string;
    companyName: string;
    companyLogo: string;
    title: string;
    description: string;
    status: string; // Consider using a union type like 'Tamamlanmış' | 'Davam edir'
    location: string;
    postedAgo: string;
    deadline: string;
    bids: string;
    views: string;
    slug: string; 
  }