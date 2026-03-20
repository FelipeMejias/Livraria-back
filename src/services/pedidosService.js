import dayjs from "dayjs";
import { supabase } from "../../db.js";

export async function adicionarPedido({ idUsuario, idLivro }) {
  const data = dayjs().format("YY/MM/DD HH:mm");
  try {
    await supabase.from('pedidos').insert([{
      idusuario: idUsuario,
      idlivro: idLivro,
      status: 'Encomendado',
      data
    }]);
  } catch (error) {
    console.log(error);
  }
}

export async function buscarTodosPedidos() {
  try {
    const { data: pedidos, error } = await supabase
      .from('pedidos')
      .select(`
        *,
        usuario:usuarios(*) ,
        livro:livros(*)
      `);
    if (error) throw error;
    return pedidos;
  } catch (error) {
    console.log(error);
  }
}

export async function buscarPedidos(id) {
  try {
    const { data: pedidos, error } = await supabase
      .from('pedidos')
      .select(`
        *,
        usuario:usuarios(*),
        livro:livros(*)
      `)
      .eq('idusuario', id);
    if (error) throw error;
    return pedidos;
  } catch (error) {
    console.log(error);
  }
}

export async function trocarStatus(id) {
  try {
    const { data: pedido, error } = await supabase
      .from('pedidos')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;

    let novoStatus;
    if (pedido.status === 'Encomendado') {
      novoStatus = 'Em entrega';
    } else if (pedido.status === 'Em entrega') {
      novoStatus = 'Finalizado';
    }

    const { error: updateError } = await supabase
      .from('pedidos')
      .update({ status: novoStatus })
      .eq('id', id);

    if (updateError) throw updateError;
  } catch (error) {
    console.log(error);
  }
}

export async function deletarPedido(id) {
  try {
    const { error } = await supabase
      .from('pedidos')
      .delete()
      .eq('id', id);
    if (error) throw error;
  } catch (error) {
    console.log(error);
  }
}