export interface Product {
    id: number;
    name: string;
    category: string;
    description: string;
    price: number;
    image: string;
}

export interface GeneratedCopy {
  catchy_headline: string;
  product_description: string;
  key_benefits: string[];
  whatsapp_suggestion: string;
}

export interface AIWriterFormData {
    productName: string;
    category: string;

    keyIngredients: string;
    targetProblem: string;
}

export interface Order {
    id: number;
    product: Product;
    timestamp: string;
    status: 'pending' | 'completed';
}