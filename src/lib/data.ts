export interface BagItem {
  name: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  dept: string;
  category: 'hortifruti' | 'acougue' | 'padaria' | 'frios';
  badge: string;
  badgeClass: string;
  rating: number;
  ratingCount: number;
  oldLabel: string;
  price: number;
  unit: string;
  img: string;
}

export interface FlashDeal {
  title: string;
  category: string;
  desc: string;
  oldLabel: string;
  newLabel: string;
  price: number;
  unit: string;
  discount: string;
  saved: string;
  img: string;
  wppMsg: string;
}

export interface TabloidPage {
  id: string;
  label: string;
  thumbLabel: string;
  img: string;
}

export interface Recipe {
  img: string;
  tag: string;
  tagClass: string;
  time: string;
  portions: string;
  title: string;
  desc: string;
  wppMsg: string;
}

export interface Testimonial {
  initials: string;
  initialsClass: string;
  text: string;
  name: string;
  meta: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface MobileProduct {
  id: string;
  name: string;
  rating: number;
  oldLabel: string;
  price: number;
  unit: string;
  badge: string;
  badgeClass: string;
  img: string;
  featured?: boolean;
}

/* ------------------------------------------------------------------ */
/* SHARED CONSTANTS                                                    */
/* ------------------------------------------------------------------ */

export const WPP_NUMBER = '5511987654321';
export const PHONE_TELEVENDAS = '(11) 4002-8922';
export const PHONE_DISPLAY = '(11) 98765-4321';
export const ADDRESS = 'Av. São Francisco, 1500 - Centro';
export const HOURS = 'Seg à Sáb: 07h às 22h | Dom: 07h às 20h';

export function waLink(text: string): string {
  return `https://wa.me/${WPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function formatBRL(value: number): string {
  return `R$ ${value.toFixed(2).replace('.', ',')}`;
}

/* ------------------------------------------------------------------ */
/* IMAGES (official sourced assets)                                    */
/* ------------------------------------------------------------------ */

export const IMG = {
  heroFamily:
    'https://lh3.googleusercontent.com/aida/AEtjO1VRQhZtCuPrt5_eOSukUu05iIcAnXW6uIOvrBJJutKrTRCcFKmsnPAQpDIL02PVxYhAzXqP0DLJifRQT4Nu8TX5UgiqG7vKQINKZCh7vVN3tE6qi6jJJLJkwbLMzlYKYSYRgxl8I9r5CRpq-MpWd-M4q9GQORvNP7lfYNs9oYPrFQSp5geR6OYJmzsMWcG-coIDiC4oGT-x5Uu7ekJqOQZMmKde_YE2DV3Z4Q1GXGvRddTI4kqDiUYSNsY',
  heroHorti:
    'https://lh3.googleusercontent.com/aida/AEtjO1XqSzlujR9G2eYZRCCnYtiPeh3Kv3TjJYYnHeK4go_1xGm1QpVPNsO9A066MPW024UIVyxZMQQeOmqTQgIB8xAa0KYHpOIYCIWAA0PzVuaAKh7NZnSJJl6wv6rccpMAG2cef-Rv7jraMWSpd3CqZ5Y_h9uvAFJJPArekvH3S9wYgMAEVl6xTAwi9A2oNOcfMkppHl2Jgd12AAfUpLBvZJyV5hDkSbr-f3MLRXY35Vkt0XtgSHvnekhii-lL',
  tabloide1:
    'https://lh3.googleusercontent.com/aida/AEtjO1WcHB0l5ZOc826RxYXsyVIm5PsQEDldEzXZeElFFNg4RIsYye_fttLTG44nLSGgGelIR4uB3r58szdmFa0SAsGW4Oo8tl5PvEYFGHvbPsvUGvfVmjztNQKqSvTD0jkaF31OD0znr8B9ZEPXJDeJbSwR-bdYRhBA_JLggpGVDwCP6oXBSyR2xZSIvH-LFMxGzU9fEOcoxKUh_-yXSD5aOk_KPDyEChy4ZytiaZOig72gH6SCMqKjijm1iiAw',
  tabloide2:
    'https://lh3.googleusercontent.com/aida/AEtjO1XK_gitFM2JPE3VtQzas9SF_66-gpfrT4EtNlbpeX5WFWnCnTVS-t6Ct2Dxiy_1C8rzS6QWSSnfljLZc2z0XR0j1hovDu9aj7aGUlwo560qSJzMbZZGk_7a3Y7vxEjiiP3rXhBNf35ljC-I3UVwWysiqYnCMzKAsVC-USNGfMwF66_vlTc4CaQac5Sopu_xmq473lnXok5KdaEW9aLDovXr4E0yXg-BnN31UB8ruDAVNcdBslELMIa8_3Hs',
  tabloide4Spread2:
    'https://lh3.googleusercontent.com/aida/AEtjO1UnqLK6skyPjVr6SpL1v1IKbsc_QgTc6A4cn0m-3fkbDumDAEQgAugsnRjjW3dzPgRO6d6cyyJOOZMtC_XAGu4ARH4GHlu3F0ebJL-jY-y13R8B-TQQQgwoqEOqKHyhxffEHxzHA_MR0ulBkSNUQ9wnfr_pXeIDmtk5ckYlXiUhmLz_ywtrWm327yNIXtArWYqZ49A-GUgrSZsjJkKV5yxxpjvCTF9kqRtBe7XUhQqlBEmwd-3oPpGcwhM',
  logoHeader:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCkAb5H4RzjrstINfzjRrdBJPI6mSzWyDGZrQVCpkskHbwc8YvMNy7DEAtVhZH3J9qdtTllBnvPql6UQL66Xs4TGpehxMrlp6HL2iF46VmyQ0k788tLWRyv2CUc5oATV4BnYmU7s6ypyAi994UhKYZb2BEbxru_PEhvRrJQyoaK0YomI47ijHWBX6CcHa7NE6z4dqRjeBIJqRIDiCIawyPHn90RKwdN5K6F-Z_CAcoGiJSlDF6PJgHPMDW7R43dUIqxqnI',
  logoFooter:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDyQTnxeFkff1Za8QORBNn27MtvjmGZUPx7OV3RM6cBgZYjgqpjoY_iZe2HsDYwdIGsWDWx3F57aYWDOT5DH9-qRAZozJJMPFliu1T-5ai5slPTVSVAODrcG-qqP2yvvTGOXPmB2FvGK87V_Ns8FCphyyt4tr9rEk4jBooK5VOUt_sDYHhdu_ppgvhkW6gZ-W0yyjxxGYo-ibBb22VycV_nL9b7L_5wBDtmTvzvifjIgjO6rndDCWeNuiYA75GLr4bjRbI',
  logoMobile:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBpLfdkGr3KNqO7soj-7A6bzrxKbjUSzfqnoGjEVKRe68BLdDsWnTAyGjdjlCDXLM8OOCCmB5ziXrm1HxsjJ8bIVbezmpl0pW2Dvn4iknFoEiP5vcb9TqD1KiUZh0UAfXe_dwJSPZfmfVbcCQ_HZ_rmaCVsEa8x2wFGHEqYaTqKWjQV_TcjeBVgbFk2S1moLz8MpGgYxdJrLqaEaDHZl7IcLS9VoFsV_T7Y48cbbnhDXvGcqAexJ7X4aQu7MEYyZub1FfY',
  logoGourmetHeader:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuByN_NUQ3J6m8yb3d8zdiCgQCTv5GSRNGzneaST5fGW8kuusXOEMYvK6MXeEzxicHUl6hXG4KfMy1yz7pR2o1pg6a3Keq793b8ACyt9xe9QsJOn5Rm49fsU-6gHV8ZfUAm_UcwePr2sNd4TzidsMJw9TiPn_EtRGKkBo5pa3MjaZl3I_B3L3acScr-iKz6SCkNeih8OlzwNWayjn5HKf00vRsPTbAYCfNta1KMbYprWOilbZKJY-BLxn9wSR_sucVwbCcA',
  logoGourmetFooter:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDq16EpCmTBXWFx8YwvnmoEcyjTqpm3Y-BeBt_H2GMgsp0HdwnzXD9U2eqcCrtvkRwLVSGxK4U4cVjJf__axnxhnt09-Ni6HClP-MwyZ9j7WSHhOQ_PXLo1obal1Z3ASHwpm-zFRv19XNl8GIUng5-vrxTvVungAgjLxPlwU3Wq0ud3FcqaEWSiG-VUXLURr_dvv-j1Wczl5fSDgRubrobJWdxCggHJgM7WENhMC_jgPQT0rkvDsfW9pyT2oocEf0w77Vo',
} as const;

const P = {
  tomate:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuASNybPT8UM9BZuC6zBKuLmFYvCvdZh9d0SHZUmONA4Jeq6N2sUXjUld0LbO29UU9dWu96bn-5HpXDwhQYna0BYlCJRHyAPPdXf5FcUKJKvcB-4CgoVPUyBGgOmathQjGDmXKSNQ4-oM-GVdwxTdvOZQUdxEkVKnZ7VgcYshUqIN0T1E7ho6IRRHyXHMF5xiblSNjeIauypxLtmJXE0Rnaj2JGSzxb0nSjkpQszQc5hj4D8U9r5Bo9NWA',
  alcatra:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDePVwuoo0JaGreYYrAn_WAvUpdQ_qsKqE0cH7Db9apk5qiZ7W_QDAM1GfiNlLzcaVMSJRkRYLq6huN93qee9MyGalMTfVnWD4zEVoADdb9SaBdOnREvwo3wigotJefsZkGaDHpKpWeIRHwqwn6rTrxivo1n7O0CWShGggaEcMiBg2nxKbW9aLp3snksqLnqXV9JBrGgWuF-myWyvDl5VDGkqm9P1tqj2egI4dfKGYIq8_5_vU_E0p_lA',
  abacaxi:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAS4UW5oPIm8XWbJsisP3U1kVZVyimMJAQRVV6nqIEnoEMBEI5H6DbnAQ5QyvKO1aGjATQ5w80qeG5acAXwZ2Y5xI_An8883nAkl6KItanq6Pwv6NLaB_87xi_zHnXZrVK4HEP-wDH0rYcAHhq0Eq-ew9JYVDfO9UQTTSSrNJJrwJpoz1JPwC9NgZ3kM2C2VVp3ZmQGhmmHHbMSkNxPU0pL1SP0YRDP82VHH06Cq1XlcV1XWxPC_Z9Z-g',
  pao:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuANMJy6gxiBhUyWBmeI2IWi6cgn7ZL78PQfL5A_Oqc1-WoW2_X8WoJ7OOzeC1f0FqttDkWlBLEeb3nWSvvx4x6MkciJ-zBvf1OifDOO-bTiMmimlhQ12Ussb3b3ZKBuPFWQuihk8XSL-gMEpbVv3BZoJmLrW9K6XjutMjhykXSOCc8-ADundfeGMejRefaQbQe4IdLItGEtDeRXhv5rBrI9VvNNmY_WoPKAZQhxvNjAo29_mrK4b2JabQ',
  queijo:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDkqNUf5-zO6CW_W0tizik0oJaaLDv3ASpzMxZbeEq1bbYrLSYmoUeIY1QQUOVT_V4PszsoWD1NHaXyzYdE1wVphdOWTy3ybjQN8PPelflFV6UxCeeNAbFgAPEcPBZncRXOEjdD4tRv50HIxildqDMIXIL1WlQI-1fFVmTHs4fAtvoAD0PkWAw08Qc6u31JiLkRNEx5PRVg7qk_80UqMmGwV64IuHDDiNES_S426RuZf7bNUM2SqBiOfQ',
  frango:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAVNmsJ-NnNnEt5YLUWBB5eWzKOTzRvH_1vZUpdw2G-pu3J28o-len37nWai41IGVgRMW2puYv7Qp3nvOvvWBPz7qtdCMzrMreFJO212TfqDLlfoFFqFp2g4zgH8qDQ9itc1P4FHejy4pX6in9MVPQbVqgauKDaXrwZHbjZYzZ40WXL5AtxC2bcGS7ZF373vlhXWfWtU51aH76OMURAXfEI7q6q9mVHtJysH_BIxkgGGjlvTL83LmAQtw',
  banana:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCu-Ntx7rZXBkfs0j7QuvNC2Cvb8fCFvMkydbA9_yKubEbxP0j6hyxQ2paeTKO4EajusmVDqBZ9NeqMr1mnHj_whvzwVXvxWduyz29jXuR4Nkg7slQp-2yYnfJkhVr81rl8L1kohmKeHrRnEKh5xnaCW-luW8sQZkR40bH-gr2BvfkIAF3EUR9zGVqQfQEzUqqn9A1p_tP_2FWEkcvnNEaaqXEUWO1ETNjvwEob5BhW2SbOjjXU69lGaA',
  bolo:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBAc3PN9u_PqwqHoLvbGJcidRDneJLf2-2hDEDvU2TcSwDXEb5ooYQvcSVAw8DN3BcpqeE9eWl6uzRTGgZpxO1Eygu8KjC_XkTP4xjtPZXU4NR9S7qCifipp9DBPXHO1x6uOgW8_kUJ2EYUROM3u6kzD9nHBQPkn7l4OLoYCT0AYGUGPM8IfZQjJMbGazVoABO3PO8NzKDkhFvxWgA7nRc_ZIe5LyzNxLyUZRsUbGF0V4WGHVJVUXHu6A',
  picanha:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDOFkyVUrQZTUTpopWYYL0QHhDcxj4UEGswNOLpRWR_KhzjSgJnGIseCBX7ceEugg3upg5YkxPGuURB1Xk7jmrzO2_OHCm2uucC3GTLLiFJPnXZZJInlMiOZ11ZCDdZTDwPRP3H3YaZrnDp9oSQdF0-igkCcQZYeyGUwTQV493UjzjJcLw5-fDiAvp4rQiQK_W7WlsaBn6KLIN2faC7Yo92JhVa6I54Mre6IfiKjKGCSxx19gNyQqVfhA',
  frango2:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDPh9FiwKao-GcU1e0XS9P4oIZl7TiFmkhZRK0gOWWnJPpdFufSERR4vBvry6nzvC0zuCSQYDTAmuM7U0YINl4LlmAmH43pofnGrU1EuafAqiGR_Vtd19VQgAAbgfn4LVxc8mpaxc8PV58aEtS31gjkN9YFccO4JoEa9iRV65LrOrv_5FA-f6nstn9AcR6RmqOI1aXmuJXCgh6lwiaM0C342tWyLARjkpDQ7A4h8sYRM1QCjZ9mkQD69g',
  morango:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCpNfJIufRR6dc1WYkr9sTyB-dIqPrv4QO9uOHvYHq2_SAQzIFBnyex9gHVjeODiyxbRgLuvETzEgJ1xXIIbpMzhLSLDHCZDmFHG0LC3_FDIzVo-3lb-LnGBHeKpTsfi4tQHi44yE78pgc9MCZfYU_Mb5jRFQG3Mb1ga-E-qZ0WS0JN6xujeJdJiircIpLhfiop9tMFPVDEVOvF9akuzfXiqu3NY8fVq474Vj_9oyjXUL_ZpKTsTFcSeQ',
  picanhaRec:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCvbID7O3C9aprkwMP9XiCdlvcNI4-xD4TOyEPURNTDOXGTFUWLVvyykj2oJ92hNj1HDYNwQ4xIkUKBLGmePgNof0UcOGumxp82S-xMlsrCJgVW7miybRPEzVfnpXIs-2mFXBgd0IZ72O7mkhmbJ8xMBcuXdkt82qUelF32l0tbxwnC0H574J4ZG2lfTp3Rezf3d_UPT-rQz8V0AljST-Zmwmd8esIF0_U7ORNdY-HTpQy4bDOeMHbf4Q',
  saladaRec:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAdZbUx7fwOzwUaqUpsX8bfR_LFKB-UmkJQ1DaFk9plvUFJqvL7ypQq0n0m2tzeHiW1zi-w1JJsd6ey-M52xaZ9UDubmMktqDJoJxhJVyrpfgVcVqMX87-2bB0niMcf60cQdipi5GILfdr9pKHIvT8NXOrIsR9CcxwS67QCUO7butjrAWIMYbY6wjNXKcY5DqY-iM1c96raOK1VxK-sn2bVm3_XOc7lU4mtdDaIF8HXEgNHoAKHrByWFg',
  bruschettaRec:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBj75sqelXuhrRSesxw4zjIu1rmsoxOD-A06MFq5vnq4L1bAVwGFDnl59iXyXunJC7SW4YUwDMIk7tpa01Z2nPTCecR-nIIk4O1gOAXxqa3PYHGEDlQKBMQt_oimBAdHHrfsWhNufEKstg6K34J2836CUyE019fOIJctepi7eTl5_AzsQyBRTd8Ynax7eJK4192bd7UJmsX2S9D9mRXx9R0dYf_ORiEIsW5kkWNkIa117DGBwIlkTZRsA',
} as const;

/* ------------------------------------------------------------------ */
/* DESKTOP HOME PRODUCTS (screen 02)                                    */
/* ------------------------------------------------------------------ */

export const CATEGORIES: { key: 'todos' | Product['category']; label: string }[] = [
  { key: 'todos', label: 'Todos os Produtos' },
  { key: 'hortifruti', label: 'Hortifrúti' },
  { key: 'acougue', label: 'Açougue' },
  { key: 'padaria', label: 'Padaria' },
  { key: 'frios', label: 'Laticínios' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'tomate',
    name: 'Tomate Italiano Selecionado',
    dept: 'Hortifrúti São Francisco',
    category: 'hortifruti',
    badge: 'Hortifrúti Fresco',
    badgeClass: 'bg-emerald-100 text-emerald-700',
    rating: 4.5,
    ratingCount: 42,
    oldLabel: 'R$ 7,90',
    price: 5.49,
    unit: '/Kg',
    img: P.tomate,
  },
  {
    id: 'alcatra',
    name: 'Alcatra Bovina com Maminha',
    dept: 'Açougue Nota 10',
    category: 'acougue',
    badge: 'Oferta de Açougue',
    badgeClass: 'bg-brand-red text-white',
    rating: 5,
    ratingCount: 128,
    oldLabel: 'R$ 49,90',
    price: 39.9,
    unit: '/Kg',
    img: P.alcatra,
  },
  {
    id: 'abacaxi',
    name: 'Abacaxi Pérola Grande Doce',
    dept: 'Hortifrúti São Francisco',
    category: 'hortifruti',
    badge: 'Hortifrúti Fresco',
    badgeClass: 'bg-emerald-100 text-emerald-700',
    rating: 4,
    ratingCount: 19,
    oldLabel: 'R$ 9,99',
    price: 6.99,
    unit: '/un',
    img: P.abacaxi,
  },
  {
    id: 'pao',
    name: 'Pão Francês Tradicional Crocante',
    dept: 'Padaria Varejão',
    category: 'padaria',
    badge: 'Fornada Quente',
    badgeClass: 'bg-amber-100 text-amber-800',
    rating: 5,
    ratingCount: 254,
    oldLabel: 'R$ 18,90',
    price: 14.9,
    unit: '/Kg',
    img: P.pao,
  },
  {
    id: 'queijo',
    name: 'Queijo Muçarela Fatiado Especial',
    dept: 'Laticínios Selecionados',
    category: 'frios',
    badge: 'Frios & Queijos',
    badgeClass: 'bg-blue-100 text-brand-blue',
    rating: 4.5,
    ratingCount: 88,
    oldLabel: 'R$ 42,90',
    price: 34.9,
    unit: '/Kg',
    img: P.queijo,
  },
  {
    id: 'frango',
    name: 'Filé de Peito de Frango Limpo',
    dept: 'Açougue Nota 10',
    category: 'acougue',
    badge: 'Super Oferta',
    badgeClass: 'bg-brand-red text-white',
    rating: 5,
    ratingCount: 96,
    oldLabel: 'R$ 22,90',
    price: 17.9,
    unit: '/Kg',
    img: P.frango,
  },
  {
    id: 'banana',
    name: 'Banana Prata Doce Selecionada',
    dept: 'Hortifrúti São Francisco',
    category: 'hortifruti',
    badge: 'Hortifrúti Fresco',
    badgeClass: 'bg-emerald-100 text-emerald-700',
    rating: 4.5,
    ratingCount: 71,
    oldLabel: 'R$ 6,90',
    price: 4.89,
    unit: '/Kg',
    img: P.banana,
  },
  {
    id: 'bolo',
    name: 'Bolo de Cenoura c/ Brigadeiro',
    dept: 'Padaria Varejão',
    category: 'padaria',
    badge: 'Confeitaria Própria',
    badgeClass: 'bg-amber-100 text-amber-800',
    rating: 5,
    ratingCount: 64,
    oldLabel: 'R$ 25,90',
    price: 19.9,
    unit: '/un',
    img: P.bolo,
  },
];

/* ------------------------------------------------------------------ */
/* FLASH DEALS (screen 02 carousel)                                     */
/* ------------------------------------------------------------------ */

export const FLASH_DEALS: FlashDeal[] = [
  {
    title: 'Picanha Bovina Fatiada Especial',
    category: 'Açougue Nota 10',
    desc: 'Corte nobre com capa de gordura uniforme, maciez inconfundível e padrão ouro de churrascaria. Fresca e pronta para a grelha!',
    oldLabel: 'R$ 69,90',
    newLabel: 'R$ 49,90',
    price: 49.9,
    unit: '/Kg',
    discount: '-28% OFF',
    saved: 'R$ 20,00',
    img: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=700&auto=format&fit=crop&q=80',
    wppMsg: 'Olá! Gostaria de aproveitar a Oferta Relâmpago: Picanha Bovina Fatiada por R$ 49,90/Kg!',
  },
  {
    title: 'Morango Especial Bandeja Selecionada',
    category: 'Hortifrúti Fresco',
    desc: 'Morangos vermelhos, aromáticos e muito doces, colhidos artesanalmente para sobremesas, sucos e consumo diário.',
    oldLabel: 'R$ 12,90',
    newLabel: 'R$ 7,99',
    price: 7.99,
    unit: '/un',
    discount: '-38% OFF',
    saved: 'R$ 4,91',
    img: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=700&auto=format&fit=crop&q=80',
    wppMsg: 'Olá! Gostaria de aproveitar a Oferta Relâmpago: Morango Especial Bandeja por R$ 7,99 un!',
  },
  {
    title: 'Filé de Peito de Frango Sadia',
    category: 'Açougue & Aves',
    desc: 'Filés macios, sem osso e sem pele, congelamento de ponta para garantir textura e sabor ideais na sua cozinha.',
    oldLabel: 'R$ 22,90',
    newLabel: 'R$ 14,99',
    price: 14.99,
    unit: '/Kg',
    discount: '-34% OFF',
    saved: 'R$ 7,91',
    img: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=700&auto=format&fit=crop&q=80',
    wppMsg: 'Olá! Gostaria de aproveitar a Oferta Relâmpago: Filé de Peito de Frango Sadia por R$ 14,99/Kg!',
  },
  {
    title: 'Queijo Muçarela Fatiado',
    category: 'Frios & Laticínios',
    desc: 'Muçarela de primeira com derretimento cremoso impecável, fatiada fininha para lanches, pizzas e café da manhã.',
    oldLabel: 'R$ 38,90',
    newLabel: 'R$ 27,90',
    price: 27.9,
    unit: '/Kg',
    discount: '-28% OFF',
    saved: 'R$ 11,00',
    img: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=700&auto=format&fit=crop&q=80',
    wppMsg: 'Olá! Gostaria de aproveitar a Oferta Relâmpago: Queijo Muçarela Fatiado por R$ 27,90/Kg!',
  },
  {
    title: 'Café Tradicional Pilão 500g',
    category: 'Mercearia & Matinais',
    desc: 'O café forte do Brasil com ponto de torra clássico, aroma marcante e moagem uniforme para o seu dia a dia.',
    oldLabel: 'R$ 19,90',
    newLabel: 'R$ 13,99',
    price: 13.99,
    unit: '/un',
    discount: '-30% OFF',
    saved: 'R$ 5,91',
    img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=700&auto=format&fit=crop&q=80',
    wppMsg: 'Olá! Gostaria de aproveitar a Oferta Relâmpago: Café Tradicional Pilão 500g por R$ 13,99 un!',
  },
];

/* ------------------------------------------------------------------ */
/* TABLOIDE (flippable weekly flyer)                                    */
/* ------------------------------------------------------------------ */

export const TABLOIDE_PAGES: TabloidPage[] = [
  {
    id: 'p1',
    label: 'Página 1 de 2',
    thumbLabel: 'Hortifrúti & Carnes',
    img: IMG.tabloide1,
  },
  {
    id: 'p2',
    label: 'Página 2 de 2',
    thumbLabel: 'Açougue & Mercadão',
    img: IMG.tabloide2,
  },
];

export const TABLOIDE_SPREADS: TabloidPage[] = [
  {
    id: 'p1',
    label: 'Página 1: Hortifrúti & Carnes',
    thumbLabel: 'Exibição panorâmica da edição quinzenal — Validade até quarta-feira ou fim de estoques.',
    img: IMG.tabloide1,
  },
  {
    id: 'p2',
    label: 'Página 2: Padaria & Mercearia',
    thumbLabel: 'Painel promocional ilustrado da cesta básica e departamento matinal.',
    img: IMG.tabloide4Spread2,
  },
];

/* ------------------------------------------------------------------ */
/* RECIPES, TESTIMONIALS, FAQ (screen 02)                               */
/* ------------------------------------------------------------------ */

export const RECIPES: Recipe[] = [
  {
    img: P.picanhaRec,
    tag: 'Açougue',
    tagClass: 'bg-brand-red text-white',
    time: '35 min',
    portions: '4 porções',
    title: 'Picanha Grelhada na Manteiga de Alho',
    desc: 'Corte macio selado com manteiga e lâminas de alho dourado. Ideal para o almoço em família.',
    wppMsg: 'Olá! Gostaria de pedir a carne para a receita de Picanha na Manteiga.',
  },
  {
    img: P.saladaRec,
    tag: 'Hortifrúti',
    tagClass: 'bg-emerald-600 text-white',
    time: '15 min',
    portions: 'Prático',
    title: 'Salada Tropical de Tomate e Frutas',
    desc: 'Refrescante com tomates doces selecionados, abacaxi em cubos e folhas verdes crocantes.',
    wppMsg: 'Olá! Gostaria de pedir os ingredientes da Salada Tropical.',
  },
  {
    img: P.bruschettaRec,
    tag: 'Padaria',
    tagClass: 'bg-amber-600 text-white',
    time: '20 min',
    portions: 'Aperitivo',
    title: 'Bruschetta no Pão Francês Crocante',
    desc: 'Pão francês fresquinho com azeite extravirgem, tomate, manjericão fresco e muçarela fatiada.',
    wppMsg: 'Olá! Gostaria de pedir os ingredientes da Bruschetta.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    initials: 'MC',
    initialsClass: 'bg-blue-100 text-brand-blue',
    text: '"O hortifrúti é espetacular! As verduras parecem que foram colhidas há 10 minutos. E pedir pelo WhatsApp salvou meu tempo, tudo veio separado com muito capricho."',
    name: 'Mariana Cerqueira',
    meta: 'Cliente há 4 anos • São Francisco',
  },
  {
    initials: 'RS',
    initialsClass: 'bg-red-100 text-brand-red',
    text: '"Mandei minha lista de compras pelo WhatsApp e me responderam em 2 minutos. Entrega rápida, carne limpinha e frutas sem nenhuma avaria. Nota 10!"',
    name: 'Rodrigo Silveira',
    meta: 'Pedidos frequentes pelo WhatsApp',
  },
  {
    initials: 'CL',
    initialsClass: 'bg-yellow-100 text-yellow-700',
    text: '"A pão de queijo da padaria é o melhor da região! Economizo bastante aproveitando a Terça e Quarta do Hortifrúti e a Sexta da Carne."',
    name: 'Carla Lins de Castro',
    meta: 'Cliente Assídua',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'Como faço para pedir pelo WhatsApp do Varejão?',
    a: 'É muito simples! Basta clicar em qualquer botão "Pedir pelo WhatsApp" ou enviar sua mensagem para o número (11) 98765-4321 com sua lista de itens. Nossa equipe responde confirmando o valor, formas de pagamento e endereço para entrega imediata ou agendada.',
  },
  {
    q: 'Como funciona a entrega das compras?',
    a: 'Entregamos em todos os bairros da nossa cidade através de frota própria e motoboys parceiros. Pedidos feitos até as 17h contam com opção de Entrega Express em até 2 horas.',
  },
  {
    q: 'Quais são as formas de pagamento aceitas na entrega?',
    a: 'Aceitamos PIX instantâneo, Cartões de Crédito (Visa, Mastercard, Elo, Hipercard), Cartões de Débito, Dinheiro e os principais Vales-Alimentação (VR, Alelo, Sodexo, Ticket). A maquininha vai até sua casa!',
  },
  {
    q: 'Como é garantida a qualidade dos itens de Açougue e Hortifrúti?',
    a: 'Nossos produtos de hortifrúti chegam diariamente às 04h da manhã direto de produtores parceiros. As carnes contam com procedência de frigoríficos inspecionados (SIF), cortadas e pesadas na hora com total higiene.',
  },
];

/* ------------------------------------------------------------------ */
/* GOURMET (screen 04 editorial lookbook)                              */
/* ------------------------------------------------------------------ */

export interface GourmetItem {
  id: string;
  no: string;
  tag: string;
  tagClass: string;
  img: string;
  name: string;
  desc: string;
  oldLabel: string;
  newLabel: string;
  price: number;
  unit: string;
  bagName: string;
  wppMsg: string;
}

export const GOURMET_HORTIFRUTI: GourmetItem[] = [
  {
    id: 'g-tomate',
    no: 'ITEM NO. 101',
    tag: 'Colheita do Dia',
    tagClass: 'text-emerald-700 bg-emerald-100',
    img: P.tomate,
    name: 'Tomate Italiano Selecionado',
    desc: 'Polpa densa, doçura natural e acidez equilibrada para molhos inesquecíveis.',
    oldLabel: 'R$ 7,90',
    newLabel: 'R$ 5,49',
    price: 5.49,
    unit: '/Kg',
    bagName: 'Tomate Italiano Selecionado (1kg)',
    wppMsg: 'Olá! Quero Tomate Italiano Selecionado (R$ 5,49/Kg)',
  },
  {
    id: 'g-abacaxi',
    no: 'ITEM NO. 102',
    tag: 'Fruta de Época',
    tagClass: 'text-amber-700 bg-amber-100',
    img: P.abacaxi,
    name: 'Abacaxi Pérola Grande Doce',
    desc: 'Sumo abundante, aroma cítrico refinado e doçura pura sem aspereza.',
    oldLabel: 'R$ 9,99',
    newLabel: 'R$ 6,99',
    price: 6.99,
    unit: '/un',
    bagName: 'Abacaxi Pérola Grande Doce',
    wppMsg: 'Olá! Quero Abacaxi Pérola Grande Doce (R$ 6,99/un)',
  },
  {
    id: 'g-banana',
    no: 'ITEM NO. 103',
    tag: 'Clássico da Mesa',
    tagClass: 'text-emerald-700 bg-emerald-100',
    img: P.banana,
    name: 'Banana Prata Doce Climatizada',
    desc: 'Madura de forma natural, rica em potássio e perfeita para o café da manhã.',
    oldLabel: 'R$ 6,90',
    newLabel: 'R$ 4,89',
    price: 4.89,
    unit: '/Kg',
    bagName: 'Banana Prata Climatizada (1kg)',
    wppMsg: 'Olá! Quero Banana Prata (R$ 4,89/Kg)',
  },
  {
    id: 'g-morango',
    no: 'ITEM NO. 104',
    tag: 'Oferta Relâmpago',
    tagClass: 'text-brand-red bg-red-100',
    img: P.morango,
    name: 'Morango Doce Selecionado',
    desc: 'Bandeja selecionada à mão, rubros e perfumados para geleias e sobremesas.',
    oldLabel: 'R$ 12,90',
    newLabel: 'R$ 7,99',
    price: 7.99,
    unit: '/un',
    bagName: 'Morango Selecionado Bandeja',
    wppMsg: 'Olá! Quero Morango Selecionado (R$ 7,99/un)',
  },
];

export interface GourmetMeat {
  id: string;
  badge: string;
  badgeClass: string;
  img: string;
  dept: string;
  name: string;
  desc: string;
  oldLabel: string;
  newLabel: string;
  price: number;
  unit: string;
  bagName: string;
  wppMsg: string;
  star?: boolean;
}

export const GOURMET_MEATS: GourmetMeat[] = [
  {
    id: 'm-alcatra',
    badge: 'Corte Seleto',
    badgeClass: 'bg-brand-red text-white',
    img: P.alcatra,
    dept: 'Açougue Nota 10',
    name: 'Alcatra com Maminha',
    desc: 'Fibras curtas e suculência ímpar para bifes grelhados de frigideira rápida ou assados lentos de domingo.',
    oldLabel: 'R$ 49,90',
    newLabel: 'R$ 39,90',
    price: 39.9,
    unit: '/Kg',
    bagName: 'Alcatra com Maminha (1kg)',
    wppMsg: 'Olá! Desejo pedir Alcatra com Maminha (R$ 39,90/Kg)',
  },
  {
    id: 'm-picanha',
    badge: '⭐ ESTRELA DA EDIÇÃO',
    badgeClass: 'bg-brand-gold text-brand-ink',
    img: P.picanha,
    dept: 'Marmoreio Superior',
    name: 'Picanha Fatiada Especial',
    desc: 'Capa de gordura espessa, maciez inconfundível e selagem perfeita na brasa forte com sal grosso de parrilla.',
    oldLabel: 'R$ 69,90',
    newLabel: 'R$ 49,90',
    price: 49.9,
    unit: '/Kg',
    bagName: 'Picanha Fatiada Especial (1kg)',
    wppMsg: 'Olá! Desejo pedir a Picanha Fatiada Especial (R$ 49,90/Kg)',
    star: true,
  },
  {
    id: 'm-frango',
    badge: 'Cozinha Prática',
    badgeClass: 'bg-blue-600 text-white',
    img: P.frango2,
    dept: 'Sadia / Seara',
    name: 'Filé de Frango sem Pele',
    desc: 'Cortes límpidos, sem ossos e sem excesso de líquidos. Versatilidade e proteína pura para dietas do dia a dia.',
    oldLabel: 'R$ 22,90',
    newLabel: 'R$ 14,99',
    price: 14.99,
    unit: '/Kg',
    bagName: 'Filé de Frango sem Pele (1kg)',
    wppMsg: 'Olá! Desejo pedir Filé de Frango sem Pele (R$ 14,99/Kg)',
  },
];

export const GOURMET_CESTA = {
  name: 'Cesta Mestre Gourmet da Semana',
  desc: 'Picanha Nobre (1kg) + Tomates Italianos Maduros (1kg) + Baguete Tradicional',
  oldLabel: 'R$ 94,80',
  newLabel: 'R$ 69,90',
  price: 69.9,
  bagName: 'Cesta Mestre Gourmet',
  wppMsg: 'Olá! Desejo pedir a Cesta Mestre Gourmet da Capa (R$ 69,90)',
};

export const GOURMET_BAKERY = [
  {
    id: 'b-pao',
    title: 'Pão Francês Tradicional',
    desc: 'Crocância sem igual por apenas R$ 14,90/kg',
    bagName: 'Pão Francês Quentinho (1kg)',
    price: 14.9,
    wppMsg: null,
  },
  {
    id: 'b-bolo',
    title: 'Bolo de Cenoura c/ Calda',
    desc: 'Fofo e coberto de brigadeiro por R$ 19,90/un',
    bagName: 'Bolo de Cenoura com Brigadeiro',
    price: 19.9,
    wppMsg: null,
  },
];

export const GOURMET_RECIPES = [
  {
    img: P.picanhaRec,
    tag: '35 MIN • FÁCIL',
    tagClass: 'bg-brand-red text-white',
    title: 'Picanha Selada na Manteiga de Alho',
    desc: 'Fatias grossas douradas em frigideira de ferro com alho confitado e ramos de alecrim fresco colhidos da nossa horta.',
    wppMsg: 'Olá! Gostaria de pedir o kit completo de ingredientes da Picanha na Manteiga.',
  },
  {
    img: P.saladaRec,
    tag: '15 MIN • REFRESCANTE',
    tagClass: 'bg-emerald-600 text-white',
    title: 'Salada Tropical de Tomates & Frutas',
    desc: 'Tomates italianos doces combinados com cubos de abacaxi grelhado, folhas verdes e emulsão de azeite e limão.',
    wppMsg: 'Olá! Gostaria de pedir o kit de ingredientes da Salada Tropical.',
  },
  {
    img: P.bruschettaRec,
    tag: '20 MIN • APERITIVO',
    tagClass: 'bg-amber-600 text-white',
    title: 'Bruschetta no Pão Francês Tostado',
    desc: 'Fatias do nosso pão francês tostado na grelha com azeite extravirgem, queijo muçarela derretido e manjericão fresco.',
    wppMsg: 'Olá! Gostaria de pedir o kit de ingredientes da Bruschetta.',
  },
];

/* ------------------------------------------------------------------ */
/* MOBILE PRODUCTS (mobile code.html)                                  */
/* ------------------------------------------------------------------ */

const MP = {
  tomate:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA5If2tZ5llBBgh8YQQy8RTeL7gScCAwJvs1HQIaeGkh8h2KgDPWIqXk-c33k984ov6vseiyXB8idKsqUirshBcZDKv3IYwnMh-qW8X4xHmthjMbltlo7oWcPpnBoa90yM48tN-ff2uQ-DMUXeibWhEHffHw7wOahbqY5mZNX1UVjS_Tfikc9k4_-yw9TSwzKgHs2Llckj3mo56ItlUHO846NrTgSnUFMOG_ofw-edEnoEt4cqAA_O0gA',
  alcatra:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAtXLO7jwjwyAzYOFtDSXZLib6qgIgpsPhJxb1_jAUiq6Hn2WJrAs-BHhCe2wTIbnkdtvn03dhppgtbQsDfsY0xot4uhoTRj5yG3sSFpx_x4d0SGDpQRzu4jZyO8mUI3cCaUTKK4GweYmS94mAmAlKtTr5xM60fxpVCrwIVi8QUDYKcnxSARv9tQN-Ywmu2DUFl5ccW8ykYrPQ8oQWMyystdsDaJtWoSZV-__1caNwgaaiYMRzCc6JFJg',
  abacaxi:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCsfyE8MLhpv4pMI3U8wwUpT0h5w4Yl4Zo4Y9mW6GUZ1xvHIKPICRkAyDHPgWxZwmF_j8w8ijZAXLrH51h3V2RkgHYFQBE7i0mv0gI0ld1gXcEDZaHXLHcibEo3I84TE_1ABFYGwBSrbNYaABp6E_3Y9Cieh2_DsKCEmHxYYGJ9CcDrKOzETRtwJNFJrj7lbObEmUBPOJGZInRqO7v0evFwbcrQgFI4ksYRDqeETZx0H8K0btb-PIrQOw',
  pao:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBUGjQqVGprjByIQqV_rC7jPfgj-wZE6Yt8YPZlcOesP77PuySFR4Djvv6ePe-Cq9qUX6Bw3VoeJw1OrSENM83CPxcC2mp70jRVFdwCGSvTezyCcxOElbLxZppeYlnzUpInZXPRDBNG_Xm6Z0_X5vMbhJw9yxysYY6tYJTHZoMIkFKM__GboqQFy-4X-fE1G6pbzh7r1-m-zSG3Q3Lqn0gEG0FIpBrYsrja1oCkwrJ6WXSmDGWuyh0Eeg',
  banana:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCmc8t04tcSPbXyzUVIkV3ye8DPPgfeX_dp7_Yup192YdbVtm59vAd6ZcimCXYdlxYJoUgtiu_XZ0fnM8gAgJdZ89OwEkLfwEPuLcJiKabVYxsMyUsRWl-CbWRwWN-jm9WiJg_TzjlHDWO51ob8lFzkDyNBKFKE9bYzAVmLhgMa1VfJKs4b48IIAL4YDhelpjMhJ1irubVOBXWN_l73CSGLfoh0U-vygwTavELhysdKOrCc7t9YS8ygsQ',
  queijo:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAPwfZMVnmIdSMO2vbx4sn8gE_Y_KhfHrWttHaRCCjdb23Pxgq9nlVqTm6cLQV57o1o2Det0CXwdu6lWREBSJy-sxDvZqgYrkEFxbqr-vV8JSGxTrxDNGS0qZfT2OfoWFOXHBVovhrh_HR6aOURS8vhliP5huVgX5EVqeWugw1VTvhRuqO6RtmiwXK3A2gCG1kjvy9ITwTLW4v6iTcgz8Q6kwFnJB9wbodFUTppUwZLyL8fo45WSNhVjQ',
} as const;

export const MOBILE_PRODUCTS: MobileProduct[] = [
  {
    id: 'm-tomate',
    name: 'Tomate Italiano Selecionado',
    rating: 4.9,
    oldLabel: 'R$ 6,99/kg',
    price: 5.45,
    unit: '/kg',
    badge: '-22%',
    badgeClass: 'bg-secondary text-white',
    img: MP.tomate,
  },
  {
    id: 'm-alcatra',
    name: 'Alcatra Bovina com Maminha',
    rating: 5.0,
    oldLabel: 'R$ 47,90/kg',
    price: 39.9,
    unit: '/kg',
    badge: 'Corte Nobre',
    badgeClass: 'bg-secondary text-white',
    img: MP.alcatra,
  },
  {
    id: 'm-abacaxi',
    name: 'Abacaxi Pérola Maduro',
    rating: 4.8,
    oldLabel: 'R$ 8,50/un',
    price: 6.99,
    unit: '/un',
    badge: 'Docinho',
    badgeClass: 'bg-[#FBA707] text-tertiary',
    img: MP.abacaxi,
  },
  {
    id: 'm-pao',
    name: 'Pão Francês Tradicional',
    rating: 4.9,
    oldLabel: 'R$ 18,90/kg',
    price: 14.9,
    unit: '/kg',
    badge: 'Quentinho',
    badgeClass: 'bg-[#11B76B] text-white',
    img: MP.pao,
  },
  {
    id: 'm-banana',
    name: 'Banana Prata de Primeira',
    rating: 4.9,
    oldLabel: 'De: R$ 6,50/kg',
    price: 4.89,
    unit: '/kg',
    badge: 'Mais Vendido',
    badgeClass: 'bg-secondary text-white',
    img: MP.banana,
    featured: true,
  },
];

export const MOBILE_FLASH = {
  category: 'Laticínios da Serra',
  title: 'Queijo Muçarela Fatiado',
  oldLabel: 'De: R$ 42,90/kg',
  priceInteger: '27',
  priceCents: ',90',
  unit: '/kg',
  discount: '-34%',
  img: MP.queijo,
  wppMsg: 'Quero a Oferta Relâmpago do Queijo Muçarela!',
  bagName: 'Queijo Muçarela Fatiado',
  bagPrice: 27.9,
};