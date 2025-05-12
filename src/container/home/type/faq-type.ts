export interface FaqSetDto {
    id: number;
    question: string;
    answer: string;
    language: string;
  }
  export interface Faq {
    id: number;
    question: string;
    answer: string;
    faqSetDtos: FaqSetDto[];
    createFaqSetDtos: FaqSetDto[];
  }
  