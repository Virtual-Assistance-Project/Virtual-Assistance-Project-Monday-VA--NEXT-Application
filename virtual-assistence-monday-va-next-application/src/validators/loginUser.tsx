import * as yup from 'yup';

export const schema = yup.object({
  username: yup.string().required('Email é obrigatório'),
  password: yup.string().min(8, 'No minimo 8 caracteres').required(),
});