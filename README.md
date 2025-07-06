# Smart Spacer Capstone Final Report
Karyn Lee, Joie Li, Katherine Qin, Sam Zhu

## ABSTRACT
Asthma is a chronic inflammatory condition of the airways and is the most common chronic disease among children in Canada [1-4]. Severe asthma is characterized by coughing, wheezing and difficulty breathing, significantly interfering with day-to-day activities [5]. Pediatric respiratory clinicians are responsible for creating treatment plans for children with asthma, but tend to have difficulty managing pediatric patients due to a variety of factors such as a lack of quantitative data or patients being uncooperative with treatment. The team has developed and tested an early proof-of-concept design for a device and platform to work as a support system for respiratory clinicians. The intended purpose of the system is to provide quantitative and objective data about patient conditions and to assist clinicians in encouraging children to follow treatment plans. The goal of the products is to help pediatric respiratory clinicians better understand the reasons behind exacerbations and effectively treat their patients. Design work focuses on implementing key user flows for software and hardware components. Testing work focuses primarily on human factors and the usefulness of the design. The details of the design and testing process are documented in the report.

## INTRODUCTION
Severe asthma is characterized by exacerbations requiring medication multiple times a day [5]. These exacerbations often involve coughing, wheezing and difficulty breathing. In extreme cases, exacerbations can lead to hospitalization or death [6]. Treatment for individuals in the 5-9 age range involves taking medication using a pressurized metered dose inhaler (pMDI) with a spacer [5].

Exacerbations and conditions can worsen when prescribed medication is taken improperly or as scheduled [7]. However, it could also be due to increased exposure to triggers and/or true condition decline [7]. From agcxes 5-9, respiratory clinicians rely on subjective reports made by parents and children to understand the reasoning behind increased exacerbations. These reports are often vague and may contain false reports. Inaccurate assessments risk inappropriate medication adjustments. 
Below are examples of competitors currently in the asthma technology space:

- Adherium [8] is a casing device with an app for pMDIs, recording actuation time, shaking, and flow rates. However, it is inhaler-specific (not a spacer attachment), lacks gamification, and focuses on adherence rather than breathing metrics. Our solution is spacer-based, universal across pMDIs, and includes real-time feedback. 
- myAsthma [9] is an app offering education, peak flow journals, weather forecasts, and action plans, but relies on manual input. Our system automates data collection via sensors and adds gamification. 
- AsthmaMD [10] includes a peak flow meter and symptom journal but provides no medication-taking feedback. Our device integrates both lung function and inhaler technique monitoring.
  
The majority of technologies in the digital respiratory space are pure apps that incorporate trackers, journaling, and reminders. The solutions that do have physical device components focus on creating add-ons for the pMDIs and are not pMDI generic. Existing solutions also target adult demographics. Our design will create value by addressing these issues and creating a pMDI generic physical device and interface targeted toward the pediatric population.

## PROJECT MOTIVATION, SCOPE AND OBJECTIVES
By providing real-time feedback and gamification, we improve adherence and proper inhaler technique. This helps respiratory clinicians gather better data for personalized care while reducing hospitalizations and healthcare costs through better-controlled asthma. As previously mentioned, current solutions fail to provide comprehensive objective data while maintaining ease of use for young patients and their families. They tend to focus on adult populations, do not generalize well to other pMDIs, and focus on one area (adherence, lung function, journaling, or education) but fail to combine them all. Thus, the team's situation impact statement is as follows:

***"Design a product to provide quantitative data for respiratory clinicians that aid with the personalization of treatment plans for patients aged 5-9 with moderate to severe asthma who are prescribed pMDIs with a spacer to assist respiratory clinicians in better managing the patient's condition."***

