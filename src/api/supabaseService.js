import { supabase } from '../supabaseClient';
import bcrypt from 'bcryptjs';

export const loginUser = async (email, password) => {
  // 1. Buscar al usuario en la tabla "usuarios" por email
  const { data: user, error: userError } = await supabase
    .from('usuarios')
    .select('*')
    .eq('email', email)
    .single();

  if (userError || !user) {
    console.error('Usuario no encontrado:', userError);
    throw new Error('Credenciales incorrectas');
  }

  // 2. Verificar que el usuario esté activo
  if (!user.activo) {
    throw new Error('Tu cuenta está desactivada. Contacta al administrador.');
  }

  // 3. Comparar la contraseña ingresada con el hash almacenado
  const passwordValid = await bcrypt.compare(password, user.password_hash);

  if (!passwordValid) {
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
