import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "te";

const productText: Record<string, { name: string; desc: string }> = {
  "Groundnut Oil": { name: "వేరుశెనగ నూనె", desc: "రోజూ వంటకు, చల్లగా ఆడించింది" },
  "Coconut Oil": { name: "కొబ్బరి నూనె", desc: "గానుగ నూనె, వంటకు మరియు జుట్టుకు" },
  "Sesame Oil": { name: "నువ్వుల నూనె", desc: "చెక్కు నువ్వుల నూనె" },
  "Mustard Oil": { name: "ఆవాల నూనె", desc: "కాచీ ఘానీ, వంటకు మరియు పచ్చళ్లకు" },
  "Castor Oil": { name: "ఆముదం", desc: "చల్లగా ఆడించింది, ఇంటి అవసరాలకు" },
  "Cow Ghee": { name: "ఆవు నెయ్యి", desc: "బిలోనా పద్ధతి, A2 పాలు" },
"Buffalo Ghee": { name: "గేదె నెయ్యి", desc: "చిక్కని వాసన" },
  "Mango Pickle": { name: "మామిడికాయ పచ్చడి", desc: "కారం పచ్చి మామిడి, ఎండలో ఆరేసింది" },
  "Lemon Pickle": { name: "నిమ్మకాయ పచ్చడి", desc: "పులుపు, పాతది" },
  "Gongura Pickle": { name: "గోంగూర పచ్చడి", desc: "ఆంధ్ర గోంగూర పచ్చడి" },
  "Garlic Pickle": { name: "వెల్లుల్లి పచ్చడి", desc: "నువ్వుల నూనెలో వెల్లుల్లి" },
};

