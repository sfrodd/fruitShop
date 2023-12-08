const oracledb = require('oracledb');
async function runApp()
{
  let connection;
  try {
    connection = await oracledb.getConnection({ user: "system", password: "sfr123", connectionString: "localhost/oradb1" });
    console.log("Successfully connected to Oracle Database");
  
    // Create a table
    let rs=await connection.execute(`select * from salesman');  //exception when others then if sqlcode <> -942 then raise; end if; end;`);
    console.log(rs);
    await rs.close();
  } catch (err) {
    console.error(err);
  } finally {
    if (connection)
    {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}
runApp();