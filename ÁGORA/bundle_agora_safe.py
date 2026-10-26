import os

base_dir = r'C:\Users\mickael.bandeira\Desktop\ÁGORA'
html_path = os.path.join(base_dir, 'index.html')

with open(html_path, 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

# Ler CSS
with open(os.path.join(base_dir, 'css', 'design-system.css'), 'r', encoding='utf-8', errors='ignore') as f:
    css_design = f.read()

with open(os.path.join(base_dir, 'css', 'components.css'), 'r', encoding='utf-8', errors='ignore') as f:
    css_components = f.read()

with open(os.path.join(base_dir, 'css', 'print.css'), 'r', encoding='utf-8', errors='ignore') as f:
    css_print = f.read()

# Ler JS
with open(os.path.join(base_dir, 'js', 'data-agora.js'), 'r', encoding='utf-8', errors='ignore') as f:
    js_data = f.read()

with open(os.path.join(base_dir, 'js', 'charts.js'), 'r', encoding='utf-8', errors='ignore') as f:
    js_charts = f.read()

with open(os.path.join(base_dir, 'js', 'app.js'), 'r', encoding='utf-8', errors='ignore') as f:
    js_app = f.read()

combined_css = f"""<style>
/* DESIGN SYSTEM */
{css_design}

/* COMPONENTS */
{css_components}

/* PRINT */
@media print {{
{css_print}
}}
</style>"""

combined_js = f"""<script>
/* DATA AGORA */
{js_data}

/* CHARTS */
{js_charts}

/* APP */
{js_app}
</script>"""

# Limpeza e substituicao direta sem regex pra evitar conflito de escapes no codigo JS
html = html.replace('<link rel="stylesheet" href="css/design-system.css" />', '')
html = html.replace('<link rel="stylesheet" href="css/components.css" />', '')
html = html.replace('<link rel="stylesheet" href="css/print.css" />', combined_css)

html = html.replace('<script src="js/data-agora.js"></script>', '')
html = html.replace('<script src="js/charts.js"></script>', '')
html = html.replace('<script src="js/app.js"></script>', combined_js)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)

print("SUCESSO: index.html da pasta ÁGORA agora é 100% autônomo (Inlined)!")

