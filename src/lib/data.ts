import type { Piece, LanguageCode } from './types';
import { TRANSLATIONS } from './translations';

export const getPieces = (lang: LanguageCode): Piece[] => {
  const t = TRANSLATIONS[lang].card;
  const isES = lang === 'ES';
  return [
    {
      id: "BIO-26-001",
      title: isES ? "Estratigrafía I" : "Stratigraphy I",
      subtitle: isES ? "Serie Oxidación" : "Oxidation Series",
      status: t.status_avail,
      price: 2400,
      imageColor: "bg-[#1a1a1a]",
      tech_specs: {
        clay: "Gres Refractario",
        glaze: "Cu + Bone Ash",
        atmosphere: "Reduction",
        weight_raw: 1450,
        weight_fired: 1280,
        temp_peak: 1260,
        time_fired: "14h 30m",
        shrinkage: "11.7%"
      },
      notes: isES ? "Destellos metálicos en flanco sur." : "Metallic flashes on southern flank."
    },
    {
      id: "BIO-26-002",
      title: isES ? "Masa Crítica II" : "Critical Mass II",
      subtitle: isES ? "Estudio de Volumen" : "Volume Study",
      status: t.status_res, // Reserved items cannot be bought
      price: 3100,
      imageColor: "bg-[#111]",
      tech_specs: {
        clay: "Red Clay",
        glaze: "Fire Patina",
        atmosphere: "Oxidation",
        weight_raw: 2100,
        weight_fired: 1850,
        temp_peak: 1180,
        time_fired: "10h 15m",
        shrinkage: "11.9%"
      },
      notes: isES ? "Resistencia estructural validada." : "Structural resistance validated."
    },
    {
      id: "BIO-26-003",
      title: isES ? "Fragmento Solar" : "Solar Fragment",
      subtitle: "2026 Unpublished",
      status: t.status_avail,
      price: 1850,
      imageColor: "bg-[#1c1c1c]",
      tech_specs: {
        clay: "Black Porcelain",
        glaze: "Pure Feldspar",
        atmosphere: "Neutral",
        weight_raw: 850,
        weight_fired: 710,
        temp_peak: 1240,
        time_fired: "12h 00m",
        shrinkage: "16.4%"
      },
      notes: isES ? "Sonoridad metálica (F#)." : "Metallic resonance (F#)."
    }
  ];
};

export const getJewelry = (lang: LanguageCode): Piece[] => {
  const t = TRANSLATIONS[lang].card;
  const isES = lang === 'ES';
  return [
    {
      id: "BIO-J-001",
      title: isES ? "Nudo de Tensión" : "Tension Knot",
      subtitle: isES ? "Pendientes Orbitales" : "Orbital Studs",
      status: t.status_avail,
      price: 450,
      imageColor: "bg-[#222]",
      tech_specs: {
        clay: "Ultra-Light Porcelain",
        glaze: "Matte Cobalt",
        atmosphere: "Oxidation",
        weight_raw: 4,
        weight_fired: 3.2,
        temp_peak: 1250,
        time_fired: "8h",
        shrinkage: "18%",
        fitting: "Titanium"
      },
      notes: isES ? "Ligereza absoluta." : "Absolute lightness."
    },
    {
      id: "BIO-J-002",
      title: isES ? "Placa Tectónica" : "Tectonic Plate",
      subtitle: isES ? "Colgante Estructural" : "Structural Pendant",
      status: t.status_avail,
      price: 680,
      imageColor: "bg-[#181818]",
      tech_specs: {
        clay: "Vulcan Clay",
        glaze: "Gold Lustre (12k)",
        atmosphere: "Reduction",
        weight_raw: 15,
        weight_fired: 12.5,
        temp_peak: 1200,
        time_fired: "10h",
        shrinkage: "14%",
        fitting: "Silver Ag925"
      },
      notes: isES ? "Fusión oro y arcilla." : "Gold and clay fusion."
    }
  ];
};
