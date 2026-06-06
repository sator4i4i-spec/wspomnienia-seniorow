// hobbits.js — Hobbits of the Shire
// Based on Tolkien's genealogical appendices in The Lord of the Rings
// Dates are in Shire Reckoning (SR). TA = SR + 1600.

window.ELIADORA_DATA = {
  familyName: "Hobbits of the Shire",
  defaultFocus: "frodo_baggins",
  noPortrait: true,
  succession: [
    "balbo_baggins","gerontius_took","mungo_baggins","largo_baggins",
    "hildigrim_took","bungo_baggins","belladonna_took","longo_baggins",
    "gorbadoc_brandybuck","mirabella_took","fosco_baggins","adalgrim_took",
    "bilbo_baggins","rorimac_brandybuck","drogo_baggins","otho_sackv",
    "lobelia_sackv","primula_brandybuck","hamfast_gamgee","paladin_took",
    "esmeralda_took","saradoc_brandybuck","lotho_sackv","frodo_baggins",
    "samwise_gamgee","merry_brandybuck","rose_cotton","pippin_took"
  ],
  people: [

    // ═══════════════════════════════════════════════════════════════
    // BAGGINS OF HOBBITON
    // ═══════════════════════════════════════════════════════════════

    { id:"balbo_baggins", fn:"Balbo", ln:"Baggins", g:"M", b:"~1167", d:"~1270",
      bp:"Hobbiton, the Shire", dp:"Hobbiton, the Shire", nat:null, p:[], s:["berylla_boffin"], image:null,
      bio:{ pl:"The earliest Baggins recorded in the family trees, patriarch of the great Hobbiton line. He married Berylla Boffin and fathered two sons — Mungo and Largo — whose descendants would eventually include both Bilbo and Frodo. A prosperous, unremarkable hobbit by all accounts, which in the Shire is the highest compliment.", en:"The earliest Baggins recorded in the family trees, patriarch of the great Hobbiton line. He married Berylla Boffin and fathered two sons — Mungo and Largo — whose descendants would eventually include both Bilbo and Frodo. A prosperous, unremarkable hobbit by all accounts, which in the Shire is the highest compliment." }},

    { id:"berylla_boffin", fn:"Berylla", ln:"Boffin", g:"F", b:"~1175", d:"~1280",
      bp:"The Shire", dp:"The Shire", nat:null, p:[], s:["balbo_baggins"], image:null,
      bio:{ pl:"Wife of Balbo Baggins and mother of Mungo and Largo. Through her the Boffin blood entered the Baggins line, one of the early connections between the great Shire families that would eventually make the hobbit genealogies so gloriously tangled.", en:"Wife of Balbo Baggins and mother of Mungo and Largo. Through her the Boffin blood entered the Baggins line, one of the early connections between the great Shire families that would eventually make the hobbit genealogies so gloriously tangled." }},

    { id:"mungo_baggins", fn:"Mungo", ln:"Baggins", g:"M", b:"~1207", d:"~1300",
      bp:"Hobbiton, the Shire", dp:"Hobbiton, the Shire", nat:null, p:["balbo_baggins","berylla_boffin"], s:["laura_grubb"], image:null,
      bio:{ pl:"Son of Balbo, father of Bungo, grandfather of Bilbo. He married Laura Grubb and settled comfortably into the respectable Baggins tradition of good meals and no adventures. His son Bungo would dig Bag End into the Hill; his grandson Bilbo would make it famous across Middle-earth.", en:"Son of Balbo, father of Bungo, grandfather of Bilbo. He married Laura Grubb and settled comfortably into the respectable Baggins tradition of good meals and no adventures. His son Bungo would dig Bag End into the Hill; his grandson Bilbo would make it famous across Middle-earth." }},

    { id:"laura_grubb", fn:"Laura", ln:"Grubb", g:"F", b:"~1213", d:"~1308",
      bp:"The Shire", dp:"The Shire", nat:null, p:[], s:["mungo_baggins"], image:null,
      bio:{ pl:"Wife of Mungo Baggins and grandmother of Bilbo. The Grubb family was respectable and well-fed, and Laura added their solid Shire qualities to the Baggins line. No adventures were recorded in her branch — which suited everyone perfectly.", en:"Wife of Mungo Baggins and grandmother of Bilbo. The Grubb family was respectable and well-fed, and Laura added their solid Shire qualities to the Baggins line. No adventures were recorded in her branch — which suited everyone perfectly." }},

    { id:"largo_baggins", fn:"Largo", ln:"Baggins", g:"M", b:"~1210", d:"~1310",
      bp:"Hobbiton, the Shire", dp:"The Shire", nat:null, p:["balbo_baggins","berylla_boffin"], s:["tanta_hornblower"], image:null,
      bio:{ pl:"Younger son of Balbo Baggins. His branch of the family, through his son Fosco and grandson Drogo, would produce Frodo Baggins. He married Tanta Hornblower, connecting the Baggins name to the famous pipe-weed growers of Longbottom.", en:"Younger son of Balbo Baggins. His branch of the family, through his son Fosco and grandson Drogo, would produce Frodo Baggins. He married Tanta Hornblower, connecting the Baggins name to the famous pipe-weed growers of Longbottom." }},

    { id:"tanta_hornblower", fn:"Tanta", ln:"Hornblower", g:"F", b:"~1215", d:"~1315",
      bp:"Longbottom, the Shire", dp:"The Shire", nat:null, p:[], s:["largo_baggins"], image:null,
      bio:{ pl:"Wife of Largo Baggins and great-grandmother of Frodo. The Hornblowers of Longbottom were famous across the Shire for producing the finest pipe-weed — Old Toby among others. Her marriage brought that distinguished agricultural pedigree into the Baggins line.", en:"Wife of Largo Baggins and great-grandmother of Frodo. The Hornblowers of Longbottom were famous across the Shire for producing the finest pipe-weed — Old Toby among others. Her marriage brought that distinguished agricultural pedigree into the Baggins line." }},

    { id:"bungo_baggins", fn:"Bungo", ln:"Baggins", g:"M", b:"1246", d:"1326",
      bp:"Hobbiton, the Shire", dp:"Bag End, Hobbiton", nat:null, p:["mungo_baggins","laura_grubb"], s:["belladonna_took"], image:null,
      bio:{ pl:"He built Bag End for Belladonna. Bungo Baggins was wealthy enough to excavate the finest hobbit-hole in the Shire into the side of the Hill — a wedding gift and a lifetime's home. He died in SR 1326 when Bilbo was 36, comfortable and contented, having never guessed that his son would one day be the most famous hobbit in Middle-earth.", en:"He built Bag End for Belladonna. Bungo Baggins was wealthy enough to excavate the finest hobbit-hole in the Shire into the side of the Hill — a wedding gift and a lifetime's home. He died in SR 1326 when Bilbo was 36, comfortable and contented, having never guessed that his son would one day be the most famous hobbit in Middle-earth." }},

    { id:"belladonna_took", fn:"Belladonna", ln:"Took", g:"F", b:"1252", d:"1334",
      bp:"Great Smials, Tuckborough", dp:"Bag End, Hobbiton", nat:null, p:["gerontius_took","adamanta_chubb"], s:["bungo_baggins"], image:null,
      bio:{ pl:"Daughter of the Old Took, she brought the dangerous Took blood into the Baggins line. Gandalf said it was Belladonna who was responsible for the 'Tookish' side of Bilbo — the part that responded when an adventure came knocking. She married the wealthy and comfortable Bungo Baggins, outlived him by eight years, and no doubt wondered sometimes what had become of the adventurous daughter of the Old Took.", en:"Daughter of the Old Took, she brought the dangerous Took blood into the Baggins line. Gandalf said it was Belladonna who was responsible for the 'Tookish' side of Bilbo — the part that responded when an adventure came knocking. She married the wealthy and comfortable Bungo Baggins, outlived him by eight years, and no doubt wondered sometimes what had become of the adventurous daughter of the Old Took." }},

    { id:"longo_baggins", fn:"Longo", ln:"Baggins", g:"M", b:"~1248", d:"~1350",
      bp:"Hobbiton, the Shire", dp:"The Shire", nat:null, p:["mungo_baggins","laura_grubb"], s:["camellia_sackville"], image:null,
      bio:{ pl:"Brother of Bungo, father of Otho Sackville-Baggins. His marriage to Camellia Sackville introduced a complication into hobbit nomenclature — their son took the hyphenated name Sackville-Baggins. It also introduced the Sackville-Baggins ambition for Bag End, which would irritate Bilbo for the rest of his life.", en:"Brother of Bungo, father of Otho Sackville-Baggins. His marriage to Camellia Sackville introduced a complication into hobbit nomenclature — their son took the hyphenated name Sackville-Baggins. It also introduced the Sackville-Baggins ambition for Bag End, which would irritate Bilbo for the rest of his life." }},

    { id:"camellia_sackville", fn:"Camellia", ln:"Sackville", g:"F", b:"~1252", d:"~1360",
      bp:"The Shire", dp:"The Shire", nat:null, p:[], s:["longo_baggins"], image:null,
      bio:{ pl:"Wife of Longo Baggins and mother of Otho Sackville-Baggins. Her family name passed to her son and grandson, becoming one of the more notorious double-barrelled names in Shire history. She could hardly have anticipated that 'Sackville-Baggins' would eventually be synonymous with greed, family rivalry, and the theft of silver spoons.", en:"Wife of Longo Baggins and mother of Otho Sackville-Baggins. Her family name passed to her son and grandson, becoming one of the more notorious double-barrelled names in Shire history. She could hardly have anticipated that 'Sackville-Baggins' would eventually be synonymous with greed, family rivalry, and the theft of silver spoons." }},

    { id:"fosco_baggins", fn:"Fosco", ln:"Baggins", g:"M", b:"1264", d:"1360",
      bp:"The Shire", dp:"The Shire", nat:null, p:["largo_baggins","tanta_hornblower"], s:["ruby_bolger"], image:null,
      bio:{ pl:"Son of Largo, father of Drogo, grandfather of Frodo. He married Ruby Bolger and lived a quiet, prosperous life — the sort that the Baggins family had perfected over generations. His grandson would carry the fate of Middle-earth on his finger.", en:"Son of Largo, father of Drogo, grandfather of Frodo. He married Ruby Bolger and lived a quiet, prosperous life — the sort that the Baggins family had perfected over generations. His grandson would carry the fate of Middle-earth on his finger." }},

    { id:"ruby_bolger", fn:"Ruby", ln:"Bolger", g:"F", b:"~1270", d:"~1370",
      bp:"The Shire", dp:"The Shire", nat:null, p:[], s:["fosco_baggins"], image:null,
      bio:{ pl:"Wife of Fosco Baggins and grandmother of Frodo. The Bolgers were a large and well-regarded Shire family. Ruby's granddaughter Estella Bolger would later marry Meriadoc Brandybuck, keeping the family connections pleasantly tangled.", en:"Wife of Fosco Baggins and grandmother of Frodo. The Bolgers were a large and well-regarded Shire family. Ruby's granddaughter Estella Bolger would later marry Meriadoc Brandybuck, keeping the family connections pleasantly tangled." }},

    { id:"bilbo_baggins", fn:"Bilbo", ln:"Baggins", g:"M", b:"1290", d:null,
      bp:"Bag End, Hobbiton", dp:"Valinor (sailed SR 1421)", nat:null, p:["bungo_baggins","belladonna_took"], s:[], image:null,
      bio:{ pl:"The quest to Erebor changed everything. Bilbo Baggins left Bag End at sixty — a respectable, soft-handed hobbit who had never done anything unexpected — and came back a year later with a dragon's treasure, a magic ring he told nobody about, and a reputation for eccentricity that never left him. He lived to 111, wrote a book about it, and walked out of his own birthday party in a flash of light. The Ring had been slowly working on him for sixty years. He sailed West with the Elves in SR 1421 and did not return.", en:"The quest to Erebor changed everything. Bilbo Baggins left Bag End at sixty — a respectable, soft-handed hobbit who had never done anything unexpected — and came back a year later with a dragon's treasure, a magic ring he told nobody about, and a reputation for eccentricity that never left him. He lived to 111, wrote a book about it, and walked out of his own birthday party in a flash of light. The Ring had been slowly working on him for sixty years. He sailed West with the Elves in SR 1421 and did not return." }},

    { id:"drogo_baggins", fn:"Drogo", ln:"Baggins", g:"M", b:"1308", d:"1380",
      bp:"The Shire", dp:"Brandywine River, the Shire", nat:null, p:["fosco_baggins","ruby_bolger"], s:["primula_brandybuck"], image:null,
      bio:{ pl:"He and Primula drowned in a boating accident on the Brandywine in SR 1380, when Frodo was twelve. The exact circumstances were never fully explained — some said the boat was overloaded, others hinted at mishaps with the current. They were, by all accounts, a cheerful couple who enjoyed good food and river outings. Frodo was raised first by Brandybuck relatives, then adopted by Bilbo.", en:"He and Primula drowned in a boating accident on the Brandywine in SR 1380, when Frodo was twelve. The exact circumstances were never fully explained — some said the boat was overloaded, others hinted at mishaps with the current. They were, by all accounts, a cheerful couple who enjoyed good food and river outings. Frodo was raised first by Brandybuck relatives, then adopted by Bilbo." }},

    { id:"otho_sackv", fn:"Otho", ln:"Sackville-Baggins", g:"M", b:"1310", d:"1400",
      bp:"The Shire", dp:"The Shire", nat:null, p:["longo_baggins","camellia_sackville"], s:["lobelia_sackv"], image:null,
      bio:{ pl:"If Bilbo had never come back from his adventure, Otho would have inherited Bag End. He spent the rest of his life not quite forgiving Bilbo for returning — not once, but twice. He married the formidable Lobelia and produced Lotho. He died in SR 1400 having never lived in the house he felt was rightfully his.", en:"If Bilbo had never come back from his adventure, Otho would have inherited Bag End. He spent the rest of his life not quite forgiving Bilbo for returning — not once, but twice. He married the formidable Lobelia and produced Lotho. He died in SR 1400 having never lived in the house he felt was rightfully his." }},

    { id:"lobelia_sackv", fn:"Lobelia", ln:"Sackville-Baggins", g:"F", b:"1318", d:"1420",
      bp:"The Shire", dp:"The Shire", nat:null, p:[], s:["otho_sackv"], image:null,
      bio:{ pl:"She wanted Bag End and never stopped wanting it. For decades Lobelia schemed and griped and made Bilbo's life difficult — she famously stole his silver spoons. She outlived her husband and then her son Lotho, who was murdered under Saruman's occupation of the Shire. Something broke in her then: she gave every penny of her remaining fortune to the hobbits Saruman's Men had made homeless. When she died in SR 1420, the Shire gave her a standing ovation at the funeral. She had earned it.", en:"She wanted Bag End and never stopped wanting it. For decades Lobelia schemed and griped and made Bilbo's life difficult — she famously stole his silver spoons. She outlived her husband and then her son Lotho, who was murdered under Saruman's occupation of the Shire. Something broke in her then: she gave every penny of her remaining fortune to the hobbits Saruman's Men had made homeless. When she died in SR 1420, the Shire gave her a standing ovation at the funeral. She had earned it." }},

    { id:"lotho_sackv", fn:"Lotho", ln:"Sackville-Baggins", g:"M", b:"1364", d:"1419",
      bp:"The Shire", dp:"Bag End, Hobbiton", nat:null, p:["otho_sackv","lobelia_sackv"], s:[], image:null,
      bio:{ pl:"He called himself 'the Chief' and thought he was running the Shire. In reality Saruman was running Lotho — using him to buy up land, monopolise trade, and install the ruffians who terrorised the Shire during the War of the Ring. When his usefulness ended, Saruman had Grima Wormtongue murder him. He was buried under Bag End's foundations. His parents' lifelong ambition ended in a shallow grave.", en:"He called himself 'the Chief' and thought he was running the Shire. In reality Saruman was running Lotho — using him to buy up land, monopolise trade, and install the ruffians who terrorised the Shire during the War of the Ring. When his usefulness ended, Saruman had Grima Wormtongue murder him. He was buried under Bag End's foundations. His parents' lifelong ambition ended in a shallow grave." }},

    { id:"frodo_baggins", fn:"Frodo", ln:"Baggins", g:"M", b:"1368", d:null,
      bp:"Brandy Hall, Buckland", dp:"Valinor (sailed SR 1421)", nat:null, p:["drogo_baggins","primula_brandybuck"], s:[], image:null,
      bio:{ pl:"He carried the One Ring from the Shire to the Cracks of Doom — the most terrible journey ever made by any creature so small. What he brought back was the Shire's freedom and a wound that never fully healed: the blade of the Morgul-lord, the sting of Shelob, the weight of the Ring itself. At fifty he sailed from the Grey Havens. He had saved the world. He could no longer fully live in it.", en:"He carried the One Ring from the Shire to the Cracks of Doom — the most terrible journey ever made by any creature so small. What he brought back was the Shire's freedom and a wound that never fully healed: the blade of the Morgul-lord, the sting of Shelob, the weight of the Ring itself. At fifty he sailed from the Grey Havens. He had saved the world. He could no longer fully live in it." }},

    // ═══════════════════════════════════════════════════════════════
    // TOOK OF GREAT SMIALS
    // ═══════════════════════════════════════════════════════════════

    { id:"gerontius_took", fn:"Gerontius", ln:"Took", g:"M", b:"1190", d:"1320",
      bp:"Great Smials, Tuckborough", dp:"Great Smials, Tuckborough", nat:null, p:[], s:["adamanta_chubb"], image:null,
      bio:{ pl:"The Old Took. He lived 130 years — a record in the Shire before Bilbo broke it — fathered twelve children, and spread the Took blood through half the great families. He was already a hundred years old when Bilbo was born, and Bilbo knew him as a legendary figure from childhood. His daughters alone were enough: Belladonna went to the Baggins, Mirabella to the Brandybucks, Donnamira to the Boffins. Three families transformed by one man's cheerful excess.", en:"The Old Took. He lived 130 years — a record in the Shire before Bilbo broke it — fathered twelve children, and spread the Took blood through half the great families. He was already a hundred years old when Bilbo was born. His daughters alone were enough: Belladonna went to the Bagginses, Mirabella to the Brandybucks, Donnamira to the Boffins. Three families transformed by one man's cheerful excess." }},

    { id:"adamanta_chubb", fn:"Adamanta", ln:"Chubb", g:"F", b:"~1196", d:"~1318",
      bp:"The Shire", dp:"Great Smials, Tuckborough", nat:null, p:[], s:["gerontius_took"], image:null,
      bio:{ pl:"Wife of the Old Took and mother of his twelve children. The Chubb family was well-established in the Shire, and Adamanta brought their solid respectability to the most unconventional household in Tuckborough. She outlived most of her children's childhoods and saw the Took name distributed across half the Shire.", en:"Wife of the Old Took and mother of his twelve children. The Chubb family was well-established in the Shire, and Adamanta brought their solid respectability to the most unconventional household in Tuckborough. She outlived most of her children's childhoods and saw the Took name distributed across half the Shire." }},

    { id:"hildigrim_took", fn:"Hildigrim", ln:"Took", g:"M", b:"~1240", d:"~1341",
      bp:"Great Smials, Tuckborough", dp:"The Shire", nat:null, p:["gerontius_took","adamanta_chubb"], s:[], image:null,
      bio:{ pl:"One of the many sons of the Old Took. Through Hildigrim the Thainship of the Shire descended — his son Adalgrim, and then Adalgrim's son Paladin, and then Paladin's son Peregrin. Three generations stood between Hildigrim and the hero of Gondor.", en:"One of the many sons of the Old Took. Through Hildigrim the Thainship of the Shire descended — his son Adalgrim, and then Adalgrim's son Paladin, and then Paladin's son Peregrin. Three generations stood between Hildigrim and the hero of Gondor." }},

    { id:"adalgrim_took", fn:"Adalgrim", ln:"Took", g:"M", b:"~1280", d:"~1382",
      bp:"Great Smials, Tuckborough", dp:"The Shire", nat:null, p:["hildigrim_took"], s:[], image:null,
      bio:{ pl:"Son of Hildigrim, father of Paladin II and Esmeralda. It was through Adalgrim that both Pippin and Merry were connected to the Old Took — Paladin became Pippin's father, and Esmeralda (who married Saradoc Brandybuck) became Merry's mother, making the two great friends also first cousins.", en:"Son of Hildigrim, father of Paladin II and Esmeralda. It was through Adalgrim that both Pippin and Merry were connected to the Old Took — Paladin became Pippin's father, and Esmeralda (who married Saradoc Brandybuck) became Merry's mother, making the two great friends also first cousins." }},

    { id:"paladin_took", fn:"Paladin II", ln:"Took", g:"M", b:"1333", d:"1434",
      bp:"Great Smials, Tuckborough", dp:"The Shire", nat:null, p:["adalgrim_took"], s:["eglantine_banks"], image:null,
      bio:{ pl:"Thain of the Shire after the War of the Ring. He managed the family estate at Great Smials and worried about his son Pippin considerably. He had good reason: Pippin looked into a palantír, was nearly killed by the Ents, served as a Guard of the Citadel of Gondor, and stabbed a troll. Paladin lived long enough to see Pippin return as one of the heroes of the age and then inherit the Thainship.", en:"Thain of the Shire after the War of the Ring. He managed the family estate at Great Smials and worried about his son Pippin considerably. He had good reason: Pippin looked into a palantír, was nearly killed by the Ents, served as a Guard of the Citadel of Gondor, and stabbed a troll. Paladin lived long enough to see Pippin return as one of the heroes of the age." }},

    { id:"eglantine_banks", fn:"Eglantine", ln:"Banks", g:"F", b:"1339", d:"~1440",
      bp:"The Shire", dp:"The Shire", nat:null, p:[], s:["paladin_took"], image:null,
      bio:{ pl:"Wife of Paladin II Took and mother of Peregrin. She raised Pippin alongside three older sisters — Pearl, Pimpernel, and Pervinca — and doubtless spent considerable time worrying about his various escapades before, during, and after the War of the Ring.", en:"Wife of Paladin II Took and mother of Peregrin. She raised Pippin alongside three older sisters — Pearl, Pimpernel, and Pervinca — and doubtless spent considerable time worrying about his various escapades before, during, and after the War of the Ring." }},

    { id:"pippin_took", fn:"Peregrin I", ln:"Took", g:"M", b:"1390", d:null,
      bp:"Great Smials, Tuckborough", dp:"Rohan (died in old age)", nat:null, p:["paladin_took","eglantine_banks"], s:["diamond_longleave"], image:null,
      bio:{ pl:"The youngest and most reckless of the four. Peregrin Took — Pippin — looked into the palantír of Orthanc and survived a direct mental encounter with Sauron. He served as a Guard of the Citadel of Gondor, stabbed the troll-chieftain at the Black Gate, and reached Minas Tirith before Gandalf. After the War he became Thain of the Shire. He and Merry eventually retired to Rohan and Gondor in their old age, and were buried in Gondor's House of the Kings among men of great renown.", en:"The youngest and most reckless of the four. Peregrin Took — Pippin — looked into the palantír of Orthanc and survived a direct mental encounter with Sauron. He served as a Guard of the Citadel of Gondor, stabbed the troll-chieftain at the Black Gate, and reached Minas Tirith before Gandalf. After the War he became Thain of the Shire. He and Merry eventually retired to Rohan and Gondor in their old age, and were buried among men of great renown." }},

    { id:"diamond_longleave", fn:"Diamond", ln:"of Long Cleeve", g:"F", b:"~1395", d:null,
      bp:"Long Cleeve, the Shire", dp:"The Shire", nat:null, p:[], s:["pippin_took"], image:null,
      bio:{ pl:"Wife of Peregrin Took and mother of Faramir Took — named, with Pippin's characteristic sentimentality, after the Steward of Gondor. Diamond of Long Cleeve married the most famous young hobbit of the age and made her home at Great Smials, where Pippin eventually became Thain.", en:"Wife of Peregrin Took and mother of Faramir Took — named, with Pippin's characteristic sentimentality, after the Steward of Gondor. Diamond of Long Cleeve married the most famous young hobbit of the age and made her home at Great Smials, where Pippin eventually became Thain." }},

    // ═══════════════════════════════════════════════════════════════
    // BRANDYBUCK OF BRANDY HALL
    // ═══════════════════════════════════════════════════════════════

    { id:"gorbadoc_brandybuck", fn:"Gorbadoc", ln:"Brandybuck", g:"M", b:"~1260", d:"~1363",
      bp:"Brandy Hall, Buckland", dp:"Brandy Hall, Buckland", nat:null, p:[], s:["mirabella_took"], image:null,
      bio:{ pl:"Master of Buckland in his time, and patriarch of the branch that produced Frodo's mother Primula. He married Mirabella Took — another daughter of the Old Took — bringing yet more of that unpredictable blood into the Brandybuck line. His descendants included both Primula (who drowned on the Brandywine) and Rorimac (who raised Frodo briefly before Bilbo took over).", en:"Master of Buckland in his time, and patriarch of the branch that produced Frodo's mother Primula. He married Mirabella Took — another daughter of the Old Took — bringing yet more of that unpredictable blood into the Brandybuck line. His descendants included Primula (who drowned on the Brandywine) and Rorimac (who raised Frodo before Bilbo took over)." }},

    { id:"mirabella_took", fn:"Mirabella", ln:"Took", g:"F", b:"~1260", d:"~1360",
      bp:"Great Smials, Tuckborough", dp:"Brandy Hall, Buckland", nat:null, p:["gerontius_took","adamanta_chubb"], s:["gorbadoc_brandybuck"], image:null,
      bio:{ pl:"Daughter of the Old Took who married Gorbadoc Brandybuck, carrying the Took spirit from Tuckborough to Buckland. Through her, the Old Took's blood flowed to Primula Brandybuck and thus to Frodo, making Frodo a great-great-grandson of Gerontius Took on both sides of his family — through Belladonna via Bilbo, and through Mirabella via his mother.", en:"Daughter of the Old Took who married Gorbadoc Brandybuck, carrying the Took spirit from Tuckborough to Buckland. Through her, the Old Took's blood flowed to Primula Brandybuck and thus to Frodo, making Frodo a great-great-grandson of Gerontius Took on both sides of his family." }},

    { id:"rorimac_brandybuck", fn:"Rorimac", ln:"Brandybuck", g:"M", b:"~1302", d:"~1408",
      bp:"Brandy Hall, Buckland", dp:"Brandy Hall, Buckland", nat:null, p:["gorbadoc_brandybuck","mirabella_took"], s:["menegilda_goold"], image:null,
      bio:{ pl:"Master of Buckland and Merry's grandfather. After Frodo's parents drowned in SR 1380, Rorimac took the twelve-year-old Frodo into Brandy Hall and raised him among the Brandybucks. Frodo grew up there until Bilbo adopted him at twenty-one. Rorimac — 'Goldfather' as the family called him — lived into his hundreds.", en:"Master of Buckland and Merry's grandfather. After Frodo's parents drowned in SR 1380, Rorimac took the twelve-year-old Frodo into Brandy Hall and raised him among the Brandybucks. Frodo grew up there until Bilbo adopted him at twenty-one. Rorimac — 'Goldfather' as the family called him — lived into his hundreds." }},

    { id:"menegilda_goold", fn:"Menegilda", ln:"Goold", g:"F", b:"~1310", d:"~1395",
      bp:"The Shire", dp:"Brandy Hall, Buckland", nat:null, p:[], s:["rorimac_brandybuck"], image:null,
      bio:{ pl:"Wife of Rorimac Brandybuck and grandmother of Merry. She helped raise the young Frodo at Brandy Hall after his parents' deaths, as part of the large, noisy, hospitable Brandybuck household that filled the tunnels of Brandy Hall.", en:"Wife of Rorimac Brandybuck and grandmother of Merry. She helped raise the young Frodo at Brandy Hall after his parents' deaths, as part of the large, noisy, hospitable Brandybuck household that filled the tunnels of Brandy Hall." }},

    { id:"primula_brandybuck", fn:"Primula", ln:"Brandybuck", g:"F", b:"1320", d:"1380",
      bp:"Brandy Hall, Buckland", dp:"Brandywine River, the Shire", nat:null, p:["gorbadoc_brandybuck","mirabella_took"], s:["drogo_baggins"], image:null,
      bio:{ pl:"She drowned on the Brandywine with her husband Drogo when Frodo was twelve. That is almost all the record gives. She was the daughter of Gorbadoc Brandybuck and Mirabella Took — meaning Frodo carried, through his mother, both the Brandybuck adventurousness and the Old Took's blood, quite apart from anything Bilbo contributed. She was thirty years old.", en:"She drowned on the Brandywine with her husband Drogo when Frodo was twelve. That is almost all the record gives. She was the daughter of Gorbadoc Brandybuck and Mirabella Took — meaning Frodo carried, through his mother, both Brandybuck spirit and the Old Took's blood, quite apart from anything Bilbo contributed. She was sixty years old." }},

    { id:"saradoc_brandybuck", fn:"Saradoc", ln:"Brandybuck", g:"M", b:"~1340", d:"~1432",
      bp:"Brandy Hall, Buckland", dp:"Brandy Hall, Buckland", nat:null, p:["rorimac_brandybuck","menegilda_goold"], s:["esmeralda_took"], image:null,
      bio:{ pl:"Master of Buckland and Merry's father. He was known as 'Scattergold' — a nickname suggesting either generosity or extravagance, depending on one's disposition. He and Esmeralda raised Meriadoc at Brandy Hall, where Merry grew up with maps, books, and the Brandybuck tradition of knowing things other hobbits preferred not to think about.", en:"Master of Buckland and Merry's father. He was known as 'Scattergold' — a nickname suggesting either generosity or extravagance, depending on one's disposition. He and Esmeralda raised Meriadoc at Brandy Hall, where Merry grew up with maps, books, and the Brandybuck tradition of knowing things other hobbits preferred not to think about." }},

    { id:"esmeralda_took", fn:"Esmeralda", ln:"Took", g:"F", b:"1336", d:null,
      bp:"Great Smials, Tuckborough", dp:"Brandy Hall, Buckland", nat:null, p:["adalgrim_took"], s:["saradoc_brandybuck"], image:null,
      bio:{ pl:"Daughter of Adalgrim Took and sister of Paladin II — making Merry and Pippin first cousins, though most outside the family tended to think of them simply as inseparable. Esmeralda brought the full weight of Took family history into Brandy Hall when she married Saradoc, and raised her son Merry with the intelligence and initiative that characterised both families.", en:"Daughter of Adalgrim Took and sister of Paladin II — making Merry and Pippin first cousins, though most simply thought of them as inseparable. Esmeralda brought the full weight of Took family history into Brandy Hall when she married Saradoc, and raised her son Merry with the intelligence and initiative that characterised both families." }},

    { id:"merry_brandybuck", fn:"Meriadoc", ln:"Brandybuck", g:"M", b:"1382", d:null,
      bp:"Brandy Hall, Buckland", dp:"Gondor (died in old age)", nat:null, p:["saradoc_brandybuck","esmeralda_took"], s:["estella_bolger"], image:null,
      bio:{ pl:"The strategist of the four. Meriadoc Brandybuck was the one who read the maps, studied the histories, planned the escape from the Shire, and understood what was happening at every stage of the journey. At the Battle of the Pelennor Fields he stabbed the Witch-king of Angmar in the back of the knee — breaking the spell that no man could harm him — and helped Éowyn complete the killing. He became Master of Buckland, and in old age rode to Rohan with Pippin, where both were eventually buried among the greatest men of the age.", en:"The strategist of the four. Meriadoc Brandybuck was the one who read the maps, studied the histories, and understood what was happening at every stage of the journey. At the Battle of the Pelennor Fields he stabbed the Witch-king of Angmar — breaking the spell that protected him — and helped Éowyn complete the killing. He became Master of Buckland, and in old age rode to Rohan with Pippin, where both were buried among the greatest of the age." }},

    { id:"estella_bolger", fn:"Estella", ln:"Bolger", g:"F", b:"~1385", d:null,
      bp:"The Shire", dp:"Brandy Hall, Buckland", nat:null, p:[], s:["merry_brandybuck"], image:null,
      bio:{ pl:"Wife of Meriadoc Brandybuck. Her brother Fredegar (Fatty) Bolger had been left behind when the four set out from the Shire — he raised the alarm against the Black Riders at Crickhollow, was later captured and imprisoned by Saruman's agents, and was freed during the Scouring. Estella and Merry settled at Brandy Hall as Master and Mistress of Buckland.", en:"Wife of Meriadoc Brandybuck. Her brother Fredegar (Fatty) Bolger had been left behind when the four set out — he raised the alarm against the Black Riders at Crickhollow, was captured and imprisoned by Saruman's agents, and freed during the Scouring. Estella and Merry settled at Brandy Hall as Master and Mistress of Buckland." }},

    // ═══════════════════════════════════════════════════════════════
    // GAMGEE OF HOBBITON
    // ═══════════════════════════════════════════════════════════════

    { id:"hamfast_gamgee", fn:"Hamfast", ln:"Gamgee", g:"M", b:"1326", d:"1428",
      bp:"Hobbiton, the Shire", dp:"Hobbiton, the Shire", nat:null, p:[], s:["bell_goodchild"], image:null,
      bio:{ pl:"The Gaffer. Hamfast Gamgee was the gardener of Bag End — he had tended Bilbo's garden his whole working life and passed the job to his son Sam. Gruff, suspicious of adventures and elf-nonsense, fiercely proud of his cabbages and his family, he was the most thoroughly ordinary hobbit imaginable. When Saruman's Men came to Bagshot Row and evicted him from his home, he refused to pretend it was anything other than a disgrace. His son became the greatest hobbit of the age. The Gaffer never entirely understood why.", en:"The Gaffer. Hamfast Gamgee was the gardener of Bag End his whole working life, and passed the job to his son Sam. Gruff, suspicious of adventures and elf-nonsense, fiercely proud of his cabbages and his family, he was the most thoroughly ordinary hobbit imaginable. When Saruman's Men evicted him from Bagshot Row, he refused to pretend it was anything other than a disgrace. His son became the greatest hobbit of the age. The Gaffer never entirely understood why." }},

    { id:"bell_goodchild", fn:"Bell", ln:"Goodchild", g:"F", b:"1334", d:"1396",
      bp:"The Shire", dp:"Hobbiton, the Shire", nat:null, p:[], s:["hamfast_gamgee"], image:null,
      bio:{ pl:"Wife of Hamfast Gamgee and mother of Samwise, Hamson, Halfred, Daisy, May, and Marigold. She died in SR 1396 when Sam was sixteen — he would have known her through his childhood but lost her before his adult life began. The Gaffer raised the younger children alone.", en:"Wife of Hamfast Gamgee and mother of Samwise, Hamson, Halfred, Daisy, May, and Marigold. She died in SR 1396 when Sam was sixteen, raising the younger children alone with the Gaffer." }},

    { id:"samwise_gamgee", fn:"Samwise", ln:"Gamgee", g:"M", b:"1380", d:null,
      bp:"Bagshot Row, Hobbiton", dp:"Valinor (sailed SR 1482)", nat:null, p:["hamfast_gamgee","bell_goodchild"], s:["rose_cotton"], image:null,
      bio:{ pl:"The bravest hobbit in the story, though he would never say so. Samwise Gamgee carried Frodo when Frodo could no longer carry himself, held the Ring when Frodo was captured in Cirith Ungol, and then handed it back — which may have been the hardest thing anyone did in the whole War of the Ring. He came home, married Rosie Cotton, planted a sapling on the Party Field from Galadriel's gift, became Mayor of the Shire seven times, and raised thirteen children. He was the last Ring-bearer, sailing West in SR 1482 at the age of 102.", en:"The bravest hobbit in the story, though he would never say so. Samwise Gamgee carried Frodo when Frodo could no longer carry himself, held the Ring when Frodo was captured, and then handed it back — the hardest thing anyone did in the whole War of the Ring. He came home, married Rosie, became Mayor seven times, and raised thirteen children. He was the last Ring-bearer, sailing West in SR 1482 at the age of 102." }},

    { id:"rose_cotton", fn:"Rosie", ln:"Cotton", g:"F", b:"1384", d:"1482",
      bp:"Hobbiton, the Shire", dp:"Bag End, Hobbiton", nat:null, p:["tolman_cotton","lily_brown"], s:["samwise_gamgee"], image:null,
      bio:{ pl:"She waited for Sam while he was away — a wait of two years, through a war, with no certainty he was coming back. He came home to find her still there. They had thirteen children and lived at Bag End, where Sam had replanted the garden from scratch. Rosie died in SR 1482 at the age of 98. Sam sailed West that same year. It was said that he could finally make the crossing because she was gone.", en:"She waited for Sam while he was away — two years, through a war, with no certainty he was coming back. He came home to find her still there. They had thirteen children and lived at Bag End. Rosie died in SR 1482 at the age of 98. Sam sailed West that same year. It was said he could finally make the crossing because she was gone." }},

    { id:"tolman_cotton", fn:"Tolman", ln:"Cotton", g:"M", b:"~1350", d:"~1430",
      bp:"Hobbiton, the Shire", dp:"The Shire", nat:null, p:[], s:["lily_brown"], image:null,
      bio:{ pl:"Farmer Cotton — Sam's father-in-law and one of the practical leaders of the Shire rebellion during the Scouring. While the four companions were in Mordor, Tolman Cotton and his sons kept their heads down, kept watch, and were ready to act when the time came. He helped organise the hobbits' resistance against Saruman's ruffians.", en:"Farmer Cotton — Sam's father-in-law and one of the practical leaders of the Shire rebellion. While the four companions were in Mordor, Tolman Cotton and his sons kept their heads down, kept watch, and were ready to act when the time came. He helped organise the hobbits' resistance against Saruman's ruffians." }},

    { id:"lily_brown", fn:"Lily", ln:"Brown", g:"F", b:"~1354", d:"~1434",
      bp:"The Shire", dp:"The Shire", nat:null, p:[], s:["tolman_cotton"], image:null,
      bio:{ pl:"Wife of Tolman Cotton and mother of Rosie. Her family name was Brown — a thoroughly sensible Shire name. She and her husband raised Rosie at their farm in Hobbiton, where the Cottons had worked the land for generations.", en:"Wife of Tolman Cotton and mother of Rosie. She and her husband raised Rosie at their farm in Hobbiton, where the Cottons had worked the land for generations." }},

    // ═══════════════════════════════════════════════════════════════
    // OTHER NOTABLE HOBBITS
    // ═══════════════════════════════════════════════════════════════

    { id:"fredegar_bolger", fn:"Fredegar", ln:"Bolger", g:"M", b:"~1380", d:null,
      bp:"The Shire", dp:"The Shire", nat:null, p:[], s:[], image:null,
      bio:{ pl:"'Fatty' Bolger was supposed to stay behind at Crickhollow as a decoy — a comfortable role he accepted cheerfully, expecting nothing more dangerous than keeping up appearances. What he didn't expect was a visitation by the Black Riders. He ran for it and raised the alarm, which was genuinely brave. He later organised a resistance band in the Shire and was captured and imprisoned by Saruman's agents. The War of the Ring found him even in the Shire.", en:"'Fatty' Bolger was supposed to stay behind at Crickhollow as a decoy — a comfortable role he accepted cheerfully, expecting nothing more dangerous than keeping up appearances. Then the Black Riders came. He ran and raised the alarm, which was genuinely brave. He later organised a resistance band and was captured by Saruman's agents. The War of the Ring found him even in the Shire." }},

  ]
};
