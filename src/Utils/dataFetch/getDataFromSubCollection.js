
import { collection, getDocs } from "firebase/firestore";
import db from "../../Firebase/firebase";

const getDataFormSubCollection = (collectionName, documentId,subCollectionName, setFunctionSub) => {
    getDocs(collection(db, `${collectionName}/${documentId}/${subCollectionName}`)).then((querySnapshot)=>{
        
        const dataArr = [];

        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
            dataArr.push({...doc.data(), categoryId: doc.id});
        });
        // console.log(dataArr);
        setFunctionSub(dataArr);
    });
};

export default getDataFormSubCollection;