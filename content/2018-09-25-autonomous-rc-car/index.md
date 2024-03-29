---
title: "Autonomous RC Car"
path: blog/autonomous-rc-car
tags: [hardware]
cover: ./rc_car.jpg
date: 2018-09-25
excerpt: Build autonomous-driving capabilities on a 1:10 RC car
---

This project is aimed at building and maintaining a 1:10 RC-car based mobile platform that can be used for study and experimentation on new ideas about autonomous driving. Though it's fun and may appear more exciting to show complete autonomous navigation capabilities, I would not take it as the top priority and the platform is ecptected to undergo frequent changes to meet the needs of trying out a specific hardware or software piece.

*(Last updated on: 12/19/2020)*

#### Table of contents

- [Table of contents](#table-of-contents)
- [Hardware Components](#hardware-components)
  - [Chassis and Basic Electronics](#chassis-and-basic-electronics)
  - [Power System](#power-system)
  - [Mounting Parts](#mounting-parts)
  - [Control System](#control-system)
  - [Onboard Sensors](#onboard-sensors)
- [Assembly Notes](#assembly-notes)
  - [Tamiya TA07 Pro Chassis](#tamiya-ta07-pro-chassis)
- [Software Architecture](#software-architecture)

#### Hardware Components

Since the RC car is built for the purpose of study and research, it is convenient to leave some flexibility for possible extensions when choosing components. I also try to reuse parts I bought for my quadrotors, due to my limited budget. The goal is to set up the platform as fast as possible so that I could start developing software early. I try my best to make a good balance between cost and performance. 

##### Chassis and Basic Electronics

Main parts for the car (some links may expire after initial post of this section):

- Chassis: [Tamiya TA07 Pro](https://www.tamiya.com/english/products/58636/index.htm)
- Chassis enhancement: [Jazrider Aluminum Front C-Hub Carriers](http://www.ebay.com/itm/Jazrider-Aluminum-Front-C-Hub-Carriers-Blue-Set-For-Tamiya-TA07-Pro-TB04-84382-/112436707457?hash=item1a2dc00081:g:ly0AAOSw9~5ZOm7w)
- Steering servo: [HobbyStar DSHV-300T Digital, Mega-Torque Titanium Gear, High-Voltage Servo](https://www.rcjuice.com/hobbystar-dshv-300t-digital-mega-torque-titanium-gear-high-voltage-servo-waterproof.html)
- Driving motor: [HobbyStar 1/10 Race Combo: 120A Turbo ESC + 540 Sensored Motor 10.5T](https://www.rcjuice.com/motor-esc/motor-esc-combos/1-10-short-course-combos/hobbystar-1-10-race-combo-120a-turbo-esc-540-sensored-motor-lcd-program-card.html)
- RC trasmitter: [FrSky Taranis X9D Plus 2.4GHz ACCST Radio (Mode 2)](https://www.getfpv.com/frsky-taranis-x9d-plus-2-4ghz-accst-radio-mode-2.html?gclid=Cj0KCQjwx8fOBRD7ARIsAPVq-Nk5OHcIxFCXHjBQpzXuEv4WKaOzvbYtZkZCUayACJXc01fZ0Qzym1YaAvnWEALw_wcB)
- Receiver: [FrSky XSR 2.4GHz 16CH ACCST Receiver S-Bus CPPM Output](https://www.amazon.com/gp/product/B01HZB6XTI/ref=oh_aui_detailpage_o06_s00?ie=UTF8&psc=1)

*Note*: 

1. You can optionally upgrade some parts of the chassis. Especially the upgrade of aluminum front C-Hub carriers is highly recommended.
2. Some servos may expect control signals other than PWM.
3. I use FrSky Taranis radio because I own one for my quadrotors. It is used for manual control of the car and emergency brake during autonomous driving. You need at least 2 channels to control a car(steering and throttle). But more than 2 may be used in the firmware for arm/disarm, mode switch etc.


##### Power System

- Lipo battery: [Gens ace 7.4V 5000mAh 2S 50C LiPo Battery Pack HardCase with Deans T Plug](https://www.amazon.com/gp/product/B00WQCTQL4/ref=oh_aui_detailpage_o02_s00?ie=UTF8&psc=1)
- Connector adapter: [XT60 Female to Deans T Plug Male Connector Adapter](https://www.amazon.com/gp/product/B012ISRY1E/ref=oh_aui_detailpage_o02_s00?ie=UTF8&psc=1)
- Power distribution: [Matek V3.1 PDB Power Distribution Board Mini Power Hub with BEC 5V & 12V for Multicopter Quadcopter](https://www.amazon.com/gp/product/B071CFKFY1/ref=oh_aui_detailpage_o08_s00?ie=UTF8&psc=1)
- Voltage regulator: [ZTW UBEC 10A Peak continuous 6A 6.0V 5.5V.5.0V adjustable](https://www.amazon.com/gp/product/B071CHGWRM/ref=oh_aui_detailpage_o03_s00?ie=UTF8&psc=1)

*Note*: 

1. Most FPV quadrotors use 3S, 4S LiPo batteries but for RC cars 2S batteries (with a lot more mAh) are more common.
2. RC Car batteries mostly come with Deans T plug, while it's more common to see XT60 connectors on LiPo batteries for multicopters. I add an XT60 adapter on the car because I want to keep the compatibility across all my toys, batteries and the charger for easy maintenance. 
3. A power distribution board (PDB) is used because I need to distribute power from the battery to ESC (which powers motor and servo), microcontroller, single board computer and sensors.
4. This PDB could support 20A continous current and 30A peak current from each channel. To avoid overheating and board damage, you should use the output pads closest to the input pads for the ESC connection and make solid/complete contact points when soldering.
5. The PDB could be a bottle neck for the power system, but I didn't know any better choices designed specifically for RC cars. A custom-designed PDB could be considered in the future. But this off-the-shelf choice works without any problem so far.    
6. The embedded 5V BEC on the PDB is used to power the MCU. A 5V UBEC supporting 6A continuous current is used to power raspberry pi or UP board. An extra 4S battery and 12V BEC may be added if a more powerful single-board computer is used in the future.
7. The 12V BEC on the PDB should not be used because it would require a 4s battery as input. It will not work properly with a 2S battery (7.4V).
8. If using multiple battery design (2S + 4S), it might be a good idea to power the MCU and servo/motor from the same power source. By doing so you could still maintain manual control if the battery for SBC and sensors dies first.

##### Mounting Parts

- [M3 Brass Spacer Set Male-Female Spacers Hex Stand-Off Pillars DIY Set](https://www.amazon.com/gp/product/B06XWCMPRD/ref=oh_aui_detailpage_o07_s00?ie=UTF8&psc=1)
- [M2.5 Brass Spacers Hex Brass Standoffs Stainless Steel Screws Nuts Assorted Kit](https://www.amazon.com/gp/product/B06XDLB3KC/ref=oh_aui_detailpage_o00_s00?ie=UTF8&psc=1)
- Acrylic Sheet for mounting plate, from Homedepot or Lowe's

##### Control System

**Low-level controller**

- [Pixracer flight controller](https://store.mrobotics.io/mRo-PixRacer-R14-Official-p/auav-pxrcr-r14-mr.htm)

**High-level controller**

The following single-board computers have been tried in the past a few years:

- Udoo Neo Full
- Raspberry Pi 3
- UP Board

*Note*: 

1. Pixracer is a flight controller board for multicopters. I choose it because it is compact while having a rich set  of sensors (2 sets of IMU) and hardware interfaces.
2. Available interfaces on pixracer: serial, I2C, SPI, CAN, 6 channels of PWM output (2 of which can be used for servo/motor control and the rest can be used for input pulse capture).
3. Raspberry Pi 3 and UP board are used for experiments now. The final choice of single board computer is to be determined. 

##### Onboard Sensors

- Intel Realsense D435
- TBD

#### Assembly Notes

##### Tamiya TA07 Pro Chassis

It is quite straightforward to follow the assembly instructions of the chassis.

Additional information from the Internet:

- [Review: Tamiya TA07 Pro Touring Car](http://www.competitionx.com/news-feed/review-tamiya-ta07-pro-touring-car/)
- [Tamiya TA07 Pro Online Build](http://www.competitionx.com/rc-blog-builds/tamiya-ta07-pro-build/)
- [TA07 Pro Build and Design review](http://tobyrcadventure.blogspot.com/2016/10/ta07-pro-build-and-design-review.html)
- [Online Build: Tamiya TA07 Pro](http://www.rccaraction.com/online-build-tamiya-ta07-pro/)

*Note*: 

1. Don't forget to buy instant glue, which is required but not included in the package. Other than that you get everything you need to put this chassis together.
2. A PPM receiver was chosen for its small size. But it's convenient if you have a receiver that outputs PWM signal. You can test the servo and DC motor conveniently simply with your trasmitter, without an microcontroller or doing any coding.

![Chassis](./images/chassis.jpg)

**Motor and Servo Installation**

Just follow the instructions.

*Note*: 

1. Don't tighten servo related parts before you finish adjusting the neutral position of servo. You could adjust the control signal for a neutral position but you probably don't want to get off the mechanical neutral position too much during installation.

![Chassis Motor](./images/chassis_motor.jpg)

**Wheels and Tires**

*Note*: 

1. Make sure you don't skip using glue on the tires to attach them to the wheels. They're going to get off during the high-speed driving if you don't.

![Chassis Wheels](./images/wheels_on.jpg)

**Lower Mounting Plate**

A mounting plate is very useful for attaching all parts to the chassis nicely. The current design tries to keep the lower plate as close to the chassis as possible but leave enough clearance to moving parts.

*Note*: 

1. Currently the ESC and PDB are connected using a pair of XT60 connectors. In the future this connection point could be removed and the wires from the ESC could be soldered to the PDB directly.
2. The receiver is attached to the plate from the bottom but the antenna are left above.
3. The receiver wires and ESC/servo signal wires go below the plate and the connectors could reach the MCU through reserved holes on the plate.
4. Make sure the wires don't interfere with the belt/gears below the plate. If organized properly, they shouldn't move underneath the deck.
5. See the soldering joints I made in the following picture. The input wires from the battery are almost directly connected to the wires to the ESC. Remember to use a wider soldering tip. A very fine tip will not work.

![PDB](./images/pdb.jpg)

And what the car looks like after installing the mounting plate.

![Chassis With Deck](./images/with_deck.jpg)

**More Electronics**

In the following image, an Udoo Neo Full, a Pixracer and a racing version of Revolution flight controller are installed. Other boards include the voltage regulation modules and CAN bus tranceiver modules. The final combination will be decided later.

![Chassis With Udoo Neo](./images/udoo_neo.jpg)

#### Software Architecture

**Firmware**

A microcontroller is used to ensure the reliability of the low-level control. It's desirable that you could still control your RC car with the remote controller even in the extreme situations when the single-board computer running Linux shuts down or your high-level control algorithms go crazy. It's a lot easier to make a reliable microcontroller system with only low-level functionalities. 

I did some experiments to evaluate how I could reuse opensource flight control code so that I don't have to implement functions like motor control, PWM receiver decoding, IMU data collection etc. for a microcontroller by myself. At first I tried to port dRonin firmware stack to Pixracer, but I counldn't make it work as reliably as how a stock version would do on a quadrotor. (This process helped me to get a lot more familar with the openpilot flight stack though.) Then I tried to setup Pixracer with PX4 and it didn't take a lot of efforts to realize basic remote control. But I don't really like the complexity of PX4 and I feel it would be a pain for the maintenance when I want to do more and more customizations in the long run. Additionally I had to add an additional board for CAN bus and hall sensor output processing to avoid getting significantly involved in the PX4 firmware implementation details. The two-board setup works but I don't like it either. It requires me to put two MCU boards, which does not only increases hardware and firmware complexity but also decreases system reliability. The best choice seems to be using the Pixracer with custom firmware and only reuse code at module level, compared to adopting the whole system architecture.

The following hardware-related functions need to be implemented:

* PWM output * 2: one for servo, one for DC motor
* Input capture: 3-channel hall sensor output, could use the hall sensor interface of STM32
* PPM/SBUS decoding: remote control signal
* CAN bus/serial: communication with SBC
* (IMU data collection)

Additionally a control logic needs to be implemented to coordinate all tasks.
