// FAQ and Design-Note article content for the HTR-India replica.

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  body?: string; // HTML; when absent the excerpt is shown
};

export const faqArticles: Article[] = [
  {
    slug: "caution",
    title: "Caution",
    excerpt:
      "The types and specifications given in this catalogue are general in nature and apply largely to our standard types and hence if the resistors are to be used in special applications or are to be used in areas that need extremely high reliability such as life maintenance equipment, atomic energy, aircrafts and manned satellites it would advisable that samples are procured from HTR and evaluated for suitability in real life conditions/simulation. During soldering operations, care should be taken to keep",
    body: `
<p>The types and specifications given in this catalogue are general in nature and apply largely to our standard types and hence if the resistors are to be used in special applications or are to be used in areas that need extremely high reliability such as life maintenance equipment, atomic energy, aircrafts and manned satellites it would advisable that samples are procured from HTR and evaluated for suitability in real life conditions/simulation.</p>
<p>During soldering operations, care should be taken to keep recommended temperatures in mind and prevent unnecessary stress on the component, which can lead to discolouring, resistance change and opening, if it is subject to abnormally high temperatures for long time.</p>
<p>If the component is to be used in a circuit where pulse wave current (single/repetitive pulses) and surge current run, it is suggested that samples are obtained from HTR and tested in the circuit itself for their suitability. Please specifically mention the application and the pulse stresses that the resistor could be subject to while asking for samples. As a guide to the data required, please refer "Pulse / Surge Capability of Resistors" and in case a tailor-made pulse resistor is required, please refer to "Questionnaire of data required".</p>
<p>When ambient temperatures exceed the rated ambient temperature, it is advisable that the resistor is utilized after proper derating as per the derating curve provided.</p>
<p>Under overload conditions, resistors are likely to emit flame/fire, gas/smoke; however flame retardant resistors under overload conditions emit smoke and even glow red hot under extreme overload conditions but do not emit fire / flame which even if it occurs, is extinguished within seconds due to the flame retardant properties of the coating / filling.</p>
`,
  },
  {
    slug: "material-data-sheet",
    title: "Material Data Sheet",
    excerpt:
      "HIA / HTA / HAA / FRS / HFW series Core Mullite / Ceramic (thermally efficient) End Caps Tin Plated Steel Wire Terminations Tin Plated Copper or Copper Clad Steel depending on application Resistive Element Wire CuNi 44 / NiCr 8020 / NiCr 20 AlSi depending on resistance value. Coating High temperature Silicone with inert fillers, flame retardant.",
    body: `
<h3>HIA / HTA / HAA / FRS / HFW series</h3>
<table><tbody>
<tr><td><strong>Core</strong></td><td>Mullite / Ceramic (thermally efficient)</td></tr>
<tr><td><strong>End Caps</strong></td><td>Tin Plated Steel</td></tr>
<tr><td><strong>Wire Terminations</strong></td><td>Tin Plated Copper or Copper Clad Steel depending on application</td></tr>
<tr><td><strong>Resistive Element</strong></td><td>Wire CuNi 44 / NiCr 8020 / NiCr 20 AlSi depending on resistance value.</td></tr>
<tr><td><strong>Coating</strong></td><td>High temperature Silicone with inert fillers, flame retardant.</td></tr>
</tbody></table>

<h3>VHIA Series</h3>
<table><tbody>
<tr><td><strong>Core</strong></td><td>Mullite / Ceramic (thermally efficient)</td></tr>
<tr><td><strong>End Caps</strong></td><td>Stainless Steel AlSi 304</td></tr>
<tr><td><strong>Wire Terminations</strong></td><td>Tin Plated Copper Clad Steel</td></tr>
<tr><td><strong>Resistive Element</strong></td><td>Wire CuNi 44 / NiCr 8020 / NiCr 20 AlSi depending on resistance value.</td></tr>
<tr><td><strong>Coating</strong></td><td>High temperature Silicone with inert fillers, flame retardant.</td></tr>
</tbody></table>

<h3>HFA Series</h3>
<table><tbody>
<tr><td><strong>Core</strong></td><td>Fiberglass</td></tr>
<tr><td><strong>End Caps</strong></td><td>Tin Plated Steel</td></tr>
<tr><td><strong>Wire Terminations</strong></td><td>Tin Plated Copper or Copper Clad Steel depending on application</td></tr>
<tr><td><strong>Resistive Element</strong></td><td>Wire CuNi 44 / NiCr 8020 / NiCr 20 AlSi depending on resistance value.</td></tr>
<tr><td><strong>Coating</strong></td><td>High temperature Silicone with inert fillers, flame retardant.</td></tr>
</tbody></table>

<h3>HFP Series</h3>
<table><tbody>
<tr><td><strong>Core</strong></td><td>Fiberglass or Ceramic (thermally efficient) core depending on resistance value and application</td></tr>
<tr><td><strong>PCB Mounting Terminations</strong></td><td>Tin Plated Steel</td></tr>
<tr><td><strong>Resistive Element</strong></td><td>Wire CuNi 44 / NiCr 8020 / NiCr 20 AlSi depending on resistance value.</td></tr>
<tr><td><strong>Coating</strong></td><td>High temperature Silicone with inert fillers, flame retardant.</td></tr>
</tbody></table>

<h3>HIP Series</h3>
<table><tbody>
<tr><td><strong>Core</strong></td><td>Mullite / Ceramic (thermally efficient)</td></tr>
<tr><td><strong>PCB Mounting Terminations</strong></td><td>Tin Plated Steel</td></tr>
<tr><td><strong>Resistive Element</strong></td><td>Wire CuNi 44 / NiCr 8020 / NiCr 20 AlSi depending on resistance value.</td></tr>
<tr><td><strong>Coating</strong></td><td>High temperature Silicone with inert fillers, flame retardant.</td></tr>
</tbody></table>

<h3>HIR / RSR Series</h3>
<table><tbody>
<tr><td><strong>Tube</strong></td><td>Ceramic (thermally efficient)</td></tr>
<tr><td><strong>Lug Terminations</strong></td><td>Nickel Plated Steel / Nickel : Iron Alloy / Stainless Steel depending on application</td></tr>
<tr><td><strong>Resistive Element</strong></td><td>HIR series Wire – CuNi 44 / NiCr 8020 / NiCr 20 AlSi depending on resistance value. RSR series ribbon CuNi 44.</td></tr>
<tr><td><strong>Coating</strong></td><td>High temperature Silicone with inert fillers, flame retardant.</td></tr>
</tbody></table>

<h3>HSR / HSRC Series</h3>
<table><tbody>
<tr><td><strong>Core</strong></td><td>Mullite / Ceramic (thermally efficient)</td></tr>
<tr><td><strong>End Caps</strong></td><td>Stainless Steel AlSi 304</td></tr>
<tr><td><strong>Terminations</strong></td><td>Stainless Steel AlSi 304 (suitable for direct mount on capacitors)</td></tr>
<tr><td><strong>Resistive Element</strong></td><td>Wire NiCr 8020 / NiCr 20 AlSi depending on resistance value.</td></tr>
<tr><td><strong>Encapsulation</strong></td><td>HSR series – High temperature Silicone with inert fillers, flame retardant</td></tr>
<tr><td><strong>Body</strong></td><td>HSRC series Steatite Ceramic case (thermally efficient) with inorganic potting material, flame retardant.</td></tr>
</tbody></table>

<h3>HCA / HCV / HCW / FRC Series</h3>
<table><tbody>
<tr><td><strong>Core</strong></td><td>HCA / HCV series Fiberglass or Ceramic (thermally efficient) core depending on resistance value and application. FRC / HCW series – Ceramic (thermally efficient) core.</td></tr>
<tr><td><strong>End Cap</strong></td><td>HCA / HCV / FRC series Tin Plated Steel; HCW series Stainless Steel AlSi 304</td></tr>
<tr><td><strong>Wire Terminations</strong></td><td>FRC / HCA / HCV series Tin Plated Copper; HCW series Tin Plated Copper Clad Steel</td></tr>
<tr><td><strong>Resistive Element</strong></td><td>Wire CuNi 44 / NiCr 8020 / NiCr 20 AlSi depending on resistance value.</td></tr>
<tr><td><strong>Body</strong></td><td>Steatite Ceramic Case (thermally efficient) with inorganic potting material, flame retardant.</td></tr>
<tr><td><strong>Vertical Mounting Bracket</strong></td><td>Tin Plated Steel (HCV series)</td></tr>
</tbody></table>

<h3>HEA / HSVA / HSVAU / HSV Series</h3>
<table><tbody>
<tr><td><strong>Core</strong></td><td>Fiberglass or Ceramic (thermally efficient) core depending on resistance value and application.</td></tr>
<tr><td><strong>End Cap</strong></td><td>Tin Plated Steel</td></tr>
<tr><td><strong>Wire Terminations</strong></td><td>Tin Plated Copper</td></tr>
<tr><td><strong>Resistive Element</strong></td><td>Wire CuNi 44 / NiCr 8020 / NiCr 20 AlSi depending on resistance value.</td></tr>
<tr><td><strong>Body</strong></td><td>Electrical Porcelain / Alumina Ceramic / Corderite Ceramic with quartz filler potting.</td></tr>
<tr><td><strong>Mounting Pillars</strong></td><td>Tin Plated Steel (HSV series)</td></tr>
</tbody></table>

<h3>HCP / HMW / HCL / HMV Series</h3>
<table><tbody>
<tr><td><strong>Core</strong></td><td>Fiberglass or Ceramic (thermally efficient) core depending on resistance value and application.</td></tr>
<tr><td><strong>Termination</strong></td><td>HMW / HCP series PCB Mounting Style Tin Plated Steel; HCL series Lug Style Tin / Nickel Plated Steel; HMV series Wire Terminations Tin Plated Copper</td></tr>
<tr><td><strong>Resistive Element</strong></td><td>Wire CuNi 44 / NiCr 8020 / NiCr 20 AlSi depending on resistance value.</td></tr>
<tr><td><strong>Body</strong></td><td>Steatite Ceramic case (thermally efficient) with inorganic potting material, flame retardant.</td></tr>
<tr><td><strong>Mounting Brackets</strong></td><td>HCL series Steel Zinc Plated with trivalent passivation to meet RoHS norms.</td></tr>
</tbody></table>

<h3>RL / HCAL / HEAL / HMVL / BR Series</h3>
<table><tbody>
<tr><td><strong>Resistive Element</strong></td><td>Ribbon – CuNi 44 / NiCr 6015 / CuNi 23 Mn depending on resistance value.</td></tr>
<tr><td><strong>Wire Terminations</strong></td><td>Tin Plated Copper.</td></tr>
<tr><td><strong>Body</strong></td><td>RL / HEAL series – Electrical Porcelain / Alumina Ceramic / Corderite Ceramic with quartz filler potting or with inorganic potting material, flame retardant depending on application. HCAL / HMVL / BR series Steatite Ceramic Case (thermally efficient) with inorganic potting material, flame retardant.</td></tr>
</tbody></table>

<h3>OA / OP / HEW / OFSC / OF Series</h3>
<table><tbody>
<tr><td><strong>Resistive Element</strong></td><td>Ribbon – CuNi 44 / NiCr 6015 / CuNi 23 Mn depending on resistance value.</td></tr>
<tr><td><strong>Terminations</strong></td><td>OA / OP / HEW series Wire Tin plated Copper / Tin Plated Copper clad steel; OF series Monolithic same as resistive element, pre-solder dipped. OFSC series Wire Tin plated Copper</td></tr>
<tr><td><strong>Encapsulation</strong></td><td>OA / OP / HEW / OF series no coating bare; OFSC series – High temperature Silicone with inert fillers, flame retardant</td></tr>
</tbody></table>

<h3>HIAS Series</h3>
<table><tbody>
<tr><td><strong>Core</strong></td><td>Mullite / Ceramic (thermally efficient)</td></tr>
<tr><td><strong>End Caps</strong></td><td>Tin Plated Steel</td></tr>
<tr><td><strong>Terminations</strong></td><td>H1M / H2M Tin plated cap terminations, pre-solder dipped. H3AS / H5S Tin Plated Steel. 2WS / 2WSA / 3WS / 4WS / 5WS Wire Tin Plated Copper / Tin Plated Copper Clad Steel</td></tr>
<tr><td><strong>Resistive Element</strong></td><td>Wire – CuNi 44 / NiCr 8020 / NiCr 20 AlSi depending on resistance value.</td></tr>
<tr><td><strong>Coating</strong></td><td>High Temperature Silicone with inert filters, flame retardant.</td></tr>
</tbody></table>

<h3>RLS / HSVAS / HSVALS Series</h3>
<table><tbody>
<tr><td><strong>Core</strong></td><td>HSVAS series Mullite / Ceramic (thermally efficient)</td></tr>
<tr><td><strong>End Caps</strong></td><td>HSVAS series Tin Plated Steel</td></tr>
<tr><td><strong>Resistive Element</strong></td><td>HSVAS series – Wire – CuNi 44 / NiCr 8020 / NiCr 20 AlSi depending on resistance value. RLS / HSVALS series Ribbon – CuNi 44 / NiCr 6015 / CuNi 23 Mn depending on resistance value.</td></tr>
<tr><td><strong>Terminations</strong></td><td>RLS – Wire Terminations – Tin Plated Copper; HSVAS / HSVALS – Tin Plated Mild Steel.</td></tr>
<tr><td><strong>Body</strong></td><td>Electrical Porcelain / Alumina Ceramic / Corderite Ceramic with quartz filler potting or with inorganic potting material, flame retardant depending on application.</td></tr>
</tbody></table>

<h3>HCAS / HCALS Series</h3>
<table><tbody>
<tr><td><strong>Core</strong></td><td>HCAS series Mullite / Ceramic (thermally efficient)</td></tr>
<tr><td><strong>End Caps</strong></td><td>HCAS series Tin Plated Steel</td></tr>
<tr><td><strong>Resistive Element</strong></td><td>HCAS series – Wire – CuNi 44 / NiCr 8020 / NiCr 20 AlSi depending on resistance value. HCALS series Ribbon – CuNi 44 / NiCr 6015 / CuNi 23 Mn depending on resistance value.</td></tr>
<tr><td><strong>Terminations</strong></td><td>Tin Plated Copper (SMD pad type)</td></tr>
<tr><td><strong>Body</strong></td><td>Steatite Ceramic case (thermally efficient) with inorganic potting material, flame retardant.</td></tr>
</tbody></table>

<h3>HANS Series</h3>
<table><tbody>
<tr><td><strong>Core</strong></td><td>Resin Infused Fibre Glass</td></tr>
<tr><td><strong>End Caps</strong></td><td>Nickel Plated Brass</td></tr>
<tr><td><strong>Resistive Element</strong></td><td>NiCr 8020 / NiCr 20 AlSi depending on resistance value.</td></tr>
</tbody></table>

<h3>HRE / HBE / HEE / HHE / HTE / HSE / HOS Series</h3>
<table><tbody>
<tr><td><strong>Resistive Element</strong></td><td>CuMn12Ni / NiCr 20 AlSi / FeCr 8020 / X8CrAl 20-5 / CuMn7Sn.</td></tr>
<tr><td><strong>Terminations</strong></td><td>Heat Treated Copper</td></tr>
</tbody></table>

<h3>HEB Series</h3>
<table><tbody>
<tr><td><strong>Resistive Element</strong></td><td>CuMn12Ni.</td></tr>
<tr><td><strong>Termination</strong></td><td>Screw Mounting – Monolithic Construction</td></tr>
</tbody></table>

<p><strong>Note:</strong> All anti-corrosion barriers provided in the plating are undercoats of Ni / Cu and are RoHS compliant.</p>
`,
  },
  {
    slug: "terms-used-their-explanation",
    title: "Terms Used – Their Explanation",
    excerpt:
      "Type Internal HTR reference for a certain component, to be used along with series for ordering. Series Collection of types with identical constructional features and technical data. Physical Configuration Physical style / appearance and dimensions of the component. Power Rating Electrical power, defined by current and voltage, a resistor can bear continuously at a given ambient temperature – Normally at 25°C, 40°C or 70°C. Resistance Tolerance The allowable deviation from nominal resistance value at the moment the component is received.",
    body: `
<h3>Type</h3>
<p>Internal HTR reference for a certain component, to be used along with series for ordering.</p>
<h3>Series</h3>
<p>Collection of types with identical constructional features and technical data.</p>
<h3>Physical Configuration</h3>
<p>Physical style / appearance and dimensions of the component.</p>
<h3>Power Rating</h3>
<p>Electrical power, defined by current and voltage, a resistor can bear continuously at a given ambient temperature – Normally at 25°C, 40°C or 70°C.</p>
<h3>Resistance Tolerance</h3>
<p>The allowable deviation from nominal resistance value at the moment the component is received. Possible subsequent resistance changes due to electrical, climatic or mechanical stress are not included in this.</p>
<h3>Temperature Characteristic of Resistance (Temperature Co-efficient)</h3>
<p>Indicates the change in resistance value, which is largely determined by materials and styles, for every degree change in ambient temperature. This change is usually expressed in parts per million per degree Celsius (ppm/°C). Note: This change in resistance value is reversible.</p>
<h3>Limiting Voltage / Voltage Rating / Maximum Continuous Working Voltage</h3>
<p>Limit for the voltage that may be continuously applied to the resistor, calculated as V = √(P × R) where V is rated DC or rms continuous working voltage, P is power rating in watts and R is nominal resistance in ohms.</p>
<p><strong>Note:</strong> Since wire wound resistors do not exhibit the phenomenon of deterioration of the resistive element due to extreme voltage stress which causes conduction from normally non conductive materials in film resistors, hence maximum voltage rating are not normally specified in wire wound resistor datasheets and are governed by the above formula.</p>
<h3>Critical Value of Resistance</h3>
<p>For a given voltage rating / limiting element voltage and a given power rating in watts, there is only one value of resistance that will dissipate full rated power at rated voltage. This value of resistance is commonly referred to as the "Critical value of resistance". For values of resistance below the critical value, the maximum (element) voltage is never reached and for values of resistance above critical value, the power dissipated becomes lower than rated. The figure given below illustrates this relationship. In common parlance, it could be stated that critical value of resistance is that resistance value at which the rated voltage is equal to the "limiting element voltage".</p>
<p><img src="/images/formulas/Critical-Value-of-Resistance.gif" alt="Critical Value of Resistance diagram" style="max-width:420px;width:100%;height:auto;" /></p>
<h3>Voltage Proof or Dielectric Withstanding Voltage</h3>
<p>This test demonstrates the ability of the dielectric or the insulation of the resistor to withstand a prescribed voltage typically 500V or maximum continuous working voltage x 2, applied between the body and both terminals tied together and there should be no untoward effect on the insulation.</p>
<h3>Insulation Resistance</h3>
<p>The DC resistance measured between both terminals tied together and the body of the resistor on being given a prescribed voltage, expressed in MΩ.</p>
<h3>Short Time Overload</h3>
<p>This test checks the deviation / change in resistance, usually irreversible, which occurs when a resistor is subjected to a prescribed overload voltage for 5 seconds.</p>
<h3>Climatic Category</h3>
<p>It establishes the lowest and highest temperature as well as the duration of the humidity testing. This category temperature and duration varies from standard to standard and from one type of the resistor to another.</p>
<h3>Damp Heat, Steady State</h3>
<p>This test specifies the permissible irreversible resistance change after defined climatic stress. The test procedures for administering the defined climatic stress are given in different standards such as MIL, IEC, JSS and JIS.</p>
<h3>Load Life or Endurance</h3>
<p>The relative irreversible resistance change after a specific testing time. Normally it is related to administering limiting voltage intermittently at 70°C ambient temperature and 1000 hour test duration.</p>
<h3>Temperature Range</h3>
<p>The minimum and maximum ambient temperatures between which the component may be used with suitable derating as per derating curves provided with each series.</p>
<h3>Hot Spot Temperature</h3>
<p>The maximum temperature measured on the body of a resistor due to both internal heating and the ambient operating temperature. This hot spot temperature is determined by the thermal limits of the materials used and the design. Hot spot temperature is also defined as the temperature on the derating curve at which the resistor is derated to zero power.</p>
<h3>Derating Curve / Rated Ambient Temperature</h3>
<p>The power rating of a resistor is based on a certain temperature rise from an ambient temperature of a certain value. If the ambient temperature is greater than this value the amount of heat that the resistor can dissipate is correspondingly reduced and therefore it must be derated because of temperature.</p>
<h3>Non Inductive Resistors</h3>
<p>All resistors have capacitance and inductance as well as pure resistance and these factors can become significant at high frequencies. For wire wound resistors inductive effects are predominant in low resistance value resistors (below 1K0) and capacitive effects become predominant in higher resistance values. At HTR specialized winding techniques are used in the manufacture of our low inductance resistors so that these effects are reduced considerably.</p>
<h3>Resistance to Soldering Heat</h3>
<p>The normally irreversible change in the resistance value during the process of soldering.</p>
<h3>Terminal Tensile Strength</h3>
<p>The outer limit of the tensile force that can be applied to the terminal of the resistor.</p>
<h3>Standards</h3>
<p>These are written documents of norms, standard specifications and test methods which are nationally or internationally known for a given series of components. For fixed wire wound resistors the following standards normally apply:</p>
<table>
<thead><tr><th>Region</th><th>Standard</th></tr></thead>
<tbody>
<tr><td>India</td><td>JSS 50402</td></tr>
<tr><td>USA</td><td>MIL – R26</td></tr>
<tr><td>EEC</td><td>IEC – Pub 266</td></tr>
<tr><td>Japan</td><td>JIS – C6401</td></tr>
</tbody>
</table>
`,
  },
];

