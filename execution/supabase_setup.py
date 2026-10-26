"""
Script de Criação de Tabelas, RLS e Carga Inicial no Supabase — ÁGORA 2026
"""

import os
import json
import urllib.request

URL = 'https://api.supabase.com/v1/projects/mxahgjxcdtodbdbxymtb/database/query'
TOKEN = os.environ.get('SUPABASE_ACCESS_TOKEN', '')

def run_sql(query):
    if not TOKEN:
        raise ValueError("Defina a variável de ambiente SUPABASE_ACCESS_TOKEN antes de executar.")
    headers = {
        'Authorization': f'Bearer {TOKEN}',
        'Content-Type': 'application/json'
    }
    data = json.dumps({'query': query}).encode('utf-8')
    req = urllib.request.Request(URL, data=data, headers=headers, method='POST')
    try:
        with urllib.request.urlopen(req) as resp:
            content = resp.read().decode('utf-8')
            return resp.status, content
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode('utf-8')
    except Exception as e:
        return -1, str(e)

if __name__ == '__main__':
    sql = """
    SELECT 'usuarios' as tab, count(*) as count FROM public.usuarios
    UNION ALL
    SELECT 'jornada_respostas', count(*) FROM public.jornada_respostas
    UNION ALL
    SELECT 'missoes_praticas', count(*) FROM public.missoes_praticas
    UNION ALL
    SELECT 'checkpoints_lideranca', count(*) FROM public.checkpoints_lideranca
    UNION ALL
    SELECT 'facilitador_sala', count(*) FROM public.facilitador_sala;
    """
    try:
        status, body = run_sql(sql)
        print("STATUS:", status)
        print("BODY:", body)
    except Exception as ex:
        print("Aviso:", ex)
