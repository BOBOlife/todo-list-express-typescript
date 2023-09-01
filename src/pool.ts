import  mysql from "mysql";

const pool = mysql.createPool({
    host: '127.0.0.1', // 数据库地址
    port: 3306, // 端口
    user: 'root', // 用户名称
    password: 'root', // 用户密码
    database: 'todo-list' // 要链接的数据库名称
});

export const query = (sql: string | mysql.QueryOptions, callback: (arg0: mysql.MysqlError | null, arg1: null, arg2: mysql.FieldInfo[] | null | undefined) => void) => {    
  pool.getConnection((err,conn) => {    
      if(err){
          callback(err,null,null);    
      }else{    
          conn.query(sql, (qerr,vals,fields) => {    
              //释放连接    
              conn.release();    
              //事件驱动回调    
              callback(qerr, vals, fields);    
          });    
      }    
  })  
}
