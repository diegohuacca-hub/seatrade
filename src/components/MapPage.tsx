import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import * as turf from '@turf/turf';
import 'mapbox-gl/dist/mapbox-gl.css';
import { PERU_PORTS, WORLD_PORTS, type Port } from '@/data/ports';
import { COUNTRY_INFO } from '@/data/countryInfo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Search, X, Map as MapIcon, Globe2, Anchor, ArrowRight } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion, AnimatePresence } from 'framer-motion';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoieW9zaHVlZDEtIiwiYSI6ImNtZ2NjYXhwbzE2djYya3BuaDdqY3VjY3QifQ.Z5Kq016IqKa-EQHDWYjt0A';

// ---------- TIPOS AUXILIARES ----------
type Waypoint = {
  id: string;
  coord: [number, number];
};

type Graph = Record<string, string[]>;

// ---------- WAYPOINTS MARÍTIMOS ----------
const WAYPOINTS = [
  { id: "PAC_PERU_S_1", coord: [-82.5, -18.0] },
  { id: "PAC_PERU_S_2", coord: [-82.3, -16.5] },
  { id: "PAC_PERU_S", coord: [-82.0, -15.5] },
  { id: "PAC_PERU_C_1", coord: [-82.0, -13.0] },
  { id: "PAC_PERU_C", coord: [-81.8, -10.5] },
  { id: "PAC_PERU_C_2", coord: [-81.7, -8.5] },
  { id: "PAC_PERU_N", coord: [-81.5, -6.0] },
  { id: "PAC_PERU_N_1", coord: [-81.8, -4.0] },
  { id: "PAC_PERU_NW", coord: [-82.0, -3.0] },

  { id: "PAC_CHILE_N_1", coord: [-83.0, -20.0] },
  { id: "PAC_CHILE_N_2", coord: [-83.5, -22.0] },
  { id: "PAC_CHILE_N", coord: [-83.0, -23.0] },
  { id: "PAC_CHILE_N_3", coord: [-83.8, -25.0] },
  { id: "PAC_CHILE_C_1", coord: [-84.0, -27.5] },
  { id: "PAC_CHILE_C", coord: [-84.0, -30.0] },
  { id: "PAC_CHILE_C_2", coord: [-84.5, -32.5] },
  { id: "PAC_CHILE_C_3", coord: [-84.8, -35.0] },
  { id: "PAC_CHILE_S", coord: [-85.0, -38.0] },
  { id: "PAC_CHILE_S_1", coord: [-85.5, -40.5] },
  { id: "PAC_CHILE_S_2", coord: [-86.0, -43.0] },
  { id: "PAC_CHILE_DEEP_S", coord: [-86.0, -45.0] },
  { id: "PAC_CHILE_FAR_S_1", coord: [-86.5, -47.5] },
  { id: "PAC_CHILE_FAR_S_2", coord: [-85.0, -50.0] },
  { id: "PAC_CHILE_FAR_S_3", coord: [-82.0, -52.0] },

  { id: "STRAIT_MAGELLAN_W_1", coord: [-78.0, -52.0] },
  { id: "STRAIT_MAGELLAN_W", coord: [-75.0, -52.5] },
  { id: "STRAIT_MAGELLAN_E", coord: [-72.0, -53.0] },
  { id: "CAPE_HORN_W", coord: [-70.0, -55.0] },
  { id: "CAPE_HORN", coord: [-68.0, -56.0] },
  { id: "CAPE_HORN_E", coord: [-66.0, -57.0] },
  { id: "DRAKE_PASSAGE", coord: [-65.0, -58.0] },
  { id: "DRAKE_PASSAGE_E", coord: [-62.0, -57.0] },

  { id: "ATL_ARGENTINA_S_1", coord: [-64.0, -54.0] },
  { id: "ATL_ARGENTINA_S", coord: [-62.0, -52.0] },
  { id: "ATL_ARGENTINA_S_2", coord: [-61.0, -50.0] },
  { id: "ATL_ARGENTINA_S_3", coord: [-60.5, -48.0] },
  { id: "ATL_ARGENTINA_C_1", coord: [-60.0, -46.0] },
  { id: "ATL_ARGENTINA_C", coord: [-60.0, -45.0] },
  { id: "ATL_ARGENTINA_C_2", coord: [-59.5, -43.0] },
  { id: "ATL_ARGENTINA_C_3", coord: [-59.0, -41.0] },
  { id: "ATL_ARGENTINA_C_4", coord: [-58.5, -39.0] },
  { id: "ATL_ARGENTINA_BA_1", coord: [-58.0, -37.0] },
  { id: "ATL_ARGENTINA_BA", coord: [-57.0, -36.0] },
  { id: "ATL_URUGUAY_1", coord: [-56.0, -35.5] },
  { id: "ATL_URUGUAY", coord: [-54.0, -35.0] },

  { id: "ATL_BRASIL_S_1", coord: [-52.0, -33.0] },
  { id: "ATL_BRASIL_S", coord: [-50.0, -30.0] },
  { id: "ATL_BRASIL_S_2", coord: [-48.0, -27.0] },
  { id: "ATL_BRASIL_S_3", coord: [-47.0, -25.0] },
  { id: "ATL_BRASIL_C_1", coord: [-46.0, -23.0] },
  { id: "ATL_BRASIL_C", coord: [-45.0, -20.0] },
  { id: "ATL_BRASIL_C_2", coord: [-43.0, -17.0] },
  { id: "ATL_BRASIL_C_3", coord: [-42.0, -14.0] },
  { id: "ATL_BRASIL_N_1", coord: [-41.0, -12.0] },
  { id: "ATL_BRASIL_N", coord: [-40.0, -10.0] },
  { id: "ATL_BRASIL_N_2", coord: [-38.0, -7.0] },
  { id: "ATL_BRASIL_N_3", coord: [-36.0, -5.0] },
  { id: "ATL_BRASIL_NE_1", coord: [-35.0, -3.0] },
  { id: "ATL_BRASIL_NE_2", coord: [-34.0, -1.0] },

  { id: "PAC_ECUADOR_1", coord: [-82.3, -0.5] },
  { id: "PAC_ECUADOR", coord: [-82.5, -1.0] },
  { id: "PAC_ECUADOR_N", coord: [-82.0, 1.5] },
  { id: "PAC_ECUADOR_N_1", coord: [-81.5, 2.5] },
  { id: "PAC_COLOMBIA_S", coord: [-81.0, 3.0] },
  { id: "PAC_COLOMBIA_S_1", coord: [-80.5, 4.0] },
  { id: "PAC_COLOMBIA", coord: [-79.5, 5.5] },
  { id: "PAC_COLOMBIA_N", coord: [-79.0, 6.5] },

  { id: "PAC_PANAMA_S", coord: [-80.0, 7.0] },
  { id: "PAC_PANAMA", coord: [-81.5, 8.0] },
  { id: "CANAL_PANAMA_PAC", coord: [-79.8, 8.5] },
  { id: "CANAL_PANAMA", coord: [-79.5, 9.0] },
  { id: "CANAL_PANAMA_ATL", coord: [-79.2, 9.5] },

  { id: "CARIB_SW_1", coord: [-80.5, 10.5] },
  { id: "CARIB_SW", coord: [-81.0, 12.0] },
  { id: "CARIB_SW_2", coord: [-80.0, 13.5] },
  { id: "CARIB_CENTRAL", coord: [-78.0, 15.0] },
  { id: "CARIB_JAMAICA_1", coord: [-77.5, 16.5] },
  { id: "CARIB_JAMAICA", coord: [-77.0, 17.5] },
  { id: "CARIB_HAITI", coord: [-73.0, 19.0] },
  { id: "CARIB_CUBA_S_1", coord: [-76.0, 19.5] },
  { id: "CARIB_CUBA_S", coord: [-79.0, 20.0] },
  { id: "CARIB_CUBA_C", coord: [-80.0, 21.5] },
  { id: "CARIB_CUBA_N", coord: [-79.5, 22.5] },
  { id: "CARIB_CUBA_E", coord: [-75.0, 21.0] },
  { id: "CARIB_BAHAMAS_1", coord: [-77.0, 24.0] },
  { id: "CARIB_BAHAMAS", coord: [-76.5, 24.5] },
  { id: "CARIB_BAHAMAS_E", coord: [-74.0, 25.0] },
  { id: "CARIB_NE_1", coord: [-70.0, 19.0] },
  { id: "CARIB_NE", coord: [-65.0, 18.0] },
  { id: "CARIB_LESSER_1", coord: [-62.0, 16.5] },
  { id: "CARIB_LESSER", coord: [-60.0, 15.0] },
  { id: "CARIB_TRINIDAD", coord: [-60.5, 11.0] },

  { id: "ATL_CARIB_EXIT_1", coord: [-57.0, 13.0] },
  { id: "ATL_CARIB_EXIT", coord: [-55.0, 15.0] },
  { id: "ATL_CARIB_EXIT_2", coord: [-52.0, 12.0] },
  { id: "ATL_GUYANA", coord: [-50.0, 8.0] },
  { id: "ATL_SURINAME", coord: [-52.0, 5.0] },
  { id: "ATL_EQUATOR_1", coord: [-40.0, 2.0] },
  { id: "ATL_EQUATOR", coord: [-35.0, 0.0] },
  { id: "ATL_EQUATOR_2", coord: [-30.0, -2.0] },

  { id: "ATL_MID_S_1", coord: [-38.0, 10.0] },
  { id: "ATL_MID_S", coord: [-35.0, 15.0] },
  { id: "ATL_MID_1", coord: [-33.0, 20.0] },
  { id: "ATL_MID", coord: [-35.0, 25.0] },
  { id: "ATL_MID_2", coord: [-37.0, 30.0] },
  { id: "ATL_MID_N", coord: [-40.0, 35.0] },
  { id: "ATL_MID_N_1", coord: [-38.0, 40.0] },

  { id: "AZORES_W", coord: [-30.0, 38.5] },
  { id: "AZORES", coord: [-27.0, 38.0] },
  { id: "AZORES_E", coord: [-24.0, 37.5] },
  { id: "CAPE_VERDE_W", coord: [-26.0, 16.5] },
  { id: "CAPE_VERDE", coord: [-24.0, 16.0] },
  { id: "CAPE_VERDE_E", coord: [-22.0, 15.5] },
  { id: "CANARIAS_W", coord: [-18.0, 28.0] },
  { id: "CANARIAS", coord: [-16.0, 28.5] },
  { id: "CANARIAS_E", coord: [-14.0, 28.8] },

  { id: "PT_OFF_W", coord: [-12.0, 37.0] },
  { id: "PT_OFF", coord: [-10.0, 38.5] },
  { id: "PT_LISBOA", coord: [-9.5, 38.7] },
  { id: "PT_PORTO", coord: [-9.0, 41.0] },
  { id: "ES_GALICIA_1", coord: [-9.2, 42.5] },
  { id: "ES_GALICIA", coord: [-9.5, 43.5] },
  { id: "ES_GIJON", coord: [-6.0, 43.5] },
  { id: "BISCAY_S", coord: [-4.0, 44.0] },
  { id: "BISCAY", coord: [-5.5, 46.0] },
  { id: "BISCAY_N", coord: [-4.5, 47.5] },
  { id: "FR_ATL_1", coord: [-3.5, 47.0] },
  { id: "FR_ATL", coord: [-2.5, 48.5] },
  { id: "ENG_CHANNEL_W", coord: [-2.0, 49.5] },
  { id: "ENG_CHANNEL", coord: [-1.0, 50.0] },
  { id: "ENG_CHANNEL_E", coord: [0.5, 50.5] },
  { id: "UK_S", coord: [-5.0, 50.0] },
  { id: "UK_SW", coord: [-6.0, 52.0] },
  { id: "UK_W", coord: [-7.0, 55.0] },
  { id: "UK_NW", coord: [-6.5, 57.5] },
  { id: "IRELAND_W_1", coord: [-9.0, 51.5] },
  { id: "IRELAND_W", coord: [-10.0, 53.0] },
  { id: "IRELAND_NW", coord: [-9.5, 55.5] },
  { id: "NORTH_SEA_S", coord: [2.0, 52.0] },
  { id: "NORTH_SEA_C", coord: [3.0, 54.5] },
  { id: "NORTH_SEA_N", coord: [2.5, 58.0] },

  { id: "GIBRALTAR_W", coord: [-6.5, 36.0] },
  { id: "GIBRALTAR", coord: [-5.5, 36.1] },
  { id: "GIBRALTAR_E", coord: [-4.5, 36.2] },
  { id: "MED_ALBORAN_W", coord: [-3.5, 36.3] },
  { id: "MED_ALBORAN", coord: [-2.0, 36.5] },
  { id: "MED_ALBORAN_E", coord: [0.0, 37.0] },
  { id: "MED_W_1", coord: [2.5, 38.0] },
  { id: "MED_W", coord: [5.0, 38.5] },
  { id: "MED_W_2", coord: [7.0, 39.0] },
  { id: "MED_SARDINIA_W", coord: [8.0, 40.0] },
  { id: "MED_SARDINIA", coord: [9.0, 39.5] },
  { id: "MED_SARDINIA_E", coord: [10.0, 39.0] },
  { id: "MED_SICILY_W", coord: [11.5, 38.0] },
  { id: "MED_SICILY_S", coord: [13.0, 36.5] },
  { id: "MED_SICILY_E", coord: [15.5, 37.0] },
  { id: "MED_IONIAN_1", coord: [17.0, 37.0] },
  { id: "MED_IONIAN", coord: [18.0, 37.5] },
  { id: "MED_IONIAN_2", coord: [19.5, 37.8] },
  { id: "MED_GREECE_W", coord: [20.5, 37.0] },
  { id: "MED_GREECE", coord: [22.0, 36.5] },
  { id: "MED_GREECE_E", coord: [24.0, 36.0] },
  { id: "MED_E_1", coord: [25.5, 35.5] },
  { id: "MED_E", coord: [27.0, 35.0] },
  { id: "MED_E_2", coord: [29.0, 34.5] },
  { id: "MED_CYPRUS_W", coord: [31.0, 34.8] },
  { id: "MED_CYPRUS", coord: [32.0, 34.5] },
  { id: "MED_CYPRUS_E", coord: [33.5, 34.2] },
  { id: "SUEZ_APPROACH", coord: [33.5, 31.5] },
  { id: "SUEZ_N", coord: [32.8, 31.0] },
  { id: "SUEZ", coord: [32.5, 29.9] },
  { id: "SUEZ_S", coord: [32.6, 28.5] },
  { id: "REDSEA_N_1", coord: [33.0, 27.0] },
  { id: "REDSEA_N", coord: [33.5, 27.5] },
  { id: "REDSEA_N_2", coord: [34.5, 26.0] },
  { id: "REDSEA_N_3", coord: [35.5, 24.0] },
  { id: "REDSEA_C_1", coord: [36.5, 22.5] },
  { id: "REDSEA_C", coord: [37.0, 22.0] },
  { id: "REDSEA_C_2", coord: [38.5, 20.0] },
  { id: "REDSEA_S_1", coord: [40.0, 18.0] },
  { id: "REDSEA_S", coord: [42.0, 15.0] },
  { id: "REDSEA_S_2", coord: [43.0, 13.5] },
  { id: "BAB_MANDEB_N", coord: [43.2, 13.0] },
  { id: "BAB_MANDEB", coord: [43.5, 12.5] },
  { id: "BAB_MANDEB_S", coord: [43.8, 12.0] },

  { id: "ADEN_W_1", coord: [44.5, 12.0] },
  { id: "ADEN_W", coord: [45.0, 12.0] },
  { id: "ADEN_W_2", coord: [47.0, 12.2] },
  { id: "ADEN_C_1", coord: [48.5, 12.3] },
  { id: "ADEN_C", coord: [50.0, 12.5] },
  { id: "ADEN_C_2", coord: [52.0, 12.8] },
  { id: "ADEN_E_1", coord: [53.5, 13.0] },
  { id: "ADEN_E", coord: [55.0, 13.0] },
  { id: "ADEN_E_2", coord: [56.5, 12.5] },
  { id: "IND_SOMALIA_OFF_1", coord: [57.5, 11.0] },
  { id: "IND_SOMALIA_OFF", coord: [58.0, 10.0] },
  { id: "IND_SOMALIA_OFF_2", coord: [58.5, 8.0] },

  { id: "IND_OMAN_S", coord: [60.0, 16.0] },
  { id: "IND_OMAN", coord: [62.0, 20.0] },
  { id: "IND_OMAN_N", coord: [62.5, 22.5] },
  { id: "IND_ARABIA_N_1", coord: [64.0, 23.5] },
  { id: "IND_ARABIA_N", coord: [65.0, 23.0] },
  { id: "IND_PAKISTAN_1", coord: [66.0, 24.0] },
  { id: "IND_PAKISTAN", coord: [67.0, 23.0] },
  { id: "IND_PAKISTAN_2", coord: [67.5, 22.0] },
  { id: "IND_ARABIA_1", coord: [66.5, 20.0] },
  { id: "IND_ARABIA", coord: [67.0, 18.0] },
  { id: "IND_ARABIA_2", coord: [68.0, 16.0] },
  { id: "IND_MUMBAI_OFF_1", coord: [69.0, 18.5] },
  { id: "IND_MUMBAI_OFF", coord: [70.0, 18.0] },
  { id: "IND_MUMBAI_OFF_2", coord: [71.0, 15.0] },
  { id: "IND_INDIA_W", coord: [71.5, 12.0] },
  { id: "IND_KERALA", coord: [72.0, 9.0] },
  { id: "IND_MALDIVES_N", coord: [72.5, 6.0] },
  { id: "IND_MALDIVES", coord: [73.0, 4.0] },
  { id: "IND_MALDIVES_S", coord: [73.5, 0.0] },

  { id: "IND_SRI_LANKA_W_1", coord: [76.0, 8.0] },
  { id: "IND_SRI_LANKA_W", coord: [78.0, 7.0] },
  { id: "IND_SRI_LANKA", coord: [81.0, 6.5] },
  { id: "IND_SRI_LANKA_E", coord: [82.5, 7.5] },
  { id: "IND_BAY_BENGAL_1", coord: [85.0, 9.0] },
  { id: "IND_BAY_BENGAL", coord: [87.0, 10.0] },
  { id: "IND_BAY_BENGAL_2", coord: [89.0, 11.5] },
  { id: "IND_BENGAL_N", coord: [90.0, 15.0] },
  { id: "IND_MYANMAR", coord: [93.0, 12.0] },

  { id: "ANDAMAN_SEA_1", coord: [94.0, 10.0] },
  { id: "ANDAMAN_SEA", coord: [95.0, 8.0] },
  { id: "ANDAMAN_SEA_2", coord: [96.5, 6.5] },
  { id: "MALACCA_APPROACH_W", coord: [98.0, 5.0] },
  { id: "MMALACCA_W", coord: [99.0, 4.0] },
  { id: "MALACCA", coord: [100.0, 3.0] },
  { id: "MALACCA_C", coord: [101.0, 2.5] },
  { id: "MALACCA_E", coord: [102.0, 2.0] },
  { id: "SINGAPORE_APPROACH", coord: [103.0, 1.5] },
  { id: "SINGAPORE", coord: [103.8, 1.2] },
  { id: "SINGAPORE_E", coord: [104.5, 1.0] },

  { id: "SOUTH_CHINA_SEA_S_1", coord: [105.0, 2.0] },
  { id: "SOUTH_CHINA_SEA_S", coord: [106.0, 3.0] },
  { id: "SOUTH_CHINA_SEA_S_2", coord: [108.0, 6.0] },
  { id: "VIETNAM_COAST_1", coord: [108.5, 10.0] },
  { id: "VIETNAM_COAST", coord: [109.0, 14.0] },
  { id: "VIETNAM_COAST_2", coord: [109.5, 17.0] },
  { id: "SOUTH_CHINA_SEA_1", coord: [111.0, 10.0] },
  { id: "SOUTH_CHINA_SEA", coord: [112.0, 12.0] },
  { id: "SOUTH_CHINA_SEA_2", coord: [114.0, 15.0] },
  { id: "SOUTH_CHINA_SEA_N", coord: [116.0, 18.0] },
  { id: "SOUTH_CHINA_SEA_N_1", coord: [117.0, 19.5] },

  { id: "HONGKONG_APPROACH_1", coord: [112.5, 20.5] },
  { id: "HONGKONG_APPROACH", coord: [113.0, 21.0] },
  { id: "HONGKONG", coord: [114.2, 22.2] },
  { id: "HONGKONG_E", coord: [115.0, 22.5] },
  { id: "TAIWAN_S_1", coord: [118.0, 22.0] },
  { id: "TAIWAN_S", coord: [120.0, 22.0] },
  { id: "TAIWAN_W", coord: [119.5, 23.5] },
  { id: "TAIWAN_STRAIT", coord: [119.0, 24.5] },
  { id: "TAIWAN_N", coord: [121.0, 25.5] },
  { id: "EAST_CHINA_SEA_1", coord: [122.0, 27.0] },
  { id: "EAST_CHINA_SEA", coord: [124.0, 28.0] },
  { id: "EAST_CHINA_SEA_2", coord: [125.0, 29.5] },
  { id: "SHANGHAI_APPROACH", coord: [123.0, 30.5] },
  { id: "SHANGHAI_E", coord: [125.0, 31.0] },

  { id: "JAPAN_S_1", coord: [128.0, 30.0] },
  { id: "JAPAN_S", coord: [130.0, 31.0] },
  { id: "JAPAN_S_2", coord: [132.0, 32.5] },
  { id: "JAPAN_OSAKA_1", coord: [133.5, 33.5] },
  { id: "JAPAN_OSAKA", coord: [135.0, 34.0] },
  { id: "JAPAN_NAGOYA", coord: [137.0, 34.5] },
  { id: "JAPAN_TOKYO_1", coord: [138.5, 35.0] },
  { id: "JAPAN_TOKYO", coord: [140.0, 35.0] },
  { id: "JAPAN_E_1", coord: [141.0, 35.5] },
  { id: "JAPAN_E", coord: [142.0, 36.0] },
  { id: "JAPAN_E_2", coord: [143.0, 37.5] },
  { id: "JAPAN_N_1", coord: [141.5, 39.0] },
  { id: "JAPAN_N", coord: [141.0, 41.0] },
  { id: "JAPAN_N_2", coord: [140.5, 43.0] },
  { id: "PACIFIC_N_JP", coord: [150.0, 38.0] },
  { id: "PACIFIC_N1_1", coord: [-175.0, 39.0] },
  { id: "PACIFIC_N1", coord: [-170.0, 40.0] },
  { id: "PACIFIC_N1_2", coord: [-165.0, 41.0] },
  { id: "PACIFIC_N2_1", coord: [-162.0, 42.0] },
  { id: "PACIFIC_N2", coord: [-160.0, 42.0] },
  { id: "PACIFIC_N2_2", coord: [-157.0, 43.0] },
  { id: "PACIFIC_N3_1", coord: [-153.0, 44.0] },
  { id: "PACIFIC_N3", coord: [-150.0, 45.0] },
  { id: "PACIFIC_N3_2", coord: [-146.0, 46.5] },
  { id: "PACIFIC_N4_1", coord: [-143.0, 47.5] },
  { id: "PACIFIC_N4", coord: [-140.0, 48.0] },
  { id: "PACIFIC_N4_2", coord: [-135.0, 48.5] },
  { id: "US_W_APPROACH", coord: [-130.0, 48.0] },
  { id: "US_W_COAST_N_1", coord: [-127.0, 48.5] },
  { id: "US_W_COAST_N", coord: [-125.0, 48.0] },
  { id: "US_W_COAST_N_2", coord: [-124.5, 46.0] },
  { id: "US_W_COAST_C", coord: [-124.0, 42.0] },
  { id: "US_W_COAST_S_1", coord: [-123.0, 38.0] },
  { id: "US_W_COAST_S", coord: [-120.0, 34.0] },
  { id: "US_W_COAST_S_2", coord: [-118.0, 32.5] },

  { id: "HAWAII_N_1", coord: [-158.0, 22.0] },
  { id: "HAWAII_N", coord: [-157.0, 23.0] },
  { id: "HAWAII_C", coord: [-156.5, 21.0] },
  { id: "HAWAII_S", coord: [-156.0, 19.0] },
  { id: "HAWAII_S_1", coord: [-155.5, 18.0] },
  { id: "PACIFIC_CENTRAL_1", coord: [-153.0, 15.0] },
  { id: "PACIFIC_CENTRAL", coord: [-150.0, 10.0] },
  { id: "PACIFIC_CENTRAL_2", coord: [-145.0, 5.0] },
  { id: "PACIFIC_CENTRAL_S", coord: [-140.0, 0.0] },

  { id: "ATL_AFRICA_N_1", coord: [-19.0, 22.0] },
  { id: "ATL_AFRICA_N", coord: [-18.0, 20.0] },
  { id: "ATL_AFRICA_N_2", coord: [-17.5, 18.0] },
  { id: "AFRIC_W_1", coord: [-17.5, 17.0] },
  { id: "AFRIC_W", coord: [-17.0, 15.0] },
  { id: "AFRIC_W_2", coord: [-16.0, 13.0] },
  { id: "GUINEA_APPROACH_1", coord: [-14.0, 11.0] },
  { id: "GUINEA_APPROACH", coord: [-10.0, 8.0] },
  { id: "GUINEA_APPROACH_2", coord: [-7.0, 6.0] },
  { id: "GULF_GUINEA_W", coord: [-5.0, 4.0] },
  { id: "GULF_GUINEA_W_1", coord: [-2.0, 2.0] },
  { id: "GULF_GUINEA", coord: [0.0, 0.0] },
  { id: "GULF_GUINEA_E_1", coord: [2.5, 1.0] },
  { id: "GULF_GUINEA_E", coord: [5.0, 2.0] },
  { id: "NIGERIA_OFF_1", coord: [4.0, 3.5] },
  { id: "NIGERIA_OFF", coord: [3.5, 4.5] },
  { id: "NIGERIA_OFF_2", coord: [5.5, 4.0] },

  { id: "CAMEROON_OFF", coord: [8.0, 3.0] },
  { id: "CAMEROON_OFF_1", coord: [8.5, 1.5] },
  { id: "GABON_OFF", coord: [8.0, -1.0] },
  { id: "GABON_OFF_1", coord: [9.0, -3.0] },
  { id: "CONGO_OFF", coord: [10.0, -5.0] },
  { id: "ANGOLA_N", coord: [11.0, -6.0] },
  { id: "ANGOLA_N_1", coord: [11.5, -8.5] },
  { id: "ANGOLA_C", coord: [12.0, -10.0] },
  { id: "ANGOLA_COAST", coord: [12.0, -12.0] },
  { id: "ANGOLA_S", coord: [12.5, -15.0] },
  { id: "NAMIBIA_N", coord: [12.5, -18.0] },
  { id: "NAMIBIA_COAST", coord: [12.0, -20.0] },
  { id: "NAMIBIA_S", coord: [13.0, -24.0] },
  { id: "SOUTH_AFRICA_W_1", coord: [14.0, -27.0] },
  { id: "SOUTH_AFRICA_W", coord: [15.0, -30.0] },
  { id: "SOUTH_AFRICA_W_2", coord: [15.5, -32.5] },
  { id: "CAPE_GOOD_HOPE_W", coord: [16.0, -35.0] },
  { id: "CAPE_GOOD_HOPE", coord: [18.5, -34.5] },
  { id: "CAPE_GOOD_HOPE_E", coord: [19.5, -35.0] },
  { id: "SOUTH_AFRICA_S", coord: [20.0, -35.5] },
  { id: "SOUTH_AFRICA_S_1", coord: [23.0, -34.5] },
  { id: "SOUTH_AFRICA_E_1", coord: [25.0, -33.5] },
  { id: "SOUTH_AFRICA_E", coord: [27.0, -33.0] },
  { id: "SOUTH_AFRICA_E_2", coord: [30.0, -31.0] },
  { id: "DURBAN_OFF", coord: [32.0, -29.5] },
  { id: "MOZAMBIQUE_S_1", coord: [33.0, -27.5] },
  { id: "MOZAMBIQUE_S", coord: [35.0, -26.0] },
  { id: "MOZAMBIQUE_S_2", coord: [37.0, -23.0] },
  { id: "MOZAMBIQUE_C_1", coord: [38.5, -21.0] },
  { id: "MOZAMBIQUE_C", coord: [40.0, -20.0] },
  { id: "MOZAMBIQUE_C_2", coord: [40.5, -17.5] },
  { id: "MOZAMBIQUE", coord: [41.0, -15.0] },
  { id: "MOZAMBIQUE_N", coord: [40.5, -12.0] },
  { id: "TANZANIA_S", coord: [40.0, -10.0] },
  { id: "TANZANIA_COAST", coord: [40.0, -8.0] },
  { id: "TANZANIA_N", coord: [39.5, -5.0] },
  { id: "KENYA_S", coord: [40.0, -3.5] },
  { id: "KENYA_COAST", coord: [41.0, -2.0] },
  { id: "KENYA_N", coord: [41.5, 0.0] },
  { id: "SOMALIA_S", coord: [42.0, 2.0] },

  { id: "AUSTRALIA_NW_1", coord: [113.0, -22.0] },
  { id: "AUSTRALIA_NW", coord: [115.0, -20.0] },
  { id: "AUSTRALIA_NW_2", coord: [120.0, -18.0] },
  { id: "AUSTRALIA_N_1", coord: [125.0, -14.0] },
  { id: "AUSTRALIA_N", coord: [130.0, -12.0] },
  { id: "AUSTRALIA_N_2", coord: [136.0, -12.5] },
  { id: "AUSTRALIA_NE_1", coord: [142.0, -15.0] },
  { id: "AUSTRALIA_NE", coord: [147.0, -19.0] },
  { id: "AUSTRALIA_NE_2", coord: [150.0, -23.0] },
  { id: "AUSTRALIA_E_1", coord: [152.0, -25.0] },
  { id: "AUSTRALIA_E", coord: [154.0, -27.0] },
  { id: "AUSTRALIA_E_2", coord: [153.5, -32.0] },
  { id: "AUSTRALIA_SE_1", coord: [151.5, -35.0] },
  { id: "AUSTRALIA_SE", coord: [150.0, -38.0] },
  { id: "AUSTRALIA_SE_2", coord: [147.0, -40.0] },
  { id: "AUSTRALIA_S", coord: [144.0, -39.0] },
  { id: "AUSTRALIA_SW", coord: [138.0, -35.0] },
  { id: "AUSTRALIA_W_S", coord: [120.0, -33.0] },
  { id: "AUSTRALIA_W", coord: [115.0, -30.0] }
];





