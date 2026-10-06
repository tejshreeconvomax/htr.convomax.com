// Cross-reference chart: competitor series -> HTR equivalent product slug.

export type CrossRefBrand = {
  brand: string;
  rows: { series: string; slug?: string }[];
};

export const crossRefChart: CrossRefBrand[] = [
  { brand: "ATE", rows: [
    { series: "3SM", slug: "hcals-size-4527-6927" }, { series: "CS", slug: "vhia" }, { series: "SR", slug: "hsr" },
  ]},
  { brand: "FUTABA", rows: [{ series: "MPC", slug: "br" }]},
  { brand: "HUNTINGDON", rows: [
    { series: "PCR", slug: "hcp" }, { series: "PC 30-40", slug: "hcl" }, { series: "PCRL", slug: "hmvl" }, { series: "K SERIES", slug: "of" }, { series: "SM", slug: "hcals-size-4527-6927" }, { series: "SML", slug: "hcals-size-4527-6927" }, { series: "FSE", slug: "rsr" }, { series: "PC 3-PC 25", slug: "hca" }, { series: "ALSR", slug: "vhia" }, { series: "FSWL/FST", slug: "hir" }, { series: "CMS", slug: "hsr" }, { series: "MTL 1A TO MTL 10", slug: "rl" }, { series: "PCRC, PCRL, PCRM", slug: "hmv" }, { series: "SM", slug: "hcals-size-4527-6927" },
  ]},
  { brand: "IRC/WELWYN", rows: [
    { series: "PW-20 TO PW-40", slug: "hcl" }, { series: "PWRL", slug: "hmvl" }, { series: "OAR", slug: "hew" }, { series: "WA 84F", slug: "frs" }, { series: "WA 84F", slug: "hfw" }, { series: "PPW/CAW", slug: "hcw" }, { series: "WM2/WSM3", slug: "hcals-size-4527-6927" }, { series: "AS-SM", slug: "hias" }, { series: "PW", slug: "hca" }, { series: "PWR, PWR/SQM, PWR/SRM", slug: "hmv" }, { series: "WA 87/T", slug: "vhia" }, { series: "SPP", slug: "hfa" }, { series: "PWW/CW", slug: "hir" }, { series: "LOB", slug: "rl" }, { series: "PLO/LPW", slug: "hcal" }, { series: "WP-S/WA80/AS/W30", slug: "hia" }, { series: "WP-S", slug: "haa" }, { series: "W-3123", slug: "hta" }, { series: "OARSZ. OARS. PARS-XP", slug: "hos-size-4512-4524" }, { series: "EBW8518", slug: "heb-size-8518-8420-6315-6918-6018-5216-7036-5520" }, { series: "WA 80Z/A S-SM", slug: "hias" },
  ]},
  { brand: "ISABELLENHUTTE", rows: [
    { series: "BVH", slug: "hhe-size-3820" }, { series: "BVR", slug: "hre-size-4026" }, { series: "BVB", slug: "hbe-size-2726" }, { series: "BVE", slug: "hee-size-5930" }, { series: "BVS", slug: "hse-size-3920" }, { series: "BAS", slug: "heb-size-8518-8420-6315-6918-6018-5216-7036-5520" }, { series: "BRS", slug: "hos-size-4512-4524" }, { series: "BVT", slug: "hte-size-2512-1206" }, { series: "BVN", slug: "hbm-size-1216" }, { series: "BVO", slug: "hve-size-5515" },
  ]},
  { brand: "KRAH-RWI", rows: [
    { series: "FH", slug: "hsv" }, { series: "KRX", slug: "hcp" }, { series: "KRX-27-4H", slug: "hcl" }, { series: "KRGG", slug: "hmv" }, { series: "KRGC", slug: "br" }, { series: "ZSB", slug: "rsr" }, { series: "KFD", slug: "hea" }, { series: "KBD", slug: "heal" }, { series: "FX", slug: "hsva" }, { series: "BR", slug: "hia" }, { series: "SFD", slug: "hfa" }, { series: "SFR", slug: "hfp" }, { series: "ZS", slug: "hir" }, { series: "SKS", slug: "hans-c" }, { series: "ZDFI", slug: "hfo" }, { series: "FEW", slug: "hans-c" }, { series: "NSW", slug: "hans-s" }, { series: "FTX" },
  ]},
  { brand: "MEGGITT", rows: [
    { series: "SBCV", slug: "hsv" }, { series: "SQZ", slug: "hcp" }, { series: "SQM", slug: "hmv" }, { series: "FKN", slug: "frs" }, { series: "FSQ", slug: "hir" }, { series: "KNP", slug: "rl" }, { series: "SQP", slug: "hca" }, { series: "SBC", slug: "hea" }, { series: "SBCH/SBCHE", slug: "hsvau" }, { series: "ES/ER/ERV", slug: "hia" }, { series: "FCX", slug: "hfa" }, { series: "FCA/FCB", slug: "hfp" },
  ]},
  { brand: "MICRON", rows: [
    { series: "MXS, MPS & MZS", slug: "hcp" }, { series: "MHS & MFS", slug: "hcl" }, { series: "MNS/MNG", slug: "hmv" }, { series: "FRW", slug: "frc" }, { series: "MVS", slug: "hcv-with-bracket" }, { series: "MSS & MSG", slug: "hca" },
  ]},
  { brand: "MODULOHM-DANOTHERM", rows: [
    { series: "C-1", slug: "hmv" }, { series: "MI-A-1 / Modulohm", slug: "ow" }, { series: "GBF/ZRF / Ceramic Wire Wound / Sigma Series", slug: "rsr" }, { series: "ZFF / Ceramic Wire Wound / Sigma Series", slug: "hfo" }, { series: "RB", slug: "hah" }, { series: "Modulohm", slug: "of" }, { series: "Ceramic Wire Wound / Sigma Series (HIR)", slug: "hir" }, { series: "Ceramic Wire Wound / Sigma Series (HFOM)", slug: "hfom" }, { series: "CAH-CAV / CBH-CBV", slug: "hbr" },
  ]},
  { brand: "OHMITE", rows: [
    { series: "TVM", slug: "hcp" }, { series: "TWW", slug: "hmv" }, { series: "60 SERIES", slug: "oa" }, { series: "RW", slug: "hcals-size-4527-6927" }, { series: "10 SERIES", slug: "rl" }, { series: "G", slug: "hsr" }, { series: "TUW SERIES", slug: "hca" }, { series: "WL", slug: "hia" }, { series: "60 SERIES (4 TERMINAL)", slug: "ofsc" }, { series: "40 SERIES / 80 SERIES", slug: "vhia" }, { series: "610 SJR /SB / 60S", slug: "hos-size-4512-4524" }, { series: "FK/GK SERIES", slug: "hre-size-4026" }, { series: "EBW SERIES", slug: "hee-size-5930" }, { series: "250 SERIES", slug: "hfom" }, { series: "SHA", slug: "heb-size-8518-8420-6315-6918-6018-5216-7036-5520" }, { series: "30 SERIES", slug: "hcals-size-4527-6927" }, { series: "RW/30 SERIES", slug: "hcals-size-4527-6927" }, { series: "10 SERIES / 14A SERIES", slug: "rl" }, { series: "WL / 20 SERIES / 90 SERIES / AUDIO GOLD RESISTOR", slug: "hia" }, { series: "280 SERIES", slug: "rsr" }, { series: "40 SERIES / 80 SERIES / AXIOHM", slug: "vhia" }, { series: "270 SERIES / AUDIO GOLD RESISTOR / EURO POWER WIREWOUND SERIES", slug: "hir" }, { series: "30 SERIES / 50 SERIES", slug: "haa" }, { series: "30 SERIES / 89 SERIES", slug: "hah" }, { series: "ARG SERIES", slug: "hbr" },
  ]},
  { brand: "PHOENIX", rows: [
    { series: "RMW", slug: "hcp" }, { series: "LOR", slug: "heal" }, { series: "AMW", slug: "hca" }, { series: "AC", slug: "vhia" }, { series: "ACS", slug: "haa" }, { series: "NSR", slug: "hans-2" }, { series: "SMW", slug: "hmv" },
  ]},
  { brand: "TT Electronics", rows: [
    { series: "WPRT", slug: "hcl" }, { series: "SQM / CVW", slug: "hmv" }, { series: "EMC / F500 / SP20 / SP20F / SPH / SPF / SPP / ULW / WA80F / WHS UL (FRS)", slug: "frs" }, { series: "EMC / F500 / SP20 / SP20F / SPH / SPF / SPP / ULW / WA80F / WHS UL (HFW)", slug: "hfw" }, { series: "SQP / CAW", slug: "hea" }, { series: "NAS / NT / W30 / WA80 / WHS / WP-S", slug: "hia" }, { series: "WA80Z / Z-Form / ZI-Form", slug: "hias" }, { series: "OAR/ OAR-TP", slug: "hew" }, { series: "W20", slug: "vhia" }, { series: "1600 / 1900", slug: "hir" }, { series: "WPYP", slug: "hsr" }, { series: "W30 / WA80 / WHS / WP-S", slug: "hta" }, { series: "LRMAP 4026", slug: "hre-size-4026" }, { series: "LRMAP 2726", slug: "hbe-size-2726" }, { series: "LRMAP 5930", slug: "hee-size-5930" }, { series: "LRMAP 3920", slug: "hse-size-3920" }, { series: "EBW5216 / 8518", slug: "heb-size-8518-8420-6315-6918-6018-5216-7036-5520" }, { series: "LRMAH 2512", slug: "hte-size-2512-1206" }, { series: "OARS", slug: "hos-size-4512-4524" }, { series: "WH", slug: "hah" },
  ]},
  { brand: "R.G ALLEN", rows: [
    { series: "SQZB/SQZC/SQZD", slug: "hcp" }, { series: "SQHQ/SQH", slug: "hcl" }, { series: "SQM", slug: "hmv" }, { series: "MPC", slug: "br" }, { series: "RER/RZG", slug: "rsr" }, { series: "SQ", slug: "hca" }, { series: "SPS", slug: "hcv-with-bracket" }, { series: "SQC", slug: "hea" }, { series: "KNP RP-TYPE 'U'", slug: "hias" }, { series: "KNP RP-TYPE 'V'", slug: "hta" }, { series: "KNS", slug: "hip" }, { series: "KNH", slug: "hir" },
  ]},
  { brand: "RCD", rows: [
    { series: "PWLL", slug: "hcp" }, { series: "PWL/PWHM", slug: "hcl" }, { series: "PV", slug: "hmv" }, { series: "OA", slug: "hew" }, { series: "RW-FF", slug: "frs" }, { series: "PW-FF", slug: "frc" }, { series: "PW-X", slug: "hcw" }, { series: "MWM27/MWM35/PRM", slug: "hcals-size-4527-6927" }, { series: "MW", slug: "hias" }, { series: "EW", slug: "rsr" }, { series: "ULV", slug: "hcal" }, { series: "PW", slug: "hca" }, { series: "PWV", slug: "hcv-with-bracket" }, { series: "RW/RW 100", slug: "hia" }, { series: "PR", slug: "vhia" }, { series: "T", slug: "hir" }, { series: "CD", slug: "hsr" }, { series: "FW", slug: "hfo" }, { series: "FE/FWE", slug: "hfom" }, { series: "RE", slug: "hah" },
  ]},
  { brand: "RIEDON", rows: [
    { series: "UV", slug: "hmv" }, { series: "MS/MSR", slug: "hew" }, { series: "MT", slug: "rl" }, { series: "UP-3", slug: "ofsc" }, { series: "UW", slug: "hca" }, { series: "UB/UT", slug: "vhia" }, { series: "TSC", slug: "hir" }, { series: "UWP", slug: "hcl" }, { series: "MNRS 1050", slug: "hee-size-5930" }, { series: "MNRS 1575", slug: "hse-size-3920" }, { series: "S SERIES", slug: "hcals-size-4527-6927" }, { series: "SL SERIES", slug: "hcals" },
  ]},
  { brand: "ROYAL OHM", rows: [
    { series: "PRZA/PRZC/PRZD", slug: "hcp" }, { series: "PRT/PRU", slug: "hcl" }, { series: "PRM", slug: "hmv" }, { series: "PFAS/PFAT", slug: "br" }, { series: "KNP(FUSIBLE)", slug: "frs" }, { series: "QR/QRZG", slug: "rsr" }, { series: "PRW", slug: "hca" }, { series: "PRS", slug: "hcv-with-bracket" }, { series: "PWRC", slug: "hea" }, { series: "PRWI", slug: "hsva" }, { series: "KNP", slug: "hias" }, { series: "KNS", slug: "hip" }, { series: "QL/QH", slug: "hir" }, { series: "RS26", slug: "hre-size-4026" }, { series: "RS30", slug: "hee-size-5930" }, { series: "RS20", slug: "hse-size-3920" }, { series: "RS12", slug: "hah" }, { series: "CSRA", slug: "ow" }, { series: "PDM", slug: "hah" },
  ]},
  { brand: "TY-OHM", rows: [
    { series: "SQZ", slug: "hcp" }, { series: "SQH/SQHG", slug: "hcl" }, { series: "SQM", slug: "hmv" }, { series: "SMW", slug: "hcals-size-4527-6927" }, { series: "WOR", slug: "of" }, { series: "FKN", slug: "frs" }, { series: "FSQ", slug: "frc" }, { series: "SQP", slug: "hca" }, { series: "SPS", slug: "hcv-with-bracket" }, { series: "KNP/NKNP", slug: "hia" }, { series: "ARW", slug: "vhia" }, { series: "KNH", slug: "hir" }, { series: "CSR", slug: "hew" },
  ]},
  { brand: "UNI-OHM", rows: [
    { series: "PRVA/PRVB/PRZ", slug: "hcp" }, { series: "PRT/PRU", slug: "hcl" }, { series: "PRM", slug: "hmv" }, { series: "QR/QRZG", slug: "rsr" }, { series: "PRW", slug: "hca" }, { series: "PRS", slug: "hcv-with-bracket" }, { series: "PRWC", slug: "hea" }, { series: "KNP", slug: "hia" }, { series: "KNS", slug: "hip" }, { series: "QL/QH", slug: "hir" },
  ]},
  { brand: "VISHAY", rows: [
    { series: "CPR", slug: "hcp" }, { series: "CP Quick Connect", slug: "hcl" }, { series: "CPCC/CPCP", slug: "hmv" }, { series: "SR", slug: "hew" }, { series: "Z-302 RS", slug: "frs" }, { series: "CPW/CPWN", slug: "hcw" }, { series: "CPCL", slug: "hmvl" }, { series: "WSN/WSC 4527 WSN/WSC 6927", slug: "hcals-size-4527-6927" }, { series: "LVR", slug: "rl" }, { series: "WSZ", slug: "hias" }, { series: "SPR – 2039 SPR – 2093/MRS", slug: "ofsc" }, { series: "HLZ/ZBS", slug: "rsr" }, { series: "CPL", slug: "hcal" }, { series: "CP", slug: "hca" }, { series: "KKA", slug: "hea" }, { series: "Z-300 BSI", slug: "hia" }, { series: "AC/CW RS/NS ESS/ESN EGS/EGN", slug: "vhia" }, { series: "CA", slug: "hfa" }, { series: "SKF/CPS", slug: "hfp" }, { series: "ZW/FST/HL/NHL", slug: "hir" }, { series: "NSR", slug: "hans-c" }, { series: "KKE", slug: "hsv" }, { series: "WSL4026", slug: "hre-size-4026" }, { series: "WSL2726", slug: "hbe-size-2726" }, { series: "WSL5931", slug: "hee-size-5930" }, { series: "WSL3921", slug: "hse-size-3920" }, { series: "WSBS 8518 / WSBS", slug: "heb-size-8518-8420-6315-6918-6018-5216-7036-5520" }, { series: "WSMS5515", slug: "hve-size-5515" }, { series: "WSLF2512", slug: "hte-size-2512-1206" },
  ]},
  { brand: "VITROHM", rows: [
    { series: "KV/KVS", slug: "hsv" }, { series: "KWP", slug: "hcp" }, { series: "KWA", slug: "hcl" }, { series: "KWV", slug: "hmv" }, { series: "SLR", slug: "br" }, { series: "KN(350-0 TO 352-0) / KNS", slug: "oa" }, { series: "CRF", slug: "frs" }, { series: "LPS", slug: "of" }, { series: "RWC", slug: "hcals-size-4527-6927" }, { series: "RWN", slug: "hcals" }, { series: "BWL", slug: "rl" }, { series: "KH(206-8 TO 218-8) / KHS", slug: "hea" }, { series: "KN(350-8 TO 354-8) / KNC", slug: "heal" }, { series: "KH(206-0 TO 218-0) / KHS", slug: "hsva" }, { series: "RX/CR", slug: "hia" }, { series: "KC / KCS", slug: "hfa" }, { series: "KP / KPS", slug: "hfp" }, { series: "KN(350-009 TO 352-011) / KNS", slug: "op" }, { series: "RZC/RZI/RZF", slug: "hias" }, { series: "KWV Series", slug: "hmvl" }, { series: "KFF", slug: "hsvf" }, { series: "KWH Series", slug: "hca" }, { series: "CRP Series", slug: "haa" }, { series: "CSU", slug: "hhe-size-3820" }, { series: "CSC", slug: "hre-size-4026" }, { series: "CST", slug: "hbe-size-2726" }, { series: "CSB593", slug: "hee-size-5930" }, { series: "CSB392", slug: "hse-size-3920" }, { series: "CSD", slug: "heb-size-8518-8420-6315-6918-6018-5216-7036-5520" }, { series: "CSB251", slug: "hte-size-2512-1206" }, { series: "CSM381", slug: "hos-size-4512-4524" },
  ]},
  { brand: "YAGEO", rows: [
    { series: "SQZ", slug: "hcp" }, { series: "SQH/NSH", slug: "hcl" }, { series: "SQM/NSM", slug: "hmv" }, { series: "NSP", slug: "hcw" }, { series: "SQP", slug: "hca" }, { series: "KNOP/NKN", slug: "hia" },
  ]},
  { brand: "BOURNS", rows: [
    { series: "FW", slug: "hfw" }, { series: "CSS4J / C2I4J", slug: "hre-size-4026" }, { series: "CSS2H5930 / CI2H5930", slug: "hee-size-5930" }, { series: "CSS2H3920 / C2I2H3920", slug: "hse-size-3920" }, { series: "CSM2F", slug: "heb-size-8518-8420-6315-6918-6018-5216-7036-5520" }, { series: "CSS2H2512 / C2I2H2512", slug: "hte-size-2512-1206" }, { series: "WS", slug: "hia" }, { series: "PWR44113", slug: "op" }, { series: "PWR4412-25", slug: "hew" }, { series: "W", slug: "hta" },
  ]},
  { brand: "CERMET", rows: [
    { series: "CCT", slug: "hcp" }, { series: "CCV", slug: "hmv" }, { series: "CER", slug: "br" }, { series: "CSK", slug: "hia" }, { series: "CCA", slug: "hca" }, { series: "CSFR", slug: "hir" }, { series: "CAH", slug: "hah" },
  ]},
  { brand: "ARCOL", rows: [
    { series: "ACS", slug: "hia" }, { series: "CRS", slug: "hse-size-3920" }, { series: "HS400-600 / HS", slug: "hah" }, { series: "HS400-600", slug: "hbr" },
  ]},
  { brand: "TYCO/TE CONNECTIVITY", rows: [
    { series: "CGS SQZ, CGS SQ", slug: "hcp" }, { series: "CGS SQB, SGS SQH , CGS SQ", slug: "hcl" }, { series: "CGS SQM, CGS SQF, CGS SQ", slug: "hmv" }, { series: "CGS SM, CGS SQM", slug: "hcals-size-4527-6927" }, { series: "CGS SQP, CGS SQ", slug: "hea" }, { series: "CGS SBL", slug: "heal" }, { series: "CGS SBC", slug: "hsvau" }, { series: "CGS ER, CGS CCR, CGS C, CGS HPCR", slug: "hia" }, { series: "CGS TE", slug: "rsr" }, { series: "CGS SPS / CGS SQ", slug: "hcv-with-bracket" }, { series: "CGS YP", slug: "hsr" }, { series: "CGS HS, CGS HAS, CGS HSC, CGS THS", slug: "hah" }, { series: "CGS SBCLF", slug: "hsvf" }, { series: "CGS CFH, CGS HCH, CGS CJP, CGS CJP", slug: "hbr" },
  ]},
  { brand: "KOA", rows: [
    { series: "BGR, BWR, BGRV, BWRV", slug: "hcl" }, { series: "BPR", slug: "br" }, { series: "LR", slug: "ow" }, { series: "CW, CWH, RW", slug: "hia" }, { series: "CWFS", slug: "hfw" }, { series: "P", slug: "hir" }, { series: "HS", slug: "heb-size-8518-8420-6315-6918-6018-5216-7036-5520" }, { series: "PSF", slug: "hbm-size-1216" }, { series: "PLS (2512), TLR (1206/2512), TLR (High ower) (1206 / 2512), TLRX (1206)", slug: "hte-size-2512-1206" },
  ]},
];
