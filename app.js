/**
 * ÉBANO KITCHEN & BAR — Minimalist Interactive Experience & Official Menu Data
 * Cocina Típica Esmeraldeña & Coctelería Tradicional Global
 */

const WHATSAPP_NUMBER = '593999002427';

/**
 * Hero Slides (Inspirado en la referencia minimalista NOE)
 */
const HERO_SLIDES = [
  {
    kicker: 'COCINA ESMERALDEÑA & BAR',
    title: 'SABOR DEL PACÍFICO',
    subtitle: 'Y COCTELERÍA DE LA CASA',
    highlight: 'DESAYUNOS · MARISCOS · COCTELERÍA',
    note: '*Tradición esmeraldeña y coctelería clásica global frente al mar en Tonsupa.',
    ctaText: 'EXPLORAR LA CARTA',
    ctaHref: '#carta',
    image: 'fotos/hd/terraza-atardecer-hd.jpg',
    alt: 'Terraza frente al mar y barra de Ébano Kitchen & Bar al atardecer'
  },
  {
    kicker: 'ESPECIALIDAD DE LA CASA',
    title: 'HERENCIA DEL MAR',
    subtitle: 'PULPO A LA PARRILLA, ENCOCADOS Y MARISCOS',
    highlight: 'MARISCOS FRESCOS DEL PACÍFICO · JUEVES A LUNES',
    note: '*Pulpo a la parrilla, parrilladas marineras, encocados y cortes nobles.',
    ctaText: 'VER PLATOS DEL MAR',
    ctaHref: '#carta',
    image: 'fotos/hd/pulpo-parrilla-hd.jpg?v=2',
    alt: 'Pulpo a la parrilla en Ébano Kitchen & Bar'
  },
  {
    kicker: 'FRENTE AL MAR EN TONSUPA',
    title: 'BRISA Y TRADICIÓN',
    subtitle: 'MAÑANAS, ALMUERZOS Y ATARDECERES',
    highlight: 'JUEVES A LUNES · 08:00 AM A 07:30 PM',
    note: '*Martes y Miércoles cerrado. Todos nuestros desayunos, bolones y tigrillos incluyen café recién pasado.',
    ctaText: 'RESERVAR UNA MESA',
    ctaHref: '#reservas',
    image: 'fotos/hd/terraza-mar-hd.jpg',
    alt: 'Terraza con vista al océano Pacífico en Ébano Kitchen & Bar'
  }
];

/**
 * Promociones & Eventos Especiales (Carrusel en Bucle Infinito Bidireccional)
 */
const PROMO_SLIDES = [
  {
    id: 'promo-navidad',
    badge: 'TEMPORADA FESTIVA · FRENTE AL MAR',
    title: 'Ven y Festeja la Navidad Frente al Mar',
    desc: 'Una Navidad playera frente al mar, en un lugar acogedor, íntimo y sin prisa con nuestro Menú Navideño de Cuatro Tiempos.',
    perks: [
      'Copa de Champán',
      'Regalo de Cortesía',
      'Piqueos de Bienvenida',
      'Menú Cuatro Tiempos',
      'Música en Vivo'
    ],
    price: 'USD $65',
    priceUnit: 'POR PERSONA',
    groupNote: 'Precios especiales para grupos a partir de 20 personas.',
    image: 'fotos/promos/promo-navidad.jpg',
    alt: 'Promoción Navidad Frente al Mar en Ébano Kitchen & Bar',
    ctaText: 'RESERVAR NAVIDAD POR WHATSAPP',
    waMessage: 'Hola Ébano Kitchen & Bar, me gustaría reservar para la cena de *Navidad Frente al Mar* (USD 65 por persona).'
  },
  {
    id: 'promo-fin-de-ano',
    badge: 'NOCHEVIEJA · FRENTE AL MAR',
    title: 'Cena de Fin de Año Frente al Mar',
    desc: 'Una noche para brindar por lo vivido y recibir lo que está por venir, en un lugar acogedor, íntimo y sin prisa.',
    perks: [
      'Menú Cuatro Tiempos',
      'Música en Vivo',
      'Cotillón Temático',
      'Juegos Pirotécnicos',
      'Brindis de Medianoche'
    ],
    price: 'USD $85',
    priceUnit: 'POR PERSONA',
    groupNote: 'Precios especiales para grupos a partir de 20 personas.',
    image: 'fotos/promos/promo-fin-de-ano.jpg',
    alt: 'Promoción Cena de Fin de Año Frente al Mar en Ébano Kitchen & Bar',
    ctaText: 'RESERVAR FIN DE AÑO POR WHATSAPP',
    waMessage: 'Hola Ébano Kitchen & Bar, me gustaría reservar para la *Cena de Fin de Año Frente al Mar* (USD 85 por persona).'
  }
];

/**
 * 15 Categorías Oficiales con todos los platos, bebidas y precios exactos
 */