// ---------- CONEXIONES ENTRE WAYPOINTS ----------
const MARITIME_EDGES: Array<[string, string]> = [
// ===== PERÚ COSTA =====
["PAC_PERU_S_2", "PAC_PERU_S_1"],
["PAC_PERU_S_1", "PAC_PERU_S"],
["PAC_PERU_S", "PAC_PERU_C_1"],
["PAC_PERU_C_1", "PAC_PERU_C"],
["PAC_PERU_C", "PAC_PERU_C_2"],
["PAC_PERU_C_2", "PAC_PERU_N"],
["PAC_PERU_N", "PAC_PERU_N_1"],
["PAC_PERU_N_1", "PAC_PERU_NW"],
// ===== PERÚ A CHILE =====
["PAC_PERU_S_2", "PAC_CHILE_N_1"],
["PAC_CHILE_N_1", "PAC_CHILE_N_2"],
["PAC_CHILE_N_2", "PAC_CHILE_N"],
["PAC_CHILE_N", "PAC_CHILE_N_3"],
["PAC_CHILE_N_3", "PAC_CHILE_C_1"],
["PAC_CHILE_C_1", "PAC_CHILE_C"],
["PAC_CHILE_C", "PAC_CHILE_C_2"],
["PAC_CHILE_C_2", "PAC_CHILE_C_3"],
["PAC_CHILE_C_3", "PAC_CHILE_S"],
["PAC_CHILE_S", "PAC_CHILE_S_1"],
["PAC_CHILE_S_1", "PAC_CHILE_S_2"],
["PAC_CHILE_S_2", "PAC_CHILE_DEEP_S"],
["PAC_CHILE_DEEP_S", "PAC_CHILE_FAR_S_1"],
["PAC_CHILE_FAR_S_1", "PAC_CHILE_FAR_S_2"],
["PAC_CHILE_FAR_S_2", "PAC_CHILE_FAR_S_3"],
// ===== ESTRECHO DE MAGALLANES Y CABO DE HORNOS =====
["PAC_CHILE_FAR_S_3", "STRAIT_MAGELLAN_W_1"],
["STRAIT_MAGELLAN_W_1", "STRAIT_MAGELLAN_W"],
["STRAIT_MAGELLAN_W", "STRAIT_MAGELLAN_E"],
["STRAIT_MAGELLAN_E", "CAPE_HORN_W"],
["CAPE_HORN_W", "CAPE_HORN"],
["CAPE_HORN", "CAPE_HORN_E"],
["CAPE_HORN_E", "DRAKE_PASSAGE"],
["DRAKE_PASSAGE", "DRAKE_PASSAGE_E"],
// ===== ATLÁNTICO SUR - ARGENTINA =====
["DRAKE_PASSAGE_E", "ATL_ARGENTINA_S_1"],
["ATL_ARGENTINA_S_1", "ATL_ARGENTINA_S"],
["ATL_ARGENTINA_S", "ATL_ARGENTINA_S_2"],
["ATL_ARGENTINA_S_2", "ATL_ARGENTINA_S_3"],
["ATL_ARGENTINA_S_3", "ATL_ARGENTINA_C_1"],
["ATL_ARGENTINA_C_1", "ATL_ARGENTINA_C"],
["ATL_ARGENTINA_C", "ATL_ARGENTINA_C_2"],
["ATL_ARGENTINA_C_2", "ATL_ARGENTINA_C_3"],
["ATL_ARGENTINA_C_3", "ATL_ARGENTINA_C_4"],
["ATL_ARGENTINA_C_4", "ATL_ARGENTINA_BA_1"],
["ATL_ARGENTINA_BA_1", "ATL_ARGENTINA_BA"],
["ATL_ARGENTINA_BA", "ATL_URUGUAY_1"],
["ATL_URUGUAY_1", "ATL_URUGUAY"],
// ===== ATLÁNTICO SUR - BRASIL =====
["ATL_URUGUAY", "ATL_BRASIL_S_1"],
["ATL_BRASIL_S_1", "ATL_BRASIL_S"],
["ATL_BRASIL_S", "ATL_BRASIL_S_2"],
["ATL_BRASIL_S_2", "ATL_BRASIL_S_3"],
["ATL_BRASIL_S_3", "ATL_BRASIL_C_1"],
["ATL_BRASIL_C_1", "ATL_BRASIL_C"],
["ATL_BRASIL_C", "ATL_BRASIL_C_2"],
["ATL_BRASIL_C_2", "ATL_BRASIL_C_3"],
["ATL_BRASIL_C_3", "ATL_BRASIL_N_1"],
["ATL_BRASIL_N_1", "ATL_BRASIL_N"],
["ATL_BRASIL_N", "ATL_BRASIL_N_2"],
["ATL_BRASIL_N_2", "ATL_BRASIL_N_3"],
["ATL_BRASIL_N_3", "ATL_BRASIL_NE_1"],
["ATL_BRASIL_NE_1", "ATL_BRASIL_NE_2"],
// ===== ECUADOR Y COLOMBIA =====
["PAC_PERU_NW", "PAC_ECUADOR_1"],
["PAC_ECUADOR_1", "PAC_ECUADOR"],
["PAC_ECUADOR", "PAC_ECUADOR_N"],
["PAC_ECUADOR_N", "PAC_ECUADOR_N_1"],
["PAC_ECUADOR_N_1", "PAC_COLOMBIA_S"],
["PAC_COLOMBIA_S", "PAC_COLOMBIA_S_1"],
["PAC_COLOMBIA_S_1", "PAC_COLOMBIA"],
["PAC_COLOMBIA", "PAC_COLOMBIA_N"],
// ===== PANAMÁ =====
["PAC_COLOMBIA_N", "PAC_PANAMA_S"],
["PAC_PANAMA_S", "PAC_PANAMA"],
["PAC_PANAMA", "CANAL_PANAMA_PAC"],
["CANAL_PANAMA_PAC", "CANAL_PANAMA"],
["CANAL_PANAMA", "CANAL_PANAMA_ATL"],
// ===== CARIBE =====
["CANAL_PANAMA_ATL", "CARIB_SW_1"],
["CARIB_SW_1", "CARIB_SW"],
["CARIB_SW", "CARIB_SW_2"],
["CARIB_SW_2", "CARIB_CENTRAL"],
["CARIB_CENTRAL", "CARIB_JAMAICA_1"],
["CARIB_JAMAICA_1", "CARIB_JAMAICA"],
["CARIB_JAMAICA", "CARIB_HAITI"],
["CARIB_HAITI", "CARIB_CUBA_S_1"],
["CARIB_CUBA_S_1", "CARIB_CUBA_S"],
["CARIB_CUBA_S", "CARIB_CUBA_C"],
["CARIB_CUBA_C", "CARIB_CUBA_N"],
["CARIB_CUBA_N", "CARIB_CUBA_E"],
["CARIB_CUBA_E", "CARIB_BAHAMAS_1"],
["CARIB_BAHAMAS_1", "CARIB_BAHAMAS"],
["CARIB_BAHAMAS", "CARIB_BAHAMAS_E"],
["CARIB_CENTRAL", "CARIB_NE_1"],
["CARIB_NE_1", "CARIB_NE"],
["CARIB_NE", "CARIB_LESSER_1"],
["CARIB_LESSER_1", "CARIB_LESSER"],
["CARIB_LESSER", "CARIB_TRINIDAD"],
// ===== ATLÁNTICO - TRANSICIÓN CARIBE =====
["CARIB_TRINIDAD", "ATL_CARIB_EXIT_1"],
["CARIB_BAHAMAS_E", "ATL_MID_N"],
["ATL_CARIB_EXIT_1", "ATL_CARIB_EXIT"],
["ATL_CARIB_EXIT", "ATL_CARIB_EXIT_2"],
["ATL_CARIB_EXIT_2", "ATL_GUYANA"],
["ATL_GUYANA", "ATL_SURINAME"],
["ATL_BRASIL_NE_2", "ATL_SURINAME"],
["ATL_BRASIL_NE_2", "ATL_EQUATOR_1"],
["ATL_EQUATOR_1", "ATL_EQUATOR"],
["ATL_EQUATOR", "ATL_EQUATOR_2"],
// ===== ATLÁNTICO MEDIO =====
["ATL_CARIB_EXIT", "ATL_MID_S_1"],
["ATL_MID_S_1", "ATL_MID_S"],
["ATL_MID_S", "ATL_MID_1"],
["ATL_MID_1", "ATL_MID"],
["ATL_MID", "ATL_MID_2"],
["ATL_MID_2", "ATL_MID_N"],
["ATL_MID_N", "ATL_MID_N_1"],
// ===== ISLAS ATLÁNTICAS =====
["ATL_MID_N_1", "AZORES_W"],
["AZORES_W", "AZORES"],
["AZORES", "AZORES_E"],
["ATL_MID_S", "CAPE_VERDE_W"],
["CAPE_VERDE_W", "CAPE_VERDE"],
["CAPE_VERDE", "CAPE_VERDE_E"],
["CAPE_VERDE_E", "CANARIAS_W"],
["CANARIAS_W", "CANARIAS"],
["CANARIAS", "CANARIAS_E"],
// ===== EUROPA ATLÁNTICA =====
["AZORES_E", "PT_OFF_W"],
["CANARIAS_E", "PT_OFF_W"],
["PT_OFF_W", "PT_OFF"],
["PT_OFF", "PT_LISBOA"],
["PT_LISBOA", "PT_PORTO"],
["PT_PORTO", "ES_GALICIA_1"],
["ES_GALICIA_1", "ES_GALICIA"],
["ES_GALICIA", "ES_GIJON"],
["ES_GIJON", "BISCAY_S"],
["BISCAY_S", "BISCAY"],
["BISCAY", "BISCAY_N"],
["BISCAY_N", "FR_ATL_1"],
["FR_ATL_1", "FR_ATL"],
["FR_ATL", "ENG_CHANNEL_W"],
["ENG_CHANNEL_W", "ENG_CHANNEL"],
["ENG_CHANNEL", "ENG_CHANNEL_E"],
["ENG_CHANNEL_E", "NORTH_SEA_S"],
["NORTH_SEA_S", "NORTH_SEA_C"],
["NORTH_SEA_C", "NORTH_SEA_N"],
["ENG_CHANNEL_W", "UK_S"],
["UK_S", "UK_SW"],
["UK_SW", "UK_W"],
["UK_W", "UK_NW"],
["UK_S", "IRELAND_W_1"],
["IRELAND_W_1", "IRELAND_W"],
["IRELAND_W", "IRELAND_NW"],
// ===== MEDITERRÁNEO =====
["PT_OFF", "GIBRALTAR_W"],
["CANARIAS_E", "GIBRALTAR_W"],
["GIBRALTAR_W", "GIBRALTAR"],
["GIBRALTAR", "GIBRALTAR_E"],
["GIBRALTAR_E", "MED_ALBORAN_W"],
["MED_ALBORAN_W", "MED_ALBORAN"],
["MED_ALBORAN", "MED_ALBORAN_E"],
["MED_ALBORAN_E", "MED_W_1"],
["MED_W_1", "MED_W"],
["MED_W", "MED_W_2"],
["MED_W_2", "MED_SARDINIA_W"],
["MED_SARDINIA_W", "MED_SARDINIA"],
["MED_SARDINIA", "MED_SARDINIA_EReintentarDContinuar"],
["MED_SARDINIA_E", "MED_SICILY_W"],
["MED_SICILY_W", "MED_SICILY_S"],
["MED_SICILY_S", "MED_SICILY_E"],
["MED_SICILY_E", "MED_IONIAN_1"],
["MED_IONIAN_1", "MED_IONIAN"],
["MED_IONIAN", "MED_IONIAN_2"],
["MED_IONIAN_2", "MED_GREECE_W"],
["MED_GREECE_W", "MED_GREECE"],
["MED_GREECE", "MED_GREECE_E"],
["MED_GREECE_E", "MED_E_1"],
["MED_E_1", "MED_E"],
["MED_E", "MED_E_2"],
["MED_E_2", "MED_CYPRUS_W"],
["MED_CYPRUS_W", "MED_CYPRUS"],
["MED_CYPRUS", "MED_CYPRUS_E"],
["MED_CYPRUS_E", "SUEZ_APPROACH"],
["SUEZ_APPROACH", "SUEZ_N"],
["SUEZ_N", "SUEZ"],
["SUEZ", "SUEZ_S"],
// ===== MAR ROJO =====
["SUEZ_S", "REDSEA_N_1"],
["REDSEA_N_1", "REDSEA_N"],
["REDSEA_N", "REDSEA_N_2"],
["REDSEA_N_2", "REDSEA_N_3"],
["REDSEA_N_3", "REDSEA_C_1"],
["REDSEA_C_1", "REDSEA_C"],
["REDSEA_C", "REDSEA_C_2"],
["REDSEA_C_2", "REDSEA_S_1"],
["REDSEA_S_1", "REDSEA_S"],
["REDSEA_S", "REDSEA_S_2"],
["REDSEA_S_2", "BAB_MANDEB_N"],
["BAB_MANDEB_N", "BAB_MANDEB"],
["BAB_MANDEB", "BAB_MANDEB_S"],
// ===== ÍNDICO - GOLFO DE ADÉN =====
["BAB_MANDEB_S", "ADEN_W_1"],
["ADEN_W_1", "ADEN_W"],
["ADEN_W", "ADEN_W_2"],
["ADEN_W_2", "ADEN_C_1"],
["ADEN_C_1", "ADEN_C"],
["ADEN_C", "ADEN_C_2"],
["ADEN_C_2", "ADEN_E_1"],
["ADEN_E_1", "ADEN_E"],
["ADEN_E", "ADEN_E_2"],
["ADEN_E_2", "IND_SOMALIA_OFF_1"],
["IND_SOMALIA_OFF_1", "IND_SOMALIA_OFF"],
["IND_SOMALIA_OFF", "IND_SOMALIA_OFF_2"],
// ===== ÍNDICO - ARABIA =====
["IND_SOMALIA_OFF_2", "IND_OMAN_S"],
["IND_OMAN_S", "IND_OMAN"],
["IND_OMAN", "IND_OMAN_N"],
["IND_OMAN_N", "IND_ARABIA_N_1"],
["IND_ARABIA_N_1", "IND_ARABIA_N"],
["IND_ARABIA_N", "IND_PAKISTAN_1"],
["IND_PAKISTAN_1", "IND_PAKISTAN"],
["IND_PAKISTAN", "IND_PAKISTAN_2"],
["IND_OMAN", "IND_ARABIA_1"],
["IND_ARABIA_1", "IND_ARABIA"],
["IND_ARABIA", "IND_ARABIA_2"],
["IND_ARABIA_2", "IND_MUMBAI_OFF_1"],
["IND_MUMBAI_OFF_1", "IND_MUMBAI_OFF"],
["IND_MUMBAI_OFF", "IND_MUMBAI_OFF_2"],
["IND_MUMBAI_OFF_2", "IND_INDIA_W"],
["IND_INDIA_W", "IND_KERALA"],
["IND_KERALA", "IND_MALDIVES_N"],
["IND_MALDIVES_N", "IND_MALDIVES"],
["IND_MALDIVES", "IND_MALDIVES_S"],
// ===== ÍNDICO - SRI LANKA =====
["IND_MALDIVES_S", "IND_SRI_LANKA_W_1"],
["IND_SRI_LANKA_W_1", "IND_SRI_LANKA_W"],
["IND_SRI_LANKA_W", "IND_SRI_LANKA"],
["IND_SRI_LANKA", "IND_SRI_LANKA_E"],
["IND_SRI_LANKA_E", "IND_BAY_BENGAL_1"],
["IND_BAY_BENGAL_1", "IND_BAY_BENGAL"],
["IND_BAY_BENGAL", "IND_BAY_BENGAL_2"],
["IND_BAY_BENGAL_2", "IND_BENGAL_N"],
["IND_BENGAL_N", "IND_MYANMAR"],
// ===== SUDESTE ASIÁTICO =====
["IND_MYANMAR", "ANDAMAN_SEA_1"],
["ANDAMAN_SEA_1", "ANDAMAN_SEA"],
["ANDAMAN_SEA", "ANDAMAN_SEA_2"],
["ANDAMAN_SEA_2", "MALACCA_APPROACH_W"],
["MALACCA_APPROACH_W", "MALACCA_W"],
["MALACCA_W", "MALACCA"],
["MALACCA", "MALACCA_C"],
["MALACCA_C", "MALACCA_E"],
["MALACCA_E", "SINGAPORE_APPROACH"],
["SINGAPORE_APPROACH", "SINGAPORE"],
["SINGAPORE", "SINGAPORE_E"],
["SINGAPORE_E", "SOUTH_CHINA_SEA_S_1"],
["SOUTH_CHINA_SEA_S_1", "SOUTH_CHINA_SEA_S"],
["SOUTH_CHINA_SEA_S", "SOUTH_CHINA_SEA_S_2"],
["SOUTH_CHINA_SEA_S_2", "VIETNAM_COAST_1"],
["VIETNAM_COAST_1", "VIETNAM_COAST"],
["VIETNAM_COAST", "VIETNAM_COAST_2"],
["SOUTH_CHINA_SEA_S_2", "SOUTH_CHINA_SEA_1"],
["SOUTH_CHINA_SEA_1", "SOUTH_CHINA_SEA"],
["SOUTH_CHINA_SEA", "SOUTH_CHINA_SEA_2"],
["SOUTH_CHINA_SEA_2", "SOUTH_CHINA_SEA_N"],
["SOUTH_CHINA_SEA_N", "SOUTH_CHINA_SEA_N_1"],
// ===== CHINA =====
["SOUTH_CHINA_SEA_N_1", "HONGKONG_APPROACH_1"],
["HONGKONG_APPROACH_1", "HONGKONG_APPROACH"],
["HONGKONG_APPROACH", "HONGKONG"],
["HONGKONG", "HONGKONG_E"],
["HONGKONG_E", "TAIWAN_S_1"],
["TAIWAN_S_1", "TAIWAN_S"],
["TAIWAN_S", "TAIWAN_W"],
["TAIWAN_W", "TAIWAN_STRAIT"],
["TAIWAN_STRAIT", "TAIWAN_N"],
["TAIWAN_N", "EAST_CHINA_SEA_1"],
["EAST_CHINA_SEA_1", "EAST_CHINA_SEA"],
["EAST_CHINA_SEA", "EAST_CHINA_SEA_2"],
["EAST_CHINA_SEA_2", "SHANGHAI_APPROACH"],
["SHANGHAI_APPROACH", "SHANGHAI_E"],
// ===== JAPÓN =====
["TAIWAN_S", "JAPAN_S_1"],
["JAPAN_S_1", "JAPAN_S"],
["JAPAN_S", "JAPAN_S_2"],
["JAPAN_S_2", "JAPAN_OSAKA_1"],
["JAPAN_OSAKA_1", "JAPAN_OSAKA"],
["JAPAN_OSAKA", "JAPAN_NAGOYA"],
["JAPAN_NAGOYA", "JAPAN_TOKYO_1"],
["JAPAN_TOKYO_1", "JAPAN_TOKYO"],
["JAPAN_TOKYO", "JAPAN_E_1"],
["JAPAN_E_1", "JAPAN_E"],
["JAPAN_E", "JAPAN_E_2"],
["JAPAN_E_2", "JAPAN_N_1"],
["JAPAN_N_1", "JAPAN_N"],
["JAPAN_N", "JAPAN_N_2"],
// ===== PACÍFICO NORTE =====
["JAPAN_E", "PACIFIC_N_JP"],
["PACIFIC_N_JP", "PACIFIC_N1_1"],
["PACIFIC_N1_1", "PACIFIC_N1"],
["PACIFIC_N1", "PACIFIC_N1_2"],
["PACIFIC_N1_2", "PACIFIC_N2_1"],
["PACIFIC_N2_1", "PACIFIC_N2"],
["PACIFIC_N2", "PACIFIC_N2_2"],
["PACIFIC_N2_2", "PACIFIC_N3_1"],
["PACIFIC_N3_1", "PACIFIC_N3"],
["PACIFIC_N3", "PACIFIC_N3_2"],
["PACIFIC_N3_2", "PACIFIC_N4_1"],
["PACIFIC_N4_1", "PACIFIC_N4"],
["PACIFIC_N4", "PACIFIC_N4_2"],
["PACIFIC_N4_2", "US_W_APPROACH"],
["US_W_APPROACH", "US_W_COAST_N_1"],
["US_W_COAST_N_1", "US_W_COAST_N"],
["US_W_COAST_N", "US_W_COAST_N_2"],
["US_W_COAST_N_2", "US_W_COAST_C"],
["US_W_COAST_C", "US_W_COAST_S_1"],
["US_W_COAST_S_1", "US_W_COAST_S"],
["US_W_COAST_S", "US_W_COAST_S_2"],
// ===== PACÍFICO CENTRAL - HAWAII =====
["PACIFIC_N2", "HAWAII_N_1"],
["HAWAII_N_1", "HAWAII_N"],
["HAWAII_N", "HAWAII_C"],
["HAWAII_C", "HAWAII_S"],
["HAWAII_S", "HAWAII_S_1"],
["HAWAII_S_1", "PACIFIC_CENTRAL_1"],
["PACIFIC_CENTRAL_1", "PACIFIC_CENTRAL"],
["PACIFIC_CENTRAL", "PACIFIC_CENTRAL_2"],
["PACIFIC_CENTRAL_2", "PACIFIC_CENTRAL_S"],
["PACIFIC_CENTRAL_S", "PAC_ECUADOR"],
// ===== ÁFRICA OCCIDENTAL =====
["ATL_EQUATOR_2", "ATL_AFRICA_N_1"],
["ATL_AFRICA_N_1", "ATL_AFRICA_N"],
["ATL_AFRICA_N", "ATL_AFRICA_N_2"],
["ATL_AFRICA_N_2", "AFRIC_W_1"],
["AFRIC_W_1", "AFRIC_W"],
["AFRIC_W", "AFRIC_W_2"],
["AFRIC_W_2", "GUINEA_APPROACH_1"],
["GUINEA_APPROACH_1", "GUINEA_APPROACH"],
["GUINEA_APPROACH", "GUINEA_APPROACH_2"],
["GUINEA_APPROACH_2", "GULF_GUINEA_W"],
["GULF_GUINEA_W", "GULF_GUINEA_W_1"],
["GULF_GUINEA_W_1", "GULF_GUINEA"],
["GULF_GUINEA", "GULF_GUINEA_E_1"],
["GULF_GUINEA_E_1", "GULF_GUINEA_E"],
["GULF_GUINEA_E", "NIGERIA_OFF_1"],
["NIGERIA_OFF_1", "NIGERIA_OFF"],
["NIGERIA_OFF", "NIGERIA_OFF_2"],
// ===== ÁFRICA CENTRAL Y SUR =====
["NIGERIA_OFF_2", "CAMEROON_OFF"],
["CAMEROON_OFF", "CAMEROON_OFF_1"],
["CAMEROON_OFF_1", "GABON_OFF"],
["GABON_OFF", "GABON_OFF_1"],
["GABON_OFF_1", "CONGO_OFF"],
["CONGO_OFF", "ANGOLA_N"],
["ANGOLA_N", "ANGOLA_N_1"],
["ANGOLA_N_1", "ANGOLA_C"],
["ANGOLA_C", "ANGOLA_COAST"],
["ANGOLA_COAST", "ANGOLA_S"],
["ANGOLA_S", "NAMIBIA_N"],
["NAMIBIA_N", "NAMIBIA_COAST"],
["NAMIBIA_COAST", "NAMIBIA_S"],
["NAMIBIA_S", "SOUTH_AFRICA_W_1"],
["SOUTH_AFRICA_W_1", "SOUTH_AFRICA_W"],
["SOUTH_AFRICA_W", "SOUTH_AFRICA_W_2"],
["SOUTH_AFRICA_W_2", "CAPE_GOOD_HOPE_W"],
["CAPE_GOOD_HOPE_W", "CAPE_GOOD_HOPE"],
["CAPE_GOOD_HOPE", "CAPE_GOOD_HOPE_E"],
["CAPE_GOOD_HOPE_E", "SOUTH_AFRICA_S"],
["SOUTH_AFRICA_S", "SOUTH_AFRICA_S_1"],
["SOUTH_AFRICA_S_1", "SOUTH_AFRICA_E_1"],
["SOUTH_AFRICA_E_1", "SOUTH_AFRICA_E"],
["SOUTH_AFRICA_E", "SOUTH_AFRICA_E_2"],
["SOUTH_AFRICA_E_2", "DURBAN_OFF"],
["DURBAN_OFF", "MOZAMBIQUE_S_1"],
["MOZAMBIQUE_S_1", "MOZAMBIQUE_S"],
["MOZAMBIQUE_S", "MOZAMBIQUE_S_2"],
["MOZAMBIQUE_S_2", "MOZAMBIQUE_C_1"],
["MOZAMBIQUE_C_1", "MOZAMBIQUE_C"],
["MOZAMBIQUE_C", "MOZAMBIQUE_C_2"],
["MOZAMBIQUE_C_2", "MOZAMBIQUE"],
["MOZAMBIQUE", "MOZAMBIQUE_N"],
["MOZAMBIQUE_N", "TANZANIA_S"],
["TANZANIA_S", "TANZANIA_COAST"],
["TANZANIA_COAST", "TANZANIA_N"],
["TANZANIA_N", "KENYA_S"],
["KENYA_S", "KENYA_COAST"],
["KENYA_COAST", "KENYA_N"],
["KENYA_N", "SOMALIA_S"],
["SOMALIA_S", "IND_SOMALIA_OFF_2"],
// Conexión África-India por Maldivas
["MOZAMBIQUE", "IND_MALDIVES"],
// ===== AUSTRALIA =====
["SINGAPORE", "AUSTRALIA_NW_1"],
["AUSTRALIA_NW_1", "AUSTRALIA_NW"],
["AUSTRALIA_NW", "AUSTRALIA_NW_2"],
["AUSTRALIA_NW_2", "AUSTRALIA_N_1"],
["AUSTRALIA_N_1", "AUSTRALIA_N"],
["AUSTRALIA_N", "AUSTRALIA_N_2"],
["AUSTRALIA_N_2", "AUSTRALIA_NE_1"],
["AUSTRALIA_NE_1", "AUSTRALIA_NE"],
["AUSTRALIA_NE", "AUSTRALIA_NE_2"],
["AUSTRALIA_NE_2", "AUSTRALIA_E_1"],
["AUSTRALIA_E_1", "AUSTRALIA_E"],
["AUSTRALIA_E", "AUSTRALIA_E_2"],
["AUSTRALIA_E_2", "AUSTRALIA_SE_1"],
["AUSTRALIA_SE_1", "AUSTRALIA_SE"],
["AUSTRALIA_SE", "AUSTRALIA_SE_2"],
["AUSTRALIA_SE_2", "AUSTRALIA_S"],
["AUSTRALIA_S", "AUSTRALIA_SW"],
["AUSTRALIA_SW", "AUSTRALIA_W_S"],
["AUSTRALIA_W_S", "AUSTRALIA_W"],
["AUSTRALIA_W", "AUSTRALIA_NW"],
["AUSTRALIA_SE", "PACIFIC_CENTRAL"],
];


