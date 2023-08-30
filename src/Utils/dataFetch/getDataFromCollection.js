
import { collection, getDocs } from "firebase/firestore";
import db from "../../Firebase/firebase";

const getDataFormCollection = (collectionName, setFunction) => {
    getDocs(collection(db, collectionName)).then((querySnapshot)=>{
        
        const dataArr = [];

        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
            dataArr.push({...doc.data(), categoryId: doc.id});
        });
        // console.log(dataArr);
        setFunction(dataArr);
    });
};

export default getDataFormCollection;