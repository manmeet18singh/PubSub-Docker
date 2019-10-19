# PubSub Docker
 
Publish/Subscribe (pub/sub) is a popular indirect communication system. Pub/sub systems disseminates events to multiple recipients (called subscribers) through an intermediary. Examples of successful pub/sub include Twitter and “Bloomberg terminal” -like financial systems. We emulate a pub/sub system using the light weight virtualization or container technology in Docker technology. 

## Phase 1: 
Create a web interface where you can input (“TextBox”) a small program in any language of your choice, and a command (“button”) that will load the program in the Docker and execute it. The result of execution is display on the web output area.

## Phase 2: 
Implement a centralized version of the pub/sub application. You will need to implement the functions, event generator and subscription generator for fully testing the application. 

## Phase 3: 
Next step is to implement the distributed version of the pub/sub as described by rendezvous-based routing described in Figure 6.12 of Coulouris text.
