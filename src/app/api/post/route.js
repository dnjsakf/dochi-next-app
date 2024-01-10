import { NextResponse } from "next/server";
import { getPostList } from "./service";

export async function GET(req, ctx){
  const result = await getPostList();
  try {
    return NextResponse.json({
      list: result,
      count: (result||[]).length,
    }, { status: 200 });
  } catch ( error ){
    return NextResponse.json('fail', { status: 500 });
  }
}

// export default async function handler(req, res){
//   const db = await getDbConnection();
//   try {
//     if (req.method === 'GET') {
//       // 조회
//       const result = await db.query('SELECT * FROM your_table');
//       res.status(200).json(result);
//     } else if (req.method === 'POST') {
//       // 생성
//       const { column1, column2 } = req.body;
//       const result = await db.query('INSERT INTO your_table (column1, column2) VALUES (?, ?)', [column1, column2]);
//       res.status(201).json(result);
//     } else {
//       res.status(405).json({ message: 'Method Not Allowed' });
//     }
//   } catch (error) {
//     console.error('Error processing request:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   } finally {
//     db.release();
//   }
// }