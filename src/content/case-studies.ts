// Declarative case study content model for Nexus website.
// This file does not contain JSX or UI styles.
// All copy requirements (word counts) and structures are defined here.

export interface WorkflowStage {
  name: string;
  role: string;
  description: string;
}

export interface CapabilityGroup {
  title: string;
  bullets: string[];
}

export interface CaseStudyData {
  slug: string;
  name: string;
  category: string;
  industry: string;
  status: string;
  statusType: "available" | "beta" | "waitlist";
  shortDefinition: string;
  longDefinition: string;
  positioning: string;
  originContext: string;
  problemTitle: string;
  problemNarrative: string[];
  consequences: string[];
  intendedUsers: string[];
  userRoleDescriptions: string[];
  designedFor: string[];
  beforeWorkflow: string[];
  workflowStages: WorkflowStage[];
  afterWorkflow: string[];
  capabilityGroups: CapabilityGroup[];
  keyInteractions: string[];
  automationRules: string[];
  visibilityImprovements: string[];
  dataAndAuditNotes: string[];
  integrationNarrative: string[];
  deploymentNotes: string[];
  currentScope: string[];
  futureDirection: string[];
  limitations: string[];
  safetyNotes: string[];
  proofPoints: string[];
  architecturalDecisions: string[];
  visualFrames: string[]; // references mockups (frame0, frame1, frame2...)
  primaryCTA: { label: string; url: string };
  secondaryCTA: { label: string; url: string };
  accentColor: string;
}

