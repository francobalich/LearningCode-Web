import {pool} from '../db.js'

export const getEmployees = async(req,res)=> {
    const [rows]=await pool.query('SELECT * from employee')
    res.json({rows})
}
export const getEmployee = async(req,res)=> {
    const [rows]=await pool.query('SELECT * from employee WHERE id=?;',[req.params.id])
    if(rows.length<=0)return res.status(404).json({message:'Employee not found'})
    res.json({rows})
}
export const createEmployee = async (req,res)=> {
    const {name,salary}= req.body
    const [rows]=await pool.query('INSERT INTO employee (name,salary) VALUES (?,?)',[name,salary])
    res.send({
        id: rows.insertId,
        name,
        salary,
    })
}

export const updateEmployee =async(req,res)=> {}

export const deleteEmployee =async(req,res)=> {
    const [result]=await pool.query('DELETE from employee WHERE id=?;',[req.params.id])
    if(result.affectedRows<=0)return res.status(404).json({message:'Employee not found'})
    res.sendStatus(204)
}