// ---------- GRAFO Y RUTA (Dijkstra súper simple) ----------
const buildGraph = (): Graph => {
  const graph: Graph = {};
  MARITIME_EDGES.forEach(([a, b]) => {
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  });
  return graph;
};

const findRoute = (graph: Graph, start: string, end: string): string[] | null => {
  const queue: [string, string[]][] = [[start, [start]]];
  const visited = new Set<string>();

  while (queue.length) {
    const [node, path] = queue.shift() as [string, string[]];
    if (node === end) return path;
    visited.add(node);

    for (const neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        queue.push([neighbor, [...path, neighbor]]);
      }
    }
  }
  return null;
};

export const MapPage = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const searchCardRef = useRef<HTMLDivElement>(null);

  const [mapType, setMapType] = useState<'3d' | '2d'>('3d');
  const [originPort, setOriginPort] = useState<string>('callao');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(true);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedPort, setSelectedPort] = useState<Port | null>(null);
  const [routeData, setRouteData] = useState<any>(null);
  const [currentRouteKey, setCurrentRouteKey] = useState(0);

  const normalizeText = (text: string) =>
    text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  // Filtrado de puertos solo si se ingresa al menos 1 caracter
  const filteredPorts = searchTerm.trim().length > 0
    ? WORLD_PORTS.filter((port) => {
        const term = normalizeText(searchTerm.trim());
        const country = normalizeText(port.country);
        const name = normalizeText(port.name);

        return country.includes(term) || name.includes(term);
      }).sort((a, b) => {
        const term = normalizeText(searchTerm.trim());

        const aName = normalizeText(a.name);
        const bName = normalizeText(b.name);
        const aCountry = normalizeText(a.country);
        const bCountry = normalizeText(b.country);

        const aStarts = aName.startsWith(term) || aCountry.startsWith(term);
        const bStarts = bName.startsWith(term) || bCountry.startsWith(term);

        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;

        return aName.localeCompare(bName);
      })
    : [];

  // Inicialización del mapa
  useEffect(() => {
    if (!mapContainer.current || map.current) return;
    mapboxgl.accessToken = MAPBOX_TOKEN;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      projection: mapType === '3d' ? 'globe' : 'mercator',
      center: mapType === '3d' ? [0, 90] : [-77.1474, -12.0464], // Polo Norte / Perú
      zoom: mapType === '3d' ? 1.5 : 2,
      pitch: 0,
      bearing: 0,
      attributionControl: false
    });

    map.current.addControl(
      new mapboxgl.NavigationControl({ visualizePitch: true }),
      'bottom-right'
    );

    map.current.on('load', () => {
      // Marcadores de puertos peruanos (origen)
      PERU_PORTS.forEach((port) => {
        const el = document.createElement('div');
        el.className = 'port-marker-origin';
        el.style.cssText =
          'width: 16px; height: 16px; background: #D97706; border: 2px solid white; border-radius: 50%; cursor: pointer; box-shadow: 0 0 10px rgba(217, 119, 6, 0.8);';
        new mapboxgl.Marker(el)
          .setLngLat(port.coordinates)
          .setPopup(
            new mapboxgl.Popup().setHTML(
              `<strong>${port.name}</strong><br/>${port.country}`
            )
          )
          .addTo(map.current!);
      });

      // Marcadores de puertos destino
      WORLD_PORTS.forEach((port) => {
        const el = document.createElement('div');
        el.className = 'port-marker-destination';
        el.style.cssText =
          'width: 10px; height: 10px; background: #0EA5E9; border: 1px solid white; border-radius: 50%; cursor: pointer;';
        el.addEventListener('click', () => handlePortClick(port));
        new mapboxgl.Marker(el)
          .setLngLat(port.coordinates)
          .setPopup(
            new mapboxgl.Popup().setHTML(
              `<strong>${port.name}</strong><br/>${port.country}`
            )
          )
          .addTo(map.current!);
      });
    });

    return () => map.current?.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchCardRef.current &&
        !searchCardRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest('[data-radix-popper-content-wrapper]')
      ) {
        setShowFilters(false);
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Cambiar tipo de mapa (2D / 3D)
  useEffect(() => {
    if (map.current) {
      map.current.setProjection(mapType === '3d' ? 'globe' : 'mercator');
      map.current.setPitch(0);
      map.current.setBearing(0);
      if (mapType === '3d') {
        map.current.easeTo({ center: [0, 90], zoom: 1.5, duration: 1000 });
      }
    }
  }, [mapType]);
type Zone = "safe" | "canal" | "risk";

function classifyZone(lng: number, lat: number): Zone {
  // ⚠️ ZONA DE RIESGO: Golfo de Adén / Somalia
  if (lng > 40 && lng < 55 && lat > 5 && lat < 18) {
    return "risk";
  }

  // ⚠️ ZONA DE RIESGO: Golfo de Guinea
  if (lng > -10 && lng < 15 && lat > -5 && lat < 10) {
    return "risk";
  }

  // ⚠️ ZONA DE RIESGO: Estrecho de Malaca aproximado
  if (lng > 96 && lng < 106 && lat > -2 && lat < 8) {
    return "risk";
  }

  // 🟡 CANALES OBLIGATORIOS: Panamá
  if (lng > -82 && lng < -78 && lat > 6 && lat < 11) {
    return "canal";
  }

  // 🟡 CANALES OBLIGATORIOS: Suez
  if (lng > 30 && lng < 34 && lat > 27 && lat < 32) {
    return "canal";
  }

  // Por defecto: ruta segura
  return "safe";
}

function splitRouteByZone(curved: any) {
  const coords: [number, number][] = curved.geometry.coordinates;
  if (!coords || coords.length < 2) return { type: "FeatureCollection", features: [] };

  const features: any[] = [];

  let currentZone: Zone = classifyZone(coords[0][0], coords[0][1]);
  let currentCoords: [number, number][] = [coords[0]];

  for (let i = 1; i < coords.length; i++) {
    const [lng, lat] = coords[i];
    const zone = classifyZone(lng, lat);

    // Si sigue en la misma zona, añadimos al segmento
    if (zone === currentZone) {
      currentCoords.push(coords[i]);
    } else {
      // Cerramos el segmento actual
      if (currentCoords.length > 1) {
        features.push({
          type: "Feature",
          properties: { zone: currentZone },
          geometry: {
            type: "LineString",
            coordinates: currentCoords
          }
        });
      }
      // Empezamos nuevo segmento
      currentZone = zone;
      currentCoords = [coords[i - 1], coords[i]];
    }
  }

  // Último segmento
  if (currentCoords.length > 1) {
    features.push({
      type: "Feature",
      properties: { zone: currentZone },
      geometry: {
        type: "LineString",
        coordinates: currentCoords
      }
    });
  }

  return {
    type: "FeatureCollection",
    features
  };
}

  // ---------- RUTA MARÍTIMA ----------
  const showRoute = (destinationPort: Port, origin: Port) => {
    if (!map.current) return;

    // Si existe una ruta previa, eliminarla
    if (map.current.getSource('routeLine')) {
      if (map.current.getLayer('routeLayer')) {
        map.current.removeLayer('routeLayer');
      }
      map.current.removeSource('routeLine');
    }

    const start = turf.point(origin.coordinates);
    const end = turf.point(destinationPort.coordinates);

    const graph = buildGraph();

    // waypoint más cercano al origen
    const nearestStart = WAYPOINTS.reduce<{ wp: Waypoint; d: number } | null>(
      (best, wp) => {
        const d = turf.distance(start, turf.point(wp.coord));
        return !best || d < best.d ? { wp, d } : best;
      },
      null
    );
    
    // waypoint más cercano al destino
    const nearestEnd = WAYPOINTS.reduce<{ wp: Waypoint; d: number } | null>(
      (best, wp) => {
        const d = turf.distance(end, turf.point(wp.coord));
        return !best || d < best.d ? { wp, d } : best;
      },
      null
    );

    if (!nearestStart || !nearestEnd) {
      console.error('No se encontraron waypoints cercanos.');
      return;
    }

    const pathIds = findRoute(graph, nearestStart.wp.id, nearestEnd.wp.id);

    if (!pathIds) {
      console.error('No existe ruta marítima en el grafo.');
      return;
    }

    // coordenadas finales
    const fullRouteCoords: [number, number][] = [
      origin.coordinates as [number, number],
      ...pathIds.map((id) => {
        const wp = WAYPOINTS.find((w) => w.id === id);
        return (wp?.coord ?? origin.coordinates) as [number, number];
      }),
      destinationPort.coordinates as [number, number]
    ];

    const line = turf.lineString(fullRouteCoords);
const curved = turf.bezierSpline(line, { sharpness: 0.4 });

// 🔥 NUEVO: dividir por zona
const coloredRoute = splitRouteByZone(curved);

// Dibujar en el mapa
map.current.addSource("routeLine", {
  type: "geojson",
  data: coloredRoute
});

map.current.addLayer({
  id: "routeLayer",
  type: "line",
  source: "routeLine",
  layout: {
    "line-cap": "round",
    "line-join": "round"
  },
  paint: {
    // 🎨 color dinámico según zona
    "line-color": [
      "match",
      ["get", "zone"],
      "safe",
      "#22c55e",    // verde: zona segura
      "canal",
      "#eab308",    // amarillo: canal controlado
      "risk",
      "#ef4444",    // rojo: riesgo / piratería
      "#38bdf8"     // fallback azul
    ],
    "line-width": 4,
    "line-opacity": 0.95
  }
});


    // zoom automático a la ruta
    const bounds = new mapboxgl.LngLatBounds();
    curved.geometry.coordinates.forEach((coord: [number, number]) =>
      bounds.extend(coord as [number, number])
    );
    map.current.fitBounds(bounds, { padding: 80 });

    // guardar info en UI
    const distance = Math.round(turf.length(curved, { units: 'kilometers' }));
    const countryInfo = COUNTRY_INFO[destinationPort.country];
    const estimatedDays =
      countryInfo?.estimatedDays?.[originPort as 'callao' | 'paita' | 'chancay'];

    setRouteData({
      origin,
      destination: destinationPort,
      distance,
      countryInfo,
      estimatedDays
    });
  };

  const handlePortClick = (destinationPort: Port) => {
    const origin = PERU_PORTS.find((p) =>
      p.name.toLowerCase().includes(originPort.toLowerCase())
    );
    if (!origin || !map.current) return;

    setSelectedPort(destinationPort);

    // Ocultar filtros y sugerencias al seleccionar puerto
    setShowFilters(false);
    setShowSuggestions(false);

    // Cambiar key para animación de salida/entrada
    setCurrentRouteKey((prev) => prev + 1);

    showRoute(destinationPort, origin);
  };

  const handleSearch = () => {
    if (filteredPorts.length > 0) handlePortClick(filteredPorts[0]);
  };

  return (
    <div className="relative w-full h-screen">
      <div ref={mapContainer} className="absolute inset-0" />

      {/* Panel buscador + filtros */}
      <Card
        ref={searchCardRef}
        className="absolute top-4 left-4 w-80 bg-card/95 backdrop-blur-sm border-primary/20 shadow-elegant z-10 space-y-2 p-4"
      >
        <div className="flex items-center gap-2">
          <Input
            placeholder="Buscar por país o puerto..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowSuggestions(true);
            }}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            onFocus={() => {
              setShowFilters(true);
              // Si hay una ruta ya mostrada, ocultarla al empezar nueva búsqueda
              if (routeData) {
                setCurrentRouteKey((prev) => prev + 1);
                setRouteData(null);
              }
            }}
            className="flex-1 bg-background border-border"
          />
          <Button onClick={handleSearch} className="p-2">
            <Search className="h-4 w-4" />
          </Button>
        </div>

        {showFilters && (
          <div className="mt-2 space-y-2">
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Anchor className="h-4 w-4 text-accent" /> Puerto de Origen
              </label>
              <Select value={originPort} onValueChange={setOriginPort}>
                <SelectTrigger className="w-full bg-white border border-border rounded-md shadow-sm">
                  <SelectValue />
                </SelectTrigger>

                <SelectContent className="bg-white border border-border shadow-lg">
                  <SelectItem value="callao">Puerto del Callao</SelectItem>
                  <SelectItem value="paita">Puerto de Paita</SelectItem>
                  <SelectItem value="chancay">Puerto de Chancay</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-secondary" /> Tipo de Mapa
              </label>
              <Select value={mapType} onValueChange={(v) => setMapType(v as '3d' | '2d')}>
                <SelectTrigger className="w-full bg-white border border-border rounded-md shadow-sm">
                  <SelectValue />
                </SelectTrigger>

                <SelectContent className="bg-white border border-border shadow-lg">
                  <SelectItem value="3d">Mapa 3D</SelectItem>
                  <SelectItem value="2d">Mapa 2D</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {searchTerm.length > 0 && showSuggestions && (
          <div className="mt-2 bg-card rounded-lg border border-border shadow-md max-h-48 overflow-y-auto">
            {filteredPorts.length > 0 ? (
              filteredPorts.map((port, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePortClick(port)}
                  className="w-full text-left p-2 hover:bg-muted text-sm transition-colors"
                >
                  <strong className="block text-foreground">{port.country}</strong>
                  <span className="text-xs text-muted-foreground">{port.name}</span>
                </button>
              ))
            ) : (
              <p className="text-center text-sm text-muted-foreground py-3">
                Sin resultados...
              </p>
            )}
          </div>
        )}
      </Card>

      {/* Card de ruta */}
      <AnimatePresence>
        {routeData && (
          <motion.div
            key={currentRouteKey}
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -400, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
            className="absolute top-20 left-4 w-80 max-h-[calc(100%-80px)] bg-card/95 backdrop-blur-sm border-primary/20 shadow-elegant z-20 overflow-y-auto"
          >
            <div className="p-4 space-y-4 relative">
              <Button
                variant="ghost"
                className="absolute top-2 right-2 p-1"
                onClick={() => setRouteData(null)}
              >
                <X className="h-4 w-4" />
              </Button>

              <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
                {routeData.countryInfo?.bandera ? (
                  <img
                    src={routeData.countryInfo.bandera}
                    alt={`Bandera de ${routeData.destination.country}`}
                    className="w-9 h-6 rounded shadow-md border"
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <MapIcon className="h-5 w-5 text-accent" />
                )}
                Información de Ruta
              </h3>

              {/* Contenido de la card */}
              <div className="space-y-2 text-sm md:text-base">
                <div className="p-2 bg-muted/50 rounded-lg">
                  <span className="font-medium">Puerto de Origen</span>
                  <p className="font-semibold">{routeData.origin.name}</p>
                </div>

                {/* Puerto de Destino */}
                <div className="p-2 bg-muted/50 rounded-lg">
                  <span className="font-medium block">Puerto de Destino</span>
                  <p className="font-semibold">
                    {routeData.destination.name}, {routeData.destination.country}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 bg-accent/10 rounded-lg text-center">
                    <span className="font-medium block">Distancia</span>
                    <p className="font-bold text-lg">
                      {routeData.distance.toLocaleString()} km
                    </p>
                  </div>

                  {routeData.estimatedDays && (
                    <div className="p-2 bg-secondary/10 rounded-lg text-center">
                      <span className="font-medium block">Tiempo Est</span>
                      <p className="font-bold text-lg">
                        {routeData.estimatedDays} días
                      </p>
                    </div>
                  )}
                </div>

                {/* Información adicional: Links + Idioma */}
                {routeData.countryInfo && (
                  <div className="space-y-1 pt-2 border-t border-border">
                    {routeData.countryInfo.fichaUrl && (
                      <a
                        href={routeData.countryInfo.fichaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full justify-between text-xs md:text-sm border-primary/50 hover:bg-primary/10"
                        >
                          📘 Ficha País
                        </Button>
                      </a>
                    )}
                    {routeData.countryInfo.doingBusinessUrl && (
                      <a
                        href={routeData.countryInfo.doingBusinessUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full justify-between text-xs md:text-sm border-secondary/50 hover:bg-secondary/10"
                        >
                          ⚖️ Doing Business
                        </Button>
                      </a>
                    )}
                    {routeData.countryInfo.tlc && (
                      <a
                        href={routeData.countryInfo.tlc}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full justify-between text-xs md:text-sm border-blue-500/50 hover:bg-blue-500/10"
                        >
                          🌍 Tratados de Libre Comercio
                        </Button>
                      </a>
                    )}
                    <a
                      href="https://consultasenlinea.mincetur.gob.pe/Rep_Comer_Bilat/Comercio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-between text-xs md:text-sm border-emerald-500/50 hover:bg-emerald-500/10"
                      >
                        📊 Reporte de Comercio Bilateral
                      </Button>
                    </a>
                    {routeData.countryInfo.idioma && (
                      <div className="text-xs md:text-sm text-muted-foreground">
                        <span className="font-medium">Idioma: </span>
                        {routeData.countryInfo.idioma.join(', ')}
                      </div>
                    )}
                  </div>
                )}

                {/* Bloque: Moneda / Continente / Puerto principal */}
                {(routeData.countryInfo?.currency ||
                  routeData.countryInfo?.continent ||
                  routeData.countryInfo?.puertoPrincipal) && (
                  <div className="space-y-2 pt-2 border-t border-border">
                    {routeData.countryInfo?.currency && (
                      <div className="flex items-center justify-between text-xs md:text-sm bg-muted/40 p-2 rounded-lg border border-border">
                        <span>
                          <span className="font-medium">Moneda: </span>
                          {routeData.countryInfo.currency.symbol}{' '}
                          {routeData.countryInfo.currency.name}{' '}
                          ({routeData.countryInfo.currency.code})
                        </span>
                        <a
                          href={`https://www.xe.com/currencyconverter/convert/?Amount=1&From=PEN&To=${routeData.countryInfo.currency.code}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="px-2 py-1 text-[10px] md:text-xs font-semibold rounded bg-blue-600 text-white hover:bg-blue-700 transition">
                            💱 Cambio
                          </button>
                        </a>
                      </div>
                    )}

                    {routeData.countryInfo?.continent && (
                      <div className="text-xs md:text-sm">
                        <span className="font-medium">Continente: </span>
                        {routeData.countryInfo.continent}
                      </div>
                    )}
                    {routeData.countryInfo?.puertoPrincipal && (
                      <div className="text-xs md:text-sm">
                        <span className="font-medium">Puerto Principal: </span>
                        {routeData.countryInfo.puertoPrincipal}
                      </div>
                    )}
                  </div>
                )}

                {(routeData.countryInfo?.comoNegociar ||
                  routeData.countryInfo?.comoNoNegociar) && (
                  <div className="space-y-1 pt-2 border-t border-border">
                    {routeData.countryInfo?.comoNegociar && (
                      <div className="p-2 bg-green-500/10 rounded-lg border border-green-500/20">
                        <p className="font-semibold text-green-700 text-xs md:text-sm mb-1">
                          ✓ Cómo Negociar:
                        </p>
                        <p className="text-xs md:text-sm">
                          {routeData.countryInfo.comoNegociar}
                        </p>
                      </div>
                    )}
                    {routeData.countryInfo?.comoNoNegociar && (
                      <div className="p-2 bg-red-500/10 rounded-lg border border-red-500/20">
                        <p className="font-semibold text-red-700 text-xs md:text-sm mb-1">
                          ✗ Cómo No Negociar:
                        </p>
                        <p className="text-xs md:text-sm">
                          {routeData.countryInfo.comoNoNegociar}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                <a
                  href="https://www.searates.com/es/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="default"
                    size="sm"
                    className="w-full bg-primary hover:bg-primary/90 mt-2"
                  >
                    Ver Detalles en SeaRates
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón para volver a mostrar la card con icono apuntando a la derecha */}
      {!routeData && selectedPort && (
        <Button
          variant="secondary"
          className="absolute top-24 left-4 z-20 p-2 rounded-full"
          onClick={() => {
            const origin = PERU_PORTS.find((p) =>
              p.name.toLowerCase().includes(originPort.toLowerCase())
            );
            if (!origin || !selectedPort) return;

            const start = turf.point(origin.coordinates);
            const end = turf.point(selectedPort.coordinates);
            const distance = Math.round(
              turf.distance(start, end, { units: 'kilometers' })
            );
            const countryInfo = COUNTRY_INFO[selectedPort.country];
            const estimatedDays =
              countryInfo?.estimatedDays?.[
                originPort as 'callao' | 'paita' | 'chancay'
              ];

            setRouteData({
              origin,
              destination: selectedPort,
              distance,
              countryInfo,
              estimatedDays
            });
          }}
        >
          <ArrowRight className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};
