import Id from '../data/idNumber.jsx';

export default function click(post) {
    
    let id = post._reactInternalFiber.key;
    const index = Id.indexOf(id);

    Id.splice(index, 1);  
    Id.push(id);
}