import os
import re
import glob

# Rutas
MD_DIR = "/home/rafaelcasado/informatica/2 curso/2 cuatri/SI/2026/examenes SI"
OUT_DIR = "/home/rafaelcasado/informatica/2 curso/2 cuatri/SI/Estudio-SI/guia"

# Plantilla HTML base
HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} — Estudio SI</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../shared/shared.css">
  <script>
    MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
        displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']]
      },
      svg: { fontCache: 'global' }
    };
  </script>
  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
  <style>
    :root {
      --bg-primary: #0a0e1a;
      --bg-secondary: #111827;
      --bg-card: #1a1f35;
      --text-primary: #f3f4f6;
      --text-secondary: #9ca3af;
      --text-tertiary: #64748b;
      --accent: #3b82f6;
      --accent-soft: rgba(59,130,246,0.15);
      --radius-md: 12px;
      --radius-lg: 16px;
      --border-subtle: rgba(255, 255, 255, 0.08);
      --correct: #10b981;
      --wrong: #ef4444;
    }
    body {
      margin: 0; padding: 0;
      font-family: 'Inter', sans-serif;
      background-color: var(--bg-primary);
      color: var(--text-primary);
    }
    .top-bar {
      position: sticky; top: 0;
      background: rgba(17, 24, 39, 0.8);
      backdrop-filter: blur(10px);
      padding: 15px 40px;
      display: flex; justify-content: space-between; align-items: center;
      z-index: 100;
      border-bottom: 1px solid var(--border-subtle);
    }
    .back-btn {
      display: inline-flex; align-items: center; gap: 8px;
      color: var(--text-secondary); text-decoration: none;
      font-weight: 500; padding: 10px 16px;
      background: var(--bg-card); border-radius: 8px; border: 1px solid var(--border-subtle);
      transition: all 0.2s;
    }
    .back-btn:hover { color: var(--text-primary); border-color: var(--accent); }
    .container {
      max-width: 800px; margin: 0 auto; padding: 40px 20px;
    }
    .exam-title {
      font-size: 2.2rem; margin-top: 0; margin-bottom: 40px; text-align: center;
    }

    .question-card-banco {
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
      padding: 24px 30px;
      margin-bottom: 24px;
      transition: all 0.2s ease;
      cursor: pointer;
    }
    .question-card-banco:hover {
      border-color: rgba(255,255,255,0.2);
    }
    .question-card-banco.expanded {
      border-color: var(--accent);
      background: rgba(59, 130, 246, 0.02);
    }
    .qcb-header {
      display: flex; align-items: center; gap: 12px; margin-bottom: 16px;
      font-size: 0.85rem; font-weight: 600;
    }
    .qcb-num {
      background: var(--accent-soft); color: #93c5fd;
      padding: 4px 8px; border-radius: 6px;
    }
    .qcb-text {
      font-size: 1.05rem; line-height: 1.6;
      color: var(--text-primary);
    }
    .qcb-detail {
      display: none;
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid var(--border-subtle);
    }
    .question-card-banco.expanded .qcb-detail {
      display: block;
    }
    .qcb-options {
      display: flex; flex-direction: column; gap: 8px;
      margin-bottom: 16px;
    }
    .qcb-option {
      display: flex; align-items: center; gap: 12px;
      padding: 10px 16px;
      background: rgba(255,255,255,0.03);
      border: 1px solid var(--border-subtle);
      border-radius: 8px;
      font-size: 0.95rem;
    }
    .qcb-option.correct {
      background: rgba(16, 185, 129, 0.1);
      border-color: var(--correct);
      color: #34d399;
      font-weight: 600;
    }
    .qcb-option-letter {
      background: rgba(255,255,255,0.1);
      color: var(--text-secondary);
      width: 24px; height: 24px;
      display: flex; align-items: center; justify-content: center;
      border-radius: 4px; font-weight: 700; font-size: 0.8rem;
    }
    .qcb-option.correct .qcb-option-letter {
      background: var(--correct); color: #000;
    }
    .qcb-justification {
      padding: 16px;
      background: rgba(59,130,246,0.06);
      border-left: 3px solid var(--accent);
      border-radius: 0 8px 8px 0;
      font-size: 0.9rem;
      line-height: 1.6;
      color: var(--text-secondary);
    }
    svg { max-width: 100%; height: auto; display: block; margin: 20px auto; background: var(--bg-secondary); border-radius: 8px; padding: 10px; }
    .busqlocal { background: white; }
  </style>
