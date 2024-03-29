import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);

  const [titulo] = useState("Nuestros Productos");

  const categoria = useParams().categoria;

  useEffect(() => {

    const productosRef = collection(db, "Productos");
    const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

    getDocs(q)
      .then((resp) => {

        setProductos(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        )
      })

  }, [categoria])


  return (
    <div className="w-full min-h-[100VH] pt-16 pb-16">
      <ItemList productos={productos} titulo={categoria ? `${titulo}: ${categoria}` : titulo} />
    </div>
  )
}

export default ItemListContainer