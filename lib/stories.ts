/**
 * Short film scripts written by Kavinkumar, shown in the
 * "From the Writing Desk" section. Each script is modelled as a
 * sequence of screenplay blocks so the modal can render true script
 * formatting. Tanglish (Romanized Tamil) is kept in natural spelling.
 */

export type ScriptBlock =
  | { type: "time"; text: string } // e.g. "2:17 AM."
  | { type: "scene"; text: string } // slugline — "INT. BEDROOM – NIGHT"
  | { type: "action"; text: string } // narrative / action line
  | { type: "dialogue"; character: string; lines: string[] } // name + quoted lines
  | { type: "transition"; text: string } // "CUT TO BLACK."
  | { type: "titlecard"; text: string }; // 'TITLE CARD: "…"'

export interface Story {
  id: string;
  title: string;
  genre: string;
  setting: string;
  logline: string;
  preview: string[];
  blocks: ScriptBlock[];
}

export const stories: Story[] = [
  {
    id: "2-17-am",
    title: "2:17 AM",
    genre: "Psychological Thriller",
    setting: "INT. BEDROOM – NIGHT",
    logline:
      "A screenwriter who kills off his characters gets a 2 a.m. call from one of them.",
    preview: [
      "Small room. Laptop light mattum room la glow aaguthu. Outside heavy rain sound.",
      "“Ennoda ending mattum yen complete pannala…?”",
    ],
    blocks: [
      { type: "scene", text: "INT. BEDROOM – NIGHT" },
      { type: "time", text: "2:17 AM." },
      { type: "action", text: "Small room. Laptop light mattum room la glow aaguthu." },
      { type: "action", text: "Outside heavy rain sound." },
      { type: "action", text: "ARJUN (24) awake. Eyes red." },
      {
        type: "action",
        text: "Table mela: cold coffee, crumpled papers, cigarettes, unfinished screenplay.",
      },
      {
        type: "action",
        text: "Laptop screen la: TITLE: “LAST CALL” / ENDING PENDING…",
      },
      {
        type: "action",
        text: "Arjun type panna try pannuran. Delete. Again type. Delete.",
      },
      { type: "action", text: "Phone vibrate. UNKNOWN NUMBER." },
      {
        type: "action",
        text: "He cuts. Again call. Cuts. Third time. Slow ah attend pannuran.",
      },
      { type: "action", text: "Silence. Static sound. Then… a girl breathing." },
      { type: "dialogue", character: "GIRL (V.O.)", lines: ["“Thoongalaya…?”"] },
      { type: "dialogue", character: "ARJUN", lines: ["“Yaaru neenga?”"] },
      {
        type: "dialogue",
        character: "GIRL (V.O.)",
        lines: ["“Neenga dhaane… ellaarukkum endings ezhuthuveenga…”"],
      },
      { type: "action", text: "Arjun face serious aaguthu." },
      {
        type: "dialogue",
        character: "GIRL (V.O.)",
        lines: ["“En ending mattum yen complete pannala…?”"],
      },
      { type: "action", text: "Arjun freezes." },
      {
        type: "action",
        text: "Laptop screen la character details open la iruku: MEERA — AGE 22 / STATUS: DEAD",
      },
      {
        type: "action",
        text: "Arjun immediate ah close panna try pannuran. Laptop hangs.",
      },
      { type: "action", text: "Rain sound increase." },
      { type: "dialogue", character: "ARJUN", lines: ["“Yaaru nee…?”"] },
      { type: "dialogue", character: "GIRL (V.O.)", lines: ["“Marandhuttiya…?”"] },
      {
        type: "action",
        text: "Flash cuts: a girl laughing, rain road, bike skid, blood on glass, someone crying.",
      },
      { type: "action", text: "BACK TO ROOM. Arjun sweating." },
      { type: "dialogue", character: "ARJUN", lines: ["“No…”"] },
      {
        type: "dialogue",
        character: "GIRL (V.O.)",
        lines: ["“Story nu nenachu… real feelings ah use pannaadha Arjun…”"],
      },
      { type: "action", text: "Tears slowly form." },
      { type: "dialogue", character: "ARJUN", lines: ["“Meera…”"] },
      {
        type: "action",
        text: "Current suddenly OFF. Full darkness. Only phone speaker light.",
      },
      {
        type: "dialogue",
        character: "GIRL (V.O.)",
        lines: ["“Characters ah create panna easy…”"],
      },
      {
        type: "dialogue",
        character: "GIRL (V.O.)",
        lines: ["“Aana… avanga pain oda vaazhradhu kashtam.”"],
      },
      { type: "action", text: "Call disconnected. Dead silence." },
      { type: "action", text: "Phone screen crack. Battery drains. Dark." },
      { type: "action", text: "Laptop automatic ah ON aaguthu." },
      { type: "action", text: "Screen la one line type aaguthu by itself:" },
      {
        type: "dialogue",
        character: "LAPTOP",
        lines: ["“WRITERS DON’T ALWAYS SURVIVE THEIR STORIES.”"],
      },
      { type: "action", text: "Arjun slowly steps back. Fear. Guilt. Breakdown." },
      { type: "transition", text: "CUT TO BLACK." },
      { type: "time", text: "2:18 AM." },
    ],
  },
  {
    id: "availability",
    title: "Availability",
    genre: "Emotional Drama",
    setting: "EXT. SMALL TEA SHOP – NIGHT",
    logline:
      "Some people become part of your routine before they ever become part of your life.",
    preview: [
      "Tea kadai almost close aagura neram. Light rain.",
      "“Sometimes… people become part of our routine before becoming part of our life.”",
    ],
    blocks: [
      { type: "scene", text: "EXT. SMALL TEA SHOP – NIGHT" },
      { type: "action", text: "Light rain." },
      { type: "action", text: "Tea kadai almost close aagura neram." },
      { type: "action", text: "Three plastic chairs." },
      { type: "action", text: "KARTHICK tea kudichittu phone scroll pannuran." },
      { type: "action", text: "ARJUN opposite side silent ah ukkaandhirukan." },
      {
        type: "dialogue",
        character: "KARTHICK",
        lines: ["“Dei… nee innum avala marakkala la?”"],
      },
      { type: "action", text: "Arjun small smile." },
      { type: "dialogue", character: "ARJUN", lines: ["“Love pannala da…”"] },
      { type: "dialogue", character: "ARJUN", lines: ["“Availability ah pazhagitten.”"] },
      { type: "action", text: "Karthick confused." },
      {
        type: "dialogue",
        character: "ARJUN",
        lines: [
          "“Daily morning message… night call… saaptiya… veettukku poyittiya… paathukko…”",
        ],
      },
      {
        type: "dialogue",
        character: "ARJUN",
        lines: ["“Oru aal daily namma life la irundhuttu… suddenly illaama poyitta…”"],
      },
      { type: "action", text: "Silence. Rain sound." },
      { type: "dialogue", character: "ARJUN", lines: ["“Adhu dhaan kashtam.”"] },
      { type: "action", text: "Karthick slow ah phone lock pannuran." },
      { type: "dialogue", character: "KARTHICK", lines: ["“Apram nee sollalaya?”"] },
      { type: "action", text: "Arjun laughs softly." },
      {
        type: "dialogue",
        character: "ARJUN",
        lines: ["“Sonna… friendship um poidumo nu bayam.”"],
      },
      { type: "action", text: "Tea master distant ah vessel wash pannura sound." },
      { type: "action", text: "Few seconds silence." },
      {
        type: "dialogue",
        character: "ARJUN",
        lines: [
          "“Sometimes… people become part of our routine before becoming part of our life.”",
        ],
      },
      { type: "action", text: "Karthick paathuttu irukan." },
      {
        type: "dialogue",
        character: "ARJUN",
        lines: ["“Aana routine dhaan seekiram mudinjidum.”"],
      },
      { type: "action", text: "Suddenly phone vibration." },
      { type: "action", text: "NILA CALLING." },
      { type: "action", text: "Arjun and Karthick both paakuraanga." },
      { type: "action", text: "Arjun attend pannaama paathuttu irukan." },
      { type: "action", text: "Call cut." },
      { type: "action", text: "Immediately one message." },
      {
        type: "dialogue",
        character: "MESSAGE",
        lines: ["“I reached home. Take care.”"],
      },
      { type: "action", text: "Arjun smile pannuran. Eyes little emotional." },
      { type: "action", text: "Phone lock pannittu pocket la vaikkuran." },
      { type: "dialogue", character: "KARTHICK", lines: ["“Call pannalaya?”"] },
      { type: "action", text: "Arjun tea glass ah paakuran. Small smile." },
      { type: "dialogue", character: "ARJUN", lines: ["“Ippo pesuna… marakka mudiyaadhu.”"] },
      { type: "action", text: "Rain slow ah increase aaguthu." },
      { type: "action", text: "Tea kadai light OFF." },
      { type: "transition", text: "CUT TO BLACK." },
    ],
  },
  {
    id: "last-bench",
    title: "Last Bench",
    genre: "Coming-of-age",
    setting: "INT. COLLEGE CLASSROOM – EVENING",
    logline:
      "On the last day of college, the last bench holds the loudest silence.",
    preview: [
      "College almost empty. Blackboard la: “FAREWELL 2026”. Fans sound mattum.",
      "“Naama ellaarum college ku padikka varom nu nenaippom… Aana sila per… oru life ah theda varuvom.”",
    ],
    blocks: [
      { type: "scene", text: "INT. COLLEGE CLASSROOM – EVENING" },
      { type: "action", text: "College almost empty." },
      {
        type: "action",
        text: "One boy — KAVIN — last bench la ukkaandhu irukan. Classroom silent.",
      },
      { type: "action", text: "Blackboard la: “FAREWELL 2026”" },
      { type: "action", text: "Fans sound mattum." },
      {
        type: "action",
        text: "Avan desk mela oru old attendance paper, few scribbled story ideas, and broken earphones.",
      },
      { type: "action", text: "Door side la light slow ah ulle varudhu." },
      { type: "action", text: "Avan phone open pannuran." },
      {
        type: "action",
        text: "Gallery la: friends laughing, tea kadai selfies, culturals, one blurred photo of a girl, short film practice screenshots.",
      },
      { type: "action", text: "Avan smile pannittu phone off pannuran." },
      { type: "action", text: "Silence." },
      { type: "action", text: "Suddenly corridor la juniors sirichittu odura sound." },
      { type: "action", text: "Avan window vazhiya paakuran." },
      {
        type: "dialogue",
        character: "KAVIN (V.O.)",
        lines: ["“Naama ellaarum college ku padikka varom nu nenaippom…”"],
      },
      {
        type: "dialogue",
        character: "KAVIN (V.O.)",
        lines: ["“Aana sila per… oru life ah theda varuvom.”"],
      },
      { type: "action", text: "He stands." },
      { type: "action", text: "Bag eduthukuran." },
      { type: "action", text: "One last look at the classroom." },
      {
        type: "dialogue",
        character: "KAVIN (V.O.)",
        lines: [
          "“Attendance mudinjidum… Semesters mudinjidum… Aana sila kanavugal…”",
        ],
      },
      { type: "action", text: "He switches off the classroom light." },
      { type: "action", text: "Dark." },
      {
        type: "dialogue",
        character: "KAVIN (V.O.)",
        lines: ["“Last bench la dhaan start aagum.”"],
      },
      { type: "transition", text: "CUT TO BLACK." },
      { type: "titlecard", text: "“Some stories never leave the classroom.”" },
    ],
  },
];
