import { supabase } from '../supabaseClient';
import bcrypt from 'bcryptjs';

export const loginUser = async (email, password) => {
  const { data: user, error } = await supabase
    .from('usuarios')
    .select('*')
    .eq('email', email)
    .single();

  if (error || !user) {
    throw new Error('Credenciales incorrectas o usuario no encontrado');
  }

  // Verificar la contraseña con bcrypt
  const isValid = bcrypt.compareSync(password, user.password_hash);
  if (!isValid) {
    throw new Error('Credenciales incorrectas');
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
