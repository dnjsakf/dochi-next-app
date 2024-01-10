import * as yup from 'yup';
import { getConnection } from "../../(config)/db";

const postSchema = yup.object().shape({
  userId: yup.string().required('userId is required'),
  userPwd: yup.number().required('userPwd is required')
    .positive('userPwd must be positive')
    .integer('Age must be an integer'),
  userGender: yup.string().required('Email is required')
    .email('Invalid email'),
  regUserId: yup.string(),
  regDttm: yup.date(),
});

const postValidate = async () => {
  try {
    await postSchema.validate(data, { abortEarly: false });
    console.log('Data is valid', data);
  } catch ( error ) {
    console.error('Validation failed:', error.errors)
  }
}

async function getPostList(){
  const db = await getConnection();
  try {
    const result = await db.query(`
      SELECT *
        FROM CT_POST
       WHERE 1=1
    `);
    return result;
  } finally {
    db.release();
  }
}

async function getPost(id){
  const db = await getConnection();
  try {
    const result = await db.query(`
      SELECT *
        FROM CT_POST
       WHERE 1=1
         AND ID = ?
    `, [id]);
    return result;
  } finally {
    db.release();
  }
}

async function addPost(data){
  const db = await getConnection();
  try {
    const result = await db.query(`
      INSERT INTO CT_POST (
        TITLE, DESCRIPTION, REG_DTTM
      ) VALUES (
        ?, ?, NOW()
      )
    `, [data.title, data.description]);
    return result;
  } finally {
    db.release();
  }
}

async function modPost(data){
  const db = await getConnection();
  try {
    const result = await db.query(`
      UPDATE CT_POST
         SET TITLE = ?
           , DESCRIPTION = ?
           , UPD_DTTM = NOW()
       WHERE 1=1
         AND ID = ?
    `, [data.title, data.description, id]);
    return result;
  } finally {
    db.release();
  }
}

async function delPost(data){
  const db = await getConnection();
  try {
    const result = await db.query(`
      DELETE FROM CT_POST
       WHERE 1=1
         AND ID = ?
    `, [data.id]);
    return result;
  } finally {
    db.release();
  }
}

export {
  postSchema,
  postValidate,
  getPostList,
  getPost,
  addPost,
  modPost,
  delPost,
}