Our solution combines a smart spacer device with a three-part software platform to provide quantitative data for all stakeholders. The spacer tracks medication usage and measures peak expiratory flow all in one device. It provides clinicians and users with accurate adherence and lung function data. This dual-function design eliminates the need for separate devices and provides real-time feedback to improve technique. The accompanying software platform serves three key user groups: clinicians receive detailed analytics to personalize treatment plans, parents gain clear visibility into their child's adherence and lung function through an intuitive dashboard, and children are motivated through gamification elements like a virtual pet that rewards proper medication use. The prototype built in this term represents the core functionality that will be used in everyday use cases on an Android phone. It does not include account set-up or removal, advanced data privacy, other OS phones, etc. The team is also scoping the problem space to individuals of medium-high socioeconomic status, eliminating cost constraints.

## SUMMARY OF ENGINEERING ANALYSIS AND DESIGN METHODS 
### SMART SPACER DEVICE 
One of the team's main objectives was to develop a physical electronic component integrated with a spacer that would allow our system to gather metrics as the child uses their medication. The two key metrics our team desired to gather were:

1) Timestamped data regarding when and how effectively the patient used their medications
2) Peak expiratory flow rate (PEFR) data for lung function testing

The choices of these metrics were influenced by interviews with respiratory clinicians and research into literature regarding what types of data clinicians often use for condition evaluation. These metrics were intentionally selected due to the limitations of existing data collection methods, which are often unreliable—such as relying on patient self-reports or prescription refill frequencies to track medication usage. Additionally, certain data points, like spacer effectiveness or PEFR measurements, are difficult to obtain using conventional approaches.

The team chose to measure the effectiveness of medication usage by measuring how quickly patients inhale their medication. This decision was influenced by a paper covering the ideal flow rates a patient must meet to maximize the deposition of medication in the lungs [11]. To measure this and PEFR, the team looked into methods of measuring flow rate and settled on a differential pressure sensor for its simplicity and minimal impact on regular flow through the spacer. From this and calculations relating to expected flow rates through the spacer, the main technical engineering specifications for the flow sensor were developed as shown below:

