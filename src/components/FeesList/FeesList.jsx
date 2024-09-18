import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const FeesList = ()=> {

    const {students} = useSelector((state)=> {return state.student} );

    return(
      
        <container>  dfs
            <Table responsive>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Month</th>
                    <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {students.map((item)=> { 
                            return <div><td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.month}</td>
                                        <td>{item.amount}</td>
                                    </div>

                        })}
                    </tr>
                </tbody>
            </Table>
        </container>
    )
}
export default FeesList;