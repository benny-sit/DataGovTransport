export type carRes = {
"handicap": false,
"_id": Number,
"mispar_rechev": Number,
"tozeret_cd": Number,
"sug_degem": string,
"tozeret_nm": string,
"degem_cd": Number,
"degem_nm": string,
"ramat_gimur": string,
"ramat_eivzur_betihuty": Number,
"kvutzat_zihum": Number,
"shnat_yitzur": Number,
"degem_manoa": string,
"mivchan_acharon_dt": string | Date,
"tokef_dt"?: string,
"baalut": string,
"misgeret": string,
"tzeva_cd": Number,
"tzeva_rechev"?: string,
"zmig_kidmi": string,
"zmig_ahori": string,
"sug_delek_nm": string,
"horaat_rishum": Number,
"moed_aliya_lakvish": string,
"kinuy_mishari": string,
"rank": Number,
"mishkal_kolel"?: string,
}

export type handicapRes = {
    "handicap": true,
    "MISPAR RECHEV": Number,
    "SUG TAV": Number,
    "TAARICH HAFAKAT TAG": Number,
    "rank": Number,
    "_id": Number,
}