Table 2. Subset of technical engineering specifications for the sensor
![image](https://github.com/user-attachments/assets/767fe7bf-d6ca-4616-9e99-2534b1f86866)

There were also requirements regarding ease of use that influenced aspects of the design. For example, one of the requirements stated that the number of additional steps to use the spacer normally should be minimized. As such, the team decided to automate inhaler detection with an NFC sensor. The full design is shown in Appendix A. 

### SMART SPACER APP 
We began by implementing accessibility standards and usability heuristics across our app and web interfaces, ensuring compliance with WCAG guidelines and Nielsen's principles. Development using Figma’s prototyping tools allowed us to test the practical application of these standards, particularly for the mobile parent interface where intuitive data presentation proved critical. The development in Android Studio allowed us to test the front and back-end integration of graphs and data. 

Through user interviews with respiratory clinicians, parents, and classmates, we validated and refined core functionality. These interviews also refined some requirements and constraints. An example is our requirement to represent data in a way that is easy to digest, UI-R7. An interview with a parent changed user requirements to display needed information they could understand immediately, not just data they could theoretically interpret. This led us to replace complex quantitative graphs with a simple red yellow green icon system that delivers instant status updates. While this represented an iteration from initial specifications, it better served the actual needs identified in testing.

Additional requirements such as security and privacy (UI-R9) in data storage led to changes in how data could be accessed and changed on the remote database. Tight restrictions on the whitelist of IPs able to SSH into our development servers control who can access and delete patient data. We also added authentication and authorization on the mobile app to further control access to patient data.

Some initially planned features, like advanced data privacy controls and multi-platform support, were deprioritized to meet time constraints while maintaining essential functionality and security. The Android focus allowed us to deliver a robust solution within our timeline while preserving key requirements around data accessibility and usability.

The process demonstrated how theoretical requirements evolve when confronted with real-world use cases. By maintaining flexibility and prioritizing user feedback, we arrived at solutions that balanced technical specifications with practical utility; particularly in creating interfaces that provide immediate, actionable insights rather than simply displaying raw data. This user-centred approach ensured our final design met both engineering standards and the actual needs of parents and respiratory clinicians.

Table 3. Engineering Specifications for Applications
![image](https://github.com/user-attachments/assets/80960155-3509-4786-91a8-b939dde7b784)

## DESIGNED SOLUTION
### SMART SPACER DEVICE
The chosen differential pressure sensor was implemented using I2C. Pull-up resistors were needed for the sensor only, as other peripherals had the resistors built-in. The pressure read from the sensor was converted to flow rate through the calibration curve; this is expanded in the validation section.

Attaching an inhaler will automatically activate the flow sensors and begin logging medication usage associated with the inhaler attached. Automatic inhaler detection was implemented using a pre-made NFC module and accompanying library compatible with Arduino-like systems that reads NFC data via I2C. Modifications to the source code of the library were needed as definitions used in the NFC library conflicted with those of another I2C library used for timestamping purposes. The team worked to combine all the features into one and code the logic for how mode switching would be completed.

The user goes through the PEFR data collection flow by interacting with the two buttons on the sides of the inhaler to start, advance and redo trials. The lights on the top of the electronic component gives the user feedback during both modes of usage, displaying a coloured gauge or indicating the PEFR trial number. All of this functionality was designed from scratch with the help of AI tools used for debugging. This data is then stored in an SD card until the data can be sent through Bluetooth to the mobile app and cloud.

A physical casing was designed. It consisted of the main body to store the electrical components and rails to allow the electronics to be removed. A snap-fit lid was created for the body for a secure closure while still allowing access to the SD card inside. Tolerances between the rails and body were set to 0.075 mm to facilitate easy movement. Tolerances between the lid and body were set to 0.01 mm to allow for secure closure of the body. The cantilever design was made to accommodate the size of the electronic components and allow the silicon cap to be placed. This was 3D printed using Polylactic Acid (PLA).

### SMART SPACER APP
The smart spacer app processes data from the physical device. It displays and transmits information between the mobile app and web clinician interface. The app receives data from sensors on the electronic component and user inputs such as survey results before sending the data to a remote cloud database. The mobile app provides readable sensor data in the graphs tab by providing users with PEFR charts and a weekly calendar which indicates the quality of the spacer technique for the given day. Additionally, journaling surveys were also implemented to record qualitative metrics of patient wellness for any given day. The data collected from these two sources were taken and stored in the cloud database, which is a part of the larger serverless infrastructure. Storing this data in the cloud database makes data persistent, giving the app the ability to show past results for journaling and graphs. The user has the ability to see trendlines over a longer period of time when enough data is collected. 

UI components from these pages are built from dependencies (open-source software) which include components such as graphs and progress bars. Since dependencies are a large part of software development the components were easy to integrate into the project and no modifications to the actual source code were needed to include them.

In terms of security, the app has a login page. The login page provides integrated authentication and authorization which restricts access to user data. Authentication is managed by Google Firebase while authorization is managed through AWS via token validation.

### INTEGRATION BETWEEN SMART SPACER APP AND THE DEVICE
Data is sent to the app via Bluetooth if a connection is established. This was done directly through the Adafruit Feather Bluefruit M0, which has a built-in Bluetooth module. Communication was completed using the UART protocol. On the mobile app, Bluetooth connections were supported by the react-native-ble-plx library which connected the app via UART to the Tx buffer of the Bluefruit. Due to the limited size of the buffer, JSON data was sent as a string in equally sized chunks which was pieced together on the app side and reformatted with regex.

## SUMMARY OF DESIGN EVALUATION AND VALIDATION
### SMART SPACER DEVICE
The sensor was calibrated against an iWorx lab spirometer, which measures volume (litres) with a differential pressure sensor and derives flow rate (litres/minute) through its software. To ensure consistent sampling at the maximum reliable data rate, we implemented precise timing logic using hardware timers and interrupts. This synchronized sensor readings with a dedicated matching timer while cross-validating timing accuracy against an independent free-running onboard timer. Clock diagrams were used to verify tight timing margins and eliminate jitter in the acquisition system. Data was collected by aligning the spirometer to the end of the spacer so that both sensors read a similar input. To align iWorx and our sensor datasets, cross-correlation was performed with appropriate resampling to ensure consistent sampling. Linear regression was selected for its computational efficiency and speed, important for microcontrollers with limited resources. The model achieved an R² of 0.95, with residuals bounded within ±0.05 L/s or ±3 L/min (95% confidence) across the tested range. Residual plots confirmed linearity, supporting the validity of the chosen model. See Appendix B for a visual of the linear regression. 

Testing of the electronic component was completed primarily with an iterative, agile approach. After each component of our design was implemented using Arduino and/or hardware, the team conducted preliminary validation tasks to ensure the device continued to meet all requirements as more components were added. For example, while implementing the LED lights to indicate when users have pressed the "redo" button, the team prototyped 4 different signals to indicate when the "redo" button was pressed (flashing yellow, flashing blue, solid red, solid yellow). User testing was then conducted to rank them in terms of preference. The flashing yellow signal ranked the highest overall, which from a heuristics standpoint makes sense considering it has the highest salience of all the signals and a generally neutral mental mapping.

Final user testing of the electronic component was conducted jointly with the software component via the system usability scale (SUS). The team had users put themselves in the mindset of a young child around the ages of 5-7. After demonstrating basic usage of the electronic component and the app, the team had the user implement key user flows such as taking medication. The team also walked the user through the basic usage of the child app before having them fill in the SUS questionnaire to evaluate the design’s usability. 
The average SUS score for the child-facing system across all 6 participants was 69, which does meet the minimum threshold of acceptability at >68, suggesting performance is just greater than the 50th percentile of products developed [21].

Additionally, the team also had participants come back 3 days later to test how well they remembered key user flows. A key discovery in this test was that participants often forgot to hold the "start/next" button to begin, which likely contributed to the lowered SUS score.

### SMART SPACER APP
To evaluate the design solution against the specifications and requirements for the software components. The team made use of various correctness, performance and usability tests to perform comparisons and ensure the project aligns with the goals that were established. Correctness testing was conducted with an agile approach using various different tools and techniques such as regression testing, code reviews and Postman. By consistently running through different user scenarios and conducting code reviews, the team was able to catch functional bugs early which maintained code quality. Additionally, using Postman provided a way to test backend functionality as it verified that data retrieval and manipulation from the remote server was returning the correct output. This also doubled as a way to test endpoint security as requests without a valid bearer token were rejected. 

For performance, the team used benchmarking tools and logs to determine whether the mobile app met acceptable performance expectations. By measuring the time it takes to execute code and how long it takes to make requests to the cloud, the team was able to establish benchmarks to compare against. Other tools provided by Android Studio, such as waterfall charts, helped identify. On the cloud server, alerts for metrics such as CPU utilization and memory storage gave the team an idea of whether there were performance issues related to the cloud infrastructure.

Five respiratory therapists validated the clinician interface through structured walkthroughs of key workflows: treatment plan adjustments, data visualization interpretation, and patient journal record review. Early testing identified critical issues. For example, PEFR values alone were clinically meaningless without context. Clinicians also encountered navigation confusion. This was addressed by implementing nomograph visualizations for instant clinical interpretation of lung function and aligning interface terminology with electronic health record conventions via clinician consultation. 

The parent interface underwent formal usability testing using the SUS. Participants were instructed to adopt the mindset of caregivers for children with asthma. Following a demonstration of core app functionality, users completed common tasks including symptom journaling and data interpretation from respiratory graphs. Subsequently, participants completed the standardized SUS questionnaire to assess perceived usability. The interface achieved an average SUS score of 89 (n=15), significantly exceeding the acceptability threshold of 68 and placing in the 95th percentile for usability [21]. This strong performance indicates the design successfully balances functionality with intuitive operation for its target demographic.

## DESIGN SAFETY AND REGULATIONS
As stated in previous reports, the closest predicate devices under the FDA are "Holding Chambers, Direct Patient Interface" and "Meter, Peak Flow, Spirometry" [22, 23]. Based on the provided guidance document, the main areas of risk concern for the device are environmental, software, and aerosol particle size and toxicology. 

Environmental risks mostly concern radio and electrical interference and reference standards such as IEC 601-1 (Medical electrical equipment) and CISPR 11 (Limits and Methods of Measurement of Radio-Interface Characteristics of Industrial, scientific, and Medical (ISM) Equipment) [24]. Although the development board used does not meet these standards, it is compliant with adjacent standards, such as FCC Part 15 and ICES-003 [25-27]. Battery risks are mitigated through circuitry on the Adafruit and holes for heat ventilation were incorporated in the case. IEC 529 (Device enclosure protection) was originally considered and was a requirement to meet the IPx7 rating. Due to a lack of physical testing and evaluation, these risks are still present.

As stated previously, the software should comply with 21 CFR 820.30 (Quality System Regulations), PHIPA (Privacy and Security), and IEC 62304 (Software Life Cycle) [22, 23]. The development process was well managed by implementing an agile framework, and quality assurance was upheld through regression testing. PHIPA was not fully implemented, but security measures were incorporated, such as authentication and authorization to protect user data and VPCs to keep AWS resources private in the cloud. AWS also released a list of actionable items to meet privacy standards [28]. In addition to software development, UI standards such as CSA B651 and WCAG 2.1 were met [13, 29]. Examples of these are meeting the correct button size and color contrast for the UI.

Some risks may still be present based on the aerosol particle size and distribution, as testing has not been done to meet these requirements. A fluid simulation of the spacer could help with controlling this standard, but was not completed due to time constraints. Risks involving leaching toxic particles or medication dosage are minimal, as these aspects were not modified when developing the device.

## LIMITATIONS OF DESIGNED SOLUTION
One major limitation of the design of the electronic component is the limited NFC sensing range. The NFC sensor did not work in the range specified on the datasheet which does not meet design specifications. It required the tag to be within ~1 cm instead of the 5cm reported on the datasheet. This limits the team's ability to automatically detect the inhaler and meet requirements of usability (D-R7). For the proof-of-concept prototype, the team left the NFC sensor as is. Instead of inserting the inhaler, the team asked the user to tap the inhaler against the device, which increased the number of steps the user needed to take (D-R8).

Another key limitation of the design is the size of the electronic component. From interviews with stakeholders, the team learned that one of the reasons young children often do not like to use their spacer is due to its size and bulkiness. Our current design is bulkier than a usual spacer, so it can be expected that this may decrease the design's ability to address the problem space. The size of the electronic component also interferes with the user's ability to see the LED lights while using the device. This is not ideal as it limits the ability of the device to provide live feedback. The design also does not meet any of the durability requirements as it is 3D printed using PLA. Battery life validation was also not conducted due to time constraints. 

From the mobile app perspective, the designed solution only works for Android, which is a limitation on how accessible the device is to a variety of potential users. The designed solution does not have any way to allow users to use the app offline, which may limit where and when data can be recorded from the Smart Spacer. This may also make asthma journaling more difficult depending on the individual's circumstance. As for technical limitations, the Tx buffer for Bluetooth is a limitation, as it restricts the size of the data being sent over. An increase in the size of data will increase the amount of time it takes for the mobile app to receive all of the data. Another limitation that we encountered after creating the designed solution relates to infrastructure scalability. Since infrastructure and configurations were developed without a documentation tool like Terraform, it will be difficult to scale up the project and keep track of the changes.

One long-term design impact that should be addressed, but was out of scope for our project was the project cost. Several of the components that were purchased for the device had high associated costs, specifically the high-accuracy differential pressure sensor, as well as the Adafruit. It is expected the overall cost of the device would decrease if it were to be mass-produced and components were to be bought in bulk, however, the cost to produce the design as implemented is very high. Asthma disproportionately affects individuals of lower socio-economic status, and as such the high cost of the product may result in it being inaccessible to the populations that need it the most [19].

## CONCLUSIONS AND RECOMMENDATION
The goal of the project this term was to create a proof-of-concept, medium-fidelity prototype suitable for early testing purposes. The team was not able to implement all functionality, and some components did not work as intended (for example, the NFC sensor and the lack of implementation for setup stages). However, with the current prototype, the team was able to conduct early forms of testing on the main user flows to inform further design choices and prove the viability of the solution moving forward. As the device is a medium-fidelity prototype, some key requirements were not able to be met or tested, specifically concerning durability and load testing. 

One of the next steps the team could do to address the limitations is to start creating components from scratch rather than using off-the-shelf components. This would improve functionality, such as the NFC sensor and the microcontroller board. The antenna used in NFC sensors could be custom-designed to better sense NFC tags in expected location, eliminating the sensor range issue. The Adafruit Feather used could be replaced with a simple microcontroller and associated circuitry. Implementing these changes would allow removal of unnecessary components and greatly decrease the size of the electronic component, as well as cost. With a smaller form factor, the physical case could be evaluated with FEA and durability testing. This would provide a complete prototype to provide a more comprehensive evaluation of usability.

Further validation of the flow sensor calibration should also be conducted. We recommend performing cross-validation to assess generalizability, normality checks via Q-Q plots, and F-tests to verify model significance.

For the mobile app, the team can modify our code to work for iOS to address the accessibility limitations. The team can also work on implementing secure client-side mobile data so that users can have access to certain features offline. This increases accessibility overall as it gives users the convenience of being able to use the app when they want to. Tailoring the app for a variety of mobile operating systems like iOS will also allow more users to download our app. As for the limitation caused by the Bluetooth Tx buffer, there are other solutions which could improve the speed of data transmission. Our solution uses BLE 4.0, which is slower than other BLE versions. Using different BLE devices for a high-fidelity prototype will improve the quality, speed and throughput of our transmission [30]. Making use of documentation tools like Terraform to improve our scalability and documentation will make future changes easier to implement. This will also help improve security, as it keeps track of any changes to the infrastructure and what permissions are assigned. 

In conclusion, the prototype, although incomplete, has the potential to address the complexities associated with the problem space given development on the proof-of-concept prototype continues.

## ACKNOWLEDGMENTS
We would like to express our gratitude to our capstone advisor, Professor Jenny Howcroft, for her invaluable support and insightful critiques, which have greatly influenced our progress this term. We are also deeply thankful to Professor Bryan Tripp, Calvin Young, and Brian Li for their constructive feedback and guidance.

Our appreciation extends to our community and cohort members for their camaraderie, encouragement, and thought-provoking discussions. Special thanks to our stakeholder respiratory clinicians and community participants for their valuable contributions through user surveys and feedback.


## REFERENCES
[1] “Managing an acute asthma exacerbation in children,” Canadian pediatric Society, Nov. 05, 2021. [Online] Available: https://cps.ca/en/documents/position/managing-an-acute-asthma-exacerbation (Accessed Nov. 4, 2023) 

[2] “Report from the Chronic Disease Surveillance System: Asthma and Chronic Obstructive Pulmonary Disease (COPD) in Canada," Public Health Agency of Canada, 2018. [Online] Available: www.canada.ca/content/dam/phac-aspc/documents/services/publications/diseases-conditions/asthma-chronic-obstructive-pulmonary-disease-canada-2018/pub-eng.pdf (Accessed Nov. 4, 2023) 

[3] "Asthma Facts and Statistics," Asthma Canada. [Online] Available: https://asthma.ca/wp-content/uploads/2019/02/Asthma-101.pdf (Accessed Nov. 4, 2023) 

[4] "Asthma, by age group: 2018-2019," Statistics Canada, [Online] Available: www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1310009608 (Accessed Nov. 4, 2023) 

[5] National Heart, Lung, and Blood Institute, "Expert Panel Report 3: Guidelines for the Diagnosis and Management of Asthma," U.S. Department of Health and Human Services, 2007. [Online]. Available: https://www.nhlbi.nih.gov/files/docs/guidelines/asthma_qrg.pdf (Accessed Nov. 4, 2023)

[6] “Asthma - Asthma Attack,” National Heart Blood and Lung Institute. [Online] Available: https://www.nhlbi.nih.gov/health/asthma/attacks (Accessed Nov. 3, 2023)

[7] Zhao, L., et al., "The Role of Remote Monitoring in the Management of Asthma: A Systematic Review," J. Asthma, vol. 55, no. 8, pp. 933-948, 2018. [Online]. Available: https://pmc.ncbi.nlm.nih.gov/articles/PMC5950727/. (Accessed Nov. 4, 2023)

[8] Adherium, "Hailie™ Sensors," Adherium, [Online]. Available: https://www.adherium.com/our-technology/#hailie-sensors.(Accessed Nov. 3, 2023) 

[9] "MyAsthma," mymhealth, [Online]. Available: https://mymhealth.com/myasthma. (Accessed Nov. 3, 2023)

[10] "AsthmaMD," AsthmaMD, [Online]. Available: https://www.asthmamd.org/. (Accessed Nov. 3, 2023)

[11]W. Vincken, M. L. Levy, J. Scullion, O. S. Usmani, P. N. R. Dekhuijzen, and C. J. Corrigan, “Spacer Devices for Inhaled Therapy: Why Use Them, and How?,” ERJ Open Research, vol. 4, no. 2, 2018. [Online] Available: https://doi.org/10.1183/23120541.00065-2018. Available: https://openres.ersjournals.com/content/4/2/00065-2018. (Accessed Nov.3, 2023) 

[12] StatCounter, "Mobile Screen Resolution Stats - Canada," StatCounter Global Stats, Nov. 2024. [Online]. Available: https://gs.statcounter.com/screen-resolution-stats/mobile/canada/#monthly-200903-202411-bar(Accessed Nov.28, 2023)

[13] W3C, "Web Content Accessibility Guidelines (WCAG) Overview," World Wide Web Consortium, [Online]. Available: https://www.w3.org/WAI/standards-guidelines/wcag/#intro. (Accessed Nov.28, 2023)

[14] Zignuts, "Mastering Mobile App Typography: Best Practices & Pro Tips," Zignuts Design, [Online]. Available: https://www.zignuts.com/blog/mastering-mobile-app-typography-best-practices-pro-tips#:~:text=Adhering%20to%20accessibility%20standards%2C%20WCAG,in%20your%20mobile%20app%20design. (Accessed Nov.28, 2023)

[15] W3C, "Understanding Minimum Target Size," World Wide Web Consortium, [Online]. Available: https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum#dfn-pointer-input. (Accessed Nov.28, 2023)

[16] Samsung, "How Much Memory Do You Need?," Samsung, [Online]. Available: https://www.samsung.com/uk/mobile-phone-buying-guide/how-much-memory/#:~:text=Typically%2C%20individual%20apps%20can%20use,require%2050GB%20of%20phone%20storage. (Accessed Nov.28, 2023)

[17] Android, "Google Play Requirements for Target SDK," Android Developers, [Online]. Available: https://developer.android.com/google/play/requirements/target-sdk. (Accessed Nov.28, 2023)

[18] U.S. Department of Health and Human Services, "Billing for remote patient monitoring," Telehealth.HHS.gov. [Online]. Available: https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring/billing-remote-patient (Accessed: Dec. 2, 2024)

[19] M. Armato et al., "The lung image database consortium (LIDC) and image database resource initiative (IDRI): A completed reference database of lung nodules on CT scans," Academic Radiology, vol. 18, no. 10, pp. 1453–1461, Oct. 2011. [Online]. Available: https://pmc.ncbi.nlm.nih.gov/articles/PMC3868058/. (Accessed: Dec 2, 2024)

[20] Professional Engineers Ontario, "Code of Ethics," [Online]. Available: https://www.peo.on.ca/licence-holders/code-ethics (Accessed: Dec. 2, 2024)

[21] J. Lewis and J. Sauro, "Item Benchmarks for the System Usability Scale", The Journal of User Experience, vol 13, no. 3, pp 158-167, 2018 . [Online]. Available: https://uxpajournal.org/item-benchmarks-system-usability-scale-sus/ (Accessed: Apr. 4, 2025)

[22] U.S. Food and Drug Administration (FDA), "510(k) Premarket Notification for K181649," FDA, [Online]. Available: https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfPMN/pmn.cfm?ID=K181649. (Accessed: Dec. 2, 2024)

[23] U.S. Food and Drug Administration (FDA), "FDA Product Classification for Medical Devices," FDA, [Online]. Available: https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfPCD/classification.cfm?id=69. (Accessed: Dec. 2, 2024)

[24] U.S. Food and Drug Administration (FDA), "Reviewer Guidance for Nebulizers, Metered Dose Inhalers, Spacers and Actuators," FDA, October 1993, [Online]. Availble: https://www.fda.gov/regulatory-information/search-fda-guidance-documents/reviewer-guidance-nebulizers-metered-dose-inhalers-spacers-and-actuators. (Accessed: Apr. 4, 2025)

[25] "MDBT Datasheet," Adafruit, [Online]. Available: https://cdn-shop.adafruit.com/product-files/2267/MDBT40-P256R.pdf. (Accessed: Apr. 4, 2025)

[26] Federal Communications Commission, "47 CFR Part 15: Radio Frequency Devices," FCC, [Online]. Available: https://www.ecfr.gov/current/title-47/chapter-I/subchapter-A/part-15/subpart-B. (Accessed: Apr. 4, 2025)

[27] "ICES-003 - Information Technology Equipment (including Digital Apparatus)," Innovation, Science and Economic Development Canada, [Online]. Available: https://ised-isde.canada.ca/site/spectrum-management-telecommunications/en/devices-and-equipment/interference-causing-equipment-standards-ices/ices-003-information-technology-equipment-including-digital-apparatus. (Accessed: Apr. 4, 2025)

[28] "Canada Privacy Data," Amazon Web Services (AWS), [Online]. Available: https://aws.amazon.com/compliance/canada-data-privacy/. (Accessed: Apr. 4, 2025)

[29] "CSA B651, Accessible design for the build environment," Canadian Standard Association, [Online]. Available: https://www.csagroup.org/wp-content/uploads/B651-18EN.pdf. (Accessed: Apr. 4, 2025)

[30] J. Wong, “Maximum BLE Throughput with IOS,” JimmyIoT, May 28, 2021. Available: https://jimmywongiot.com/2021/05/28/video-clips-of-ble-high-throughput-demo-on-nrf52-series/. (Accessed: Apr. 05, 2025])

# APPENDIX

## Appendix A: Design for the electronic components in the two main modes of usage
![image](https://github.com/user-attachments/assets/c3762d08-4df9-47f7-a73c-4c91facb8e87)

Figure A.1: a) Medication mode, b) PEFR Mode

## Appendix B: Linear of regression of sensor data with R2
![image](https://github.com/user-attachments/assets/51dc593d-0f1f-4a50-8789-57752c4b6530)

Figure B.1: Data collected by a spirometer against data collected by the team's sensor

![image](https://github.com/user-attachments/assets/fb714153-4754-434f-986f-ff8e0965465b)

Figure B.2: Residuals plot for the linear regression and data points at the low range of 0-1 litres per second (0 - 60 L/min)

