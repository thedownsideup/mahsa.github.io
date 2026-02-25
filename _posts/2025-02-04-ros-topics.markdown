---
layout: post
title: "Swordmonkey Studios (Contract)"
author: "Mahsa"
catalog: true
header-img: "img/dataflow.png"
header-mask: 0.4
tags:
  - Gameplay programming
  - System architecture
  - Feature Implementation
  - Clean Code
  - Collaboration Workflows
  - Online
  - Social
---

# Swordmonkey Studios (Contract)

## Gameplay Programmer / Software Engineer
(Jan 2026 – Present) <br>
Worked as a gameplay programmer on a live game project, building and refining reusable gameplay systems with a strong focus on clean architecture,
maintainability, and feature scalability. Collaborated remotely with the team to implement features from technical/design requirements,
support planning and task breakdowns, and communicate technical tradeoffs clearly.

---

### Responsibilities
- Built and refined reusable gameplay components and systems 
- Implemented new gameplay features from design/technical requirements 
- Contributed to technical planning and implementation workflows 
- Worked in a remote team environment with clear progress and issue communication

---
<!--

## The Problem: Topics Are Not Commands (Stop Spamming!)
A topic in ROS (whether in ROS 1 or ROS 2) is best suited for *continuous streams* of data. Think sensor readings, real-time telemetry, or anything that’s being published at a high frequency with no need for acknowledgment.

However, some teams (maybe yours!) decide to use topics for sending commands, like telling a robot to move from A to B. And how do they make sure the message is received? By **spamming the topic** over and over again. Because, hey, if one message is good, then a hundred must be better, right?


## The Alternative: Use Actions (Like a Sane Person)
If you’re sending a command that requires execution over time (like moving to a goal), **actions** exist *specifically* for this purpose. 

### Why Actions Are Better:
- **Feedback:** Actions provide real-time updates on progress.
- **Preemptibility:** You can cancel or modify a command mid-execution.
- **Guaranteed delivery:** The request-response mechanism ensures that your command isn’t lost in the void.
- **State management:** The action server keeps track of what’s happening, so your robot doesn’t enter an existential crisis.

How hard is it to switch? Not very. ROS 2 has a built-in `rclcpp_action` API (and `actionlib` for ROS 1). Instead of spamming messages into the abyss, you can send a well-structured goal request and get proper feedback.

---

## But Why Do Teams Keep Doing This?
Despite all the arguments against using topics for commands, teams still do it. Why?

### 1. "We’ve always done it this way."
Yes, and people also used to think the Earth was flat. Traditions are great for holidays, not software design.

### 2. "It's easier to implement."
Easier in the *same* way duct-taping a car door shut is easier than fixing the lock. Sure, it works—until it doesn’t.

### 3. "Actions are too complicated."
They really aren’t. If you can write a topic publisher, you can write an action client. It's just one step further in structure.

### 4. "We don't want to refactor."
I get it. Refactoring is scary. But so is debugging an architecture held together with `ros::Rate loop.sleep()`. Future you will thank you for fixing this *now*.

---

## The Path to Redemption
If your team is currently stuck in topic-spamming purgatory, here’s how to get out:
1. **Educate the team** – Explain why actions exist and how they solve actual problems.
2. **Start small** – Refactor just one part of the system (e.g., move-to-goal commands) to use actions.
3. **Ban unnecessary topic spam** – If a topic is being published at 10 Hz just to send commands, stop it.
4. **Use services where appropriate** – If you just need a simple request-response mechanism, a ROS service may be the right tool.

---

## Conclusion
Using topics for commands is a bit like texting “Are you there?” 100 times instead of just waiting for a response. It's inefficient, unreliable, and makes your system look like it was built by a caffeinated squirrel.

If your team is guilty of this, don’t worry—you can fix it. And when you do, your robot (and your sanity) will thank you.

Go forth and use actions. Or at the very least, stop the spam.

Happy coding!
-->