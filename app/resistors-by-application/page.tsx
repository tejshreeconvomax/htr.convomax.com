import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Application Specific Resistors | HTR India Custom Solutions",
};

type Row = [string, string, string];

const rows: Row[] = [
  ["1", "Power Supplies", "HVAC, OP, HIA, OF, HMV, HMVL, HEAL, RL, HFW, HCV"],
  ["2", "UPS", ""],
  ["3", "SMPS", ""],
  ["3 a)", "SMPS – Industrial & Medical Device", ""],
  ["4", "Smart Inverters", ""],
  ["5", "Industrial Control Equipment", "HIA, OA, OP, OF, HEW, FRS, VHIA, HFW, HCV"],
  ["6", "TV's", "HCP, BR"],
  ["7", "Kitchen Appliances", "HFA, HFP"],
  ["8", "Elevators", "HMV, HMVL, HCP, HCA"],
  ["8 a)", "Elevators – Control Panel", ""],
  ["8 b)", "Elevators – ARD SYSTEMS", ""],
  ["9", "Automotive Alternators", "HIA, HTA, HAA"],
  ["10", "Automotive HVAC Resistors", "Special Tailor Made, to suit each particular application"],
  ["11", "Automotive Noise Suppressor Resistors for reducing RF (Radio Frequency) Interference.", "HANS , HANS-S, HANS-C"],
  ["12", "Automotive – Engine Cooling", "Special Tailor Made, to suit each particular application"],
  ["13", "Automotive – Electronic Windows Lift Application", "OF"],
  ["14", "Acoustic Equipment", "BR, HCP"],
  ["15", "Maritime Application – Beacon and Sounder", "HEA"],
  ["16", "Electronic Ignitors for Sodium Vapour Lamps used on Free Ways / High Ways", "HEA"],
  ["17", "Plastic Bag Sealers", "HEA"],
  ["18", "DC to DC Converters", "HVAC, OP, OA, HIA, OF, HMV"],
  ["19", "The AVR – Voltage Regulator which is supplied with Diesel Generating Sets", "HIA"],
  ["20", "Energy Meters & Smart Meters", "HIA"],
  ["21", "Digital Meters – VAF/MFM", "HIA"],
  ["22", "Solar Powered Street Lights", "HIA"],
  ["23", "Water Purifiers", "HIA"],
  ["24", "Capacitor Discharge Resistors", "HSR,HSRC"],
  ["25", "Medical Equipments", "HIA, HIR, RSR"],
  ["26", "Control Unit in Power Tools", "OP, HEW, OF, OFSC & HHE"],
  ["27", "Public Address Systems", "HCA, HCP, HIP"],
  ["28", "Speaker Cross Over in Sound System", "HCA, HCL, HCP"],
  ["29", "Solar Energy Converter (Solar Inverter)", "OA, OP, HEW, OFSC"],
  ["30", "Set Top Box", "HIA, HAA"],
  ["31", "Textile Spinning Machinery", "HCP, HCA, HCW"],
  ["32", "Ultra Sonic Cleaning Machines", "HEA, HSVA, HSVAU"],
  ["33", "Ultra Sonic Plastic Welding Machines", "HEA, HSVA, HSVAU"],
  ["34", "Variable Frequency Drive", "OA, OP, HEW, OF,HCL"],
  ["35", "Washing Machine Controller", "HCP, HCA"],
  ["36", "Wind Energy Converter", "HFP"],
  ["37", "X-Ray Machine", "RSR"],
  ["38", "Inverter Welding Machine", "OF"],
  ["39", "Resistor for fitting on to Bi-Metallic Actuator Assembly, with connecting cables", "Special Tailor Made, to suit each particular application"],
  ["40", "Electronic Drive Systems, Electronic Frequency Convertors", "HSE, HHE, HRE, HBE, HEE, HEB, HTE, HOS"],
  ["41", "Current Sensing for Power Hybrid Applications", "HSE, HHE, HRE, HBE, HEE, HEB, HTE, HOS"],
  ["42", "Electronic Battery Management & Automotive Applications for Hybrid & Electrical Vehicles.", "HSE, HHE, HRE, HBE, HEE, HEB, HTE, HOS"],
  ["43", "Capacitor Discharge Ignition for Two Wheeler", "HCAL"],
  ["44", "Current Sense Application in DC Drive Motors", "RL"],
  ["45", "Switchgears", "HIA,HIR, VHIA"],
  ["46", "Cooking Appliances", "HCL"],
  ["47", "Power Supply Products for Telecom Equipments", "OP"],
  ["48", "LED Drive for Domestic Fans for very Low Power Consumption", "Tailor made or customized product"],
  ["49", "IGBT – Insulated-Gate Bipolar Transistor Modules", "EBM Shunt Series/HIR Series."],
  ["50", "Snubber Circuit", "HSV/HCP"],
  ["51", "Ignitor for Metal Halide Lamps", "VHIA"],
  ["52", "Signal input to Airplane control PCB", "VHIA"],
  ["53", "Traction Power Inverter Modules in Electric Vehicles", "HCL"],
  ["54", "Air Conditioning Applications", "HTA , HIA, HCL"],
  ["55", "Audio Amplifier", "HCA ,HCP,BR,HIA  (Non Inductive)"],
  ["56", "Dehumidifiers", "HCL"],
  ["57", "Induction Furnace", "HMV, HIA"],
  ["58", "Induction Power Supplies for Heating equipments", "HMV,HIA"],
  ["59", "Traction Battery chargers in Fork Lift", "OFSC, OF, HIA,HEAL"],
  ["60", "LCR Filters", "HIA"],
  ["61", "Solar Charge Controllers, DC Energy Meters", "OFSC, RL, OA, OP, HIA, HTE"],
  ["62", "Automotive/Two wheeler Instrument Cluster", "HIA, HAA"],
  ["63", "Controller Card for Domestic Air conditioners", "HCA"],
  ["64", "BLDC Motor controller for HVAC Blower", "HSE, THE"],
  ["65", "Fish Finder Device on Boats/Ships", "HIAS"],
  ["66", "Automatic Garage Door System", "HMV, HIA,HEA"],
  ["67", "Infrared Sensor Switches", "FRS, HFW"],
  ["68", "360° High Precision Photography System", "HTA"],
  ["69", "Charging Stations for Electric Bicycles / Rickshaw", "BR,HIA"],
  ["70", "Automotive – Two/Four Wheeler Indicators/Flasher", "OP/THE"],
  ["71", "Ultra Sonic Tube Sealing Machine", "HCA/HSV"],
  ["72", "Surge Protection Devices for Solar Street Lights", "HIA"],
  ["73", "Automotive Industries for Battery Discharge Applications", "HCL"],
  ["74", "Railway Braking Applications /Automotive Braking", "HIA, HTA"],
  ["75", "Battery Charger", "HMV, HMVL"],
  ["76", "Automotive – Rain Wiper System", "HIA"],
  ["77", "Electroplating Rectifier", "HIA, HSR, HCA"],
  ["78", "Welding Machines", "HCL, HCA"],
  ["79", "Battery Charging & Discharging Application", "HSV"],
  ["80", "Alternator for Boats Engines", "HEA"],
  ["81", "Brakes Control Unit of CPU in Railways", "HMV"],
  ["82", "Guitar Amplifier", "HTA"],
  ["83", "Soho Switch –Power Adapter", "HIA"],
  ["84", "Fuel /LPG Dispensing Unit", "HIR/HIA"],
  ["85", "Cell Phone Towers Power Supply", "HEB"],
  ["86", "Automatic Meter Reading in Sub-Stations", "FRS, HIA"],
  ["87", "Automatic Roller Shutter", "OP"],
  ["88", "Switch Reluctance Motor in electric Vehicles", "THE"],
  ["89", "BLDC Drives", "RL"],
  ["90", "EARTHING DISCHARGE RODS", "HIR"],
  ["91", "Micro Welding Machines", "HIR"],
  ["92", "Application: (Single Phase controller) for Farming", "HIA"],
  ["93", "Milk analyzer devices", "HIA"],
  ["94", "Hot water pressure pumps", "HANS"],
  ["95", "Cassette air conditioner", "HMV"],
  ["96", "ECG CABLE Junction box", "HIA"],
  ["97", "Motor Controller for Electric 2 & 3 Wheelers", "HEW/OA/OP/OF/HTE"],
  ["98", "Load for DSP Module (In Educational Institutes)", "HIR"],
  ["99", "ICU Ventilator", "RL/HCA/HIA"],
  ["100", "Automatic Printing Machines", "HIR"],
  ["101", "LED for Railway Coaches", "HAA"],
  ["102", "Body Control Module (BCM) for Automotive Application", "HIA"],
  ["103", "LED Luminare to be used under water", "HCAL"],
  ["104", "VFD – Variable Frequency Drive", "HMV"],
  ["105", "Testing Modules for Automobile Industries (Before & After Assembly)", "HIR/HIA"],
  ["106", "Fluorescent and LED Lights for Gemstone inspection", "HTA"],
  ["107", "Electro discharge machines (EDM)& CNC machine", "HIR/RSR"],
  ["108", "HMI Ports (Human Machine Interface)", "HIA"],
  ["109", "Atomic Power Plant/Station", "HIR/RSR"],
  ["110", "E-Power Battery control system for Cars", "HIA"],
  ["111", "Pressure Switch", "HEA"],
  ["112", "VTS (Vehicle Tracking System)", "OF"],
  ["113", "Annunciator", "HTA"],
  ["114", "Power Seat Adjustment Switch – Four Wheeler", "OF"],
  ["115", "Thyristor Switching Module", "HIA"],
  ["116", "Audio Cab Communication in Locomotive", "RSR"],
  ["117", "High frequency inverter", "HHE"],
  ["118", "MPPT charge controller", "HHE"],
  ["119", "Static stabilizer", "HHE"],
  ["120", "Motor Winding current sensing", "HIA/BR"],
  ["121", "Transformers – In Electricity sectors", "HIR"],
  ["122", "Water Purifier", "HIA"],
  ["123", "Wheatstone bridge circuit", "HCL"],
  ["124", "Stabilizer in Air conditioning Application", "HIA"],
  ["125", "EV charger in 2 & 3 wheelers", "RL/HIA/BR/OP"],
  ["126", "Motor Controller for 4 Wheeler", "VHIA"],
  ["127", "Defibrillators (Pulse normalization)", "HIA"],
  ["128", "Axle Counter system. Signals & Safety", "HEA"],
  ["129", "Fan Regulator", "HAA"],
  ["130", "Automotive Climate system in 4 wheelers", "OF"],
  ["131", "Coffee Vending machine", "HMV, HFP"],
  ["132", "Gristmill (Atta Chakki) Controller", "RL"],
  ["133", "Solar Based – Electric Fence Energizer", "HIA"],
  ["134", "Pedestrian door Automation", "HFW, VHIA"],
  ["135", "DC-DC Boost Converter (Step up Converter) for EV Car charging solutions", "HIAS"],
  ["136", "Ice Protection controllers for aerospace", "OP/OW"],
  ["137", "EV OBC (On Board Charger)", "HIA"],
  ["138", "Glow Plug Relay (Ignition Sys) for vehicle Diesel Engine", "Resistor Sheet Shunt."],
  ["139", "Signal Isolator", "HIA"],
  ["140", "Battery Cell Balancing", "HCP"],
  ["141", "Washing Machine", "VHIA"],
  ["142", "Solar Inverter", "HCW, HMV"],
  ["143", "Rail Line", "HIR"],
  ["144", "AGV (Automated Guided Vehicle) Wireless charger", "HCA"],
  ["145", "Ultra Sonic Generator", "RL, HMV"],
  ["146", "Solar Inverter", "HCL"],
  ["147", "High power switches for EV Applications", "HRE, HEE"],
  ["148", "3 phase submersible pumps", "HTA"],
  ["149", "Earthing Protection Management System", "HIA"],
  ["150", "Premises Electrical Safety System", "FRS"],
  ["151", "Ozone Generator", "BR"],
  ["152", "Water Vending Machine, Coin-QR-ATM", "FRS, HIA"],
];

export default function ResistorsByApplicationPage() {
  return (
    <PageShell>
      <h1 className="htr-title-bar mb-6 flex flex-wrap items-baseline justify-between gap-2">
        <span>Resistors by Application</span>
        <span className="text-sm font-normal">Rev. 08 Dated. 12/06/2025</span>
      </h1>
      <div className="htr-prose overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>SR/NO.</th>
              <th>APPLICATIONS</th>
              <th>HTR SERIES</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                <td>{r[0]}</td>
                <td>{r[1]}</td>
                <td>{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