export const designNoteArticles: Article[] = [
  {
    slug: "guide-to-optimum-utilisation-mounting-of-resistors",
    title: "Guide to Optimum Utilisation & Mounting of Resistors",
    excerpt:
      "HTR's reliability testing facility is fully alive to the fact that its work in assuring quality can only be judged successful if it is converted",
    body: `
<p>HTR&apos;s reliability testing facility is fully alive to the fact that its work in assuring quality can only be judged successful if it is converted to customer assurance.</p>
<p>Customer confidence will always be retained if the correct resistor is used in the way it is designed to be used. Towards meeting this objective the quality assurance team of HTR has put together a small guide.</p>
<h2>OPTIMUM UTILISATION GUIDE FOR RESISTORS</h2>
<ul>
<li><strong>Improper heat dissipation</strong> is the predominant contributing cause of failure for any resistor type; consequently, the lowest possible resistor surface temperature should be maintained.</li>
</ul>
<p>The intensity of radiated heat varies inversely with the square of the distance from the resistor. Hence maintaining maximum distance between heat generating components serves to reduce cross-radiation heating effects and promotes better convection by increasing air flow.</p>
<h2>Towards promoting better use of resistors, given below is A GUIDE FOR RESISTOR MOUNTING</h2>
<ul>
<li>Maintain lead length to a minimum. (Where low temperatures are present, leads should be offset — bent slightly — to allow for thermal contraction.)</li>
<li>The mounting of close tolerance and low resistance value resistors require special precautions (i.e., short leads and good soldering techniques) since the resistance of the leads and the wiring may be as much as several percent of the resistance of the resistors.</li>
<li>Maintain maximum spacing between resistors.</li>
<li>For resistors mounted in series, consider the heat being conducted through the leads to the next resistor.</li>
<li>Large power units should not be mounted directly on to the PCB — try to select physical configurations which provide a stand-off.</li>
<li>Large power units should be mounted to chassis wherever possible — mainly applicable in the case of 35W and above in tubular style.</li>
<li>To provide for the most efficient operation and even heat distribution, power resistors should be mounted in a horizontal position.</li>
<li>Consider levels of shock and vibration to be encountered. Where large resistors are concerned, the body must be restrained from movement.</li>
</ul>
<p><strong>Wire wounds and their limitations when used in a high frequency circuit:</strong> Wire wound resistors have inductive and capacitive effects and are unsuited for use above 50kHz even when specially wound by the Aryton-Perry method. Wire wounds also usually exhibit an increase in resistance with high frequencies because of the &quot;skin&quot; effect.</p>
<p><strong>The selection of a particular resistor for a particular circuit</strong> is often the result of a trade-off between the actual parameters required and the realities of the product being designed in terms of size or costs. A good rule to follow when choosing a resistor size for equipment that must operate for many thousands of hours is to derate it to one half of its nominal power rating. Thus, if the self generated heat in the resistor is 1/3 watt, do not use a 1/2 watt resistor, but rather a 1 watt size. This will automatically keep the resistor cool, will reduce the long term drift, and will reduce the effect of the temperature co-efficient. In short, a &quot;cool&quot; resistor shall generally last longer than a &quot;hot&quot; one and can absorb transient overloads that might permanently damage a &quot;hot&quot; resistor.</p>
<h2>Joules Law</h2>
<ul>
<li>When current passes through a circuit, heat is generated. This heat (energy) is expressed in joules and calculated by the following formula:</li>
<li>Energy (Joules) = I²R × T where &apos;I&apos; is the current in Amperes, &apos;R&apos; is resistance in ohms and &apos;T&apos; is time expressed in seconds.</li>
<li>Power Rating or Wattage can also be calculated by the following formula: W = J(Energy) / T(seconds)</li>
</ul>
`,
  },
  {
    slug: "application-design-notes-on-selection-of-wire-wound-resistors",
    title: "Application / Design Notes on Selection of Wire Wound Resistors",
    excerpt:
      "BASICS Simply put, a resistor is an electronic component connected into an electrical circuit to insert a specific resistance. Resistance is measured in ohms and",
  },
  {
    slug: "pulse-surge-capability-of-resistors",
    title: "Pulse / Surge Capability of Resistors",
    excerpt:
      'Due to existing needs, many modern electronic circuits and apparatus experience transient pulses and surges. This in turn has led to the need to "design',
  },
  {
    slug: "application-design-notes-for-current-sense-resistors",
    title: "Application / Design Notes for Current Sense Resistors",
    excerpt:
      "HTR offers a very wide range of Low Ohm resistors for Current Sensing applications as given below: Silicone coated (OFSC Series) High Power and",
  },
  {
    slug: "ordering-information-for-fusible-resistor",
    title: "Ordering Information For Fusible Resistor",
    excerpt:
      "A fusible resistor is a tailor-made dual purpose component – At HTR, we offer Customized Fusing solution as well as Safety version. For Safety Version",
    body: `
<p>A fusible resistor is a tailor-made dual purpose component:</p>
<ol>
<li>In normal conditions it functions as resistor</li>
<li>In high overload / fault conditions it acts as a fuse / safety device</li>
</ol>
<p>At HTR, we offer Customized Fusing solution as well as Safety version.</p>
<h2>For Safety Version</h2>
<p>At HTR, we can offer a Special Safety version Fusible resistor which is designed to fuse instantaneously when mains voltage 220/240V is applied with no flame or explosion. For the US market we also offer safety fusing at 110/120V. These resistors have alphabet &apos;FS&apos; suffixed in front of part no.</p>
<h2>Customized Fusing Resistors</h2>
<p>In order to design a Customized Fusible resistor suitable for your needs, we need the following data:</p>
<ol>
<li>Power rating in terms of watts.</li>
<li>Resistance in ohms.</li>
<li>Tolerance.</li>
<li>Maximum continuous working voltage across the resistor, at which the resistor must continue to function.</li>
<li>Fusing voltage – The voltage at which the resistor must fuse or blow.</li>
<li>Fusing time – The duration at which the resistor must blow or fuse on being subjected to the fusing voltage.</li>
<li>Frequency of power source, voltage waveform.</li>
<li>Brief details of your application.</li>
</ol>
<p>These resistors have alphabet &apos;F&apos; suffixed in front of part no.</p>
<p><strong>Note:</strong> In certain cases the customer must be made aware that compromise inherent in the trade off between resistive and fusing function make certain exact combination not possible. Having said this, that does not mean that it is not possible to make a functional fusible resistor capable of that particular application.</p>
`,
  },
  {
    slug: "comparison-between-silicone-coated-vitreous-enamelled-wire-wound-resistors",
    title: "Comparison Between Silicone Coated & Vitreous Enamelled Wire Wound Resistors",
    excerpt:
      "The traditional method of encapsulating resistors through the vitreous enamelled route which was in vogue till about 30 years ago has now been largely replaced",
  },
  {
    slug: "techno-economic-comparison-between-silicon-cement-coated-wire-wound-resistors-and-ceramic-encased-resistors",
    title: "Techno/Economic Comparison Between Silicon/Cement Coated Wire Wound Resistors And Ceramic Encased Resistors",
    excerpt:
      "Ceramic Encased Resistors Traditionally Wire Wound Resistors meant coated resistors of either silicon or vitreous enameled on a Ceramic body which was wound with resistance wire which",
  },
];

export const faqMap: Record<string, Article> = Object.fromEntries(faqArticles.map((a) => [a.slug, a]));
export const designNoteMap: Record<string, Article> = Object.fromEntries(designNoteArticles.map((a) => [a.slug, a]));
