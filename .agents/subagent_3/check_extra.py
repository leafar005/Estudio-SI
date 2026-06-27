import re

with open("/home/rafaelcasado/informatica/2 curso/2 cuatri/SI/2026/Preguntas Extra SI.md", "r", encoding="utf-8") as f:
    content = f.read()

lines = content.splitlines()
headings = [line for line in lines if line.startswith("#")]
print(f"Total lines: {len(lines)}")
print("Headings:")
for h in headings[:30]:
    print(h)