export const DETAILED_CASE_STUDIES: CaseStudyData[] = [
  {
    slug: "clinicos",
    name: "ClinicOS",
    category: "Outpatient Clinic Operations Platform",
    industry: "Healthcare / Medical",
    status: "Reference Build",
    statusType: "available",
    shortDefinition: "An end-to-end outpatient clinic operations platform designed to connect the full patient journey through one coordinated workflow.",
    longDefinition: "ClinicOS acts as a shared state machine for patient care. It is not merely an appointment scheduler, a token application, or a digital prescription pad; rather, it coordinates the movement of physical patients and clinical data between receptionists, doctors, diagnostic technicians, billing cashiers, pharmacists, and managers to ensure operational continuity.",
    positioning: "Run the patient journey from enquiry to pharmacy through one connected workflow.",
    originContext: "Healthcare operations struggle with disjointed information. By structuring clinic processes as a transaction ledger, we eliminate transcription errors, token conflicts, and queue lag times.",
    problemTitle: "Fragmented outpatient handoffs and repetitive paperwork",
    problemNarrative: [
      "Outpatient clinic workflows are naturally multi-role and space-separated, moving from phone lines to front desks, doctor chambers, lab desks, pharmacies, and back to cashiers. In legacy environments, these transitions rely on manual checks, paper folders, or isolated software modules.",
      "When receptionists book appointments on spreadsheets, walk-in arrivals cause immediate queue conflicts. Doctors write prescriptions on paper scripts that patients physically carry across counters, leaving cashiers to guess doctor fees and pharmacists to check inventory shelves manually.",
      "The result is a highly fragmented flow where patients wait in crowded waiting areas, information is repeatedly re-entered, and clinic operators remain blind to delays or revenue splits until daily registers are physically balanced at night."
    ],
    consequences: [
      "Reception walk-ins conflict with pre-booked schedules, creating wait-room friction.",
      "Paper prescriptions are lost or misread, introducing dangerous medication errors.",
      "Cashiers manually tally bills from scribbled doctor notes, causing cash register leaks.",
      "Pharmacists waste cycle times checking stock shelves to confirm container availability.",
      "Clinic managers are blind to average wait times, patient leakage, and stock expirations."
    ],
    intendedUsers: [
      "Patient & Family",
      "Receptionist",
      "Consulting Physician",
      "Clinic Nurse / Assistant",
      "Diagnostic Lab Technician",
      "Billing Cashier",
      "Pharmacist / Dispenser",
      "Clinic Operations Manager",
      "Clinic Owner / Administrator"
    ],
    userRoleDescriptions: [
      "Patient & Family — Submits basic identification details via QR walk-ins, tracks their token position on waiting area display monitors, and receives digital prescription slips.",
      "Receptionist — Manages appointment requests, registers new patient family profiles using primary phone numbers, handles walk-in queries, and issues queue tokens.",
      "Consulting Physician — Conducts clinical consultations, logs encounter records, structures digital prescriptions, and dispatches lab orders directly to diagnostic desks.",
      "Clinic Nurse / Assistant — Confirms patient arrival, logs vitals (vitals like blood pressure, heart rate, weight) directly to the patient's active encounter file, and manages queue entries.",
      "Diagnostic Lab Technician — Receives diagnostic orders, conducts lab tests, and uploads test results directly to the patient's active encounter record.",
      "Billing Cashier — Retrieves automatically calculated invoices, processes payment collections (cash, cards, UPI), and prints invoices.",
      "Pharmacist / Dispenser — Dispenses medications matching locked digital prescription records and tracks batch/expiry counts.",
      "Clinic Operations Manager — Monitors real-time wait times, resolves queue bottlenecks, and tracks medication stock alerts.",
      "Clinic Owner / Administrator — Audits daily cash tallies, checks doctor revenue splits, and reviews operational margins."
    ],
    designedFor: [
      "Independent outpatient polyclinics",
      "Family-owned medical clinics",
      "Multi-speciality medical centers",
      "Doctor-owned chambers and clinics",
      "Medical practices with attached pharmacy counters",
      "Polyclinics managing multiple consultation chambers"
    ],
    beforeWorkflow: [
      "Enquiry: Patient calls reception; booking is logged in a paper diary or isolated spreadsheet.",
      "Arrival: Patient arrives; receptionist checks the diary, issues a paper slip, and manually alerts the nurse.",
      "Waiting: Patient waits in a crowded room, repeatedly asking staff about their queue position.",
      "Consult: Doctor writes notes and prescriptions on paper, adding diagnostic orders to a separate pad.",
      "Billing: Cashier reads scribbled slips, manually calculates charges, and reconciles cash logs.",
      "Pharmacy: Pharmacist reads the paper script, manually checks shelves, and writes down the sale."
    ],
    workflowStages: [
      { name: "Enquiry Intake", role: "Receptionist", description: "Patient calls or registers online; receptionist checks live doctor schedule grids and opens a pending profile ledger." },
      { name: "Family Profile Registration", role: "Receptionist", description: "Logs patient under a primary family phone index. Multiple profiles are grouped under one family account to prevent duplicate database profiles." },
      { name: "Token Allocation", role: "Receptionist", description: "Issues a same-day token number linked to a specific doctor and chamber queue, registering the booking in the system." },
      { name: "Arrival Check-In", role: "Nurse", description: "Confirms physical presence, updates patient status to 'arrived', and logs initial vitals (blood pressure, temperature) to the active encounter file." },
      { name: "Waiting Room Queue Management", role: "Nurse", description: "System updates wait-room monitors, displaying real-time token positions and estimated consult times to patients." },
      { name: "Clinical Consultation", role: "Consulting Physician", description: "Doctor reviews patient history, logs encounter notes, and records digital prescriptions and diagnostic orders in the system." },
      { name: "Diagnostic Test Dispatch", role: "Diagnostic Lab Technician", description: "Lab tech retrieves diagnostic orders, runs tests, and logs results directly into the patient's digital encounter file." },
      { name: "Invoice Cashiering", role: "Billing Cashier", description: "Cashier pulls invoice tally (consult + diagnostic fees), records payment via UPI or cards, and prints receipt." },
      { name: "Pharmacy Dispense", role: "Pharmacist", description: "Pharmacist pulls the locked prescription list, dispenses drugs based on batch codes, and updates counts." },
      { name: "Visit Closure", role: "Clinic Operations Manager", description: "System verifies all stages are completed, closes the active encounter ledger, and archives logs." },
      { name: "Follow-Up Scheduling", role: "Receptionist", description: "Sends automated SMS reminders to patients for follow-up consults or lab repeats based on clinical notes." }
    ],
    afterWorkflow: [
      "Registration: Patient file is instantly pulled or registered using a single mobile number.",
      "Arrival: Nurse logs vitals directly into the patient's active electronic file, updating wait-room monitors.",
      "Consultation: Doctor records consultation notes, locks digital prescriptions, and dispatches lab orders.",
      "Billing: Invoice automatically pulls consult fees, lab charges, and drug costs, clearing payments instantly.",
      "Pharmacy: Pharmacist reviews the locked digital prescription and dispenses medications.",
      "Oversight: Owner panel monitors average wait times, revenue allocations, and inventory logs."
    ],
    capabilityGroups: [
      {
        title: "Front Desk & Registry",
        bullets: [
          "Family-grouped patient profiles indexed by primary mobile number.",
          "Dynamic walk-in token generator with automated queue slots.",
          "Live doctor schedule boards showing consult sessions and delays.",
          "Patient check-in panel capturing arrival timestamps."
        ]
      },
      {
        title: "Clinical Console & Consultation",
        bullets: [
          "Secure physician console logging clinical encounters and history.",
          "Digital prescription writer with medication search index.",
          "Lab order entry system routing tests directly to diagnostic desks.",
          "Locked encounter summaries routing data automatically to billing."
        ]
      },
      {
        title: "Billing & Cashier Ledger",
        bullets: [
          "Unified invoice calculator compiling all consult, lab, and drug fees.",
          "Multi-channel payment processor tracking cash, card, and UPI logs.",
          "Automated receipt print coordinator sending to network printers.",
          "Daily collection register detailing total revenue and drawer cash."
        ]
      },
      {
        title: "Pharmacy & Inventory Monitor",
        bullets: [
          "Dispensing console matching locked digital prescription slips.",
          "Batch-level stock inventory system tracking box counts.",
          "Expiry alert board flagging items nearing shelf expiration dates.",
          "Stock exposure tools displaying capital value tied up in pharmacy inventories."
        ]
      }
    ],
    keyInteractions: [
      "Patient walks in -> Receptionist assigns token -> Waiting monitor displays token position.",
      "Doctor locks prescription -> Cashier retrieves invoice fees -> Pharmacist dispenses medications.",
      "Lab uploads test result -> Doctor reviews result on screen -> Consultation file updates."
    ],
    automationRules: [
      "RULE 01: Vitals logged by nurse must lock before doctor consultation can begin.",
      "RULE 02: Prescription must be marked as locked before cashier can process billing.",
      "RULE 03: Cashier payment verification must trigger pharmacy dispense queue activation."
    ],
    visibilityImprovements: [
      "Real-time waiting room dashboard displays estimated consult wait times.",
      "Physician dashboard shows current patient queue position and vitals.",
      "Owner panel displays shift collections, margins, and medication alerts."
    ],
    dataAndAuditNotes: [
      "All medical clinical records must be managed under patient confidentiality rules.",
      "Every queue position change and prescription update is recorded in an immutable log."
    ],
    integrationNarrative: [
      "ClinicOS integrates with the hardware systems already deployed in clinics.",
      "Thermal printers print walk-in token slips and cash receipts.",
      "UPI payment terminals reconcile digital transactions with cashier drawers.",
      "SMS gateways route queue delay alerts and follow-up reminders to patient devices."
    ],
    deploymentNotes: [
      "ClinicOS is deployed as a secure local-network web application.",
      "Local server deployments ensure that internet drops do not interrupt queue updates.",
      "Daily automated database backups are scheduled during off-hours."
    ],
    currentScope: [
      "Full outpatient registration, queue, consulting, billing, and pharmacy modules.",
      "Offline local database setup for high-speed local network execution.",
      "SMS notifications for token allocations and wait-time delays."
    ],
    futureDirection: [
      "Integration with government health database frameworks.",
      "Predictive queue delay estimation utilizing machine learning profiles.",
      "Patient portals allowing remote appointment booking."
    ],
    limitations: [
      "Does not connect with national healthcare database frameworks by default.",
      "Relying on offline/local networking setups restricts remote access capabilities.",
      "We do not provide medical diagnosis algorithms or automated drug interaction checks."
    ],
    safetyNotes: [
      "ClinicOS is an operations system, not a medical diagnosis tool.",
      "Clinical decisions remain the sole responsibility of qualified professionals.",
      "System wait times are estimates; critical emergencies must bypass the queue."
    ],
    proofPoints: [
      "Demonstrates multi-role coordination across five physical desks.",
      "Maintains transactional data integrity via isolated database state records.",
      "Reduces manual script re-entry errors by locking clinical prescriptions."
    ],
    architecturalDecisions: [
      "Local state-machine setup prevents network dropouts from freezing queue updates.",
      "Normalized SQL schemas ensure family indexes do not duplicate patient records."
    ],
    visualFrames: [
      "reception_setup", "token_view", "consult_note", "billing_summary", "pharmacy_dispense", "owner_dashboard", "vitals_entry"
    ],
    primaryCTA: { label: "Request a Demo", url: "/contact?track=clinicos" },
    secondaryCTA: { label: "Map Your Journey", url: "#clinicos" },
    accentColor: "#2a7d8a"
  },
  {
    slug: "restaurantos",
    name: "RestaurantOS",
    category: "Restaurant Ordering & Operations Platform",
    industry: "Hospitality / Food & Beverage",
    status: "Reference Build",
    statusType: "beta",
    shortDefinition: "A restaurant operations platform that connects guest ordering, kitchen prep, table service, billing, and owner visibility.",
    longDefinition: "RestaurantOS connects table ordering, kitchen ticket queues, floor plans, and billing counters into a single real-time system. It is not just a QR menu; it coordinates the dining experience from ordering to shift closing to reduce delays and simplify shift reports.",
    positioning: "Connect every table, kitchen, service, and owner workflow.",
    originContext: "Food service relies on quick coordination. By linking customer table menus directly to kitchen screens, we prevent paper losses, verbal mistakes, and cashier discrepancies.",
    problemTitle: "Fragmented service communication and manual checkout errors",
    problemNarrative: [
      "Restaurant work moves between table requests, kitchen tickets, staff memory, billing tools, and owner spreadsheets. When these systems are separate, service slows down and sales reporting becomes prone to errors.",
      "Waiters write food orders on carbon paper slips and walk them to the kitchen. Special instructions (like allergens or spice levels) are communicated verbally, leading to prep mistakes. Kitchen cooks yell when dishes are ready, causing confusion in the dining room.",
      "Cashiers manually compile dishes to print bills, resulting in mismatched collections. At the end of the shift, owners compute daily sales by reading thermal rolls and checking bank transfers, trying to identify discrepancies after they have occurred."
    ],
    consequences: [
      "Paper ticket slips get lost or delayed, increasing guest wait times.",
      "Verbal allergen requests are forgotten in busy kitchens, risking customer safety.",
      "Waiters make repeated trips to check if orders are ready, slowing table service.",
      "Cashiers manually calculate taxes and discounts, leading to cash discrepancies.",
      "Owners lack real-time visibility into ingredient usage and menu margins."
    ],
    intendedUsers: [
      "Dining Guest",
      "Waiter / Service Staff",
      "Kitchen Chef / Line Cook",
      "Cashier",
      "Floor Manager",
      "Restaurant Owner"
    ],
    userRoleDescriptions: [
      "Dining Guest — Scans QR codes, submits orders, specifies preferences, and requests bills.",
      "Waiter / Service Staff — Approves customer tickets, logs manual orders, and delivers dishes.",
      "Kitchen Chef / Line Cook — Views items by station, tracks preparation timers, and signals ready plates.",
      "Cashier — Reconciles total table bills and processes cash, card, or digital payments.",
      "Floor Manager — Oversees table turnover times, coordinates staff, and updates menu lists.",
      "Restaurant Owner — Tracks real-time revenue stats, floor averages, and ingredient consumption."
    ],
    designedFor: [
      "Table service restaurants",
      "Casual dining venues",
      "Multi-station commercial kitchens",
      "Bustling bistros and cafes",
      "Fine dining establishments",
      "Multi-location restaurant owners"
    ],
    beforeWorkflow: [
      "Access: Guest scans a QR code that only displays a PDF menu; waiter must take the order.",
      "Ordering: Waiter writes the order on carbon paper, noting allergens verbally to the kitchen.",
      "Preparation: Line cooks work from paper slips, yelling when dishes are ready.",
      "Service: Waiter checks status manually, delivers plates, and writes down additional rounds.",
      "Checkout: Cashier enters items manually into a standalone POS terminal to generate the bill.",
      "Summary: Owner reconciles registers and reviews shift sales using printouts."
    ],
    workflowStages: [
      { name: "Table Check-In", role: "Dining Guest", description: "Customer scans table QR code to open the digital menu and check item availability." },
      { name: "QR Menu Browsing", role: "Dining Guest", description: "Browses items, selects dishes, and configures special requirements (allergens, spice levels)." },
      { name: "Order Dispatch", role: "Dining Guest / Waiter", description: "Customer submits order rounds; service staff review and approve them before sending to the kitchen." },
      { name: "Kitchen Routing", role: "Kitchen Chef", description: "Dishes are routed to respective stations (e.g., pantry, grill, bar) on display boards." },
      { name: "Preparation Queue", role: "Line Cook", description: "Cooks start preparation, updating progress states on active tickets on screen." },
      { name: "Plate Ready Alert", role: "Line Cook", description: "Cook marks items ready; service staff receive alerts on their portable consoles." },
      { name: "Table Service", role: "Waiter", description: "Waiter delivers the plates to the table, clearing the item state from the system." },
      { name: "Bill Compilation", role: "Dining Guest / Cashier", description: "Customer requests the bill; system compiles the final ticket and applies configured service taxes." },
      { name: "Payment Collection", role: "Cashier", description: "Processes payment via UPI, card, or cash, printing receipts automatically." },
      { name: "Shift Reconciliation", role: "Cashier", description: "Reconciliation of payment logs against physical cashier cash drawers and digital slips." },
      { name: "Management Review", role: "Restaurant Owner", description: "Management compiles shifts and reviews sales trends, identifying popular menu items." }
    ],
    afterWorkflow: [
      "Access: Guest scans table QR code to access the digital menu and place order rounds.",
      "Routing: Orders route to kitchen stations automatically, with allergen alerts highlighted on screen.",
      "Prep: Kitchen staff update preparation states on displays, tracking cooking times.",
      "Alerts: Waiters receive notifications when dishes are ready, speeding up service.",
      "Billing: Cashier checks calculated invoices, processes payments, and updates logs.",
      "Oversight: Owner dashboard displays table status, sales metrics, and item margins."
    ],
    capabilityGroups: [
      {
        title: "Guest Ordering Portal",
        bullets: [
          "Self-serve QR table menus with localized descriptions.",
          "Support for multiple order rounds on the same table tab.",
          "Special instructions field for allergens or preparation limits.",
          "Real-time order progress indicator visible on guest mobile browsers."
        ]
      },
      {
        title: "Kitchen Management",
        bullets: [
          "Live kitchen queue display with item-level status updates.",
          "Multi-station routing split (e.g., bar, pantry, hot line).",
          "Timer counters tracking average prep times by dish.",
          "Plate-ready alert indicators sent to waiter consoles."
        ]
      },
      {
        title: "Billing & Cashier Services",
        bullets: [
          "Table billing sheets compiling all customer order rounds.",
          "Custom discount and tax settings (GST, service charge config).",
          "Automated receipt printer routing via local networks.",
          "Split-billing calculators built into cashier interfaces."
        ]
      },
      {
        title: "Floor Controls & Analytics",
        bullets: [
          "Live floor map showing active table states and wait times.",
          "Sales analytics showing hourly revenue spikes and margins.",
          "Item performance summaries showing popular menu options.",
          "Shift audit logs documenting canceled or discounted items."
        ]
      }
    ],
    keyInteractions: [
      "Customer scans QR -> Submits paneer tikka order -> Grill station displays ticket.",
      "Grill cook marks ticket ready -> Waiter console vibrates -> Table receives service.",
      "Table requests checkout -> Cashier prints final tax invoice -> Table marked vacant."
    ],
    automationRules: [
      "RULE 01: Allergen warnings must trigger red visual flashes on kitchen display screens.",
      "RULE 02: Table bills cannot close until all active cooking tickets are marked delivered.",
      "RULE 03: Item out-of-stock flags must update customer menu portals instantly."
    ],
    visibilityImprovements: [
      "Waiters see active floor table status: Ordering, Eating, Bill Requested, Empty.",
      "Kitchen chefs see active prep timers and cooking backlogs.",
      "Owners see hourly revenue spikes, margins, and shift audits."
    ],
    dataAndAuditNotes: [
      "Daily collections must reconcile against shift ticket summaries.",
      "Immutable register logs track all item voids, discounts, and custom charges."
    ],
    integrationNarrative: [
      "RestaurantOS is built on standard hardware found in commercial kitchens.",
      "Thermal receipt printers print tax invoices and kitchen chits.",
      "UPI gateway terminals route digital payments directly to cashier drawer registers.",
      "Tablet consoles enable line cooks to update preparation progress."
    ],
    deploymentNotes: [
      "Local server deployments keep kitchen screens synced during internet drops.",
      "Table QR code cards are generated and printed directly from menu admin panels.",
      "Menu configurations can be modified on the fly during service."
    ],
    currentScope: [
      "QR menu browsing, table ordering, kitchen displays, floor status, and cashier billing.",
      "Multi-station kitchen routing splits (grill, bar, pantry).",
      "Reconciliation logs mapping digital payments to registers."
    ],
    futureDirection: [
      "Integrations with third-party delivery services.",
      "Ingredient stock tracking based on menu usage.",
      "Loyalty and guest profile history logs."
    ],
    limitations: [
      "Does not sync with third-party delivery services (UberEats, Zomato) out of the box.",
      "Does not track raw ingredient stock weights inside store rooms.",
      "Requires constant local network connections between table portals and kitchen screens."
    ],
    safetyNotes: [
      "Allergen warnings do not replace restaurant staff checks.",
      "Ingredient lists are details, not medical assurances.",
      "Operations must align with local food safety guidelines."
    ],
    proofPoints: [
      "Demonstrates real-time state sync across multiple screen terminals.",
      "Connects separate business roles into a unified customer journey.",
      "Reduces verbal order errors by locking table-menu configurations."
    ],
    architecturalDecisions: [
      "WebSockets provide instantaneous ticket delivery to kitchen terminals.",
      "Optimistic UI updates prevent network delays from confusing floor wait staff."
    ],
    visualFrames: [
      "guest_menu", "kitchen_display", "floor_status", "billing_reconcile", "station_routing", "menu_admin", "revenue_summary"
    ],
    primaryCTA: { label: "Request a Demo", url: "/contact?track=restaurantos" },
    secondaryCTA: { label: "Discuss a Pilot", url: "#restaurantos" },
    accentColor: "#c87b3a"
  },
  {
    slug: "shipwright",
    name: "ShipWright",
    category: "Async Team Execution Workspace",
    industry: "Operations / Software Teams",
    status: "Reference Build",
    statusType: "beta",
    shortDefinition: "An async team execution workspace designed to keep projects, tasks, files, decisions, blockers, and check-ins connected.",
    longDefinition: "ShipWright is a context-preserving workspace for remote product teams. It replaces disjointed trackers and chat apps with a single, dependency-aware progress system, keeping team decisions and task context together in one archive.",
    positioning: "Keep projects, tasks, files, decisions, blockers, and check-ins connected.",
    originContext: "Remote work suffers when details are scattered. By linking task updates to daily check-ins and blocker alerts, we keep teams aligned without constant status meetings.",
    problemTitle: "Scattered product context and manual status updates",
    problemNarrative: [
      "Teams rarely lose work because it doesn't exist. They lose it because it scatters. The task is in one tool. The discussion is in chat. The file is in a drive. The decision was made in a meeting. The blocker was mentioned once and forgotten.",
      "When these views are separate, team members spend hours reconstructing project status. Weekly status meetings become manual updates, developers search through old chat threads to find decisions, and blockers sit unresolved.",
      "As a result, schedules slip, historical context vanishes, and managers lack a clear operational view of active projects."
    ],
    consequences: [
      "Tasks are assigned without the context of decisions, causing rework.",
      "Blocker warnings are missed in noisy chat channels, delaying releases.",
      "Developers waste cycle time searching for files across multiple systems.",
      "Weekly progress summaries require manual efforts to compile.",
      "Historical decisions are forgotten, leading to repeat discussions."
    ],
    intendedUsers: [
      "Founder / Operator",
      "Product Manager",
      "Engineering Lead",
      "Software Developer",
      "Designer / Contributor",
      "Project Stakeholder"
    ],
    userRoleDescriptions: [
      "Founder / Operator — Tracks project trajectories and spots workflow bottlenecks.",
      "Engineering Lead — Coordinates task dependencies, code reviews, and releases.",
      "Product Manager — Outlines milestones, maps priorities, and reviews tasks.",
      "Software Developer — Claims tickets, logs code updates, and highlights blockers.",
      "Designer / Contributor — Shares design mockups, logs copy feedback, and reviews boards.",
      "Project Stakeholder — Monitors milestone progress and checks decision summaries."
    ],
    designedFor: [
      "Distributed software engineering teams",
      "Remote-first product squads",
      "Early-stage tech startups",
      "Agencies managing client deliverables",
      "Cross-functional design & dev teams",
      "Operators seeking structured project records"
    ],
    beforeWorkflow: [
      "Planning: PM writes a spec doc in a shared drive, then copies tasks to a tracker.",
      "Discussion: Developers discuss implementation details in a chat channel.",
      "Files: Designs are linked in chat, but lost in history after a few days.",
      "Blockers: A developer gets blocked, mentions it in chat, and waits for a meeting.",
      "Decisions: Decisions are made on a call, but not recorded on the task card.",
      "Reporting: Manager compiles weekly status by parsing commits and chat history."
    ],
    workflowStages: [
      { name: "Milestone Setup", role: "Product Manager", description: "PM scopes milestones and breaks projects down into core task lists on the board." },
      { name: "Dependency Mapping", role: "Engineering Lead", description: "Leads map task linkages, noting which tickets must complete before downstream work begins." },
      { name: "Task Claims", role: "Software Developer", description: "Developers claim active tickets, pulling files and notes directly into their local view." },
      { name: "Contextual Discussion", role: "Software Developer", description: "Teammates discuss code challenges directly on the task card, keeping files and chats together." },
      { name: "Async Check-In", role: "All Team Members", description: "Members log progress daily via check-in prompts, updating task status in the process." },
      { name: "Blocker Alert", role: "Software Developer", description: "A developer flags a task as blocked; system automatically highlights the dependency on the map." },
      { name: "Slack Notification", role: "Engineering Lead", description: "System triggers a direct Slack alert to the owner of the blocking task, requesting resolution." },
      { name: "Blocker Resolution", role: "Software Developer", description: "Blocking task is completed and reviewed, unblocking the downstream card automatically." },
      { name: "Milestone Review", role: "Product Manager", description: "PM reviews completed cards against requirements, checking off items on the milestone board." },
      { name: "Decision Logging", role: "Engineering Lead", description: "Records architectural decisions (ADRs) directly within the milestone history." },
      { name: "Context Archival", role: "Founder / Operator", description: "System logs the completed milestone flow and files into the searchable team memory archive." }
    ],
    afterWorkflow: [
      "Planning: PM sets up a project workspace, grouping tasks, documents, and files.",
      "Discussion: Discussions are logged on the task card, preserving implementation details.",
      "Blockers: Blocker flags alert dependency owners automatically, speeding up fixes.",
      "Check-ins: Team members submit daily updates, which sync with task progress.",
      "Decisions: Architectural choices are logged in the project history.",
      "Oversight: Dashboard compiles weekly summaries, showing milestone progress."
    ],
    capabilityGroups: [
      {
        title: "Planning & Execution",
        bullets: [
          "Centralized workspace panels organizing tasks and documents.",
          "Milestone progress bars indicating target release percentages.",
          "Task assignment with primary and contributing owner tags.",
          "Linked file sharing directly on task cards."
        ]
      },
      {
        title: "Communication & Context",
        bullets: [
          "Async check-in prompts sending reminder alerts to team members.",
          "Threaded comment panels logging discussions within context.",
          "Decision registers mapping adjustments to milestones.",
          "Blocker flags highlighting blocking and blocked tasks."
        ]
      },
      {
        title: "Operational Memory",
        bullets: [
          "Automated weekly digests summarizing milestone health.",
          "Permanent project archives indexable by keyword search.",
          "Team member contribution logs tracking ticket completions.",
          "Dependency trees indicating workflow bottlenecks."
        ]
      }
    ],
    keyInteractions: [
      "PM defines milestone -> Developer claims task -> Files grouped on card.",
      "Developer flags task blocked -> Dependency map alerts owner -> Slack notification sent.",
      "Lead resolves blocking ticket -> Downstream task unblocked -> Progress digest updates."
    ],
    automationRules: [
      "RULE 01: Blocker flags must trigger immediate Slack notifications to dependency owners.",
      "RULE 02: Milestone status updates must compile automatically at the end of every week.",
      "RULE 03: Decision records (ADRs) must link to the task tickets that prompted them."
    ],
    visibilityImprovements: [
      "Developers see task blockers and dependencies mapped in a visual tree.",
      "Leads see active milestone progress and team contribution logs.",
      "Founders see weekly progress summaries and searchable project archives."
    ],
    dataAndAuditNotes: [
      "Confidential customer details should not be logged in public workspaces.",
      "Every task status change and comment is recorded in an audit trail."
    ],
    integrationNarrative: [
      "ShipWright integrates with standard team communication tools.",
      "Slack gateways send daily check-in prompts and blocker alerts.",
      "GitHub webhooks link commits directly to task reference IDs.",
      "Email digests summarize milestone progress and active blocks."
    ],
    deploymentNotes: [
      "ShipWright is hosted as a multi-tenant cloud application.",
      "Single sign-on (SSO) configurations are supported for enterprise teams.",
      "Daily backups ensure project data is archived securely."
    ],
    currentScope: [
      "Workspaces, project boards, milestone progress, task dependencies, blocker alerts, and check-ins.",
      "Slack integrations for check-ins and blocker alerts.",
      "Weekly progress summaries and searchable project archives."
    ],
    futureDirection: [
      "GitHub integrations mapping pull requests to task cards automatically.",
      "Linear and Jira import tools to migrate legacy backlogs.",
      "AI-assisted project summaries summarizing weekly team contributions."
    ],
    limitations: [
      "Does not host git repositories or replace version control tools.",
      "Does not track server runtimes or application deployment logs.",
      "Requires team-wide commitment to keep discussions inside the workspace."
    ],
    safetyNotes: [
      "Workspace privacy configurations must protect customer credentials.",
      "API keys and server passwords must not be stored in task attachments.",
      "Milestone estimations are targets, not guarantees."
    ],
    proofPoints: [
      "Demonstrates dependency mapping across separate project queues.",
      "Provides structured progress logging without status sync meetings.",
      "Preserves project context alongside task delivery pipelines."
    ],
    architecturalDecisions: [
      "Graph structures trace task linkages to detect cyclic blockages.",
      "Incremental data syncing keeps dashboard queues updated without full page loads."
    ],
    visualFrames: [
      "workspace_overview", "task_board", "blocker_graph", "digest_view", "milestone_details", "decision_log", "project_summary"
    ],
    primaryCTA: { label: "Request a Demo", url: "/contact?track=shipwright" },
    secondaryCTA: { label: "Request Walkthrough", url: "#shipwright" },
    accentColor: "#8b7bc4"
  },
  {
    slug: "aarogya",
    name: "Aarogya",
    category: "Personal Health Information & Routine Tracker",
    industry: "Healthcare",
    status: "Demonstration Build",
    statusType: "waitlist",
    shortDefinition: "A personal health information and routine tracker designed to organize everyday readings into one clearer record.",
    longDefinition: "Aarogya is a private health utility that logs metrics like blood pressure, glucose, and weight. It is designed to compile histories, meal contexts, and medication checklists into a single dashboard, helping users organize details for doctor visits.",
    positioning: "Organize everyday health information into one clearer personal record.",
    originContext: "Everyday health logs are scattered across notebooks and devices. By structuring readings locally on the user's device, we provide a private tracker without hospital integrations.",
    problemTitle: "Scattered personal metrics and forgotten health history",
    problemNarrative: [
      "Everyday health logs often live in too many separate places. A blood-pressure reading is written in a notebook, a glucose value is stored in a device, and lab reports are buried in folders.",
      "Medicine routines are remembered from habit, and meal details are rarely tracked with readings. When users visit their doctor, they struggle to summarize variations or metrics.",
      "Without a unified, calm dashboard, health tracking becomes inconsistent, and historical trends are lost."
    ],
    consequences: [
      "Readings are written down inconsistently, making trends hard to track.",
      "Medication times are forgotten, disrupting treatment routines.",
      "Users lack summaries of vital histories before consulting doctors.",
      "Health metrics are stored on external servers, raising privacy issues."
    ],
    intendedUsers: [
      "Individual Tracker",
      "Caregiver",
      "Consulting Doctor"
    ],
    userRoleDescriptions: [
      "Individual Tracker — Logs metrics, checks daily routines, and exports progress sheets.",
      "Caregiver — Reviews logged vitals and checks routine lists for family members.",
      "Consulting Doctor — Reviews exported trend summaries during checkups."
    ],
    designedFor: [
      "Individuals tracking vital indicators",
      "Caregivers managing family routines",
      "Users seeking offline-first data privacy"
    ],
    beforeWorkflow: [
      "Log: User writes blood pressure in a notebook, but forgets glucose logs.",
      "Routines: Medication is remembered from memory, leading to missed doses.",
      "Preparation: Compiles history verbally before doctor consults."
    ],
    workflowStages: [
      { name: "Metric Intake", role: "Individual Tracker", description: "User logs vital readings (blood pressure, glucose) directly into the offline dashboard." },
      { name: "Routine Tracking", role: "Individual Tracker", description: "Logs daily check-offs for medications and vitamins on the schedule." },
      { name: "History Summary", role: "Caregiver", description: "System generates charts showing trend cycles and highlights variations." },
      { name: "Data Sharing", role: "Consulting Doctor", description: "User exports a PDF summary sheet to share with their physician." }
    ],
    afterWorkflow: [
      "Log: Vitals are entered into the dashboard, with meal tags added for context.",
      "Routines: Checklists show medication schedules, with daily alerts.",
      "Oversight: Local trends display history clearly for checkups."
    ],
    capabilityGroups: [
      {
        title: "Metric Tracking",
        bullets: [
          "Blood pressure and glucose logging with time-of-day tags.",
          "Weight charts displaying weekly and monthly variations.",
          "Trend indicators showing vital stability ranges."
        ]
      },
      {
        title: "Routines & Context",
        bullets: [
          "Medication routines check-off sheets.",
          "Meal logger with food tags for Indian meal contexts.",
          "Routines reminders for weekly diagnostics."
        ]
      }
    ],
    keyInteractions: [
      "User logs vital reading -> Trend charts update -> Vitals log displays entry.",
      "Medication scheduled -> Checklist prompts -> User checks off item."
    ],
    automationRules: [
      "RULE 01: Vitals data must be stored locally on the client browser.",
      "RULE 02: Exceeding threshold limits must highlight vitals cards in amber."
    ],
    visibilityImprovements: [
      "Trend charts show blood pressure changes across weekly cycles.",
      "Routines checklists display pending and completed medication tasks."
    ],
    dataAndAuditNotes: [
      "All health metrics remain strictly inside the local browser storage.",
      "Data exports generate CSV files containing logged records."
    ],
    integrationNarrative: [
      "Aarogya is built as an offline-first web utility.",
      "Supports CSV and PDF exports for personal record sharing.",
      "Does not connect to clinic or hospital electronic health records (EHR)."
    ],
    deploymentNotes: [
      "Deployed as an offline web page executing on the client browser.",
      "User data is private; we do not host a central database server."
    ],
    currentScope: [
      "Metric logging, routines checklists, local trend charts, and data exports.",
      "Offline browser storage setup.",
      "PDF summaries for doctor visits."
    ],
    futureDirection: [
      "Bluetooth device integrations for weight scales and BP monitors.",
      "Encrypted cloud backups for multi-device sync.",
      "Support for multi-user family accounts."
    ],
    limitations: [
      "Does not connect to external electronic medical records (EMR) systems.",
      "Relying on offline/local storage limits remote access across devices.",
      "We do not provide medical diagnosis or treatment recommendations."
    ],
    safetyNotes: [
      "Aarogya is a tracking utility, not a medical diagnosis tool.",
      "Consult qualified medical professionals before altering medication plans.",
      "Emergency situations require immediate contact with local medical support."
    ],
    proofPoints: [
      "Demonstrates offline-first data tracking architectures.",
      "Presents non-alarmist, clean metric visualizations.",
      "Validates user-controlled data ownership."
    ],
    architecturalDecisions: [
      "Local-first database ensures total user privacy and speed.",
      "SVG trend lines render on the client side without server scripts."
    ],
    visualFrames: ["bp_chart", "med_routine", "history_summary"],
    primaryCTA: { label: "Join the Waitlist", url: "/contact?track=aarogya" },
    secondaryCTA: { label: "Review Features", url: "#aarogya" },
    accentColor: "#2e6fad"
  },
  {
    slug: "securescan",
    name: "SecureScan",
    category: "Developer-Focused Security Scanner",
    industry: "Operations / Security",
    status: "Prototype",
    statusType: "available",
    shortDefinition: "An automated security scanner designed to integrate security checks directly into development pipelines.",
    longDefinition: "SecureScan checks code repositories, script dependencies, and web ports for vulnerability exposures. It converts complex threat records into developer-readable cards, detailing sql injections or cross-site scripting vulnerabilities.",
    positioning: "Bring repeatable security checks closer to development work.",
    originContext: "Security findings often arrive in PDF reports developers find difficult to act on. By running automated checks in build pipelines, we highlight risks before release pressure begins.",
    problemTitle: "Delayed security reports and disconnected remediation",
    problemNarrative: [
      "Security assessments are often treated as one-off checks conducted before major releases. Security consultants run scanners and deliver long PDF reports detailing vulnerabilities.",
      "These findings arrive after code changes have been deployed, making fixes difficult. Developers struggle to map threats to specific code locations, and verification scans are rarely run.",
      "As a result, critical exposures sit in backlogs, and release schedules are delayed by security review cycles."
    ],
    consequences: [
      "Vulnerability reports are disconnected from daily tasks, causing delays.",
      "Developers struggle to replicate findings, leading to unresolved risks.",
      "Verification scans are manual, slowing down merge processes.",
      "Security teams lack history logs of active codebase threats."
    ],
    intendedUsers: [
      "Software Developer",
      "Security Auditor",
      "Product Owner"
    ],
    userRoleDescriptions: [
      "Software Developer — Reviews scan alerts, checks remediation steps, and runs re-scans.",
      "Security Auditor — Configures compliance rules and audits threat history lists.",
      "Product Owner — Monitors severity counts and signs off on releases."
    ],
    designedFor: [
      "Software teams seeking pipeline checks",
      "Auditors auditing application security",
      "Developers fixing vulnerability logs"
    ],
    beforeWorkflow: [
      "Check: Security scans are run manually before releases.",
      "Report: Findings are compiled in a PDF and shared via email.",
      "Fix: Developers search code files to fix threats without verification."
    ],
    workflowStages: [
      { name: "Code Pull Request", role: "Software Developer", description: "Developer submits code; system triggers pipeline security scanner." },
      { name: "Vulnerability Scan", role: "Security Auditor", description: "Scanner checks scripts, dependencies, and web ports for threat patterns." },
      { name: "Finding Classification", role: "Security Auditor", description: "Categorizes threats by severity (Critical, High, Medium) and files card logs." },
      { name: "Developer Remediation", role: "Software Developer", description: "Developer reviews remediation details and code links to apply fixes." }
    ],
    afterWorkflow: [
      "Check: Scans trigger automatically on every pull request.",
      "Report: Findings show up directly in development dashboards.",
      "Fix: Developer applies fixes, verifying code with automated re-scans."
    ],
    capabilityGroups: [
      {
        title: "Automated Pipeline Checks",
        bullets: [
          "Vulnerability scans triggered on repository code pull requests.",
          "Port checker auditing web configurations.",
          "History logs listing scan runs and threat counts."
        ]
      },
      {
        title: "Developer Insights",
        bullets: [
          "Threat cards detailing SQL injection and XSS exposures.",
          "Remediation steps referencing code files and patterns.",
          "Severity filters separating critical items from suggestions."
        ]
      }
    ],
    keyInteractions: [
      "Commit pushed -> Security scan starts -> Findings list updates.",
      "Developer fixes code -> Re-scan runs -> Threat card marked resolved."
    ],
    automationRules: [
      "RULE 01: Critical vulnerabilities must block pull request merges.",
      "RULE 02: Verification scans must run automatically after code updates."
    ],
    visibilityImprovements: [
      "Developer dashboard displays active vulnerability counts by severity.",
      " remediations panel details exact code changes needed."
    ],
    dataAndAuditNotes: [
      "All vulnerability findings are recorded in an immutable audit ledger.",
      "SSO configurations isolate tenant scan history files."
    ],
    integrationNarrative: [
      "SecureScan integrates with GitHub and GitLab pipelines.",
      "Direct API access enables custom dashboard connections.",
      "Slack notifications route critical threat alerts to engineering teams."
    ],
    deploymentNotes: [
      "Hosted on secure cloud servers with tenant isolation setups.",
      "Scanner agents run within isolated sandboxes to protect codebases."
    ],
    currentScope: [
      "Dependency checks, SQL injection detection, and port scanning.",
      "GitHub Actions pipeline integrations.",
      "Developer remediation cards."
    ],
    futureDirection: [
      "Secret scanning to detect exposed API credentials.",
      "AI-assisted code remediation suggestions.",
      "Compliance reporting templates (SOC2, ISO27001)."
    ],
    limitations: [
      "Automated scans do not replace manual penetration testing reviews.",
      "Does not detect logic-level application bypass vulnerabilities.",
      "Scan runs may produce false positive findings."
    ],
    safetyNotes: [
      "Configure scans only on authorized repositories and environments.",
      "Vulnerability reports must remain shielded from public access.",
      "Verify code alterations thoroughly before deploying to production."
    ],
    proofPoints: [
      "Demonstrates automated security checks in development pipelines.",
      "Provides actionable, context-rich remediation reports.",
      "Encourages security habits during active delivery cycles."
    ],
    architecturalDecisions: [
      "Isolated sandboxing prevents scanner tools from accessing private databases.",
      "Incremental scanning speeds up pipeline checks."
    ],
    visualFrames: ["vulnerability_card", "scan_history", "pipeline_status"],
    primaryCTA: { label: "Request a Demo", url: "/contact?track=securescan" },
    secondaryCTA: { label: "Review Remediations", url: "#securescan" },
    accentColor: "#2a7d8a"
  },
  {
    slug: "safedate",
    name: "SafeDate",
    category: "Dating-Safety Check-in Tool",
    industry: "Safety / Operations",
    status: "Prototype",
    statusType: "available",
    shortDefinition: "A safety check-in utility that allows users to create date plans and alert trusted contacts if a check-in is missed.",
    longDefinition: "SafeDate is a dating safety assistant. It lets users log date details, locations, and timings privately, setting up SMS check-in alarms. If the user fails to close the loop, trusted contacts receive notifications automatically.",
    positioning: "Plan, share, and close the loop around dating safety.",
    originContext: "Dating safety is often informal, relying on scattered texts. By structuring date plans with automated SMS notifications, we offer a checklist wrapper without tracking GPS location.",
    problemTitle: "Informal safety plans and forgotten check-in loops",
    problemNarrative: [
      "Modern dating starts in digital apps, but safety planning around meeting is informal. A friend might receive a text message, but locations and details are rarely organized.",
      "During the date, users forget to check in, or their phone battery drains, leaving contacts unsure of what to do. If a safety loop is not closed, contacts lack key details.",
      "Without a simple date checklist tool, safety plans are forgotten or hard to track."
    ],
    consequences: [
      "Date details are scattered, making them hard for contacts to retrieve.",
      "Check-ins are forgotten, causing unnecessary alarm for friends.",
      "Contacts lack actionable instructions if a check-in is missed.",
      "Constant GPS tracking exposes user location, raising privacy concerns."
    ],
    intendedUsers: [
      "Table Guest",
      "Trusted Friend",
      "Family Member"
    ],
    userRoleDescriptions: [
      "Table Guest — Logs date details, configures timers, and closes the safety loop.",
      "Trusted Friend — Receives SMS details and alerts if check-in is missed.",
      "Family Member — Monitors check-in alerts and follows up when notified."
    ],
    designedFor: [
      "Users seeking safety plans for meetups",
      "Contacts monitoring date check-ins",
      "Users prioritizing privacy over tracking"
    ],
    beforeWorkflow: [
      "Plan: User sends location to a friend via chat, but forgets the time details.",
      "Check-in: User forgets to text their friend during the date, causing worry.",
      "Close: The date ends, but the loop stays open until the next day."
    ],
    workflowStages: [
      { name: "Plan Setup", role: "Table Guest", description: "User logs date details, location, and sets a check-in timer." },
      { name: "Contact Assignment", role: "Table Guest", description: "Assigns trusted contacts to receive details and alerts." },
      { name: "Timer Countdown", role: "Trusted Friend", description: "System monitors check-in timer; user receives reminders to check in." },
      { name: "Safety Alert", role: "Trusted Friend", description: "If user fails to check in, system routes SMS alert to trusted contacts." }
    ],
    afterWorkflow: [
      "Plan: User logs date location and assigns contacts on one dashboard.",
      "Check-in: System prompts user to check in; one click confirms safety.",
      "Close: User clicks the close button, ending the check-in loop."
    ],
    capabilityGroups: [
      {
        title: "Date Planning & Alerts",
        bullets: [
          "Date details form capturing locations and timings.",
          "Check-in timers with reminder prompts sent to user browser.",
          "SMS alerts routed to contacts."
        ]
      },
      {
        title: "Privacy Controls",
        bullets: [
          "Privacy shields preventing continuous GPS tracking.",
          "Contact details kept hidden from other users.",
          "Closeout button deleting date details after completion."
        ]
      }
    ],
    keyInteractions: [
      "User configures date plan -> Contacts receive SMS link -> Check-in timer starts.",
      "Timer expires -> User fails to check in -> Contacts receive alert SMS."
    ],
    automationRules: [
      "RULE 01: SMS alerts must route to contacts 15 minutes after check-in is missed.",
      "RULE 02: Date details must delete from active logs after the loop is marked closed."
    ],
    visibilityImprovements: [
      "Contacts see active plan details on a private web dashboard.",
      "User sees check-in timers counting down on their mobile screen."
    ],
    dataAndAuditNotes: [
      "Contacts require no app install; details are shared via links.",
      "All date records are archived or deleted based on user settings."
    ],
    integrationNarrative: [
      "SafeDate uses SMS gateways to send alert messages.",
      "Mobile push notifications send reminders to user devices.",
      "Email summaries share date plans with contacts."
    ],
    deploymentNotes: [
      "Deployed on cloud servers with SSL configurations.",
      "SMS gateways verify messages before dispatching alerts."
    ],
    currentScope: [
      "Date logs, check-in timers, SMS alerts, and privacy shields.",
      "Mobile browser dashboard execution.",
      "SMS gateway integrations."
    ],
    futureDirection: [
      "Support for multi-stage dates (multiple locations).",
      "Automatic check-ins based on location tags.",
      "Group safety check-ins for team outings."
    ],
    limitations: [
      "SafeDate does not integrate with emergency services directly.",
      "System functionality depends on cellular signal and battery levels.",
      "We cannot guarantee user safety or control contact responses."
    ],
    safetyNotes: [
      "SafeDate is a tracking assistant, not a personal guard.",
      "If you are in danger, contact emergency services first.",
      "Ensure trusted contacts are aware of their role before dating."
    ],
    proofPoints: [
      "Demonstrates SMS-integrated safety workflows.",
      "Validates privacy-respecting safety design.",
      "Confirms state-based notification loop execution."
    ],
    architecturalDecisions: [
      "Timed triggers on server run independently of app connections.",
      "Ephemeral database records prevent data leakage."
    ],
    visualFrames: ["safety_plan", "timer_prompt", "alert_details"],
    primaryCTA: { label: "Create Safety Plan", url: "/contact?track=safedate" },
    secondaryCTA: { label: "Review Workflows", url: "#safedate" },
    accentColor: "#c44a7a"
  },
  {
    slug: "buildpublic",
    name: "BuildPublic",
    category: "Founder Progress Workspace",
    industry: "Operations / Software",
    status: "Prototype",
    statusType: "available",
    shortDefinition: "A workspace that allows founders to manage tasks privately and share milestone progress publicly.",
    longDefinition: "BuildPublic connects private task management with public roadmap dashboards. It helps founders structure work, check off milestone items privately, and publish progress summaries, shielding confidential details from public feeds.",
    positioning: "Manage the build privately. Share the journey publicly.",
    originContext: "Building in public requires copying tickets and drafting updates in separate steps. By linking development tickets to roadmap dashboards, we simplify public updates.",
    problemTitle: "Double-logging workflows and fragmented public feeds",
    problemNarrative: [
      "Founders building in public manage their projects in private trackers and share progress on social media feeds.",
      "This double-logging takes time. Writing updates, compiling details, and sharing timelines are separate steps, leading to inconsistent sharing.",
      "When launch histories are scattered across social media platforms, they disappear from view, leaving no archive of progress."
    ],
    consequences: [
      "Founders waste time double-logging progress across platforms.",
      "Public updates are inconsistent, slowing down audience growth.",
      "Launch details are scattered, making them hard to retrieve.",
      "Sensitive tasks are published accidentally, exposing code secrets."
    ],
    intendedUsers: [
      "Founder / Builder",
      "Public Reader",
      "Project Sponsor"
    ],
    userRoleDescriptions: [
      "Founder / Builder — Manages tasks, marks items public, and compiles progress logs.",
      "Public Reader — Monitors the public roadmap page and subscribes to RSS feeds.",
      "Project Sponsor — Audits milestone progress and reads development logs."
    ],
    designedFor: [
      "Founders building software in public",
      "Builders sharing project journeys",
      "Teams seeking roadmap dashboards"
    ],
    beforeWorkflow: [
      "Task: User updates tasks in a private planner board.",
      "Update: Writes progress summaries manually on social media pages.",
      "Feed: Social posts disappear from view, leaving no permanent roadmap."
    ],
    workflowStages: [
      { name: "Task Management", role: "Founder / Builder", description: "Builder sets up private milestone and task planner boards." },
      { name: "Progress Logging", role: "Founder / Builder", description: "Logs updates on task cards, flagging specific items for public sharing." },
      { name: "Roadmap Publishing", role: "Public Reader", description: "System updates public roadmap pages, generating RSS feeds automatically." },
      { name: "Audience Sharing", role: "Public Reader", description: "Builder pushes updates to connected social platforms with one click." }
    ],
    afterWorkflow: [
      "Task: Builder updates tasks on one private planner board.",
      "Update: Flags updates public, updating the roadmap dashboard.",
      "Feed: Public page archives launch history and provides RSS feeds."
    ],
    capabilityGroups: [
      {
        title: "Workspace & Roadmaps",
        bullets: [
          "Private milestone and task boards for project tracking.",
          "Public roadmap pages displaying completed updates.",
          "RSS feed generation for subscriber updates."
        ]
      },
      {
        title: "Publishing Controls",
        bullets: [
          "Privacy flags isolating sensitive tasks.",
          "Social cross-posting tools built into task cards.",
          "Progress summaries compiled automatically."
        ]
      }
    ],
    keyInteractions: [
      "Builder checks off task -> Flags progress public -> Public roadmap updates.",
      "Reader subscribes to feed -> Receives updates -> Reviews roadmap milestones."
    ],
    automationRules: [
      "RULE 01: Private flags must shield task details from public views.",
      "RULE 02: Checking off milestone tasks must compile draft updates."
    ],
    visibilityImprovements: [
      "Public roadmap displays milestones, completed tasks, and updates.",
      "Builder dashboard separates private backlog from public logs."
    ],
    dataAndAuditNotes: [
      "Public roadmaps display selected milestones and updates.",
      "Private tasks and comments remain shielded from public readers."
    ],
    integrationNarrative: [
      "BuildPublic generates RSS feeds for subscriber readers.",
      "Social gateways cross-post updates to connected platforms.",
      "GitHub integrations link commits to task logs."
    ],
    deploymentNotes: [
      "Hosted on secure cloud servers with SSL configurations.",
      "Database schema separates private logs from public feed tables."
    ],
    currentScope: [
      "Private planner boards, public roadmaps, RSS feeds, and social sharing.",
      "Social platform cross-posting gateways.",
      "Roadmap dashboard templates."
    ],
    futureDirection: [
      "GitHub actions triggering roadmap updates automatically.",
      "Email newsletters for subscriber updates.",
      "Support for multi-builder projects."
    ],
    limitations: [
      "Does not guarantee audience growth or product success.",
      "Does not replace project management tools for large teams.",
      "Requires manual flags to update public roadmaps."
    ],
    safetyNotes: [
      "Avoid publishing sensitive configurations or server passwords.",
      "Review updates thoroughly before publishing to public roadmaps.",
      "Keep customer details shielded from public progress logs."
    ],
    proofPoints: [
      "Demonstrates founder accountability tracking.",
      "Validates private and public log isolation.",
      "Confirms audience-facing progress compilation."
    ],
    architecturalDecisions: [
      "Database boundaries separate public feed tables from private execution logs.",
      "Static generation keeps public roadmap pages fast."
    ],
    visualFrames: ["public_roadmap", "task_planner", "social_cross_post"],
    primaryCTA: { label: "Start Building", url: "/contact?track=buildpublic" },
    secondaryCTA: { label: "Review Features", url: "#buildpublic" },
    accentColor: "#dedbc8"
  }
];

