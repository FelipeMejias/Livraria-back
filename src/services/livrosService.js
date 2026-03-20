import { supabase } from "../../db.js";

export async function adicionarLivro(livro) {
  try {
    await supabase.from('livros').insert([livro]);
  } catch (error) {
    console.log(error);
  }
}

export async function buscarLivros() {
  try {
    const { data: livros, error } = await supabase.from('livros').select('*');
    if (error) throw error;
    return livros;
  } catch (error) {
    console.log(error);
  }
}

export async function deletarLivro(id) {
  try {
    const { error } = await supabase.from('livros').delete().eq('id', id);
    if (error) throw error;
  } catch (error) {
    console.log(error);
  }
}