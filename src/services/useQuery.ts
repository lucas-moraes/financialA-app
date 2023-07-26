import { useQuery } from '@tanstack/react-query';
import { getMovimentGroupInterface } from '../interface/getMovimentGroup';
import { postMoviment } from '../interface/postMoviment';
import moment from 'moment';
import { movimentType } from '../constants/optionSelect';
import { getMovimentByIdInterface } from '../interface/getMovimentById';

export function GetMoviment() {
  return useQuery({
    queryKey: ['moviment'],
    queryFn: () => fetch(`${process.env.SERVER}/backend/view/MovimentGet.php`).then(res => res.json()),
  });
}

export function GetMovimentFiltered(month: number, year: number) {
  const formdata = new FormData();
  formdata.append('month', month);
  formdata.append('year', year);

  return useQuery({
    queryKey: ['movimentFiltered'],
    queryFn: () =>
      fetch(`${process.env.SERVER}/backend/view/MovimentFilter.php`, {
        method: 'POST',
        body: formdata,
      }).then(res => res.json()),
  });
}

export function GetDate() {
  return useQuery({
    queryKey: ['date'],
    queryFn: () => fetch(`${process.env.SERVER}/backend/view/DateGet.php`).then(res => res.json()),
  });
}

export async function GetMovimentById(id: number) {
  const formdata = new FormData();
  formdata.append('id', id);

  const response: getMovimentByIdInterface[] = await fetch(`${process.env.SERVER}/backend/view/MovimentGetById.php`, {
    method: 'POST',
    body: formdata,
  }).then(res => res.json());

  return response[0];
}

export function GetMovimentGroup() {
  return useQuery({
    queryKey: ['movimentGroup'],
    queryFn: () => fetch(`${process.env.SERVER}/backend/view/MovimentGetGroup.php`).then(res => res.json()),
  }) as unknown as getMovimentGroupInterface;
}

export function GetCategories() {
  const categories = [] as unknown as [
    {
      value: number;
      label: string;
    },
  ];
  const { data } = useQuery({
    queryKey: ['categories'],
    queryFn: () => fetch(`${process.env.SERVER}/backend/view/CategoryGet.php`).then(res => res.json()),
  });

  data?.categoria?.forEach((item: any) => {
    categories.push({ label: item.descricao, value: item.id });
  });

  return categories;
}

export async function RegisterData(data: postMoviment) {
  const formdata = new FormData();
  formdata.append('date', moment(data.date).format('YYYY-MM-DD'));
  formdata.append('type', movimentType[Number(data.moviment)]);
  formdata.append('category', data.categories);
  formdata.append('value', data.value);
  formdata.append('description', data.description);

  return fetch(`${process.env.SERVER}/backend/view/MovimentReg.php`, {
    method: 'POST',
    body: formdata,
  })
    .then(res => res)
    .catch(e => e);
}

export async function DeleteData(id: number) {
  const formdata = new FormData();
  formdata.append('id', id);

  if (id > 0) {
    await fetch(`${process.env.SERVER}/backend/view/MovimentDel.php`, {
      method: 'POST',
      body: formdata,
    }).then(res => res);
  }
}

export async function UpdateData(data: postMoviment, id: number) {
  const formdata = new FormData();
  formdata.append('id', id);
  formdata.append('date', moment(data.date).format('YYYY-MM-DD'));
  formdata.append('type', movimentType[Number(data.moviment)]);
  formdata.append('category', data.categories);
  formdata.append('value', data.value);
  formdata.append('description', data.description);

  return fetch(`${process.env.SERVER}/backend/view/MovimentSet.php`, {
    method: 'POST',
    body: formdata,
  })
    .then(res => res)
    .catch(e => e);
}
