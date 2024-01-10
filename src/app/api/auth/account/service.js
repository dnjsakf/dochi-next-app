import * as yup from 'yup';
import { getConnection } from "../../../(config)/db";

const schema = yup.object().shape({
  userId: yup.string()
    .required('userId is required'),
  userPwd: yup.number()
    .required('userPwd is required')
    .positive('userPwd must be positive')
    .integer('Age must be an integer'),
  userSalt: yup.string()
    .required('userSalt is required'),
  userNm: yup.string()
    .required('userNm is required'),
  userGender: yup.string()
    .required('Email is required')
    .email('Invalid email'),
});

async function validate(data) {
  let isValid = false;
  try {
    await schema.validate(data, { abortEarly: false });
    console.log('Data is valid', data);
    isValid = true;
  } catch ( error ) {
    console.error('Validation failed:', error.errors)
    isValid = true;
  } finally {
    return isValid;
  }
}

async function checkDuplicate(userId){
  const db = await getConnection();
  try {
    const result = await db.query(`
      SELECT COUNT(1) AS USER_CNT
        FROM CM_USER
       WHERE 1=1
         AND USER_ID = ?
    `, [ userId ]);
    return (result > 0);
  } finally {
    db.release();
  }
}

async function getUser(userId){
  const db = await getConnection();
  try {
    const result = await db.query(`
      SELECT *
        FROM CM_USER
       WHERE 1=1
         AND USER_ID = ?
    `, [ userId ]);
    return result;
  } finally {
    db.release();
  }
}

async function addUser(data){
  const db = await getConnection();
  try {
    const result = await db.query(`
      INSERT INTO CM_USER (
        USER_ID, USER_PWD, USER_SALT, USER_NM, USER_GENDER
        , REG_USER_ID, REG_DTTM, UPD_USER_ID, UPD_DTTM
      ) VALUES (
        ?, ?, ?, ?, ?
        , 'SYSTEM', NOW(), 'SYSTEM', NOW()
      )
    `, [ data.userId, data.data.userPwd, data.userSalt, data.userNm, data.userGender ]);
    return result;
  } finally {
    db.release();
  }
}

export {
  schema,
  validate,
  checkDuplicate,
  getUser,
  addUser,
}