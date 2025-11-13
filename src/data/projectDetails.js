export const projectDetails = {
  exosense: {
    overview:
      "ExoSense is an ongoing research project at Yale’s Faboratory that develops a multi-sensor wearable motion‑tracking system for an upper‑body soft exosuit. It provides the sensing backbone that lets the exosuit perceive human motion in real time and respond with adaptive assistive actuation. The current firmware, FaboIMUrig (Baseline v0.4), implements a scalable, node‑based architecture for multi‑IMU calibration—combining quaternion math, reference‑pose alignment, and synchronized streaming to capture complex limb movements with high precision.",
    challenge:
      "Accurate, drift‑resistant orientation tracking across multiple sensors on a flexible, soft‑fabric system is difficult. Each IMU can shift or twist as the user moves; coordinating multiple I²C devices (IMUs, capacitive sensors, and a multiplexer) requires careful hardware/firmware design to maintain timing precision and bandwidth.",
    solution:
      "The system uses a distributed calibration + fusion pipeline that treats each IMU as an independent node with bias correction, zero‑pose averaging, and heading alignment. A TCA9548A multiplexer manages channel routing to multiple BNO085 IMUs, while a custom quaternion library (Quat.h/.cpp) handles rotation math, normalization, and yaw extraction. An Adafruit Feather nRF52840 Sense aggregates orientation data plus capacitive touch inputs (dual MPR121 boards) for muscle‑contact feedback. The firmware streams synchronized orientation + touch at 50 Hz for visualization and ML pipelines.",
    method:
      "Firmware in C++ (Arduino framework) using modular classes (e.g., BnoNode) for scalability and maintainability. Each node owns its I²C channel, calibration, and quaternion computation before synchronized logging. Current features include gyro‑bias calibration, reference‑pose capture, heading alignment (GameRV), and CSV streaming for dataset collection. The design supports clean scaling (now 4 IMU nodes + 2 MPR121 boards) and cross‑node synchronization for reliable temporal coherence.",
    results:
      "v0.4 demonstrates stable multi‑sensor streaming at 50 Hz with consistent quaternion integrity and minimal drift under motion. Preliminary motion‑capture tests show strong agreement across nodes for common gestures (arm flexion, shoulder rotation). The architecture supports larger node arrays and will serve as the base for multimodal sensing + control in upcoming soft‑exosuit prototypes.",
    ongoing:
      "Next: guided mount‑alignment calibration, low‑pass filtering, real‑time 3D visualization, and building a motion dataset for perception models. Later: sensor‑fusion refinement and AI‑driven pose estimation to enable closed‑loop adaptive assistance."
  },
  "agentic-gridworld": {
    overview:
      "Game Agents is my personal sandbox for learning agentic development from first principles. Instead of relying on pre-built frameworks, I am building everything from scratch — the worlds, the tools, the agent loops, the planners, and later the MCP server that will make the agent portable across environments. The long-term goal is to master agentic thinking and agentic engineering across any domain: games, embedded systems, robotics, productivity, business automation, and beyond. This project uses games as a fun and visual way to explore agent capabilities, decision-making, perception, and tool usage.",
    challenge:
      "How can I teach myself agentic development effectively—and make the process genuinely enjoyable? I needed a hands‑on way to practice perception, planning, tools, and control loops without the overhead of large frameworks.",
    solution:
      "Start by building agents for simple, custom game environments, then scale the same architecture to richer worlds (e.g., Minecraft or Terraria). Everything is engineered from scratch so the concepts transfer cleanly as complexity grows.",
    method:
      "Built a fully custom GridWorld (10×10) and tool interface from scratch to study agentic systems. The agent interacts only via tools (observe, move, pickup, craft), enabling a clean agent loop of observe → plan → act → observe. The environment supports borders, items, inventory, crafting (torch = coal + stick), and goals — forming a realistic, minimal lab for agent behavior. Implementation details: Python world + agent; tools (observe/move/pickup/craft); planner evolved from scripted (M2) to perception‑driven (M3B). Data structures include tuples, dicts, lists, and JSON‑like messages for clean tool calls and observations.",
    results:
      "Autonomous, perception‑driven completion of a multi‑step goal: collect coal, collect stick, craft torch. The architecture now cleanly supports agent loops, tools, and goals — providing the full scaffolding to swap in an LLM planner next.",
    ongoing:
      "Build my own MCP server for this project to expose tools and make the agent portable across environments. Repository: https://github.com/Alienware2000/game-agents"
  }
};


