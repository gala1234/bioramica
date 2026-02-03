
export type LanguageCode = 'ES' | 'EN' | 'RU' | 'CN' | 'AE';

export interface Language {
  code: LanguageCode;
  label: string;
  dir: 'ltr' | 'rtl';
}

export interface Translations {
  [key: string]: {
    nav: {
      brand_sub: string;
      collection: string;
      jewelry: string;
      auth: string;
      contact: string;
      login: string;
    };
    hero: {
      label: string;
      title_1: string;
      title_2: string;
      desc: string;
      scroll: string;
    };
    gallery: {
      title: string;
      subtitle: string;
      synced: string;
      view_card: string;
    };
    jewelry: {
        title: string;
        subtitle: string;
        label: string;
        view_card: string;
    };
    verify: {
        title: string;
        subtitle: string;
        placeholder: string;
        btn_search: string;
        btn_verify: string;
        success: string;
        owner: string;
        reset: string;
    };
    card: {
        ref: string;
        mass_loss: string;
        raw: string;
        fired: string;
        temp: string;
        duration: string;
        clay: string;
        glaze: string;
        atmosphere: string;
        note: string;
        cta: string;
        status_avail: string;
        status_res: string;
        fitting: string;
        sold: string;
    };
    cart: {
        title: string;
        empty: string;
        total: string;
        checkout: string;
        remove: string;
    };
    footer: {
        text: string;
        col1: string;
        col2: string;
        col3: string;
        rights: string;
    };
  };
}

export interface TechSpecs {
    clay: string;
    glaze: string;
    atmosphere: string;
    weight_raw: number;
    weight_fired: number;
    temp_peak: number;
    time_fired: string;
    shrinkage: string;
    fitting?: string;
}

export interface Piece {
  id: string;
  title: string;
  subtitle: string;
  status: string;
  price: number;
  imageColor: string;
  tech_specs: TechSpecs;
  notes: string;
}
