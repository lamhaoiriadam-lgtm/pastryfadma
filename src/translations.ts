export type Language = 'fr';

export interface Translations {
  menu: string;
  ourLocation: string;
  ourCollections: string;
  explore: string;
  searchPlaceholder: string;
  addToCart: string;
  bestseller: string;
  boxContents: string;
  plateauContents: string;
  ingredientsLabel: string;
  cart: string;
  checkout: string;
  total: string;
  emptyCart: string;
  selectLanguage: string;
  welcome: string;
  continue: string;
  categories: {
    [key: string]: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    menu: 'Menu',
    ourLocation: 'Notre Emplacement',
    ourCollections: 'Nos Collections',
    explore: 'Explorer',
    searchPlaceholder: 'Rechercher dans nos collections...',
    addToCart: 'Ajouter au Panier',
    bestseller: 'Meilleure Vente',
    boxContents: 'Contenue du coffret',
    plateauContents: 'Contenu du plateau',
    ingredientsLabel: 'Ingrédients',
    cart: 'Votre Panier',
    checkout: 'Confirmer la Commande',
    total: 'Total',
    emptyCart: 'Votre panier est vide',
    selectLanguage: 'Choisir la Langue',
    welcome: 'Bienvenue chez FADMA',
    continue: 'Continuer',
    categories: {
      All: 'Tout',
      Plateaux: 'Plateaux',
      GATEAUX: 'Gâteaux',
      CAKES: 'Cakes',
      Coffrets: 'Coffrets',
    },
  },
};