export const CAPABILITY_MATRIX_ROWS = [
  {
    systemName: "ClinicOS",
    multiRole: "Yes (Receptionist, Doctor, Billing, Pharmacist, Owner)",
    automation: "Yes (Prescription-to-pharmacy route, automated billing)",
    visibility: "Yes (Live queue, wait times, revenue margins, stock)",
    tracking: "Yes (Patient clinical records, family indexes)",
    safety: "No medical diagnostics; verified doctor signatures only",
    mvp: "Staging deployment ready; seeking pilot clinics",
    customerExp: "Patient access to token slots and history logs",
    auditability: "Yes (Every state transaction logged in audit db)",
    integrations: "UPI payments, SMS gateway API, thermal printers",
    permissions: "Strict role layers (Doctor, Cashier, Pharmacist)"
  },
  {
    systemName: "Aarogya",
    multiRole: "No (Single-user client record log)",
    automation: "No (Manual metric entries and logs)",
    visibility: "Yes (Blood pressure, glucose trend charts)",
    tracking: "Yes (Weight logs, Indian food context summaries)",
    safety: "Calm UX, does not replace medical diagnostics",
    mvp: "Waitlist open; local storage prototype complete",
    customerExp: "Clean personal health dashboard",
    auditability: "No (Local data belongs to user device)",
    integrations: "None (Offline local-first framework)",
    permissions: "Single user profile access only"
  },
  {
    systemName: "RestaurantOS",
    multiRole: "Yes (Guest, Waiter, Kitchen Chef, Cashier, Owner)",
    automation: "Yes (Table order rounds straight to kitchen station)",
    visibility: "Yes (Live floor table states, cooking timers, sales)",
    tracking: "Yes (Order history logs, table turnover statistics)",
    safety: "Allergen warnings (does not replace staff verification)",
    mvp: "Beta programme active; deployed at 2 locations",
    customerExp: "QR code browser ordering and bill requesting",
    auditability: "Yes (Shift collections reconciled against tickets)",
    integrations: "UPI, card terminals, local thermal printers",
    permissions: "Staff vs kitchen station vs cashier views"
  },
  {
    systemName: "ShipWright",
    multiRole: "Yes (Operator, Lead, Developer, PM)",
    automation: "Yes (Dependency blockers notify downstream owners)",
    visibility: "Yes (Milestone progress bars, blocker graph, summaries)",
    tracking: "Yes (Task tickets, decision histories, check-in sheets)",
    safety: "Workspace privacy controls preventing data leaks",
    mvp: "Private beta running with active remote squads",
    customerExp: "Collaborative task dashboards and note sharing",
    auditability: "Yes (Decision logs and project archives)",
    integrations: "Slack integration, GitHub hook APIs, email digests",
    permissions: "Team member vs guest contributor clearances"
  },
  {
    systemName: "SecureScan",
    multiRole: "Yes (Developer, Security Lead, Product Manager)",
    automation: "Yes (Scan triggered on code commit or PR submit)",
    visibility: "Yes (Critical vulnerability counts, SSL cert expiries)",
    tracking: "Yes (History lists of scan runs and alerts)",
    safety: "Scan is diagnostic; does not replace manual pen tests",
    mvp: "Demos running; sandbox API scanner active",
    customerExp: "Developer finding logs with code highlights",
    auditability: "Yes (scan history log immutable)",
    integrations: "GitHub Actions, GitLab CI, Slack alerts",
    permissions: "Admin configure scan vs view-only logs"
  },
  {
    systemName: "SafeDate",
    multiRole: "Yes (User, Trusted Contacts)",
    automation: "Yes (SMS alerts sent to contact if check-in missed)",
    visibility: "Yes (Active safety plan cards and event logs)",
    tracking: "Yes (Scheduled date details and location entries)",
    safety: "Safety tool (cannot guarantee personal safety)",
    mvp: "Private beta; SMS dispatcher routing live",
    customerExp: "One-click mobile browser check-in page",
    auditability: "Yes (Timed logs of alerts and closes)",
    integrations: "SMS routing gateway, email notifications",
    permissions: "Consent-based access to contact info"
  },
  {
    systemName: "BuildPublic",
    multiRole: "Yes (Founder, Public Readers)",
    automation: "Yes (Checked tickets update public page layout)",
    visibility: "Yes (Private tasks board vs public progress timeline)",
    tracking: "Yes (Weekly task checklists and milestones)",
    safety: "Selective publishing flags to shield credentials",
    mvp: "Available now; public roadmaps active",
    customerExp: "RSS feed subscriptions for progress readers",
    auditability: "Yes (Milestone progress logs public)",
    integrations: "Twitter/X share API, RSS feeds, LinkedIn triggers",
    permissions: "Founder edits private vs public reads only"
  }
];
export const MASTER_DISCLAIMER = "Product capabilities, integrations, and deployment details may vary by configuration. Health-related products do not provide medical diagnosis, emergency monitoring, or treatment advice. Clinic and pharmacy workflows remain subject to qualified professional judgment and applicable requirements. Safety products cannot guarantee personal safety or predict another person's behavior. Automated security scanning cannot guarantee that an application is secure and does not replace qualified security review or penetration testing. Any legal, regulatory, compliance, or certification claims require separate approval before publication.";