const MENU_CATEGORIES = [
  {
    id: 'desayunos',
    title: 'Desayunos',
    moment: 'mananas',
    note: 'Servidos todas las mañanas con ingredientes frescos de la costa',
    items: [
      {
        id: 'des-paso',
        name: 'Desayuno al Paso',
        price: 3.50,
        desc: 'Dos huevos al gusto, a su elección, pan, mermelada, mantequilla y café americano.'
      },
      {
        id: 'des-esmeraldeno',
        name: 'Desayuno Esmeraldeño',
        price: 6.50,
        desc: 'Bolón de verde con queso o chicharrón, huevos al gusto, porción de fruta de la temporada, café, infusión o chocolate y jugo natural de temporada.'
      },
      {
        id: 'des-tigrillo-costeno',
        name: 'Tigrillo Costeño',
        price: 7.50,
        desc: 'Tigrillo esmeraldeño, queso criollo, estofado de carne, huevos al gusto, porción de frutas de la temporada, café, infusión o chocolate y jugo natural de temporada.'
      },
      {
        id: 'des-encocado-camaron',
        name: 'Encocado de Camarón con Patacones',
        price: 7.50,
        image: 'fotos/menu/EncocadoDePescado.webp',
        imgPosition: 'center 82%',
        desc: 'Camarones en salsa de coco, patacones recién hechos, porción de arroz, porción de frutas de la temporada, café, infusión o chocolate y jugo natural de temporada.'
      },
      {
        id: 'des-continental',
        name: 'Desayuno Continental',
        price: 6.00,
        desc: 'Yogur con porción de frutas, pan, mantequilla y mermelada, café, infusión o chocolate y jugo natural de temporada.'
      },
      {
        id: 'des-americano',
        name: 'Desayuno Americano',
        price: 6.00,
        desc: 'Dos huevos al gusto, tocino crocante o salchichas, pan tostado, mermelada y mantequilla, porción de frutas de la temporada, café, infusión o chocolate y jugo natural de temporada.'
      },
      {
        id: 'des-amanecer-saludable',
        name: 'Amanecer Saludable',
        price: 7.50,
        desc: 'Yogur griego, granola, frutas frescas, tostadas integrales, huevos pochados o revueltos, té o café y jugo verde.'
      },
      {
        id: 'des-marimbero',
        name: 'Desayuno Marimbero',
        price: 8.50,
        desc: 'Bolón relleno de camarón y queso, huevos al gusto, salsa criolla, porción de frutas de la temporada, café, infusión o chocolate y jugo natural de temporada.'
      },
      {
        id: 'des-ebano',
        name: 'Desayuno Ébano',
        price: 10.00,
        desc: 'Filete de picudo, arroz, patacones, ensalada, porción de frutas de la temporada, café, infusión o chocolate y jugo natural de temporada.'
      },
      {
        id: 'des-brunch-tropical',
        name: 'Brunch Tropical',
        price: 12.00,
        desc: 'Mini bolón, mini tigrillo, fruta fresca, yogur, pan, huevos al gusto, mermelada, porción de frutas de la temporada, café, infusión o chocolate y jugo natural de temporada.'
      }
    ]
  },
  {
    id: 'tigrillos',
    title: 'Tigrillos',
    moment: 'mananas',
    note: 'Todos incluyen café americano',
    items: [
      {
        id: 'tig-queso',
        name: 'Tigrillo de Queso',
        price: 5.00,
        desc: 'Plátano verde majado al momento con huevo y queso criollo fundido. Incluye café americano.'
      },
      {
        id: 'tig-chicharron',
        name: 'Tigrillo de Chicharrón',
        price: 5.50,
        desc: 'Plátano verde majado con chicharrón artesanal dorado. Incluye café americano.'
      },
      {
        id: 'tig-mixto',
        name: 'Tigrillo Mixto',
        price: 6.50,
        desc: 'Combinación de queso criollo y chicharrón crocante. Incluye café americano.'
      }
    ]
  },
  {
    id: 'bolones',
    title: 'Bolones',
    moment: 'mananas',
    note: 'Todos incluyen café americano',
    items: [
      {
        id: 'bol-queso',
        name: 'Bolón de Queso',
        price: 4.00,
        desc: 'Verde asado y majado al instante relleno de queso costeño. Incluye café americano.'
      },
      {
        id: 'bol-chicharron',
        name: 'Bolón de Chicharrón',
        price: 5.00,
        desc: 'Verde majado relleno de chicharrón de cerdo crocante. Incluye café americano.'
      },
      {
        id: 'bol-mixto',
        name: 'Bolón Mixto',
        price: 6.00,
        desc: 'Equilibrio entre queso costeño y chicharrón artesanal. Incluye café americano.'
      }
    ]
  },
  {
    id: 'especialidad-carta',
    title: 'Especialidad de la Carta',
    moment: 'mananas',
    note: 'Todos acompañados de café',
    items: [
      {
        id: 'esp-tigrillo',
        name: 'Tigrillo',
        price: 6.50,
        desc: 'Queso, Chicharrón, Mixto. Todos acompañados de café.'
      },
      {
        id: 'esp-bolones',
        name: 'Bolones',
        price: 6.00,
        desc: 'Queso, Chicharrón, Mixto. Todos acompañados de café.'
      },
      {
        id: 'esp-bolon-esmeraldeno',
        name: 'Bolón Esmeraldeño',
        price: 8.00,
        desc: 'Carne al jugo y dos huevos fritos. Todos acompañados de café.'
      },
      {
        id: 'esp-bolon-ebano',
        name: 'Bolón Ébano',
        price: 10.00,
        desc: 'Mixto con queso y chicharrón con salsa de mariscos. Todos acompañados de café.'
      }
    ]
  },
  {
    id: 'ensaladas',
    title: 'Ensaladas',
    moment: 'principal',
    note: 'Frescura y contraste de sabores',
    items: [
      {
        id: 'ens-casa',
        name: 'Ensalada de la Casa (con pollo o camarón)',
        price: 8.50,
        desc: 'Tomate, cebolla perla, pimiento, champiñones, aceitunas y queso. Acompañada de horchata y vinagreta.'
      },
      {
        id: 'ens-ebano',
        name: 'Ensalada Ébano',
        price: 9.50,
        desc: 'Papa al vapor, camarones, manzana verde y apio con nuestra deliciosa salsa a base de yogurt.'
      }
    ]
  },
  {
    id: 'barra-fria',
    title: 'Barra Fría',
    moment: 'principal',
    note: 'Solicítalo al estilo esmeraldeño o manaba',
    items: [
      {
        id: 'cev-marinero',
        name: 'Ceviche Marinero',
        price: 20.00,
        desc: 'Camarón, pescado, calamar, conchas y langostino marinados al momento.'
      },
      {
        id: 'cev-mixto',
        name: 'Ceviche Mixto de Mariscos',
        price: 16.00,
        desc: 'Combinación de dos mariscos frescos en jugo cítrico especiado.'
      },
      {
        id: 'cev-concha',
        name: 'Ceviche de Concha',
        price: 12.00,
        desc: 'El clásico esmeraldeño preparado con conchas prietas frescas en su jugo y limón sutil.'
      },
      {
        id: 'cev-camaron',
        name: 'Ceviche de Camarón',
        price: 10.00,
        desc: 'Camarones seleccionados marinados en limón sutil, cebolla y cilantro costeño.'
      },
      {
        id: 'cev-pescado',
        name: 'Ceviche de Pescado',
        price: 10.00,
        desc: 'Cubos de pescado fresco del día curtidos en cítricos y especias costeñas.'
      },
      {
        id: 'cev-pulpo',
        name: 'Ceviche de Pulpo',
        price: 18.00,
        desc: 'Tiernas láminas de pulpo en marinada cítrica artesanal (esmeraldeño o manaba).'
      }
    ]
  },
  {
    id: 'sopas',
    title: 'Sopas',
    moment: 'principal',
    note: 'Caldos profundos con el alma del Pacífico',
    items: [
      {
        id: 'sop-marinera',
        name: 'Sopa Marinera',
        price: 20.00,
        desc: 'Camarón, pescado, calamar, conchas y langostino.'
      },
      {
        id: 'sop-pollo',
        name: 'Sopa de Pollo',
        price: 7.00,
        desc: 'Reconfortante sopa tradicional de pollo con vegetales frescos y hierbas aromáticas.'
      },
      {
        id: 'sop-ensumacao',
        name: 'Ensumacao',
        price: 20.00,
        desc: 'Emblema esmeraldeño de mariscos frescos en caldo cremoso de leche de coco, maní, verde y chillangua.'
      }
    ]
  },
  {
    id: 'viches',
    title: 'Viches',
    moment: 'principal',
    note: 'Tradición costera de maní, plátano y mariscos',
    items: [
      {
        id: 'vic-pescado',
        name: 'Viche de Pescado',
        price: 8.00,
        desc: 'Sopa tradicional de la costa ecuatoriana preparada con pescado, maní, plátano y vegetales.'
      },
      {
        id: 'vic-camaron',
        name: 'Viche de Camarón',
        price: 8.00,
        desc: 'Sopa cremosa tradicional de maní, vegetales de la costa, bolitas de verde y camarones.'
      },
      {
        id: 'vic-mixto',
        name: 'Viche Mixto',
        price: 10.00,
        desc: 'Combinación de pescado y camarones en caldo espeso de maní tostado y plátano.'
      }
    ]
  },
  {
    id: 'pescados-mariscos',
    title: 'Pescados y Conchas',
    moment: 'principal',
    note: 'Del mar directo a nuestra cocina',
    items: [
      {
        id: 'pm-filete-pescado',
        name: 'Filete de Pescado',
        price: 12.00,
        featured: true,
        image: 'fotos/menu/EncocadoDePescado.webp',
        imgPosition: 'center 82%',
        desc: 'Preparaciones: Encocado tradicional en leche de coco con patacones, a la plancha, apanado o al ajillo.'
      },
      {
        id: 'pm-conchas-asadas',
        name: 'Conchas Asadas',
        price: 16.00,
        desc: 'Conchas prietas seleccionadas asadas al carbón con mantequilla de ajo y limón sutil.'
      }
    ]
  },
  {
    id: 'especialidades',
    title: 'Especialidades',
    moment: 'principal',
    note: 'Para compartir o disfrutar de nuestra parrilla',
    items: [
      {
        id: 'esp-parrillada-4',
        name: 'Parrillada de Mariscos (4 Personas)',
        price: 60.00,
        featured: true,
        image: 'fotos/menu/ParrilladaDeMariscos.webp',
        imgPosition: 'center 50%',
        desc: 'Mix de mariscos para 4 personas con pescado entero frito, langostinos a la parrilla, conchas prietas, calamar, patacones y curtido costeño.'
      },
      {
        id: 'esp-parrillada-2',
        name: 'Parrillada de Mariscos (2 Personas)',
        price: 45.00,
        image: 'fotos/menu/ParrilladaDeMariscos.webp',
        desc: 'Mix de mariscos para 2 personas.'
      },
      {
        id: 'esp-picada-mariscos',
        name: 'Picada de Mariscos',
        price: 24.00,
        desc: 'Almejas, mejillones, calamar y camarones.'
      },
      {
        id: 'esp-picada-ebano',
        name: 'Picada Ébano Mar y Tierra',
        price: 30.00,
        desc: 'Mix de mariscos y carnes para 4 personas.'
      },
      {
        id: 'esp-pulpo-parrilla',
        name: 'Pulpo a la Parrilla',
        price: 20.00,
        featured: true,
        image: 'fotos/hd/pulpo-parrilla-hd.jpg?v=2',
        imgPosition: 'center 50%',
        desc: 'Tentáculos de pulpo a la parrilla acompañados de papas doradas y vegetales frescos salteados.'
      },
      {
        id: 'esp-langosta-parrilla',
        name: 'Langosta a la Parrilla',
        price: 20.00,
        desc: 'Langosta entera asada a las brasas con mantequilla aromática.'
      },
      {
        id: 'esp-langosta-salsa',
        name: 'Langosta en Salsa de Mariscos',
        price: 24.00,
        desc: 'Langosta bañada en reducción cremosa de mariscos frescos.'
      },
      {
        id: 'esp-langostinos-parrilla',
        name: 'Langostinos a la Parrilla',
        price: 18.00,
        desc: 'Langostinos seleccionados sellados al fuego de la parrilla.'
      },
      {
        id: 'esp-langostinos-conac',
        name: 'Langostinos al Coñac',
        price: 18.00,
        desc: 'Langostinos flambeados al coñac en salsa suave.'
      }
    ]
  },
  {
    id: 'arroces',
    title: 'Arroces',
    moment: 'principal',
    note: 'Sazón profunda y porciones generosas',
    items: [
      {
        id: 'arr-marinero-ebano',
        name: 'Arroz Marinero Ébano',
        price: 20.00,
        featured: true,
        image: 'fotos/menu/ArrozMarinero.webp',
        imgPosition: 'center 56%',
        desc: 'Arroz insignia de la casa colmado de camarones, conchas prietas, calamar y patacones recién hechos.'
      },
      {
        id: 'arr-camaron-coco',
        name: 'Arroz con Camarón y Coco',
        price: 14.00,
        desc: 'Arroz meloso cocinado en leche de coco natural con camarones salteados.'
      },
      {
        id: 'arr-concha',
        name: 'Arroz con Concha',
        price: 15.00,
        desc: 'Clásico arroz esmeraldeño preparado con conchas prietas en su jugo.'
      },
      {
        id: 'arr-mixto',
        name: 'Arroz Mixto',
        price: 16.00,
        desc: 'Selección de mariscos salteados con nuestro arroz sazonado costeño.'
      }
    ]
  },
  {
    id: 'de-la-tierra',
    title: 'De la Tierra',
    moment: 'principal',
    note: 'Cortes nobles y carnes al punto',
    items: [
      {
        id: 'tie-costillas-bbq',
        name: 'Costillas BBQ',
        price: 18.00,
        desc: 'Costillas de cerdo tiernas bañadas en salsa barbacoa ahumada.'
      },
      {
        id: 'tie-churrasco',
        name: 'Churrasco',
        price: 14.00,
        desc: 'Corte jugoso acompañado de huevos fritos, arroz, papas fritas, menestra y ensalada.'
      },
      {
        id: 'tie-tomahawk',
        name: 'Tomahawk',
        price: 18.00,
        desc: 'Imponente corte con hueso asado a la parrilla al término de tu preferencia.'
      },
      {
        id: 'tie-picana',
        name: 'Picaña',
        price: 15.00,
        desc: 'Corte tradicional a las brasas con su característica jugosidad.'
      },
      {
        id: 'tie-lomo-fino',
        name: 'Lomo Fino en Salsa de Champiñones',
        price: 18.00,
        desc: 'Acompañado de papas fritas o al vapor.'
      },
      {
        id: 'tie-filete-pollo',
        name: 'Filete de Pollo a la Plancha',
        price: 8.00,
        desc: 'Acompañado de arroz, papas fritas o al vapor, menestra y ensalada.'
      }
    ]
  },
  {
    id: 'pastas',
    title: 'Pastas',
    moment: 'principal',
    note: 'Pastas artesanales y opciones casuales',
    items: [
      {
        id: 'pas-carbonara',
        name: 'Espagueti a la Carbonara',
        price: 12.00,
        desc: 'Pasta al dente en salsa cremosa con tocino crocante y parmesano.'
      },
      {
        id: 'pas-frutos-mar',
        name: 'Espagueti Frutos del Mar',
        price: 17.00,
        desc: 'Espagueti salteado con mariscos seleccionados del día.'
      },
      {
        id: 'pas-hongos-camarones',
        name: 'Espagueti Hongos y Camarones',
        price: 15.00,
        desc: 'Combinación de camarones y champiñones en salsa cremosa.'
      },
      {
        id: 'pas-salchipapas',
        name: 'Salchipapas',
        price: 5.00,
        desc: 'Papas fritas crocantes con salchichas doradas.'
      },
      {
        id: 'pas-nuggets',
        name: 'Nuggets con Papas Fritas',
        price: 7.00,
        desc: 'Crujientes nuggets de pollo acompañados de papas fritas.'
      },
      {
        id: 'pas-hamburguesa',
        name: 'Hamburguesa Tradicional',
        price: 8.00,
        desc: 'Carne a la parrilla con queso, vegetales frescos y papas fritas.'
      }
    ]
  },
  {
    id: 'limonadas',
    title: 'Limonadas',
    moment: 'refrescos',
    note: 'Preparadas al instante',
    items: [
      { id: 'lim-imperial', name: 'Limonada Imperial', price: 2.50, desc: 'Limonada clásica frappé refrescante.' },
      { id: 'lim-brasilera', name: 'Limonada Brasilera', price: 2.50, desc: 'Cremosa limonada frappé con toque dulce.' },
      { id: 'lim-coco', name: 'Limonada de Coco', price: 3.50, desc: 'Leche de coco cremosa y limón recién exprimido.' },
      { id: 'lim-esmeraldena', name: 'Limonada Esmeraldeña', price: 2.50, desc: 'Receta cítrica con el sello tradicional de nuestra tierra.' },
      { id: 'lim-levanta-muertos', name: 'Limonada Levanta Muertos', price: 3.50, desc: 'Combinación cítrica intensa y revitalizante.' },
      { id: 'lim-tropical', name: 'Limonada Tropical', price: 2.50, desc: 'Limonada aromatizada con notas de frutas tropicales.' }
    ]
  },
  {
    id: 'jugos-batidos',
    title: 'Jugos y Batidos',
    moment: 'refrescos',
    note: 'Fruta natural en agua o leche',
    items: [
      { id: 'jug-banano', name: 'Banano', price: 3.50, desc: 'Batido cremoso de banano natural.' },
      { id: 'jug-coco', name: 'Coco', price: 4.50, desc: 'Preparado con pulpa y leche de coco fresco.' },
      { id: 'jug-fresa', name: 'Fresa', price: 3.50, desc: 'Jugo o batido de fresas frescas.' },
      { id: 'jug-naranja', name: 'Naranja', price: 3.00, desc: 'Jugo de naranja recién exprimido.' },
      { id: 'jug-mora', name: 'Mora', price: 3.50, desc: 'Jugo o batido de mora silvestre.' },
      { id: 'jug-naranjilla', name: 'Naranjilla', price: 3.50, desc: 'Refrescante jugo cítrico de naranjilla.' },
      { id: 'jug-oreo', name: 'Oreo', price: 3.50, desc: 'Batido helado con galletas Oreo.' }
    ]
  },
  {
    id: 'postres',
    title: 'Postre',
    moment: 'refrescos',
    note: 'El cierre dulce',
    items: [
      { id: 'pos-banana-split', name: 'Banana Split', price: 5.00, desc: 'Banano con tres sabores de helado y crema.' },
      { id: 'pos-pina-hawaiana', name: 'Piña Hawaiana', price: 5.00, desc: 'Delicia tropical de piña con crema.' },
      { id: 'pos-ensalada-frutas', name: 'Ensalada de Frutas Natural', price: 5.50, desc: 'Mix de frutas frescas de la temporada.' },
      { id: 'pos-copa-helado', name: 'Copa de Helado', price: 4.00, desc: 'Helado cremoso servido en copa.' },
      { id: 'pos-flan-coco', name: 'Flan de Coco', price: 4.00, desc: 'Postre tradicional de textura sedosa con coco esmeraldeño.' },
      { id: 'pos-cheesecake', name: 'Cheesecake', price: 5.50, desc: 'Tarta cremosa de queso con reducción frutal.' }
    ]
  },
  {
    id: 'cocteles',
    title: 'Cocteles',
    moment: 'bar',
    note: 'Clásicos internacionales y creaciones de la casa',
    items: [
      {
        id: 'coc-aperol',
        name: 'Aperol Spritz',
        price: 7.50,
        image: 'fotos/hd/aperol-spritz-hd.jpg',
        desc: 'Aperol, espumante seco, soda y rodaja de naranja.'
      },
      { id: 'coc-bloody', name: 'Bloody Mary', price: 8.00, desc: 'Vodka, jugo de tomate especiado, limón sutil y salsa inglesa.' },
      { id: 'coc-caipirina', name: 'Caipiriña', price: 7.50, desc: 'Cachaça macerada con limones sutiles y azúcar.' },
      { id: 'coc-clavo', name: 'Clavo Oxidado', price: 7.50, desc: 'Whisky escocés y licor Drambuie en las rocas.' },
      {
        id: 'coc-cocoloco',
        name: 'Coco Loco',
        price: 7.50,
        desc: 'Mezcla tropical insignia con crema de coco esmeraldeño y cítricos.'
      },
      { id: 'coc-cubalibre', name: 'Cuba Libre', price: 7.50, desc: 'Ron añejo, cola y limón recién exprimido.' },
      { id: 'coc-daiquiri', name: 'Daiquiri', price: 8.00, desc: 'Ron blanco, limón fresco y jarabe simple.' },
      { id: 'coc-expreso', name: 'Expreso Martiny', price: 10.00, desc: 'Vodka, licor de café y espresso recién extraído.' },
      { id: 'coc-fresa-amorosa', name: 'Fresa Amorosa', price: 8.00, desc: 'Coctel de fresas frescas maceradas con notas cítricas.' },
      { id: 'coc-gintonic', name: 'Gin Tonic', price: 7.50, desc: 'Ginebra botánica, agua tónica y piel de cítricos.' },
      { id: 'coc-ironman', name: 'Iron Man', price: 10.00, desc: 'Creación intensa de la barra Ébano.' },
      { id: 'coc-laguna-azul', name: 'Laguna Azul', price: 7.00, desc: 'Vodka, Blue Curaçao y limonada refrescante.' },
      { id: 'coc-menta-playera', name: 'Menta Playera', price: 7.50, desc: 'Licor de menta, hielo picado y brisa cítrica.' }
    ]
  }
];