const copy = {
  en: {
    announcement: "Ask on WhatsApp for 5 litre tin prices.",
    city: "Vizianagaram",
    heroTitle1: "Sri Aditya",
    heroTitle2: "Natural Oils",
    heroLine: "Cold-pressed oils, farm ghee, and pickles",
    heroBody: "Coconut, sesame, groundnut, mustard, and castor — pressed the traditional way, then packed without additives.",
    seeProducts: "See our products",
    whatsAppUs: "WhatsApp us",
    whatsApp: "WhatsApp",
    call: "Call",
    nav: [
      { id: "home", label: "Home" },
      { id: "products", label: "Products" },
      { id: "about", label: "About" },
      { id: "contact", label: "Contact" },
    ],
    facts: [
      { title: "Cold-pressed", detail: "Wood press and kachi ghani" },
      { title: "No chemicals", detail: "Nothing added after the press" },
      { title: "Local delivery", detail: "Vizianagaram and courier" },
      { title: "UPI or cash", detail: "We confirm the total first" },
    ],
    whichTitle: "Which oil",
    whichBody: "A short guide to the oils we keep. Ghee and pickles are just below, in the full list.",
    oils: [
      { id: "groundnut", name: "Groundnut", use: "Everyday cooking" },
      { id: "coconut", name: "Coconut", use: "Cooking and hair" },
      { id: "sesame", name: "Sesame", use: "Traditional gingelly oil" },
      { id: "mustard", name: "Mustard", use: "Indian cooking and pickles" },
      { id: "castor", name: "Castor", use: "Traditional household use" },
    ],
    bestsellers: "Bestsellers",
    bestsellersBody: "The four people ask for first. Prices are a guide — we confirm the total on WhatsApp.",
    fullList: "The full list",
    tabs: { oils: "Oils", ghees: "Ghee", pickles: "Pickles", powders: "Powders" },
    bulkBefore: "Need a 5 litre tin or a festival pack?",
    bulkLink: "Ask on WhatsApp",
    bulkAfter: "Prices shown are indicative.",
    inStock: "In stock",
    outOfStock: "Out of stock",
    addToOrder: "Add to order",
    unavailable: "Currently unavailable",
    aboutTitle: "How it is made",
    aboutBody: "In our Vizianagaram shop we clean, wash, and dry the seeds, then cold-press them on our own machines. The oil settles, and we bottle it with nothing added.",
    steps: [
      { title: "Clean the seeds", text: "Stones, husk, and dust are picked out before the seeds go any further." },
      { title: "Wash them", text: "We wash the seeds ourselves, so sand and dirt come off." },
      { title: "Dry them", text: "Washed seeds are dried. The press needs dry seed. We do not roast them." },
      { title: "Cold-press", text: "Our own machines press the seed. Oil runs out, and the cake stays behind." },
      { title: "Let it settle", text: "Fresh oil rests so the fine bits sink. That is the natural sediment." },
      { title: "Bottle it", text: "We fill the bottles as the oil is. Nothing is added." },
    ],
    reviewsTitle: "What people notice",
    reviews: [
      "The groundnut oil smells like a wood press. You can taste it in the food.",
      "The cow ghee is rich, and the aroma stays in the kitchen. We use it every day.",
      "The mango pickle tastes like it was made at home. No strange aftertaste.",
    ],
    regularCustomer: "Regular customer",
    googleReviews: "Read reviews on Google",
    faqTitle: "Questions",
    faqs: [
      { q: "What oils do you sell?", a: "Groundnut, coconut, sesame, mustard, and castor, pressed cold or in a wood press. We also sell ghee and pickles." },
      { q: "How do I pay?", a: "UPI or cash. Send your list on WhatsApp and we confirm the total before you pay." },
      { q: "Do you deliver?", a: "Yes, in Vizianagaram. Outside town we can send a courier. Ask on WhatsApp for 5 litre tins and festival packs." },
      { q: "How should I store the oil?", a: "Keep it in a cool, dry place, away from direct sun. A little sediment can settle. Shake the bottle before use." },
    ],
    orderTitle: "Order on WhatsApp",
    orderBody: "Send the list, or use Add to order and confirm from your basket. We reply with availability and the total.",
    chat: "Chat on WhatsApp",
    visitTitle: "Visit the shop",
    address: [
      "Near Ganesh Temple, Balaji Textile Market Road",
      "Vizianagaram Cantonment, Vizianagaram",
      "Andhra Pradesh 535003",
    ],
    hours: "Mon – Sat, 9:00 AM – 7:00 PM",
    delivery: "Delivery in Vizianagaram. Courier outside town.",
    openMaps: "Open in Google Maps",
    viewOrder: "View order",
    yourOrder: "Your order",
    emptyOrder: "Your order is empty.",
    confirmWhatsApp: "Confirm on WhatsApp",
    clearAll: "Clear all",
    remove: "Remove",
    closeOrder: "Close order",
    waInterest: "Hi! I'm interested in your oils, ghee, and pickles at Sri Aditya Natural Oils.",
    waOrder: "Hi! I'd like to order from Sri Aditya Natural Oils.",
    waBulk: "Hi! I'd like the price for a 5 litre tin from Sri Aditya Natural Oils.",
    waCartIntro: "Hi! I'd like to place an order from *Sri Aditya Natural Oils*:",
    waCartOutro: "Please confirm availability and the total.",
    qty: "Qty",
    price: "Price",
  },
  te: {
    announcement: "5 లీటర్ టిన్ ధర కోసం వాట్సాప్‌లో అడగండి.",
    city: "విజయనగరం",
    heroTitle1: "శ్రీ ఆదిత్య",
    heroTitle2: "నేచురల్ ఆయిల్స్",
    heroLine: "చల్లగా ఆడించిన నూనెలు, నెయ్యి, పచ్చళ్లు",
    heroBody: "కొబ్బరి, నువ్వులు, వేరుశెనగ, ఆవాలు, ఆముదం — పాత పద్ధతిలో ఆడించి, ఏమీ కలపకుండా నింపుతాం.",
    seeProducts: "నూనెలు చూడండి",
    whatsAppUs: "వాట్సాప్ చేయండి",
    whatsApp: "వాట్సాప్",
    call: "కాల్",
    nav: [
      { id: "home", label: "మొదలు" },
      { id: "products", label: "వస్తువులు" },
      { id: "about", label: "మా గురించి" },
      { id: "contact", label: "సంప్రదించండి" },
    ],
    facts: [
      { title: "చల్లగా ఆడించినవి", detail: "గానుగ, కాచీ ఘానీ" },
      { title: "రసాయనాలు లేవు", detail: "ఆడించాక ఏమీ కలపం" },
      { title: "ఊరికే డెలివరీ", detail: "విజయనగరం, బయట కొరియర్" },
      { title: "UPI లేదా నగదు", detail: "మొత్తం ముందు చెప్తాం" },
    ],
    whichTitle: "ఏ నూనె",
    whichBody: "మా నూనెల గురించి కొద్ది మాటలు. నెయ్యి, పచ్చళ్లు కింద పూర్తి జాబితాలో ఉన్నాయి.",
    oils: [
      { id: "groundnut", name: "వేరుశెనగ", use: "రోజూ వంటకు" },
      { id: "coconut", name: "కొబ్బరి", use: "వంటకు, జుట్టుకు" },
      { id: "sesame", name: "నువ్వులు", use: "నువ్వుల నూనె" },
      { id: "mustard", name: "ఆవాలు", use: "వంటకు, పచ్చళ్లకు" },
      { id: "castor", name: "ఆముదం", use: "ఇంటి అవసరాలకు" },
    ],
    bestsellers: "ఎక్కువగా అడిగేవి",
    bestsellersBody: "ఎక్కువమంది ముందు అడిగేవి ఈ నాలుగు. ధరలు సూచన మాత్రమే. మొత్తం వాట్సాప్‌లో చెప్తాం.",
    fullList: "పూర్తి జాబితా",
    tabs: { oils: "నూనెలు", ghees: "నెయ్యి", pickles: "పచ్చళ్లు", powders: "పొడులు" },
    bulkBefore: "5 లీటర్ టిన్ లేదా పండుగ ప్యాక్ కావాలా?",
    bulkLink: "వాట్సాప్‌లో అడగండి",
    bulkAfter: "ధరలు సూచన మాత్రమే.",
    inStock: "అందుబాటులో ఉంది",
    outOfStock: "స్టాక్ లేదు",
    addToOrder: "ఆర్డర్‌కు చేర్చండి",
    unavailable: "ఇప్పుడు లేదు",
    aboutTitle: "ఎలా చేస్తాం",
    aboutBody: "విజయనగరం దుకాణంలోనే గింజలు శుభ్రం చేసి, కడిగి, ఆరబెట్టి, మా యంత్రాల్లో చల్లగా ఆడిస్తాం. నూనె నిలిచాక, ఏమీ కలపకుండా సీసాల్లో నింపుతాం.",
    steps: [
      { title: "గింజలు శుభ్రం", text: "రాళ్లు, పొట్టు, దుమ్ము ముందే తీసేస్తాం." },
      { title: "కడగడం", text: "గింజలు మేమే కడుగుతాం. ఇసుక, మురికి పోతాయి." },
      { title: "ఆరబెట్టడం", text: "కడిగిన గింజలు ఆరతాయి. యంత్రానికి పొడి గింజ కావాలి. వేయించం." },
      { title: "చల్లగా ఆడించడం", text: "మా యంత్రాల్లోనే ఆడిస్తాం. నూనె బయటకు వస్తుంది, పిండి వేరుగా ఉంటుంది." },
      { title: "నిలవబెట్టడం", text: "తాజా నూనెను నిలవబెడతాం. సన్నని రేణువులు కింద పడతాయి." },
      { title: "సీసాల్లో నింపడం", text: "నూనె ఉన్నట్టే నింపుతాం. ఏమీ కలపం." },
    ],
    reviewsTitle: "వాళ్లు గమనించింది",
    reviews: [
      "వేరుశెనగ నూనెకు గానుగ వాసన ఉంటుంది. వంటలో రుచి తెలుస్తుంది.",
      "ఆవు నెయ్యి చిక్కగా ఉంటుంది. వాసన వంటగదిలో ఉండిపోతుంది. రోజూ వాడుతున్నాం.",
      "మామిడికాయ పచ్చడి ఇంట్లో చేసినట్టు ఉంటుంది. వేరే రుచి ఉండదు.",
    ],
    regularCustomer: "రోజూ వచ్చే కస్టమర్",
    googleReviews: "గూగుల్‌లో రివ్యూలు చూడండి",
    faqTitle: "ప్రశ్నలు",
    faqs: [
      { q: "ఏ నూనెలు అమ్ముతారు?", a: "వేరుశెనగ, కొబ్బరి, నువ్వులు, ఆవాలు, ఆముదం. చల్లగా లేదా గానుగలో ఆడించినవి. నెయ్యి, పచ్చళ్లు కూడా ఉన్నాయి." },
      { q: "ఎలా కట్టాలి?", a: "UPI లేదా నగదు. జాబితా వాట్సాప్‌లో పంపండి. కట్టే ముందు మొత్తం చెప్తాం." },
      { q: "డెలివరీ ఉందా?", a: "విజయనగరంలో ఉంది. ఊరి బయట కొరియర్ పంపించగలం. 5 లీటర్ టిన్, పండుగ ప్యాక్ కోసం వాట్సాప్‌లో అడగండి." },
      { q: "నూనెను ఎలా పెట్టుకోవాలి?", a: "చల్లని పొడి చోట, ఎండ పడనివ్వకండి. కింద కొంచెం అడుగు పడవచ్చు. వాడే ముందు బాగా కదపండి." },
    ],
    orderTitle: "వాట్సాప్‌లో ఆర్డర్ చేయండి",
    orderBody: "జాబితా పంపండి, లేదా ఆర్డర్‌కు చేర్చి బుట్ట నుంచి నిర్ధారించండి. అందుబాటు, మొత్తం మేము చెప్తాం.",
    chat: "వాట్సాప్‌లో మాట్లాడండి",
    visitTitle: "దుకాణానికి రండి",
    address: [
      "గణేష్ గుడి దగ్గర, బాలాజీ టెక్స్‌టైల్ మార్కెట్ రోడ్",
      "విజయనగరం కంటోన్మెంట్, విజయనగరం",
      "ఆంధ్రప్రదేశ్ 535003",
    ],
    hours: "సోమవారం – శనివారం, ఉదయం 9:00 – సాయంత్రం 7:00",
    delivery: "విజయనగరంలో డెలివరీ. ఊరి బయట కొరియర్.",
    openMaps: "గూగుల్ మ్యాప్స్‌లో తెరవండి",
    viewOrder: "ఆర్డర్ చూడండి",
    yourOrder: "మీ ఆర్డర్",
    emptyOrder: "మీ ఆర్డర్ ఖాళీగా ఉంది.",
    confirmWhatsApp: "వాట్సాప్‌లో నిర్ధారించండి",
    clearAll: "అన్నీ తీసేయండి",
    remove: "తీసేయండి",
    closeOrder: "మూసివేయండి",
    waInterest: "నమస్కారం! శ్రీ ఆదిత్య నేచురల్ ఆయిల్స్ నూనెలు, నెయ్యి, పచ్చళ్లు కావాలి.",
    waOrder: "నమస్కారం! శ్రీ ఆదిత్య నేచురల్ ఆయిల్స్ నుంచి ఆర్డర్ చేయాలనుకుంటున్నాను.",
    waBulk: "నమస్కారం! శ్రీ ఆదిత్య నేచురల్ ఆయిల్స్ 5 లీటర్ టిన్ ధర చెప్పండి.",
    waCartIntro: "నమస్కారం! *శ్రీ ఆదిత్య నేచురల్ ఆయిల్స్* నుంచి ఆర్డర్:",
    waCartOutro: "అందుబాటు, మొత్తం చెప్పండి.",
    qty: "సంఖ్య",
    price: "ధర",
  },
} as const;

type Copy = (typeof copy)[Lang];

interface LanguageValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Copy;
  productName: (name: string) => string;
  productDesc: (name: string, desc: string) => string;
}

const LanguageContext = createContext<LanguageValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem("shop-lang");
    return saved === "te" ? "te" : "en";
  });

  const setLang = (next: Lang) => {
    localStorage.setItem("shop-lang", next);
    setLangState(next);
  };

  useEffect(() => {
    document.documentElement.lang = lang === "te" ? "te" : "en";
    document.documentElement.classList.toggle("lang-te", lang === "te");
  }, [lang]);

  const value: LanguageValue = {
    lang,
    setLang,
    t: copy[lang],
    productName: (name) => (lang === "te" ? productText[name]?.name ?? name : name),
    productDesc: (name, desc) => (lang === "te" ? productText[name]?.desc ?? desc : desc),
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage must be used within LanguageProvider");
  return value;
}
