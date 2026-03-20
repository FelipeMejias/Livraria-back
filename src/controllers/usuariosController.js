import bcrypt from 'bcrypt';
import { supabase } from '../../db.js';
import dotenv from 'dotenv';
dotenv.config();

const CODIGOADMIN = process.env.CODIGOADMIN;

export async function postLogin(req, res) {
  const { username, senha } = req.body;
  try {
    const { data: usuario, error } = await supabase
      .from('usuarios')
      .select('*')
      .eq('username', username)
      .single();

    if (error || !usuario) {
      return res.status(422).send('Não existe usuário com esse username');
    }
    if (!bcrypt.compareSync(senha, usuario.hashsenha)) {
      return res.status(422).send('A senha está incorreta');
    }
    delete usuario.hashsenha;
    if (usuario.tipo === 'Admin') {
      usuario.codigo = CODIGOADMIN;
    }
    console.log('Usuário logado!');
    res.status(200).send(usuario);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function postCadastro(req, res) {
  const { username, senha, tipo, codigo } = req.body;
  try {
    const { data: usuarioExistente, error: errExist } = await supabase
      .from('usuarios')
      .select('*')
      .eq('username', username)
      .single();

    if (usuarioExistente) {
      return res.status(422).send('Já existe um usuário com esse username');
    }
    if (tipo !== 'Admin' && tipo!=='Usuário') {
      return res.status(422).send('Este tipo de usuário não existe');
    }
    if (tipo === 'Admin' && codigo !== CODIGOADMIN) {
      return res.status(422).send('O código de administrador está incorreto');
    }
    const SALT = 10;
    const hashSenha = bcrypt.hashSync(senha, SALT);

    const { error: insertError } = await supabase
      .from('usuarios')
      .insert([{ username, hashsenha: hashSenha, tipo }]);

    if (insertError) {
      console.log(insertError);
      return res.sendStatus(500);
    }
    console.log('Usuário cadastrado!');
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}