/* ==========================================================================
   MODERN WEB GUIDANCE UTILITIES & FALLBACKS
   ========================================================================== */
const UserInvalidFallback = (() => {
  const dirtyState = new WeakMap();

  const updateState = (input) => {
    const isValid = input.checkValidity();
    input.classList.toggle('user-invalid-fallback', !isValid);
    input.classList.toggle('user-valid-fallback', isValid);

    if (!isValid) {
      input.setAttribute('aria-invalid', 'true');
    } else {
      input.removeAttribute('aria-invalid');
    }
  };

  const handleEvent = (event) => {
    const input = event.target;

    if (event.type === 'reset') {
      const controls = input.elements || [];
      for (const control of controls) {
        dirtyState.delete(control);
        control.classList.remove('user-invalid-fallback', 'user-valid-fallback');
        control.removeAttribute('aria-invalid');
      }
      return;
    }

    if (!input.checkValidity) return;

    if (event.type === 'input' || event.type === 'change') {
      const state = dirtyState.get(input) || { hasInteracted: false, hasBlurred: false };
      state.hasInteracted = true;
      dirtyState.set(input, state);
      if (state.hasBlurred) {
        updateState(input);
      }
    } else if (event.type === 'blur') {
      const state = dirtyState.get(input) || { hasInteracted: false, hasBlurred: false };
      state.hasBlurred = true;
      dirtyState.set(input, state);
      if (state.hasInteracted) {
        updateState(input);
      }
    }
  };

  const init = (root = document) => {
    if (CSS.supports('selector(:user-invalid)')) return;
    root.addEventListener('blur', handleEvent, true);
    root.addEventListener('input', handleEvent);
    root.addEventListener('change', handleEvent);
    root.addEventListener('reset', handleEvent, true);
  };

  return { init };
})();

