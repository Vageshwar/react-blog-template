import BLOGS_MAP from '../services/blogs/index';

export const getBlogFromId = (id) =>{
    let status = 200;
    console.log(id, BLOGS_MAP);
    if(id && BLOGS_MAP[id]){
        return {status, data: BLOGS_MAP[id]}
    }
    return {status: 404, data: {}}
}