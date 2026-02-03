import type { Translations, Language } from './types';

export const LANGUAGES: Language[] = [
  { code: 'ES', label: 'Español', dir: 'ltr' },
  { code: 'EN', label: 'English', dir: 'ltr' },
  { code: 'RU', label: 'Русский', dir: 'ltr' },
  { code: 'CN', label: '中文', dir: 'ltr' },
  { code: 'AE', label: 'العربية', dir: 'rtl' }
];

export const TRANSLATIONS: Translations = {
    ES: {
      nav: { brand_sub: 'SISTEMAS ARTEFACTORIA', collection: 'Colección', jewelry: 'Alta Joyería', auth: 'Autenticidad', contact: 'Contacto', login: 'Acceso Cliente' },
      hero: { label: 'Ingeniería Cerámica', title_1: 'Datos que certifican', title_2: 'la materia.', desc: 'No vendemos magia. Vendemos el resultado irreversible de una ecuación térmica. Seleccione una pieza para acceder a su registro técnico y precio de mercado.', scroll: 'Deslizar para explorar' },
      gallery: { title: 'Colección Activa', subtitle: 'Lote de Producción 2026-A', synced: 'Datos Sincronizados', view_card: 'Analizar Ficha Técnica' },
      jewelry: { title: 'Joyería Escultórica', subtitle: 'Piezas únicas que iluminan la piel. Diseñadas para ser deseadas.', label: 'Edición Limitada', view_card: 'Ver Detalles' },
      verify: { title: 'Bitácora de Autenticidad', subtitle: 'Acceso a la base de datos de Artefactoria. Verifique el origen y propiedad de su activo.', placeholder: 'INTRODUCIR SERIAL ID (EJ: BIO-26-001)', btn_search: 'Buscando...', btn_verify: 'Verificar', success: 'Código Validado', owner: 'Propiedad de', reset: 'Nueva Búsqueda' },
      card: { ref: 'REF', mass_loss: 'Δ Masa (Merma)', raw: 'Crudo', fired: 'Final', temp: 'Temp. Pico', duration: 'Duración', clay: 'Barro Base', glaze: 'Esmalte', atmosphere: 'Atmósfera', note: 'Esencia de la Pieza', cta: 'Adquirir Activo', status_avail: 'Disponible', status_res: 'Reservado', fitting: 'Herraje', sold: 'Vendido' },
      cart: { title: 'Manifiesto de Adquisición', empty: 'Su manifiesto está vacío.', total: 'Total Estimado', checkout: 'Proceder al Pago Seguro', remove: 'Eliminar' },
      footer: { text: 'Infraestructura digital por Artefactoria. Soberanía material desde 2026.', col1: 'La Ingeniera', col2: 'El Taller', col3: 'Legal', rights: '© 2026 Bioramica. Todos los derechos reservados.' }
    },
    EN: {
      nav: { brand_sub: 'ARTEFACTORIA SYSTEMS', collection: 'Collection', jewelry: 'High Jewelry', auth: 'Authenticity', contact: 'Contact', login: 'Client Access' },
      hero: { label: 'Ceramic Engineering', title_1: 'Data verifying', title_2: 'the matter.', desc: 'We do not sell magic. We sell the irreversible result of a thermal equation. Select a piece to access its technical record and market price.', scroll: 'Scroll to explore' },
      gallery: { title: 'Active Collection', subtitle: 'Production Batch 2026-A', synced: 'Data Synced', view_card: 'Analyze Technical Sheet' },
      jewelry: { title: 'Sculptural Jewelry', subtitle: 'Unique pieces that illuminate the skin. Designed to be desired.', label: 'Limited Edition', view_card: 'View Details' },
      verify: { title: 'Authenticity Log', subtitle: 'Access to Artefactoria database. Verify the origin and ownership of your asset.', placeholder: 'ENTER SERIAL ID (EX: BIO-26-001)', btn_search: 'Searching...', btn_verify: 'Verify', success: 'Code Validated', owner: 'Owned by', reset: 'New Search' },
      card: { ref: 'REF', mass_loss: 'Δ Mass (Shrinkage)', raw: 'Raw', fired: 'Fired', temp: 'Peak Temp', duration: 'Duration', clay: 'Base Clay', glaze: 'Glaze', atmosphere: 'Atmosphere', note: 'Essence of the Piece', cta: 'Acquire Asset', status_avail: 'Available', status_res: 'Reserved', fitting: 'Fitting', sold: 'Sold' },
      cart: { title: 'Acquisition Manifest', empty: 'Your manifest is empty.', total: 'Estimated Total', checkout: 'Proceed to Secure Payment', remove: 'Remove' },
      footer: { text: 'Digital infrastructure by Artefactoria. Material sovereignty since 2026.', col1: 'The Engineer', col2: 'The Workshop', col3: 'Legal', rights: '© 2026 Bioramica. All rights reserved.' }
    },
    RU: {
      nav: { brand_sub: 'СИСТЕМЫ ARTEFACTORIA', collection: 'Коллекция', jewelry: 'Высокое ювелирное искусство', auth: 'Подлинность', contact: 'Контакты', login: 'Вход' },
      hero: { label: 'Керамическая инженерия', title_1: 'Данные, подтверждающие', title_2: 'материю.', desc: 'Мы не продаем магию. Мы продаем необратимый результат теплового уравнения.', scroll: 'Прокрутите' },
      gallery: { title: 'Активная коллекция', subtitle: 'Партия 2026-A', synced: 'Синхронизировано', view_card: 'Анализ' },
      jewelry: { title: 'Скульптурные украшения', subtitle: 'Уникальные изделия.', label: 'Лимитированная серия', view_card: 'Подробнее' },
      verify: { title: 'Журнал', subtitle: 'Проверка подлинности.', placeholder: 'SERIAL ID', btn_search: 'Поиск...', btn_verify: 'Проверить', success: 'Код подтвержден', owner: 'Владелец', reset: 'Новый поиск' },
      card: { ref: 'REF', mass_loss: 'Усадка', raw: 'Сырой', fired: 'Обжиг', temp: 'Пик', duration: 'Время', clay: 'Глина', glaze: 'Глазурь', atmosphere: 'Атмосфера', note: 'Суть', cta: 'Приобрести актив', status_avail: 'Доступно', status_res: 'Резерв', fitting: 'Фурнитура', sold: 'Продано' },
      cart: { title: 'Корзина покупок', empty: 'Ваша корзина пуста.', total: 'Итого', checkout: 'Оформить заказ', remove: 'Удалить' },
      footer: { text: 'Artefactoria 2026.', col1: 'Инженер', col2: 'Мастерская', col3: 'Инфо', rights: '© 2026 Bioramica.' }
    },
    CN: {
      nav: { brand_sub: 'ARTEFACTORIA 系统', collection: '系列', jewelry: '高级珠宝', auth: '真伪验证', contact: '联系', login: '登录' },
      hero: { label: '陶瓷工程', title_1: '验证物质', title_2: '的数据。', desc: '我们出售热方程的不可逆结果。', scroll: '探索' },
      gallery: { title: '当前系列', subtitle: '批次 2026-A', synced: '已同步', view_card: '分析' },
      jewelry: { title: '雕塑珠宝', subtitle: '独特作品。', label: '限量版', view_card: '详情' },
      verify: { title: '真伪日志', subtitle: '验证资产。', placeholder: '序列号', btn_search: '搜索...', btn_verify: '验证', success: '验证成功', owner: '拥有者', reset: '重置' },
      card: { ref: '参考', mass_loss: '收缩', raw: '生坯', fired: '烧制', temp: '温度', duration: '时间', clay: '粘土', glaze: '釉料', atmosphere: '气氛', note: '精髓', cta: '获取资产', status_avail: '可用', status_res: '预订', fitting: '配件', sold: '已售' },
      cart: { title: '收购清单', empty: '清单为空。', total: '总计', checkout: '安全支付', remove: '移除' },
      footer: { text: 'Artefactoria 2026.', col1: '工程师', col2: '工作室', col3: '法律', rights: '保留所有权利。' }
    },
    AE: {
      nav: { brand_sub: 'نظم أرتيفاكتوريا', collection: 'المجموعة', jewelry: 'مجوهرات راقية', auth: 'المصادقة', contact: 'اتصل', login: 'دخول' },
      hero: { label: 'هندسة السيراميك', title_1: 'البيانات توثق', title_2: 'المادة.', desc: 'نبيع النتيجة الحتمية لمعادلة حرارية.', scroll: 'استكشف' },
      gallery: { title: 'المجموعة النشطة', subtitle: 'دفعة 2026-A', synced: 'مزامنة', view_card: 'تحليل' },
      jewelry: { title: 'مجوهرات نحتية', subtitle: 'قطع فريدة.', label: 'إصدار محدود', view_card: 'تفاصيل' },
      verify: { title: 'سجل الأصالة', subtitle: 'تحقق من الملكية.', placeholder: 'الرقم التسلسلي', btn_search: 'بحث...', btn_verify: 'تحقق', success: 'مؤكد', owner: 'المالك', reset: 'بحث جديد' },
      card: { ref: 'مرجع', mass_loss: 'انكماش', raw: 'خام', fired: 'نهائي', temp: 'حرارة', duration: 'مدة', clay: 'طين', glaze: 'طلاء', atmosphere: 'جو', note: 'جوهر', cta: 'اقتناء الأصل', status_avail: 'متاح', status_res: 'محجوز', fitting: 'تركيب', sold: 'مباع' },
      cart: { title: 'بيان الاقتناء', empty: 'البيان فارغ.', total: 'المجموع', checkout: 'الدفع الآمن', remove: 'إزالة' },
      footer: { text: 'أرتيفاكتوريا 2026.', col1: 'المهندسة', col2: 'الورشة', col3: 'قانوني', rights: 'حقوق محفوظة.' }
    }
  };
