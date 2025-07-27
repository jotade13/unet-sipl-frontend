import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { getEquipmentRequest } from "../services/equipment-request-services";

export const Equipments = () => {
    const { id } = useParams()
    const [ equipmentRequest, setEquipmentRequest] = useState([]);
     useEffect(() => {
        const fetchEquipment = async () => {
            try {
                const response = await getEquipmentRequest(id);
                setEquipmentRequest(response.data.equipments_requests.data)
            } catch (error) {
                console.error("Error fetching equipment:", error);
            }
        };

        fetchEquipment();
    }, [id]);

    return (
    <h2>
        Solicitudes 
    </h2>
    // <table>
    //     <thead>
    //         <td></td>
    //         <td></td>
    //     </thead>
    //     {
    //         equipmentRequest.map(item =>
    //              <tr>
    //                 <td></td>
    //              </tr>
    //          )
       
    //     }
    // </table>
    )
}