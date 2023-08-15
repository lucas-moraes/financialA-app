import { useQuery } from '@tanstack/react-query';

import { FilterMovement, PostMovement } from '../interface/postMovement';
import moment from 'moment';
import { MovementType } from '../constants/optionSelect';
import { GetMovementByIdInterface } from '../interface/getMovementById';
import { GetMovementGroupInterface } from '../interface/getMovementGroup';
import axios from 'axios';

export function GetMovement() {
  const response = useQuery({
    queryKey: ['movement'],
    queryFn: () => axios.post(`${process.env.SERVER}/backend/view/MovimentGet.php`, {}).then(res => res.data),
  });

  return response;
}

export function GetCategory() {
  const response = useQuery({
    queryKey: ['categories'],
    queryFn: () => axios.post(`${process.env.SERVER}/backend/view/CategoryGet.php`, {}).then(res => res.data),
  });

  return response;
}

export async function GetMovementFiltered(period: FilterMovement) {
  const response = await axios
    .postForm(`${process.env.SERVER}/backend/view/MovimentFilter.php`, {
      category: 0,
      month: period.month,
      year: period.year,
    })
    .then(res => {
      return res.data;
    });

  return response;
}

export function GetDate() {
  return useQuery({
    queryKey: ['date'],
    queryFn: () => fetch(`${process.env.SERVER}/backend/view/DateGet.php`).then(res => res.json()),
  });
}

export async function GetMovementById(id: number) {
  const formdata = new FormData();
  formdata.append('id', id);

  const response: GetMovementByIdInterface[] = await fetch(`${process.env.SERVER}/backend/view/MovimentGetById.php`, {
    method: 'POST',
    body: formdata,
  }).then(res => res.json());

  return response[0];
}

export function GetMovementGroup() {
  return useQuery({
    queryKey: ['MovementGroup'],
    queryFn: () => fetch(`${process.env.SERVER}/backend/view/MovimentGetGroup.php`).then(res => res.json()),
  }) as unknown as GetMovementGroupInterface;
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

export async function RegisterData(data: PostMovement) {
  const formdata = new FormData();
  formdata.append('date', moment(data.date).format('YYYY-MM-DD'));
  formdata.append('type', MovementType[Number(data.Movement)]);
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

export async function RegisterCategory(description: string) {
  await axios.postForm(`${process.env.SERVER}/backend/view/CategoryReg.php`, {
    description: description,
  });
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

export async function UpdateData(data: PostMovement, id: number) {
  const formdata = new FormData();
  formdata.append('id', id);
  formdata.append('date', moment(data.date).format('YYYY-MM-DD'));
  formdata.append('type', MovementType[Number(data.Movement)]);
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