const syncAria = (el) => {
  if (!el || typeof el.matches !== 'function') return;
  if (CSS.supports('selector(:user-invalid)')) {
    el.setAttribute?.('aria-invalid', el.matches(':user-invalid') ? 'true' : 'false');
  }
};

/* ==========================================================================
   STATE & APPLICATION LOGIC
   ========================================================================== */
let currentSlideIndex = 0;
let activeMoment = 'all';
let activeCategoryId = 'all';
let searchQuery = '';

function formatPrice(value) {
  return `$${value.toFixed(2)}`;
}

/* ==========================================================================
   HERO SLIDER (Editorial Style + 6s Auto-Advance + Staggered Text Reveal)
   ========================================================================== */
const HERO_AUTO_INTERVAL_MS = 6000;
let heroAutoTimer = null;
let heroSwapTimeout = null;

function restartHeroAutoTimer() {
  if (heroAutoTimer) {
    clearInterval(heroAutoTimer);
  }
  heroAutoTimer = setInterval(() => {
    setHeroSlide(currentSlideIndex + 1);
  }, HERO_AUTO_INTERVAL_MS);
}

function setHeroSlide(index) {
  currentSlideIndex = (index + HERO_SLIDES.length) % HERO_SLIDES.length;
  const slide = HERO_SLIDES[currentSlideIndex];

  const heroCopy = document.getElementById('heroCopy') || document.querySelector('.hero__copy');
  const kicker = document.getElementById('heroKicker');
  const title = document.getElementById('heroTitle');
  const highlight = document.getElementById('heroHighlight');
  const note = document.getElementById('heroNote');
  const cta = document.getElementById('heroPrimaryCta');
  const img = document.getElementById('heroSlideImg');

  if (heroSwapTimeout) {
    clearTimeout(heroSwapTimeout);
    heroSwapTimeout = null;
  }

  if (heroCopy) {
    heroCopy.classList.remove('is-entering');
    heroCopy.classList.add('is-exiting');
  }

  if (img) {
    img.classList.remove('is-animating');
    img.style.opacity = '0.28';
  }

  heroSwapTimeout = setTimeout(() => {
    if (kicker) kicker.textContent = slide.kicker;
    if (title) {
      title.innerHTML = `${slide.title} <span class="hero__title-sub" id="heroSubtitle">${slide.subtitle}</span>`;
    }
    if (highlight) highlight.textContent = slide.highlight;
    if (note) note.textContent = slide.note;
    if (cta) {
      cta.textContent = slide.ctaText;
      cta.setAttribute('href', slide.ctaHref);
    }

    if (heroCopy) {
      heroCopy.classList.remove('is-exiting');
      void heroCopy.offsetWidth;
      heroCopy.classList.add('is-entering');
    }

    if (img) {
      img.src = slide.image;
      img.alt = slide.alt;
      img.style.opacity = '1';
      requestAnimationFrame(() => {
        img.classList.add('is-animating');
      });
    }
  }, 170);

  document.querySelectorAll('.hero__dot').forEach((dot, idx) => {
    dot.classList.remove('is-active');
    if (idx === currentSlideIndex) {
      // Force reflow so the 6s progress bar restarts cleanly
      void dot.offsetWidth;
      dot.classList.add('is-active');
    }
  });

  restartHeroAutoTimer();
}

