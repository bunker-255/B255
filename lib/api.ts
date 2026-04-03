import { useState, useEffect } from 'react';

export const BASE_URL = 'https://qwertydb.bunker-255.com/api/app';

export const api = {
  getToken: () => localStorage.getItem('nc_token'),
  setToken: (token: string) => localStorage.setItem('nc_token', token),
  removeToken: () => localStorage.removeItem('nc_token'),
  getApiKey: () => (import.meta as any).env.VITE_NC_API_KEY || 'nc-app-e3b6ec1a8ef2811b5f769af324153d5c439dfa3a4fff4041',

  sql: async (query: string) => {
    const key = api.getApiKey();
    const res = await fetch(`${BASE_URL}/sql?api_key=${key}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sql: query })
    });
    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.error || 'SQL execution failed');
    }
    
    // Process results to parse JSON strings
    const results = data.results.map((res: any) => {
      if (res.rows) {
        res.rows = res.rows.map((row: any) => {
          const processedRow = { ...row };
          Object.keys(processedRow).forEach(key => {
            const val = processedRow[key];
            if (typeof val === 'string' && (val.startsWith('{') || val.startsWith('['))) {
              try {
                processedRow[key] = JSON.parse(val);
              } catch (e) {
                // Not valid JSON
              }
            }
          });
          return processedRow;
        });
      }
      return res;
    });

    return results;
  },

  auth: {
    login: async (email: string, pass: string) => {
      // Sanitize inputs to prevent SQL issues
      const sanitizedEmail = email.toLowerCase().replace(/'/g, "''");
      
      // First, check if the user exists
      const results = await api.sql(`SELECT * FROM app_users WHERE email = '${sanitizedEmail}' LIMIT 1`);
      const user = results[0]?.rows?.[0];
      
      if (!user) {
        throw new Error('User not found. Please register or check your email.');
      }
      
      // Then, verify the password
      if (user.password !== pass) {
        throw new Error('Invalid password. Please try again.');
      }
      
      // We don't have a real JWT here, so we use the API key as a token for simplicity
      const token = (import.meta as any).env.VITE_NC_API_KEY || 'nc-app-e3b6ec1a8ef2811b5f769af324153d5c439dfa3a4fff4041';
      return { token, user };
    }
  },

  tables: {
    list: async () => {
      const res = await fetch(`${BASE_URL}/tables`, {
        headers: api.getHeaders()
      });
      if (!res.ok) throw new Error('Failed to fetch tables');
      return res.json();
    },
    getByName: async (name: string) => {
      const tables = await api.tables.list();
      return tables.find((t: any) => t.name === name);
    }
  },

  records: {
    list: async (tableName: string, params: any = {}) => {
      const query = new URLSearchParams();
      if (params.page) query.append('page', params.page.toString());
      if (params.per_page) query.append('per_page', params.per_page.toString());
      
      const res = await fetch(`${BASE_URL}/tables/${tableName}/data?${query.toString()}`, {
        headers: api.getHeaders()
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: 'Fetch records failed' }));
        throw new Error(err.error || 'Failed to fetch records');
      }
      const data = await res.json();
      
      // Map to old format for compatibility: { records: [ { id, data: { ... } } ] }
      return {
        records: data.rows.map((row: any) => {
          const processedRow = { ...row };
          // Try to parse JSON strings
          Object.keys(processedRow).forEach(key => {
            const val = processedRow[key];
            if (typeof val === 'string' && (val.startsWith('{') || val.startsWith('['))) {
              try {
                processedRow[key] = JSON.parse(val);
              } catch (e) {
                // Not valid JSON, keep as string
              }
            }
          });
          return {
            id: row.id,
            data: processedRow
          };
        }),
        total: data.total,
        page: data.page,
        pages: data.pages
      };
    },
    create: async (tableName: string, data: any) => {
      const columns = Object.keys(data).join(', ');
      const values = Object.values(data).map(v => {
        if (typeof v === 'string') return `'${v.replace(/'/g, "''")}'`;
        if (typeof v === 'object') return `'${JSON.stringify(v).replace(/'/g, "''")}'`;
        return v;
      }).join(', ');
      
      const results = await api.sql(`INSERT INTO ${tableName} (${columns}) VALUES (${values})`);
      return { id: results[0].lastrowid };
    },
    update: async (tableName: string, id: number | string, data: any) => {
      const sets = Object.entries(data).map(([k, v]) => {
        let val = v;
        if (typeof v === 'string') val = `'${v.replace(/'/g, "''")}'`;
        else if (typeof v === 'object') val = `'${JSON.stringify(v).replace(/'/g, "''")}'`;
        return `${k} = ${val}`;
      }).join(', ');
      
      await api.sql(`UPDATE ${tableName} SET ${sets} WHERE id = ${id}`);
      return { success: true };
    },
    delete: async (tableName: string, id: number | string) => {
      await api.sql(`DELETE FROM ${tableName} WHERE id = ${id}`);
      return { success: true };
    }
  }
};

export function useRecords(table_name: string, params: any = {}) {
  const [records, setRecords] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        setLoading(true);
        const data = await api.records.list(table_name, params);
        setRecords(data.records || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecords();
  }, [table_name, JSON.stringify(params)]);

  return { records, loading, error };
}
