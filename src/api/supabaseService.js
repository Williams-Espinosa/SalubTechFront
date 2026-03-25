import { supabase } from '../supabaseClient';
import bcrypt from 'bcryptjs';

export const loginUser = async (email, password) => {
  // 1. Autenticación nativa de Supabase (genera el JWT real)
  const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (authError) {
    throw new Error(authError.message);
  }

  // 2. Obtener datos extendidos del perfil o usuario desde la tabla pública
  const { data: user, error: userError } = await supabase
    .from('usuarios')
    .select('*')
    .eq('email', email)
    .single();

  if (userError || !user) {
    console.warn('Usuario autenticado en Auth pero no encontrado en tabla pública');
    return { ...authData.user, rol: 'Enfermero', nombre_completo: authData.user.email };
  }

  return user;
};

export const fetchPacientes = async () => {
  const { data, error } = await supabase
    .from('pacientes')
    .select(`
      *,
      habitaciones ( numero_habitacion, piso )
    `);
  
  if (error) throw error;
  return data;
};

export const fetchTareas = async () => {
  const { data, error } = await supabase
    .from('tareas')
    .select(`
      *,
      pacientes ( nombre_completo )
    `);

  if (error) throw error;
  return data;
};

export const toggleTareaEstado = async (id, currentEstado) => {
  const nuevoEstado = currentEstado === 'Completada' ? 'Pendiente' : 'Completada';
  const { error } = await supabase
    .from('tareas')
    .update({ estado: nuevoEstado })
    .eq('id_tarea', id);
  
  if (error) throw error;
  return nuevoEstado;
};
