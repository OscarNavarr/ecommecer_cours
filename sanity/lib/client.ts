import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
  "skuEoEXW7mtyjQksKWVD5TctO7fHoEYmEqiWnfXUfoYatiiixbVkpdOHuFEqNMo1Cx4iQJM4drKYwinnW31fBomjt3puQZgIMJuVdsxNsVosfJoheVBnxEnqcJpbtlACWFJKRfmI1incIFDCXSvqd0vX57UsvixLAr6gjOKbxRfyupsaBVs8"
})
