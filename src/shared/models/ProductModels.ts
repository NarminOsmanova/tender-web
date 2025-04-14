export interface ProductSpec {
    text: string;
    color: string;
  }
  
export interface ProductData {
    id: number;
    name: string;
    description: string;
    processor?: string;
    ram?: string;
    storage?: string;
    screen?: string;
    graphicsCard?: string;
    connectivity?: string;
    battery?: string;
    weight?: string;
    images:string[];
    specs: ProductSpec[];
    showCartButton?: boolean;
    slug: string;
    tenderId: number;
    spesifics?: Array<{ [key: string]: string }>; 
    quantity?:number;
    price?:number;
    note?:string;
  }