/* ==========================================================================
   INFINITE BIDIRECTIONAL PROMO SLIDER
   ========================================================================== */
const PROMO_AUTO_INTERVAL_MS = 5500;

function buildPromoSlideHTML(promo, isClone = false) {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(promo.waMessage)}`;
  const perksHtml = promo.perks
    .map((p) => `<li class="promo-card__perk">${p}</li>`)
    .join('');

  return `
    <div class="promo-slide" ${isClone ? 'aria-hidden="true"' : ''}>
      <article class="promo-card">
        <div class="promo-card__poster-wrap">
          <img
            src="${promo.image}"
            alt="${isClone ? '' : promo.alt}"
            class="promo-card__poster"
            loading="lazy"
            width="682"
            height="1024"
          >
        </div>
        <div class="promo-card__info">
          <span class="promo-card__badge">${promo.badge}</span>
          <h3 class="promo-card__title">${promo.title}</h3>
          <p class="promo-card__desc">${promo.desc}</p>
          <ul class="promo-card__perks">${perksHtml}</ul>
          <div class="promo-card__pricing">
            <span class="promo-card__price">${promo.price}<small>${promo.priceUnit}</small></span>
            <span class="promo-card__group-note">★ ${promo.groupNote}</span>
          </div>
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--sand" ${isClone ? 'tabindex="-1"' : ''}>
            ${promo.ctaText}
          </a>
        </div>
      </article>
    </div>
  `;
}

function initPromoSlider() {
  const track = document.getElementById('promoTrack');
  const viewport = document.getElementById('promoViewport');
  const prevBtn = document.getElementById('promoPrevBtn');
  const nextBtn = document.getElementById('promoNextBtn');
  const dots = document.querySelectorAll('.promo-slider__dot');
  if (!track || !viewport || PROMO_SLIDES.length === 0) return;

  const total = PROMO_SLIDES.length;
  // Track layout: [clone(last), slide(0), slide(1), ..., clone(0)]
  const firstClone = buildPromoSlideHTML(PROMO_SLIDES[0], true);
  const lastClone = buildPromoSlideHTML(PROMO_SLIDES[total - 1], true);
  const realSlides = PROMO_SLIDES.map((p) => buildPromoSlideHTML(p, false)).join('');

  track.innerHTML = lastClone + realSlides + firstClone;

  let trackIndex = 1; // Starts at first real slide
  let isTransitioning = false;
  let autoTimer = null;

  const updateDots = () => {
    const realIdx = ((trackIndex - 1) % total + total) % total;
    dots.forEach((dot, idx) => {
      dot.classList.toggle('is-active', idx === realIdx);
    });
  };

  const setPosition = (instant = false) => {
    if (instant) {
      track.classList.add('is-instant');
    } else {
      track.classList.remove('is-instant');
    }
    track.style.transform = `translate3d(-${trackIndex * 100}%, 0, 0)`;
    if (instant) {
      // Force reflow so subsequent transitions animate cleanly
      void track.offsetWidth;
      track.classList.remove('is-instant');
    }
    updateDots();
  };

  const snapIfClone = () => {
    if (trackIndex <= 0) {
      trackIndex = total;
      setPosition(true);
    } else if (trackIndex > total) {
      trackIndex = 1;
      setPosition(true);
    }
  };

  const moveNext = () => {
    if (isTransitioning) {
      snapIfClone();
    }
    isTransitioning = true;
    trackIndex += 1;
    setPosition(false);
  };

  const movePrev = () => {
    if (isTransitioning) {
      snapIfClone();
    }
    isTransitioning = true;
    trackIndex -= 1;
    setPosition(false);
  };

  const restartAuto = () => {
    if (autoTimer) clearInterval(autoTimer);
    autoTimer = setInterval(() => {
      moveNext();
    }, PROMO_AUTO_INTERVAL_MS);
  };

  track.addEventListener('transitionend', (e) => {
    if (e.target !== track) return;
    isTransitioning = false;
    snapIfClone();
  });

  prevBtn?.addEventListener('click', () => {
    movePrev();
    restartAuto();
  });

  nextBtn?.addEventListener('click', () => {
    moveNext();
    restartAuto();
  });

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const targetIdx = parseInt(dot.getAttribute('data-promo-slide') || '0', 10);
      if (isTransitioning) snapIfClone();
      isTransitioning = true;
      trackIndex = targetIdx + 1;
      setPosition(false);
      restartAuto();
    });
  });

  // Pointer / Touch Drag Support (Swipe left or right)
  let startX = 0;
  let deltaX = 0;
  let isDragging = false;

  viewport.addEventListener('pointerdown', (e) => {
    if (e.target.closest('a, button')) return;
    if (isTransitioning) {
      isTransitioning = false;
      snapIfClone();
    }
    isDragging = true;
    startX = e.clientX;
    deltaX = 0;
    track.classList.add('is-instant');
    if (autoTimer) clearInterval(autoTimer);
    viewport.setPointerCapture?.(e.pointerId);
  });

  viewport.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    deltaX = e.clientX - startX;
    const width = viewport.clientWidth || 1;
    const offsetPct = -(trackIndex * 100) + (deltaX / width) * 100;
    track.style.transform = `translate3d(${offsetPct}%, 0, 0)`;
  });

  const endDrag = () => {
    if (!isDragging) return;
    isDragging = false;
    track.classList.remove('is-instant');
    const width = viewport.clientWidth || 1;
    const threshold = Math.min(70, width * 0.14);

    if (deltaX < -threshold) {
      moveNext();
    } else if (deltaX > threshold) {
      movePrev();
    } else {
      isTransitioning = true;
      setPosition(false);
    }
    restartAuto();
  };

  viewport.addEventListener('pointerup', endDrag);
  viewport.addEventListener('pointercancel', endDrag);

  // Pause auto-slide on hover
  const sliderEl = document.getElementById('promoSlider');
  sliderEl?.addEventListener('mouseenter', () => {
    if (autoTimer) clearInterval(autoTimer);
  });
  sliderEl?.addEventListener('mouseleave', () => {
    if (!isDragging) restartAuto();
  });

  // Initialize starting position and start infinite auto-loop
  setPosition(true);
  restartAuto();
}

/* ==========================================================================
   RENDER FEATURED & MENU
   ========================================================================== */
function renderFeaturedShowcase() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;

  const featuredList = [];
  MENU_CATEGORIES.forEach((cat) => {
    cat.items.forEach((item) => {
      if (item.featured) {
        featuredList.push({ item, categoryTitle: cat.title });
      }
    });
  });

  grid.innerHTML = featuredList
    .map(
      ({ item, categoryTitle }) => `
      <article class="featured-card">
        <div class="featured-card__img-wrap">
          <img
            src="${item.image}"
            alt="${item.name} - ${categoryTitle}"
            class="featured-card__img"
            style="object-position: ${item.imgPosition || 'center'};"
            loading="lazy"
            width="640"
            height="420"
          >
        </div>
        <div class="featured-card__head">
          <h3 class="featured-card__title">${item.name}</h3>
          <span class="featured-card__price">${formatPrice(item.price)}</span>
        </div>
        <p class="featured-card__desc">${item.desc}</p>
      </article>
    `
    )
    .join('');
}

function renderCategoryPills() {
  const container = document.getElementById('categoryPills');
  if (!container) return;

  const visibleCategories = MENU_CATEGORIES.filter(
    (cat) => activeMoment === 'all' || cat.moment === activeMoment
  );

  const allPill = `
    <button type="button" class="cat-pill ${activeCategoryId === 'all' ? 'is-active' : ''}" data-category-id="all">
      Todas
    </button>
  `;

  const pillsHtml = visibleCategories
    .map(
      (cat) => `
      <button type="button" class="cat-pill ${activeCategoryId === cat.id ? 'is-active' : ''}" data-category-id="${cat.id}">
        ${cat.title}
      </button>
    `
    )
    .join('');

  container.innerHTML = allPill + pillsHtml;
}

function renderMenu() {
  const container = document.getElementById('menuContainer');
  if (!container) return;

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredCategories = MENU_CATEGORIES.filter((cat) => {
    if (activeMoment !== 'all' && cat.moment !== activeMoment) return false;
    if (activeCategoryId !== 'all' && cat.id !== activeCategoryId) return false;
    return true;
  })
    .map((cat) => {
      const matchingItems = cat.items.filter((item) => {
        if (!normalizedQuery) return true;
        return (
          item.name.toLowerCase().includes(normalizedQuery) ||
          item.desc.toLowerCase().includes(normalizedQuery) ||
          cat.title.toLowerCase().includes(normalizedQuery)
        );
      });
      return { ...cat, items: matchingItems };
    })
    .filter((cat) => cat.items.length > 0);

  if (filteredCategories.length === 0) {
    container.innerHTML = `
      <div class="empty-menu-state">
        <p>No encontramos resultados para "${searchQuery}".</p>
        <button type="button" class="btn btn--ghost" id="resetMenuFiltersBtn" style="margin-top: 1rem;">
          VER TODA LA CARTA
        </button>
      </div>
    `;
    document.getElementById('resetMenuFiltersBtn')?.addEventListener('click', () => {
      activeMoment = 'all';
      activeCategoryId = 'all';
      searchQuery = '';
      const searchInput = document.getElementById('menuSearchInput');
      if (searchInput) searchInput.value = '';
      document.getElementById('clearSearchBtn')?.setAttribute('hidden', '');
      updateMomentTabsUI();
      renderCategoryPills();
      renderMenu();
    });
    return;
  }

  container.innerHTML = filteredCategories
    .map(
      (cat) => `
      <section class="menu-category-block" aria-labelledby="cat-title-${cat.id}">
        <div class="menu-category-header">
          <h3 id="cat-title-${cat.id}" class="menu-category-title">${cat.title}</h3>
          ${cat.note ? `<p class="menu-category-note">${cat.note}</p>` : ''}
        </div>
        <div class="menu-items-grid">
          ${cat.items
            .map(
              (item) => `
                <article class="menu-item-card">
                  <div class="menu-item-card__info">
                    <h4 class="menu-item-card__name">
                      ${item.name}
                    </h4>
                    <p class="menu-item-card__desc">${item.desc}</p>
                  </div>
                  <div class="menu-item-card__right">
                    <span class="menu-item-card__price">${formatPrice(item.price)}</span>
                  </div>
                </article>
              `
            )
            .join('')}
        </div>
      </section>
    `
    )
    .join('');

  window.dispatchEvent(new Event('scroll'));
}

function updateMomentTabsUI() {
  document.querySelectorAll('.moment-tab').forEach((btn) => {
    const isMatch = btn.getAttribute('data-moment') === activeMoment;
    btn.classList.toggle('is-active', isMatch);
    btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
  });
}

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const dateInput = document.getElementById('resDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
  }

  // Header scroll background transition
  const headerEl = document.getElementById('header');
  window.addEventListener(
    'scroll',
    () => {
      headerEl?.classList.toggle('is-scrolled', window.scrollY > 40);
    },
    { passive: true }
  );

  // Hero slider controls + 10s automatic progression
  const initialHeroImg = document.getElementById('heroSlideImg');
  if (initialHeroImg) {
    requestAnimationFrame(() => {
      initialHeroImg.classList.add('is-animating');
    });
  }
  restartHeroAutoTimer();

  document.getElementById('heroPrevBtn')?.addEventListener('click', () => {
    setHeroSlide(currentSlideIndex - 1);
  });
  document.getElementById('heroNextBtn')?.addEventListener('click', () => {
    setHeroSlide(currentSlideIndex + 1);
  });
  document.querySelectorAll('.hero__dot').forEach((dot) => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-slide') || '0', 10);
      setHeroSlide(idx);
    });
  });

  initPromoSlider();
  renderFeaturedShowcase();
  renderCategoryPills();
  renderMenu();

  document.querySelectorAll('.moment-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      activeMoment = tab.getAttribute('data-moment') || 'all';
      activeCategoryId = 'all';
      updateMomentTabsUI();
      renderCategoryPills();
      renderMenu();
    });
  });

  document.getElementById('categoryPills')?.addEventListener('click', (e) => {
    const pill = e.target.closest('[data-category-id]');
    if (!pill) return;
    activeCategoryId = pill.getAttribute('data-category-id') || 'all';
    renderCategoryPills();
    renderMenu();
  });

  const searchInput = document.getElementById('menuSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  searchInput?.addEventListener('input', () => {
    searchQuery = searchInput.value;
    if (clearSearchBtn) {
      if (searchQuery.trim().length > 0) {
        clearSearchBtn.removeAttribute('hidden');
      } else {
        clearSearchBtn.setAttribute('hidden', '');
      }
    }
    renderMenu();
  });

  clearSearchBtn?.addEventListener('click', () => {
    searchQuery = '';
    if (searchInput) searchInput.value = '';
    clearSearchBtn.setAttribute('hidden', '');
    renderMenu();
  });

  document.addEventListener('click', (e) => {
    const jumpTrigger = e.target.closest('[data-jump-category]');
    if (jumpTrigger) {
      const targetCat = jumpTrigger.getAttribute('data-jump-category');
      activeMoment = 'all';
      activeCategoryId = targetCat;
      updateMomentTabsUI();
      renderCategoryPills();
      renderMenu();
      document.getElementById('carta')?.scrollIntoView({ behavior: 'smooth' });
    }
  });

  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  menuToggle?.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    if (mobileNav) {
      if (isExpanded) {
        mobileNav.setAttribute('hidden', '');
      } else {
        mobileNav.removeAttribute('hidden');
      }
    }
  });

  mobileNav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle?.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('hidden', '');
    });
  });

  const resForm = document.getElementById('reservationForm');
  if (resForm) {
    UserInvalidFallback.init(resForm);

    document.addEventListener('blur', (e) => syncAria(e.target), true);
    document.addEventListener('input', (e) => {
      if (e.target.hasAttribute?.('aria-invalid')) syncAria(e.target);
    });

    resForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!resForm.checkValidity()) {
        const firstInvalid = resForm.querySelector(':invalid');
        if (firstInvalid) {
          firstInvalid.focus();
          firstInvalid.classList.add('user-invalid-fallback');
          firstInvalid.setAttribute('aria-invalid', 'true');
        }
        return;
      }

      const name = document.getElementById('guestName').value.trim();
      const phone = document.getElementById('guestPhone').value.trim();
      const count = document.getElementById('guestCount').value;
      const date = document.getElementById('resDate').value;
      const time = document.getElementById('resTime').value;
      const notes = document.getElementById('resNotes').value.trim();

      const lines = [
        `Hola *Ébano Kitchen & Bar*, quisiera confirmar una *Reserva de Mesa*:`,
        ``,
        `• *Nombre:* ${name}`,
        `• *Teléfono:* ${phone}`,
        `• *Personas:* ${count}`,
        `• *Fecha:* ${date}`,
        `• *Horario:* ${time}`
      ];

      if (notes) {
        lines.push(`• *Notas:* ${notes}`);
      }

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
      window.open(whatsappUrl, '_blank', 'noopener');
    });
  }

  // Live Opening Hours Status & Today Row Highlight (Tonsupa / America/Guayaquil)
  const updateLiveHoursStatus = () => {
    const schedule = {
      0: { open: 8.0, close: 19.5, label: '8:00 AM – 7:30 PM' }, // Domingo
      1: { open: 8.0, close: 19.5, label: '8:00 AM – 7:30 PM' }, // Lunes
      2: null, // Martes (Cerrado)
      3: null, // Miércoles (Cerrado)
      4: { open: 8.0, close: 19.5, label: '8:00 AM – 7:30 PM' }, // Jueves
      5: { open: 8.0, close: 19.5, label: '8:00 AM – 7:30 PM' }, // Viernes
      6: { open: 8.0, close: 19.5, label: '8:00 AM – 7:30 PM' }  // Sábado
    };

    const now = new Date();
    const ecDate = new Date(now.toLocaleString('en-US', { timeZone: 'America/Guayaquil' }));
    const dayIdx = ecDate.getDay();
    const decimalHour = ecDate.getHours() + ecDate.getMinutes() / 60;

    document.querySelectorAll('#hoursList .hours-row').forEach((row) => {
      const rowDay = parseInt(row.getAttribute('data-day') || '-1', 10);
      const isToday = rowDay === dayIdx;
      row.classList.toggle('is-today', isToday);
      const badge = row.querySelector('.hours-row__today-badge');
      if (badge) {
        if (isToday) badge.removeAttribute('hidden');
        else badge.setAttribute('hidden', '');
      }
    });
  };

  updateLiveHoursStatus();

  // Dynamic Scroll-Driven Section & Block Rise Engine
  // Cada vez que bajas, el siguiente rectángulo sube visiblemente sobre el anterior
  const allRectangles = Array.from(
    document.querySelectorAll(
      '.hero, .promos-section, .featured, .menu-section, .hours-section, .reservations, .map-section'
    )
  );

  let rafPending = false;

  const updateScrollAnimations = () => {
    rafPending = false;
    const vh = window.innerHeight || 800;

    allRectangles.forEach((sec, idx) => {
      if (idx === 0) return; // Hero is the base layer

      const rect = sec.getBoundingClientRect();
      // Progress from 0 (when section top edge is at 105% of viewport height)
      // to 1 (when section top edge reaches 28% from top of viewport)
      const startY = vh * 1.05;
      const endY = vh * 0.28;
      const raw = (startY - rect.top) / (startY - endY);
      const progress = Math.max(0, Math.min(1, raw));

      // Incoming rectangle slides up 165px as you scroll down
      const slideUpPx = (1 - progress) * 165;
      sec.style.transform = `translate3d(0, ${slideUpPx.toFixed(1)}px, 0)`;

      // Inner content rises with extra depth and fade/scale
      const inner = sec.querySelector(':scope > .container');
      if (inner) {
        const innerY = (1 - progress) * 85;
        const scale = 0.94 + 0.06 * progress;
        const opacity = 0.12 + 0.88 * progress;
        inner.style.transform = `translate3d(0, ${innerY.toFixed(1)}px, 0) scale(${scale.toFixed(3)})`;
        inner.style.opacity = opacity.toFixed(3);
      }

      // Previous rectangle subtly recedes as the new rectangle rises over its bottom edge
      const prevSec = allRectangles[idx - 1];
      if (prevSec && progress > 0 && progress < 1) {
        const prevContainer = prevSec.querySelector(':scope > .container, :scope > .hero__grid');
        if (prevContainer) {
          const pushBackY = -progress * 42;
          const prevScale = 1 - progress * 0.035;
          prevContainer.style.transform = `translate3d(0, ${pushBackY.toFixed(1)}px, 0) scale(${prevScale.toFixed(3)})`;
        }
      } else if (prevSec && progress === 0) {
        const prevContainer = prevSec.querySelector(':scope > .container, :scope > .hero__grid');
        if (prevContainer && idx === 1) {
          prevContainer.style.transform = 'translate3d(0, 0, 0) scale(1)';
        }
      }
    });

    // Also animate individual cards and category blocks inside tall sections as you scroll down
    const subBlocks = document.querySelectorAll('.featured-card, .menu-category-block');
    subBlocks.forEach((block) => {
      const r = block.getBoundingClientRect();
      const rawBlock = (vh * 1.02 - r.top) / (vh * 0.62);
      const p = Math.max(0, Math.min(1, rawBlock));
      const y = (1 - p) * 70;
      const s = 0.95 + 0.05 * p;
      const o = 0.15 + 0.85 * p;
      block.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0) scale(${s.toFixed(3)})`;
      block.style.opacity = o.toFixed(3);
    });
  };

  const requestScrollUpdate = () => {
    if (!rafPending) {
      rafPending = true;
      window.requestAnimationFrame(updateScrollAnimations);
    }
  };

  window.addEventListener('scroll', requestScrollUpdate, { passive: true });
  window.addEventListener('resize', requestScrollUpdate, { passive: true });
  updateScrollAnimations();
});