</head>
<body>
  <div class="top-bar">
    <a href="#" onclick="if(window.history.length > 1 && document.referrer.includes(window.location.host)) { window.history.back(); return false; } else { window.location.href = '../index.html'; return false; }" class="back-btn">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
      Volver al Portal
    </a>
    <h2 style="margin:0; font-size: 1.2rem;">{title}</h2>
    <div style="width: 100px;"></div>
  </div>
  
  <div class="container">
    <h1 class="exam-title">{title}</h1>
    {content}
  </div>

  <script>
    document.querySelectorAll('.question-card-banco').forEach(card => {
      card.addEventListener('click', () => card.classList.toggle('expanded'));
    });
  </script>
</body>
</html>
"""

SVGS = {
    "red_neuronal.png": '''<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background: var(--bg-secondary); border-radius: 8px; padding: 10px;">
  <!-- Conexiones -->
  <g stroke="#9ca3af" stroke-width="1.5" opacity="0.6">
    <line x1="50" y1="130" x2="90" y2="80" />
    <line x1="50" y1="130" x2="130" y2="130" />
    
    <line x1="90" y1="80" x2="150" y2="30" />
    <line x1="90" y1="80" x2="130" y2="130" />
    
    <line x1="130" y1="130" x2="100" y2="180" />
    <line x1="130" y1="130" x2="160" y2="180" />
    
    <line x1="210" y1="80" x2="180" y2="130" />
    <line x1="210" y1="80" x2="240" y2="130" />
  </g>
  <g fill="var(--bg-card)" stroke="#f3f4f6" stroke-width="2">
    <circle cx="150" cy="30" r="16" /><text x="150" y="36" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="16">*</text>
    <circle cx="90" cy="80" r="16" /><text x="90" y="86" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="16">*</text>
    <circle cx="210" cy="80" r="16" /><text x="210" y="85" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="16">-</text>
    
    <circle cx="50" cy="130" r="16" /><text x="50" y="135" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="14">2</text>
    <circle cx="130" cy="130" r="16" /><text x="130" y="136" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="16">+</text>
    
    <circle cx="100" cy="180" r="16" /><text x="100" y="185" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="14">Y</text>
    <circle cx="160" cy="180" r="16" /><text x="160" y="185" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="14">8</text>
    
    <circle cx="180" cy="130" r="16" /><text x="180" y="135" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="14">X</text>
    <circle cx="240" cy="130" r="16" /><text x="240" y="135" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="14">14</text>
  </g>
</svg>''',

    "busqlocal.png": '''<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" class="busqlocal" style="background: white; border-radius: 8px;">
  <!-- Ejes -->
  <line x1="20" y1="180" x2="380" y2="180" stroke="black" stroke-width="2" />
  <line x1="20" y1="180" x2="20" y2="20" stroke="black" stroke-width="2" />
  <!-- Curva -->
  <path d="M 20 180 Q 50 150 80 40 Q 120 180 180 160 Q 230 80 260 100 Q 300 130 380 150" fill="none" stroke="black" stroke-width="3" />
  <!-- Punto -->
  <circle cx="253" cy="94" r="6" fill="black" />
</svg>'''
}

def parse_markdown(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Identificar título
    title_match = re.search(r'#\s+(.+)', content)
    title = os.path.basename(filepath).replace('.md', '')

    html_parts = []
    lines = [line.strip() for line in content.splitlines()]
    
    current_q = None
    question_counter = 1
    
    for line in lines:
        if line.startswith('# '):
            continue
            
        q_match = re.match(r'^###\s+(\d+\..+)', line)
        if q_match:
            if current_q:
                html_parts.append(render_question(current_q, question_counter))
                question_counter += 1
            current_q = {
                'title': q_match.group(1).split('.', 1)[1].strip(), # Remove the leading number if we want, but let's keep it in title for now... actually let's just keep the text
                'text': '',
                'options': [],
                'justification': '',
                'correct_ans': None,
                'in_justification': False
            }
            # Clean up title if it has the number
            current_q['title'] = re.sub(r'^\d+\.\s*', '', current_q['title'])
            continue
            
        if current_q:
            if line.startswith('> [!success]'):
                current_q['in_justification'] = True
                continue
            
            if current_q['in_justification']:
                if line.startswith('>'):
                    j_text = line[1:].strip()
                    c_match = re.search(r'\*\*Opción correcta:\s*([a-e])\)\*\*', j_text, re.IGNORECASE)
                    if c_match:
                        current_q['correct_ans'] = c_match.group(1).lower()
                    current_q['justification'] += j_text + '<br>'
            elif line.strip().startswith('- [ ]') or line.strip().startswith('- [x]'):
                opt_text = line.replace('- [ ]', '').replace('- [x]', '').strip()
                current_q['options'].append(opt_text)
            else:
                img_match = re.search(r'!\[\[(.*?)\]\]', line)
                if img_match:
                    img_raw = img_match.group(1)
                    img_name = img_raw.split('|')[0].strip()
                    if img_name in SVGS:
                        current_q['text'] += SVGS[img_name] + '<br>'
                    else:
                        current_q['text'] += f'[Imagen: {img_name}]<br>'
                else:
                    if line.strip():
                        current_q['text'] += line + '<br>'

    if current_q:
        html_parts.append(render_question(current_q, question_counter))
        
    return title, "".join(html_parts)

def render_question(q, num):
    html = f"<div class='question-card-banco'>\\n"
    html += f"  <div class='qcb-header'>\\n"
    html += f"    <span class='qcb-num'>#{num}</span>\\n"
    html += f"  </div>\\n"
    
    text = q['text'] if q['text'] else q['title']
    html += f"  <div class='qcb-text'>{text}</div>\\n"
    
    html += "  <div class='qcb-detail'>\\n"
    html += "    <div class='qcb-options'>\\n"
    
    letters = ['A', 'B', 'C', 'D', 'E', 'F']
    correct_idx = -1
    if q.get('correct_ans'):
        correct_idx = ord(q['correct_ans']) - 97
        
    for i, opt in enumerate(q['options']):
        is_correct = "correct" if i == correct_idx else ""
        icon = " ✅" if i == correct_idx else ""
        html += f"      <div class='qcb-option {is_correct}'>\\n"
        html += f"        <span class='qcb-option-letter'>{letters[i]}</span>\\n"
        html += f"        <span>{opt}</span>{icon}\\n"
        html += f"      </div>\\n"
    html += "    </div>\\n"
    
    if q['justification']:
        html += f"    <div class='qcb-justification'>{q['justification']}</div>\\n"
        
    html += "  </div>\\n"
    html += "</div>\\n"
    return html

def build_all():
    md_files = glob.glob(os.path.join(MD_DIR, "*.md"))
    
    links = []
    
    for fpath in md_files:
        basename = os.path.basename(fpath)
        if basename == "Preguntas Extra SI.md": continue
        
        title, content = parse_markdown(fpath)
        
        name_lower = basename.lower().replace("examen si ", "").replace(".md", "")
        name_slug = name_lower.replace(" ", "_")
        out_name = f"examen_{name_slug}.html"
        if "2023" in out_name and "mayo" not in out_name and "julio" not in out_name and "junio" not in out_name:
             out_name = "examen_2023.html"
        elif "2024" in out_name:
             out_name = "examen_2024.html"
             
        out_path = os.path.join(OUT_DIR, out_name)
        
        final_html = HTML_TEMPLATE.replace("{title}", title).replace("{content}", content)
        
        with open(out_path, 'w', encoding='utf-8') as out_f:
            out_f.write(final_html)
            
        print(f"Created {out_name}")
        links.append((title, out_name))
        
    index_path = os.path.join(OUT_DIR, "index.html")
    with open(index_path, 'r', encoding='utf-8') as f:
        idx_content = f.read()
        
    links_html = '<div style="display:flex; flex-direction:column; gap:16px; margin-top: 30px; width: 100%; max-width: 400px;">\\n'
    for title, out_name in sorted(links):
        links_html += f'  <a href="{out_name}" style="background: var(--bg-card); padding: 16px; border-radius: 8px; color: var(--text-primary); text-decoration: none; border: 1px solid var(--border-subtle); transition: all 0.2s;" onmouseover="this.style.borderColor=\'var(--accent)\'" onmouseout="this.style.borderColor=\'var(--border-subtle)\'">{title}</a>\\n'
    links_html += '</div>'
    
    pattern = r'<div style="display:flex; flex-direction:column; gap:16px; margin-top: 30px; width: 100%; max-width: 400px;">.*?</div>'
    if re.search(pattern, idx_content, flags=re.DOTALL):
        idx_content = re.sub(pattern, links_html, idx_content, flags=re.DOTALL)
    else:
        # Fallback if the previous pattern doesn't match
        pattern2 = r'<p>El contenido de los ejercicios.*?</p>'
        idx_content = re.sub(pattern2, links_html, idx_content, flags=re.DOTALL)
    
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(idx_content)
        
    print("Updated index.html")

if __name__ == '__main__':
    build_all()
